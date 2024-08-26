import { UTxO } from "@lucid-evolution/core-types";
import { applyDoubleCborEncoding } from "@lucid-evolution/utils";

export const discoveryUTxO: UTxO = {
  txHash: "b50e73e74a3073bc44f555928702c0ae0f555a43f1afdce34b3294247dce022d",
  outputIndex: 0,
  address: "addr_test1wpgexmeunzsykesf42d4eqet5yvzeap6trjnflxqtkcf66g0kpnxt",
  assets: {
    lovelace: 11977490n,
    "4a83e031d4c37fc7ca6177a2f3581a8eec2ce155da91f59cfdb3bb28446973636f7665727956616c696461746f72":
      1n,
  },
  datumHash: undefined,
  datum: undefined,
  scriptRef: {
    type: "PlutusV2",
    script: applyDoubleCborEncoding(
      "5909d1010000322223232325333573466e1d20000021323232323232533357346644664646460044660040040024600446600400400244a666aae7c0045288a9991199ab9a00200114a060066ae840044c008d5d1000919919180111980100100091801119801001000912999aab9f00114a02a666ae68cdd79aba100100314a2260046ae88004cc8c8c8c0088cc0080080048c0088cc008008004894ccd55cf8008a5eb804cd5d018019aba1001300235744002aae7400c004dd59aba100333223233232323002233002002001230022330020020012253335573e002297ae0133574060066ae84004c008d5d1000aab9d33232323002233002002001230022330020020012253335573e002297adef6c60132533357346008002266ae80004c00cd5d1001098019aba2002357420024664646460044660040040024600446600400400244a666aae7c0045280a99919ab9a00114a260066ae840044c008d5d1000918019bae35573a0026eacd55cf000801919b8f33371890001b8d00200100237566ae84d5d1000a4410346534e00149858c8d55cf1baa0013232325333573466e1d200200213322332323002233002002001230022330020020012253335573e0022c264a666ae68cc88cdd79ba73235573c6ea8004008dd3991aab9e37540020020086ae840044d5d09aba20011300335744004646aae78dd50009aba1001002004357420022c6aae78008d55ce8009baa357426ae88014dd61aba1003357446ae88004d5d11aba20013235573c6ea8004d5d0800991aab9e37540020082a666ae68cdc3a4008004266664664446646460044660040040024600446600400400244a666aae7c004489400454ccd5cd19baf35573a6ae840040104c014d5d0800898011aba2001001232223002003375a6aae78004004d5d0991aba235744002646aae78dd5000803991bab35742646ae88d5d11aba235744646ae88d5d1000800991aab9e37540020026ae84c8d55cf1baa0010042498584c8c8c8c8c8c8c8c8c94ccd5cd19b87480080084c8c8c8c94ccd5cd19b874801000854ccd5cd199119baf374e646aae78dd50008011ba73235573c6ea8004004c8c8c8c8c80154ccd5cd19b87480000084c8c8c8c8c8c8c8c8c8c8c8c8c92653335573e0022930b1aba20065333573466e1d20000021323232324994ccd55cf8008a4c2c6ae8800cdd70009aba100115333573466e1d20020021324994ccd55cf8008a4c2c2c6aae78008d55ce8009baa001357420026ae880194ccd5cd19b87480000084c8c8c8c92653335573e0022930b1aba2003375c0026ae8400454ccd5cd19b87480080084c92653335573e0022930b0b1aab9e00235573a0026ea8004d5d08008b1aab9e00235573a0026ea8004d5d08008098a999ab9a33223375e6e98008dd3000992999aab9f00110011333573466ebcd55ce9aba10013752910100357440020026eacd5d09aba20083253335573e00220022666ae68cdd79aab9d357420026ea522100357440020026eacd5d08020a999ab9a3371064a666aae7c004520001333573466ebcd55ce9aba1001375291100375a6aae78d5d09bab35573c6ae84005200037566ae84d5d100419b803253335573e002290000999ab9a3375e6aae74d5d08009ba9488100375a6aae78d5d09bab35573c6ae84005200037566ae840112080dac4091533357346644664646460044660040040024600446600400400244a666aae7c0045288a9991199ab9a00200114a060066ae840044c008d5d1000918019bab35573c002002644664646460044660040040024600446600400400244a666aae7c0045288a9991199ab9a00200114a060066ae840044c008d5d1000918019bad35573c002002466e1c0052000332233323222333323232300223300200200123002233002002001322323223300100300222253335573e002266ae8000c0084c8c8c94ccd5cd19baf002001133574066ec0008cc024d55cf0031aab9e00333300822002005357440082a666ae68cdc81bae002375c002266ae80018cccc0208800400cd5d1002002899aba0003333300822001006005357440086aae74008d55ce8021aba10012253335573e004200226666006440026ae84008d5d100100080080191001001000911ba63300337560046eac00488ccc888cccc8c8c8c0088cc0080080048c0088cc008008004c88c8c88cc00400c0088894ccd55cf800899aba000300213232325333573466ebc0080044cd5d019bb00023300935573c00c6aae7800cccc02088008014d5d10020a999ab9a337206eb8008dd7000899aba00063333008220010033574400800a266ae8000ccccc02088004018014d5d10021aab9d00235573a0086ae84004894ccd55cf801080089999801910009aba10023574400400200200644004004002446ea0cdc09bad002375a0020040020040026eacd5d080525eb7bdb18054ccd5cd199119192999ab9a323370e6aae74dd5000a40046ae84d5d100109919192999ab9a3370e90000010a5015333573466e1d2002002132337100020106eb4d5d08008a5135573c0046aae74004dd500089919192999ab9a3370e90000010a99919ab9a00114a29405280a999ab9a3370e90010010a99919ab9a00114a26466e20004020dd69aba10011323370e0100026eb4d5d08008a99919ab9a00114a29445281aab9e00235573a0026ea8004d5d0800991aab9e37540026ae84d5d1191aab9e375400200266e04dd69aba13235573c6ea80040512080c60a35742646ae88d5d10009aba200a1498585858585858d55cf0011aab9d00137546ae84d5d10009aba23235573c6ea8004cc88cc8c8c0088cc0080080048c0088cc008008004894ccd55cf8008b09919192999ab9a3370e90010010a999ab9a3371e00c6eb8d5d080089aba100413005357440082600a6ae88010d55cf0011aab9d0013754646ae84c8d55cf1baa0010013235742646aae78dd50008009aba100100237586ae8401cdd71aba10011635573c0046aae74004dd5191aba13235573c6ea8004004d5d0800991aab9e3754002646464a666ae68cdc3a4004004266446646460044660040040024600446600400400244a666aae7c004584c94ccd5cd199119baf374e646aae78dd50008011ba73235573c6ea8004004010d5d080089aba135744002260066ae88008c8d55cf1baa001357420020040086ae8400458d55cf0011aab9d00137546ae84d5d10029bac357420066ae88d5d10009aba235744002646aae78dd50009aba10013235573c6ea8004010d55cf0011aab9d001375400498183d8799f1b00000189a8e534b6d8799fd8799f581c4e773fd59569b8e154de2fd6ae5b1c4b56dd7957a9d6f77267e06f41ffd8799fd8799fd8799f581c3bd05909969e8c3e98a3b3f8debf8b1f3cb48a1fc32d8541c9340ef3ffffffffd8799fd87a9f581ce579d647711d851e074a36bf6a6e549704287f778e7eab6e769ab515ffffff0001",
    ),
  },
};

export const utxos = [
  {
    txHash: "35509191d07f018849fa7d32217b70ae33b49983aea21339850d6fcda31b030b",
    outputIndex: 0,
    assets: { lovelace: 10000000n },
    address: "addr_test1wrqlusc0rxkzfz5206j8mvgxqqkyxfl9gtplm3s26eypzqcxsnfs3",
    datumHash: undefined,
    datum: "d87981581c9fc430ea1f3adc20eebb813b2649e85c934ea5bc13d7b7fbe2b24e50",
    scriptRef: undefined,
  },
  {
    txHash: "75af72128f59d7cae87965399a01fd775fb8f69095cecb5ce45f55b8e3f5052c",
    outputIndex: 0,
    assets: { lovelace: 10000000n },
    address: "addr_test1wrqlusc0rxkzfz5206j8mvgxqqkyxfl9gtplm3s26eypzqcxsnfs3",
    datumHash: undefined,
    datum: "d87981581c9fc430ea1f3adc20eebb813b2649e85c934ea5bc13d7b7fbe2b24e50",
    scriptRef: undefined,
  },
  {
    txHash: "4f070d5ffaa972c554bdbbad5d01ddd032fddf91f8f3262136b8cce0ba3b790a",
    outputIndex: 0,
    assets: { lovelace: 10000000n },
    address: "addr_test1wrqlusc0rxkzfz5206j8mvgxqqkyxfl9gtplm3s26eypzqcxsnfs3",
    datumHash: undefined,
    datum: "d87981581c9fc430ea1f3adc20eebb813b2649e85c934ea5bc13d7b7fbe2b24e50",
    scriptRef: undefined,
  },
  {
    txHash: "f4918fe2de471b137901d6809e849ee920ed9013f7454fd073bd5b632b9596f0",
    outputIndex: 0,
    assets: { lovelace: 10000000n },
    address: "addr_test1wrqlusc0rxkzfz5206j8mvgxqqkyxfl9gtplm3s26eypzqcxsnfs3",
    datumHash: undefined,
    datum: "d87981581c9fc430ea1f3adc20eebb813b2649e85c934ea5bc13d7b7fbe2b24e50",
    scriptRef: undefined,
  },
];
export const cbor =
  "84a8008482582035509191d07f018849fa7d32217b70ae33b49983aea21339850d6fcda31b030b008258204f070d5ffaa972c554bdbbad5d01ddd032fddf91f8f3262136b8cce0ba3b790a0082582075af72128f59d7cae87965399a01fd775fb8f69095cecb5ce45f55b8e3f5052c00825820f4918fe2de471b137901d6809e849ee920ed9013f7454fd073bd5b632b9596f0000181825839009fc430ea1f3adc20eebb813b2649e85c934ea5bc13d7b7fbe2b24e505064b671634d14cb8d543e71dd8eb437a47efb47b0b22882866c420d1a025f365c021a000323a40b58203f42956d83a3940b571b4cf51c6098535b9c7e0b240bf4daaa0fb1c917e8a4370d81825820f4918fe2de471b137901d6809e849ee920ed9013f7454fd073bd5b632b9596f0010e81581c9fc430ea1f3adc20eebb813b2649e85c934ea5bc13d7b7fbe2b24e5010825839009fc430ea1f3adc20eebb813b2649e85c934ea5bc13d7b7fbe2b24e505064b671634d14cb8d543e71dd8eb437a47efb47b0b22882866c420d821b000000022ca6f211a2581c22691d3d969ecf5802226290c2fb98e2bc08522d5b726c1f5f400105a1445465737403581cef6ed47a6917a3cbbeb46561e8853da969343794d66128598a34af2ca14e4275726e61626c65546f6b656e3201111a004c4b40a20584840000d879814d48656c6c6f2c20576f726c6421821966ad1a0077ca99840001d879814d48656c6c6f2c20576f726c6421821966ad1a0077ca99840002d879814d48656c6c6f2c20576f726c6421821966ad1a0077ca99840003d879814d48656c6c6f2c20576f726c6421821966ad1a0077ca99068158eb58e901000032323232323223223225333006323253330083371e6eb8c008c028dd5002a4410d48656c6c6f2c20576f726c642100100114a06644646600200200644a66601c00229404c94ccc030cdc79bae301000200414a226600600600260200026eb0c02cc030c030c030c030c030c030c030c030c024dd5180098049baa002375c600260126ea80188c02c0045261365653330043370e900018029baa001132325333009300b002149858dd7180480098031baa0011653330023370e900018019baa0011323253330073009002149858dd7180380098021baa001165734aae7555cf2ab9f5742ae881f5f6";

export const redeemersExUnits = [
  {
    redeemer_tag: "spend",
    redeemer_index: 0,
    ex_units: { mem: 26285, steps: 7850649 },
  },
  {
    redeemer_tag: "spend",
    redeemer_index: 1,
    ex_units: { mem: 26285, steps: 7850649 },
  },
  {
    redeemer_tag: "spend",
    redeemer_index: 2,
    ex_units: { mem: 26285, steps: 7850649 },
  },
  {
    redeemer_tag: "spend",
    redeemer_index: 3,
    ex_units: { mem: 26285, steps: 7850649 },
  },
];

export const submitCbor =
  "84a80082825820442575f1e4becbcaef8b20e61ee8b130cb02d1959a4dbe43dccd327a62d9eb1800825820442575f1e4becbcaef8b20e61ee8b130cb02d1959a4dbe43dccd327a62d9eb18010182a300583900983ed9af5d9f13d0cb5e64ab3a1c00140f663518e78aa8c8ca09e0426d2a842a4ded1909f71835598d7d34dd55201d62dc2a88078a7a8f44011a03473bc0028201d81843d8798082583900983ed9af5d9f13d0cb5e64ab3a1c00140f663518e78aa8c8ca09e0426d2a842a4ded1909f71835598d7d34dd55201d62dc2a88078a7a8f441a0898c6ea021a00091b750b5820a9358c472b9f291336f1a0d6208b09784a3ee2dcc2a1cf2e713a9ddaa8c656cb0d81825820442575f1e4becbcaef8b20e61ee8b130cb02d1959a4dbe43dccd327a62d9eb18010e81581c983ed9af5d9f13d0cb5e64ab3a1c00140f663518e78aa8c8ca09e0421082583900983ed9af5d9f13d0cb5e64ab3a1c00140f663518e78aa8c8ca09e0426d2a842a4ded1909f71835598d7d34dd55201d62dc2a88078a7a8f441a0855971f111a004c4b40a3008182582007089ce0adf6e795176c584c6ef41c3b0720cddf5de3d5027df9b47b961a17d95840a25cb40f7944c3d8613abc628ff611b9641ab6afa9c757348682ed7d5bca70372326a08a737498772a299ea6efce63dd07c270d65ed4e8becd4b08a5759be0010581840000d87b820000821a00020dab1a03049aa70681592414592411010000322223232325333573466e1d2000002132323233333332222222323232323232325333573466e1d2002002132323232325333573466e1d200200213232533357346644666ae68008005281991199ab9a0020014a06644666ae680080052819baf357420106ae8401ccc88cdd79ba73235573c6ea8004008dd3991aab9e37540020026ae84008050cdc3999199191801119801001000918011198010010009112999aab9f001100213232325333573466e1d2000002133006005357440082a666ae68cdc78039bae3574200226600c66e0001520023574400826600c00a6ae88010d55cf0011aab9d0013754646ae84c8d55cf1baa0010013235742646aae78dd5000800991aba135744646aae78dd50008009aba100148000dd71aba100337586ae8403520023232325333573466e1d2000002133223335734004002940ccccccc060cdd2a400066ae80d5d0800a5eb812080897a37566ae84d5d1004a4c6644646464a666ae68cdc3a40000042c2a666ae68cdc3a400800426ae840044c8cc004800458cc8cc888cc8c8c0088cc0080080048c0088cc008008004894ccd55cf80089128008a999ab9a3375e6aae74d5d0800802098029aba100113002357440020024644460040066aae78004dd48009bae357420020086aae78008d55ce8009baa002357426ae88010dd59aba1357446ae8803804c048ccc8894ccd5cd19b87001480004cc88cdd79ba6002374c0020040062664466ebcdd30011ba600100232332322332323002233002002001230022330020020012253335573e002297adef6c6013233300535573c6ae840088cd5d019bb035573a6ae8400c0040084004c008d5d100080091998011bab001232223002003374c002244a002464a666ae68d5d180089128008911801001999119919180111980100100091801119801001000912999aab9f00114bd6f7b6300991998029aab9e35742004466ae80cdd81aab9d35742006002004200260046ae8800400494ccd5cd19baf00137509000091280089118010018008009999111999191119999191918011198010010009180111980100100099119191198008018011112999aab9f00113357400060042646464a666ae68cdd7801000899aba033760004660126aae78018d55cf001999804110010029aba200415333573466e40dd70011bae001133574000c6666010440020066ae880100144cd5d00019999804110008030029aba200435573a0046aae74010d5d0800912999aab9f00210011333300322001357420046ae8800800400400c8800800800488dd3198019bab002375600244666464446666464646004466004004002460044660040040026446464466002006004444a666aae7c0044cd5d000180109919192999ab9a3375e004002266ae80cdd8001198049aab9e00635573c0066660104400400a6ae8801054ccd5cd19b90375c0046eb80044cd5d00031999804110008019aba2004005133574000666660104400200c00a6ae88010d55ce8011aab9d0043574200244a666aae7c00840044cccc00c88004d5d08011aba200200100100322002002001223750660066eb4008dd6800802801000801000b800033332225333573466e1c005200014bd6f7b63009991199119aba03376000400297adef6c6037520046e9800400ccc88cc88cd5d019bb00020014bd6f7b6301ba900237500020040029110048810000137566ae84d5d10049bab357420086466e0520000014820225e84c8c8c8cc88ccd5cd001000a50333333301b357420080026eacd5d09aba200c357426ae88008cc88c8c8c94ccd5cd19b87480000085854ccd5cd19b87480100084d5d08008991980090008b1991991119919180111980100100091801119801001000912999aab9f001122500115333573466ebcd55ce9aba10010041300535742002260046ae880040048c888c00800cd55cf0009ba9001375c6ae84004010d55cf0011aab9d00137540046ae84d5d10039bab357426ae88d5d100880b00a9999112999ab9a3370e00290000999119baf374c0046e9800400800c4cc88cdd79ba6002374c002004646646446646460044660040040024600446600400400244a666aae7c00452f5bded8c026466600a6aae78d5d0801119aba0337606aae74d5d0801800801080098011aba2001001233300237560024644460040066e9800448940048c94ccd5cd1aba3001122500112230020033322332323002233002002001230022330020020012253335573e002297adef6c6013233300535573c6ae840088cd5d019bb035573a6ae8400c0040084004c008d5d100080092999ab9a3375e0026ea120001225001122300200300100133322233323222333323232300223300200200123002233002002001322323223300100300222253335573e002266ae8000c0084c8c8c94ccd5cd19baf002001133574066ec0008cc024d55cf0031aab9e00333300822002005357440082a666ae68cdc81bae002375c002266ae80018cccc0208800400cd5d1002002899aba0003333300822001006005357440086aae74008d55ce8021aba10012253335573e004200226666006440026ae84008d5d100100080080191001001000911ba63300337560046eac00488ccc8c888cccc8c8c8c0088cc0080080048c0088cc008008004c88c8c88cc00400c0088894ccd55cf800899aba000300213232325333573466ebc0080044cd5d019bb00023300935573c00c6aae7800cccc02088008014d5d10020a999ab9a337206eb8008dd7000899aba00063333008220010033574400800a266ae8000ccccc02088004018014d5d10021aab9d00235573a0086ae84004894ccd55cf801080089999801910009aba10023574400400200200644004004002446ea0cc00cdd68011bad001005002001002001700006666444a666ae68cdc3800a4000297adef6c6013322332233574066ec00080052f5bded8c06ea4008dd30008019991199119aba03376000400297adef6c6037520046ea00040080052210048810000137566ae84d5d10061bab3574200e6466e0520000010015333573402a26eb4d5d080109bad357420026ae88004d5d10009aab9e00235573a0026ea804c5261635744002646aae78dd500099912999ab9a3371000490000b099912999ab9a3370e004900009aba1001133233232225333573466e1c009200013574200226600666e0400920023574400246600400400246444a666ae68cdc38012400026ae840044cc00ccdc0801240046ae880048cc008008004004cdc0801240046ae8800400800403cdd61aba100a1635573c0046aae74004dd5191aba13235573c6ea8004004d5d0800991aab9e37540026ae84d5d1000991aab9e37540026644a666ae68cdc4001240002c26644a666ae68cdc38012400026ae840044cc8cc8c8894ccd5cd19b87002480004d5d080089980199b8100248008d5d1000919801001000919112999ab9a3370e004900009aba10011330033370200490011aba20012330020020010013370200490011aba200100200100b37586ae8401858d55cf0011aab9d00137546ae84d5d1002191aba23235744646ae88c8d5d11aba2001001001001357440026ae88d5d1000991aab9e37540026ae84004c8d55cf1baa00100122222223232325333573466e1d200000215333573400a2646464646464646464646644666ae68008005281991199ab9a0020014a06644666ae68008005281991199ab9a0020014a06644666ae68008005281991199ab9a0020014a06644666ae6800800528199119baf374e646aae78dd50008011ba73235573c6ea8004004d5d08039aba100b33223375e6e9cc8d55cf1baa001002374e646aae78dd50008009aba10063574201666ebcd5d08029aba10083375e6ae84004d5d080519baf357426ae88004d5d080499baf357426ae88008d5d09aba20083370e6eb4d5d0801a410125e80266e1cdd69aba1357440069040497a00991aab9e37540026ae84004c8d55cf1baa001357420046ae88004d5d10009aba200135744002646aae78dd500099191919006a999ab9a3370e900000109919191919191919191919191919191919191919191919191919191919191924ca666aae7c00452616357440066eb4004d5d08009aba2003375a0026ae84004d5d10032999ab9a3370e900000109919191919191919191924ca666aae7c00452616357440066eb4004d5d08009aba20065333573466e1d2000002132323253335734a66466ae6800452899b87001480004cdc3800a40702646464a666ae68cdc49b8d001481004c8c92653335573e0022930b1aba200316375c0026ae84004d5d10020b1b8d001375c0026ae8400458d55cf0011aab9d00137540026ae8400458d55cf0011aab9d00137540026ae84004d5d10032999ab9a3370e9000001099192999ab9a3370e6e34dd70012408026464932999aab9f001149858d5d10018b1bae001357420022a666ae68cdc3a4004004264932999aab9f00114985858d55cf0011aab9d00137540026ae84004d5d10032999ab9a3370e900000109919191919191919191919191924ca666aae7c004526163574400ca666ae68cdc3a4000004264646464646464932999aab9f001149858d5d10032999ab9a3370e900000109919191919191924ca666aae7c004526163574400ca666ae68cdc3a400000426464a666ae68cdc39b8d001480e04c8c92653335573e0022930b1aba200316375c0026ae8400454ccd5cd19b87480080084c8c94ccd5cd19b87371a002901c0991924ca666aae7c00452616357440062c6eb8004d5d08008b1aab9e00235573a0026ea8004d5d08008a999ab9a3370e900100109919191919191919191924ca666aae7c00452616357440066eb4004d5d08009aba2003375a0026ae84004d5d10019bad001357420022c6aae78008d55ce8009baa001357420022a666ae68cdc3a4004004264932999aab9f00114985858d55cf0011aab9d00137540026ae84004d5d10032999ab9a3370e9000001099192999ab9a3370e6e340052038132324994ccd55cf8008a4c2c6ae8800c58dd70009aba100115333573466e1d2002002132325333573466e1cdc6800a407026464932999aab9f001149858d5d10018b1bae001357420022c6aae78008d55ce8009baa001357420022c6aae78008d55ce8009baa001357420026ae880194ccd5cd19b87480000084c8c8c8c8c8c8c8c8c8c8c8c8c92653335573e0022930b1aba20065333573466e1d20000021323232323232324994ccd55cf8008a4c2c6ae880194ccd5cd19b87480000084c8c8c8c8c8c8c92653335573e0022930b1aba20065333573466e1d2000002132325333573466e1cdc6800a407026464932999aab9f001149858d5d10018b1bae001357420022a666ae68cdc3a400400426464a666ae68cdc39b8d001480e04c8c92653335573e0022930b1aba200316375c0026ae8400458d55cf0011aab9d00137540026ae8400454ccd5cd19b87480080084c8c8c8c8c8c8c8c8c8c92653335573e0022930b1aba2003375a0026ae84004d5d10019bad001357420026ae8800cdd68009aba10011635573c0046aae74004dd50009aba100115333573466e1d20020021324994ccd55cf8008a4c2c2c6aae78008d55ce8009baa001357420026ae880194ccd5cd19b87480000084c8c94ccd5cd19b87371a002901c0991924ca666aae7c00452616357440062c6eb8004d5d08008a999ab9a3370e9001001099192999ab9a3370e6e340052038132324994ccd55cf8008a4c2c6ae8800c58dd70009aba10011635573c0046aae74004dd50009aba10011635573c0046aae74004dd50009aba10011635573c0046aae74004dd50049aba200135744002646aae78dd50008038991919192999ab9a3370e90010010a50133232323002233002002001230022330020020012253335573e002294054ccd5cd19baf3574200200629444c008d5d10009aba10013237586ae84c8d5d1191aba23235744646ae88c8d5d1191aba232357446ae88004004004004004004004c8d55cf1baa00100135742646aae78dd50008041aab9e00235573a0026ea8d5d0991aab9e37540020026ae840045281aab9e00235573a0026ea801c028024dd69aba1004375a6ae84d5d100225100735573c0046aae74004dd50030a999ab9a3370e900200109919192999ab9a3370e90000010b0991919192999ab9a3370e9000001099999999111111191919191919192999ab9a3370e9001001099191919192999ab9a3370e9001001099192999ab9a33223335734004002940cc88ccd5cd001000a5033223335734004002940cdd79aba10083574200e664466ebcdd3991aab9e37540020046e9cc8d55cf1baa0010013574200402866e1ccc8cc8c8c0088cc0080080048c0088cc0080080048894ccd55cf800880109919192999ab9a3370e90000010998030029aba200415333573466e3c01cdd71aba10011330063370000a90011aba2004133006005357440086aae78008d55ce8009baa3235742646aae78dd5000800991aba13235573c6ea8004004c8d5d09aba23235573c6ea8004004d5d0800a40006eb8d5d08019bac3574201a90011919192999ab9a3370e900000109991199ab9a0020014a0666666603066e9520003357406ae840052f5c0904044bd1bab357426ae880252633223232325333573466e1d20000021615333573466e1d20040021357420022646600240022c664664446646460044660040040024600446600400400244a666aae7c004489400454ccd5cd19baf35573a6ae840040104c014d5d0800898011aba200100123222300200335573c0026ea4004dd71aba100100435573c0046aae74004dd50011aba1357440086eacd5d09aba23574401c026024666444a666ae68cdc3800a40002664466ebcdd30011ba6001002003133223375e6e98008dd30008011919919119919180111980100100091801119801001000912999aab9f00114bd6f7b6300991998029aab9e35742004466ae80cdd81aab9d35742006002004200260046ae880040048ccc008dd58009191118010019ba60011225001232533357346ae8c0044894004488c00800ccc88cc8c8c0088cc0080080048c0088cc008008004894ccd55cf8008a5eb7bdb1804c8ccc014d55cf1aba1002233574066ec0d55ce9aba100300100210013002357440020024a666ae68cdd78009ba8480004894004488c00800c004004ccc888ccc8c888cccc8c8c8c0088cc0080080048c0088cc008008004c88c8c88cc00400c0088894ccd55cf800899aba000300213232325333573466ebc0080044cd5d019bb00023300935573c00c6aae7800cccc02088008014d5d10020a999ab9a337206eb8008dd7000899aba00063333008220010033574400800a266ae8000ccccc02088004018014d5d10021aab9d00235573a0086ae84004894ccd55cf801080089999801910009aba10023574400400200200644004004002446e98cc00cdd58011bab0012233323222333323232300223300200200123002233002002001322323223300100300222253335573e002266ae8000c0084c8c8c94ccd5cd19baf002001133574066ec0008cc024d55cf0031aab9e00333300822002005357440082a666ae68cdc81bae002375c002266ae80018cccc0208800400cd5d1002002899aba0003333300822001006005357440086aae74008d55ce8021aba10012253335573e004200226666006440026ae84008d5d100100080080191001001000911ba833003375a0046eb4004014008004008005c00019999112999ab9a3370e00290000a5eb7bdb1804cc88cc88cd5d019bb00020014bd6f7b6301ba9002374c0020066644664466ae80cdd8001000a5eb7bdb180dd48011ba800100200148810048810000137566ae84d5d10049bab357420086466e0520000014820225e84c8c8c8cc88ccd5cd001000a50333333301b357420080026eacd5d09aba200c357426ae88008cc88c8c8c94ccd5cd19b87480000085854ccd5cd19b87480100084d5d08008991980090008b1991991119919180111980100100091801119801001000912999aab9f001122500115333573466ebcd55ce9aba10010041300535742002260046ae880040048c888c00800cd55cf0009ba9001375c6ae84004010d55cf0011aab9d00137540046ae84d5d10039bab357426ae88d5d100880b00a9999112999ab9a3370e00290000999119baf374c0046e9800400800c4cc88cdd79ba6002374c002004646646446646460044660040040024600446600400400244a666aae7c00452f5bded8c026466600a6aae78d5d0801119aba0337606aae74d5d0801800801080098011aba2001001233300237560024644460040066e9800448940048c94ccd5cd1aba3001122500112230020033322332323002233002002001230022330020020012253335573e002297adef6c6013233300535573c6ae840088cd5d019bb035573a6ae8400c0040084004c008d5d100080092999ab9a3375e0026ea120001225001122300200300100133322233323222333323232300223300200200123002233002002001322323223300100300222253335573e002266ae8000c0084c8c8c94ccd5cd19baf002001133574066ec0008cc024d55cf0031aab9e00333300822002005357440082a666ae68cdc81bae002375c002266ae80018cccc0208800400cd5d1002002899aba0003333300822001006005357440086aae74008d55ce8021aba10012253335573e004200226666006440026ae84008d5d100100080080191001001000911ba63300337560046eac00488ccc8c888cccc8c8c8c0088cc0080080048c0088cc008008004c88c8c88cc00400c0088894ccd55cf800899aba000300213232325333573466ebc0080044cd5d019bb00023300935573c00c6aae7800cccc02088008014d5d10020a999ab9a337206eb8008dd7000899aba00063333008220010033574400800a266ae8000ccccc02088004018014d5d10021aab9d00235573a0086ae84004894ccd55cf801080089999801910009aba10023574400400200200644004004002446ea0cc00cdd68011bad001005002001002001700006666444a666ae68cdc3800a4000297adef6c6013322332233574066ec00080052f5bded8c06ea4008dd30008019991199119aba03376000400297adef6c6037520046ea00040080052210048810000137566ae84d5d10061bab3574200e6466e0520000010015333573402a26eb4d5d080109bad357420026ae88004d5d10009aab9e00235573a0026ea804c5261635744002646aae78dd500099912999ab9a3371000490000b099912999ab9a3370e004900009aba1001133233232225333573466e1c009200013574200226600666e0400920023574400246600400400246444a666ae68cdc38012400026ae840044cc00ccdc0801240046ae880048cc008008004004cdc0801240046ae8800400800403cdd61aba100a1635573c0046aae74004dd5191aba13235573c6ea8004004d5d0800991aab9e37540026ae84d5d1000991aab9e37540026644a666ae68cdc4001240002c26644a666ae68cdc38012400026ae840044cc8cc8c8894ccd5cd19b87002480004d5d080089980199b8100248008d5d1000919801001000919112999ab9a3370e004900009aba10011330033370200490011aba20012330020020010013370200490011aba200100200100b37586ae8401858d55cf0011aab9d00137546ae84d5d1002191aba23235744646ae88c8d5d11aba2001001001001357440026ae88d5d1000991aab9e37540026ae84004c8d55cf1baa00100122222223232325333573466e1d200000215333573400a2646464646464646464646644666ae68008005281991199ab9a0020014a06644666ae68008005281991199ab9a0020014a06644666ae68008005281991199ab9a0020014a06644666ae6800800528199119baf374e646aae78dd50008011ba73235573c6ea8004004d5d08039aba100b33223375e6e9cc8d55cf1baa001002374e646aae78dd50008009aba10063574201666ebcd5d08029aba10083375e6ae84004d5d080519baf357426ae88004d5d080499baf357426ae88008d5d09aba20083370e6eb4d5d0801a410125e80266e1cdd69aba1357440069040497a00991aab9e37540026ae84004c8d55cf1baa001357420046ae88004d5d10009aba200135744002646aae78dd500099191919006a999ab9a3370e900000109919191919191919191919191919191919191919191919191919191919191924ca666aae7c00452616357440066eb4004d5d08009aba2003375a0026ae84004d5d10032999ab9a3370e900000109919191919191919191924ca666aae7c00452616357440066eb4004d5d08009aba20065333573466e1d2000002132323253335734a66466ae6800452899b87001480004cdc3800a40702646464a666ae68cdc49b8d001481004c8c92653335573e0022930b1aba200316375c0026ae84004d5d10020b1b8d001375c0026ae8400458d55cf0011aab9d00137540026ae8400458d55cf0011aab9d00137540026ae84004d5d10032999ab9a3370e9000001099192999ab9a3370e6e34dd70012408026464932999aab9f001149858d5d10018b1bae001357420022a666ae68cdc3a4004004264932999aab9f00114985858d55cf0011aab9d00137540026ae84004d5d10032999ab9a3370e900000109919191919191919191919191924ca666aae7c004526163574400ca666ae68cdc3a4000004264646464646464932999aab9f001149858d5d10032999ab9a3370e900000109919191919191924ca666aae7c004526163574400ca666ae68cdc3a400000426464a666ae68cdc39b8d001480e04c8c92653335573e0022930b1aba200316375c0026ae8400454ccd5cd19b87480080084c8c94ccd5cd19b87371a002901c0991924ca666aae7c00452616357440062c6eb8004d5d08008b1aab9e00235573a0026ea8004d5d08008a999ab9a3370e900100109919191919191919191924ca666aae7c00452616357440066eb4004d5d08009aba2003375a0026ae84004d5d10019bad001357420022c6aae78008d55ce8009baa001357420022a666ae68cdc3a4004004264932999aab9f00114985858d55cf0011aab9d00137540026ae84004d5d10032999ab9a3370e9000001099192999ab9a3370e6e340052038132324994ccd55cf8008a4c2c6ae8800c58dd70009aba100115333573466e1d2002002132325333573466e1cdc6800a407026464932999aab9f001149858d5d10018b1bae001357420022c6aae78008d55ce8009baa001357420022c6aae78008d55ce8009baa001357420026ae880194ccd5cd19b87480000084c8c8c8c8c8c8c8c8c8c8c8c8c92653335573e0022930b1aba20065333573466e1d20000021323232323232324994ccd55cf8008a4c2c6ae880194ccd5cd19b87480000084c8c8c8c8c8c8c92653335573e0022930b1aba20065333573466e1d2000002132325333573466e1cdc6800a407026464932999aab9f001149858d5d10018b1bae001357420022a666ae68cdc3a400400426464a666ae68cdc39b8d001480e04c8c92653335573e0022930b1aba200316375c0026ae8400458d55cf0011aab9d00137540026ae8400454ccd5cd19b87480080084c8c8c8c8c8c8c8c8c8c92653335573e0022930b1aba2003375a0026ae84004d5d10019bad001357420026ae8800cdd68009aba10011635573c0046aae74004dd50009aba100115333573466e1d20020021324994ccd55cf8008a4c2c2c6aae78008d55ce8009baa001357420026ae880194ccd5cd19b87480000084c8c94ccd5cd19b87371a002901c0991924ca666aae7c00452616357440062c6eb8004d5d08008a999ab9a3370e9001001099192999ab9a3370e6e340052038132324994ccd55cf8008a4c2c6ae8800c58dd70009aba10011635573c0046aae74004dd50009aba10011635573c0046aae74004dd50009aba10011635573c0046aae74004dd50049aba200135744002646aae78dd50008038991919192999ab9a3370e90010010a50133232323002233002002001230022330020020012253335573e002294054ccd5cd19baf3574200200629444c008d5d10009aba10013237586ae84c8d5d1191aba23235744646ae88c8d5d1191aba232357446ae88004004004004004004004c8d55cf1baa00100135742646aae78dd50008041aab9e00235573a0026ea8d5d0991aab9e37540020026ae840045281aab9e00235573a0026ea801cd5d08008069bad357420106eb4d5d09aba20084a00162c6aae78008d55ce8009baa357420046ae88004d55cf0011aab9d001375400c2646464a666ae68cdc3a40000042a666ae68c8c8c8c94ccd5cd19b874800800852809991919180111980100100091801119801001000912999aab9f00114a02a666ae68cdd79aba100100314a2260046ae88004d5d0800991bac35742646ae88c8d5d1191aba23235744646ae88c8d5d1191aba235744002002002002002002002646aae78dd50008009aba13235573c6ea800402cd55cf0011aab9d00137546ae84c8d55cf1baa001001357420022930b0b1aab9e00235573a0026ea8018d55cf0011aab9d0013754004980150d8799fd87a9f581ca65ca58a4e9c755fa830173d2a5caed458ac0c73f97db7faae2e7e3bffd8799fd8799fd8799f581c83ec96719dc0591034b78e472d6f477446261fec4bc517fa4d047f02ffffffff0001f5f6";
