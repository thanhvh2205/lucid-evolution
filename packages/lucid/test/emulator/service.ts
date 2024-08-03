import { Emulator } from "@lucid-evolution/provider";
import {
  getAddressDetails,
  mintingPolicyToId,
  scriptFromNative,
  unixTimeToSlot,
  validatorToAddress,
} from "@lucid-evolution/utils";
import { Effect, Context, Layer, pipe } from "effect";
import { Data, fromText, Lucid, SpendingValidator } from "../../src";
import {
  handleSignSubmit,
  handleSignSubmitWithoutValidation,
  withLogRetry,
} from "../specs/utils";
import { generateEmulatorAccount } from "../../../provider/src";

export const EMULATOR_ACCOUNT = generateEmulatorAccount({
  lovelace: 75000000000n,
});
export const REWARD_AMOUNT = 100000000n;
export const EMULATOR_POOL_ID =
  "pool1nmfr5j5rnqndprtazre802glpc3h865sy50mxdny65kfgf3e5eh";

export const emulator = await Effect.gen(function* () {
  return new Emulator([EMULATOR_ACCOUNT]);
}).pipe(Effect.runPromise);

const makeEmulatorUser = Effect.gen(function* ($) {
  const user = yield* Effect.tryPromise(() => Lucid(emulator, "Custom"));
  user.selectWallet.fromSeed(EMULATOR_ACCOUNT.seedPhrase);
  console.log(yield* Effect.promise(() => user.wallet().address()));
  return {
    user,
    emulator,
  };
});

export class EmulatorUser extends Context.Tag("User")<
  EmulatorUser,
  Effect.Effect.Success<typeof makeEmulatorUser>
>() {
  static readonly layer = Layer.effect(EmulatorUser, makeEmulatorUser);
}

export const mintInSlotRange = Effect.gen(function* () {
  const { user, emulator } = yield* EmulatorUser;
  const { paymentCredential } = getAddressDetails(EMULATOR_ACCOUNT.address);
  const mintingPolicy = scriptFromNative({
    type: "all",
    scripts: [
      {
        type: "before",
        slot: unixTimeToSlot("Custom", emulator.now() + 60000),
      },
      { type: "sig", keyHash: paymentCredential?.hash! },
    ],
  });

  const policyId = mintingPolicyToId(mintingPolicy);
  const signBuilder = yield* user
    .newTx()
    .mintAssets({
      [policyId + fromText("Wow")]: 123n,
    })
    .validTo(emulator.now() + 30000)
    .attach.MintingPolicy(mintingPolicy)
    .completeProgram();

  return signBuilder;
}).pipe(Effect.flatMap(handleSignSubmitWithoutValidation));

export const registerStake = Effect.gen(function* ($) {
  const { user } = yield* EmulatorUser;
  const rewardAddress = yield* pipe(
    Effect.promise(() => user.wallet().rewardAddress()),
    Effect.andThen(Effect.fromNullable),
  );
  const signBuilder = yield* user
    .newTx()
    .registerStake(rewardAddress)
    .completeProgram();
  return signBuilder;
}).pipe(
  Effect.flatMap(handleSignSubmit),
  Effect.catchTag("TxSubmitError", (error) =>
    error.message.includes("StakeKeyAlreadyRegisteredDELEG")
      ? Effect.void
      : Effect.fail(error),
  ),
  withLogRetry,
);

export const delegateTo = Effect.gen(function* ($) {
  const { user } = yield* EmulatorUser;
  const rewardAddress = yield* pipe(
    Effect.promise(() => user.wallet().rewardAddress()),
    Effect.andThen(Effect.fromNullable),
  );
  const signBuilder = yield* user
    .newTx()
    .delegateTo(rewardAddress, EMULATOR_POOL_ID)
    .completeProgram();
  return signBuilder;
}).pipe(Effect.flatMap(handleSignSubmit), withLogRetry);

export const deRegisterStake = Effect.gen(function* ($) {
  const { user } = yield* EmulatorUser;
  const rewardAddress = yield* pipe(
    Effect.promise(() => user.wallet().rewardAddress()),
    Effect.andThen(Effect.fromNullable),
  );

  const signBuilder = yield* user
    .newTx()
    .deRegisterStake(rewardAddress)
    .completeProgram();
  return signBuilder;
}).pipe(Effect.flatMap(handleSignSubmit), withLogRetry);

export const registerDeregisterStake = Effect.gen(function* ($) {
  const { user } = yield* EmulatorUser;
  const rewardAddress = yield* pipe(
    Effect.promise(() => user.wallet().rewardAddress()),
    Effect.andThen(Effect.fromNullable),
  );
  const signBuilder = yield* user
    .newTx()
    .registerStake(rewardAddress)
    .deRegisterStake(rewardAddress)
    .completeProgram();
  return signBuilder;
}).pipe(
  Effect.flatMap(handleSignSubmit),
  Effect.catchTag("TxSubmitError", (error) =>
    error.message.includes("StakeKeyAlreadyRegisteredDELEG")
      ? Effect.void
      : Effect.fail(error),
  ),
  withLogRetry,
);

export const withdrawZero = (amount) =>
  Effect.gen(function* ($) {
    const { user } = yield* EmulatorUser;
    const rewardAddress = yield* pipe(
      Effect.promise(() => user.wallet().rewardAddress()),
      Effect.andThen(Effect.fromNullable),
    );
    const signBuilder = yield* user
      .newTx()
      .withdraw(rewardAddress, amount)
      .completeProgram();
    return signBuilder;
  }).pipe(Effect.flatMap(handleSignSubmit), withLogRetry);

export const evaluateAContract = Effect.gen(function* ($) {
  const { user } = yield* EmulatorUser;
  const alwaysSucceedScript: SpendingValidator = {
    type: "PlutusV2",
    script: "49480100002221200101",
  };
  const scriptAddress = validatorToAddress("Custom", alwaysSucceedScript);
  const signBuilder = yield* user
    .newTx()
    .pay.ToContract(
      scriptAddress,
      { kind: "inline", value: Data.void() },
      { lovelace: 5000000n },
    )
    .completeProgram();
  return signBuilder;
}).pipe(Effect.flatMap(handleSignSubmit), withLogRetry);
