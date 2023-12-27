/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../common";
import type {
  FlashLoanLogic,
  FlashLoanLogicInterface,
} from "../../../../../../../contracts/aave-core-v3/contracts/protocol/libraries/logic/FlashLoanLogic";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum DataTypes.InterestRateMode",
        name: "interestRateMode",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "premium",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint16",
        name: "referralCode",
        type: "uint16",
      },
    ],
    name: "FlashLoan",
    type: "event",
  },
];

const _bytecode =
  "0x612b3361003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c80632e7263ea14610045578063a1fe0e8d14610067575b600080fd5b81801561005157600080fd5b5061006561006036600461229a565b610087565b005b81801561007357600080fd5b50610065610082366004612437565b610928565b61009a8582602001518360400151610b94565b6101066040518060e00160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016060815260200160008152602001600081525090565b81602001515167ffffffffffffffff81111561012457610124611fe2565b60405190808252806020026020018201604052801561014d578160200160208202803683370190505b506080820152815173ffffffffffffffffffffffffffffffffffffffff1681526101a0820151610187578161010001518260e0015161018b565b6000805b60c083015260a0820152600060208201525b816020015151816020015110156102fb5781604001518160200151815181106101c8576101c8612501565b60209081029190910101516060820181905260a08201516101e99190610c85565b816080015182602001518151811061020357610203612501565b602002602001018181525050856000836020015183602001518151811061022c5761022c612501565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff90811683529082019290925260409081016000206004908101548551606086015193517f4efecaa5000000000000000000000000000000000000000000000000000000008152908516928101929092526024820192909252911690634efecaa590604401600060405180830381600087803b1580156102cb57600080fd5b505af11580156102df573d6000803e3d6000fd5b50505060208201805191506102f38261255f565b90525061019d565b806000015173ffffffffffffffffffffffffffffffffffffffff1663920f5c84836020015184604001518460800151338760a001516040518663ffffffff1660e01b815260040161035095949392919061263e565b6020604051808303816000875af115801561036f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039391906126f2565b6040518060400160405280600281526020017f31330000000000000000000000000000000000000000000000000000000000008152509061040a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610401919061270f565b60405180910390fd5b50600060208201525b8160200151518160200151101561092057816020015181602001518151811061043e5761043e612501565b6020026020010151816040019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050816040015181602001518151811061049757610497612501565b60209081029190910101516060820152600082606001518260200151815181106104c3576104c3612501565b602002602001015160028111156104dc576104dc612722565b60028111156104ed576104ed612722565b14156105d4576105cf866000836040015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060c0016040528084606001518152602001846080015185602001518151811061056757610567612501565b602002602001015181526020018460c001518152602001846040015173ffffffffffffffffffffffffffffffffffffffff168152602001856000015173ffffffffffffffffffffffffffffffffffffffff1681526020018560c0015161ffff16815250610cc8565b610908565b73__$0ea19f1bcf783a95212879584317b04f83$__631e6473f987878787604051806101800160405280886040015173ffffffffffffffffffffffffffffffffffffffff1681526020013373ffffffffffffffffffffffffffffffffffffffff168152602001896080015173ffffffffffffffffffffffffffffffffffffffff16815260200188606001518152602001896060015189602001518151811061067e5761067e612501565b6020026020010151600281111561069757610697612722565b60028111156106a8576106a8612722565b81526020018960c0015161ffff1681526020016000151581526020018961012001518152602001896101400151815260200189610160015173ffffffffffffffffffffffffffffffffffffffff1663fca513a86040518163ffffffff1660e01b8152600401602060405180830381865afa15801561072a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074e9190612751565b73ffffffffffffffffffffffffffffffffffffffff16815260200189610180015160ff16815260200189610160015173ffffffffffffffffffffffffffffffffffffffff16635eb88d3d6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107eb9190612751565b73ffffffffffffffffffffffffffffffffffffffff168152506040518663ffffffff1660e01b81526004016108249594939291906127a9565b60006040518083038186803b15801561083c57600080fd5b505af4158015610850573d6000803e3d6000fd5b505050508160c0015161ffff16816040015173ffffffffffffffffffffffffffffffffffffffff16836000015173ffffffffffffffffffffffffffffffffffffffff167fefefaba5e921573100900a3ad9cf29f222d995fb3b6045797eaea7521bd8d6f033856060015187606001518760200151815181106108d4576108d4612501565b602002602001015160028111156108ed576108ed612722565b60006040516108ff94939291906128d1565b60405180910390a45b602081018051906109188261255f565b905250610413565b505050505050565b61093182610fdc565b805160c0820151604083015160009161094a9190610c85565b600480860154855160408088015190517f4efecaa500000000000000000000000000000000000000000000000000000000815294955073ffffffffffffffffffffffffffffffffffffffff90921693634efecaa5936109cb93910173ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b600060405180830381600087803b1580156109e557600080fd5b505af11580156109f9573d6000803e3d6000fd5b505050506020830151604080850151606086015191517f1b11d0ff00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff861693631b11d0ff93610a6293919287913391600401612911565b6020604051808303816000875af1158015610a81573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa591906126f2565b6040518060400160405280600281526020017f313300000000000000000000000000000000000000000000000000000000000081525090610b13576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610401919061270f565b50610b8e846040518060c00160405280866040015181526020018481526020018660a001518152602001866020015173ffffffffffffffffffffffffffffffffffffffff168152602001866000015173ffffffffffffffffffffffffffffffffffffffff168152602001866080015161ffff16815250610cc8565b50505050565b80518251146040518060400160405280600281526020017f343900000000000000000000000000000000000000000000000000000000000081525090610c07576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610401919061270f565b5060005b8251811015610b8e57610c73846000858481518110610c2c57610c2c612501565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020610fdc565b80610c7d8161255f565b915050610c0b565b600081157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec7783900484111517610cba57600080fd5b506127109102611388010490565b6000610ce582604001518360200151610c8590919063ffffffff16565b90506000818360200151610cf99190612961565b9050600083602001518460000151610d119190612978565b90506000610d1e86611166565b9050610d2a868261137f565b6101008101516008870154610ddb91610d55916fffffffffffffffffffffffffffffffff169061140a565b826101e0015173ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610da5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dc99190612990565b610dd39190612978565b879085611461565b6101008201819052610df790610df2908690611511565b611550565b600887018054600090610e1d9084906fffffffffffffffffffffffffffffffff166129a9565b92506101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff160217905550610e718186606001518460008a6115f690949392919063ffffffff16565b60808501516101e08201516060870151610ea49273ffffffffffffffffffffffffffffffffffffffff9091169185611937565b6101e081015160808601516040517f6fd9767600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201819052602482015260448101859052911690636fd9767690606401600060405180830381600087803b158015610f2657600080fd5b505af1158015610f3a573d6000803e3d6000fd5b505050508460a0015161ffff16856060015173ffffffffffffffffffffffffffffffffffffffff16866080015173ffffffffffffffffffffffffffffffffffffffff167fefefaba5e921573100900a3ad9cf29f222d995fb3b6045797eaea7521bd8d6f033896000015160006002811115610fb757610fb7612722565b8b60200151604051610fcc94939291906128d1565b60405180910390a4505050505050565b60408051602081019091528154808252671000000000000000161515156040518060400160405280600281526020017f323900000000000000000000000000000000000000000000000000000000000081525090611067576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610401919061270f565b5080516701000000000000001615156040518060400160405280600281526020017f3237000000000000000000000000000000000000000000000000000000000000815250906110e4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610401919061270f565b5080516780000000000000001615156040518060400160405280600281526020017f393100000000000000000000000000000000000000000000000000000000000081525090611161576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610401919061270f565b505050565b61116e611f35565b611176611f35565b60408051602081018252845481526101c0830181905251901c61ffff166101a082015260018301546fffffffffffffffffffffffffffffffff808216610100840181905260e0840152600285015480821661014085018190526101208501527001000000000000000000000000000000009283900482166101608501528290041661018083015260048085015473ffffffffffffffffffffffffffffffffffffffff9081166101e085015260058601548116610200850152600686015416610220840181905260038601549290920464ffffffffff16610240840152604080517fb1bf962d000000000000000000000000000000000000000000000000000000008152905163b1bf962d928281019260209291908290030181865afa1580156112a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112c79190612990565b816020018181525081600001818152505080610200015173ffffffffffffffffffffffffffffffffffffffff1663797743386040518163ffffffff1660e01b8152600401608060405180830381865afa158015611328573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061134c91906129dd565b64ffffffffff166102608501526060840181905260808401829052604084019290925260c083015260a082015292915050565b60038201544264ffffffffff9081167001000000000000000000000000000000009092041614156113ae575050565b6113b88282611a19565b6113c28282611b3a565b5060030180547fffffffffffffffffffffff0000000000ffffffffffffffffffffffffffffffff167001000000000000000000000000000000004264ffffffffff1602179055565b600081157ffffffffffffffffffffffffffffffffffffffffffe6268e1b017bfe18bffffff8390048411151761143f57600080fd5b506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b600183015460009081906114b9906fffffffffffffffffffffffffffffffff166b033b2e3c9fd0803ce80000006114a961149a88611cb9565b6114a388611cb9565b90611511565b6114b39190612978565b9061140a565b90506114c481611550565b6001860180547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff9290921691909117905590505b9392505050565b600081156b033b2e3c9fd0803ce80000006002840419048411171561153557600080fd5b506b033b2e3c9fd0803ce80000009190910260028204010490565b60006fffffffffffffffffffffffffffffffff8211156115f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203160448201527f32382062697473000000000000000000000000000000000000000000000000006064820152608401610401565b5090565b6116216040518060800160405280600081526020016000815260200160008152602001600081525090565b61014085015160208601516116359161140a565b60608083019182526007880154604080516101208101825260088b01546fffffffffffffffffffffffffffffffff7001000000000000000000000000000000009091041681526020810188905280820187905260c0808b0151948201949094529351608085015260a0808a0151908501526101a08901519284019290925273ffffffffffffffffffffffffffffffffffffffff87811660e08501526101e0890151811661010085015291517fa589870900000000000000000000000000000000000000000000000000000000815291169163a5898709916117969190600401600061012082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015173ffffffffffffffffffffffffffffffffffffffff80821660e0850152610100915080828601511682850152505092915050565b606060405180830381865afa1580156117b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117d79190612a28565b604084015260208301528082526117ed90611550565b6001870180546fffffffffffffffffffffffffffffffff928316700100000000000000000000000000000000029216919091179055602081015161183090611550565b6003870180547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff92909216919091179055604081015161188190611550565b6002870180546fffffffffffffffffffffffffffffffff92831670010000000000000000000000000000000002921691909117905580516020808301516040808501516101008a01516101408b0151835196875294860193909352908401526060830152608082015273ffffffffffffffffffffffffffffffffffffffff8516907f804c9b842b2748a22bb64b345453a3de7ca54a6ca45ce00d415894979e22897a9060a00160405180910390a2505050505050565b6040517f23b872dd0000000000000000000000000000000000000000000000000000000080825273ffffffffffffffffffffffffffffffffffffffff8581166004840152841660248301526044820183905290600080606483828a5af16119a2573d6000803e3d6000fd5b506119ac85611cd4565b611a12576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f475076323a206661696c6564207472616e7366657246726f6d000000000000006044820152606401610401565b5050505050565b61016081015115611aa9576000611a3a826101600151836102400151611da0565b9050611a538260e001518261140a90919063ffffffff16565b6101008301819052611a6490611550565b6001840180547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff92909216919091179055505b805115611b36576000611ac6826101800151836102400151611de5565b9050611ae08261012001518261140a90919063ffffffff16565b6101408301819052611af190611550565b6002840180547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff92909216919091179055505b5050565b611b736040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6101a0820151611b8257505050565b6101208201518251611b939161140a565b60208201526101408201518251611ba99161140a565b60408201526060820151610260830151610240840151611bd192919064ffffffffff16611dee565b606082018190526040830151611be69161140a565b808252602082015160808401516040840151611c029190612978565b611c0c9190612961565b611c169190612961565b608082018190526101a0830151611c2d9190610c85565b60a082018190521561116157611c58610df28361010001518360a0015161151190919063ffffffff16565b600884018054600090611c7e9084906fffffffffffffffffffffffffffffffff166129a9565b92506101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff160217905550505050565b633b9aca008181029081048214611ccf57600080fd5b919050565b6000611d14565b7f08c379a00000000000000000000000000000000000000000000000000000000060005260206004528060245250806044525060646000fd5b3d8015611d535760208114611d8d57611d4e7f475076323a206d616c666f726d6564207472616e7366657220726573756c7400601f611cdb565b611d9a565b823b611d8457611d847f475076323a206e6f74206120636f6e74726163740000000000000000000000006014611cdb565b60019150611d9a565b3d6000803e600051151591505b50919050565b600080611db464ffffffffff841642612961565b611dbe9085612a56565b6301e1338090049050611ddd816b033b2e3c9fd0803ce8000000612978565b949350505050565b600061150a8383425b600080611e0264ffffffffff851684612961565b905080611e1e576b033b2e3c9fd0803ce800000091505061150a565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81016000808060028511611e54576000611e59565b600285035b925066038882915c4000611e6d8a8061140a565b81611e7a57611e7a612a93565b0491506301e13380611e8c838b61140a565b81611e9957611e99612a93565b049050600082611ea98688612a56565b611eb39190612a56565b60029004905060008285611ec7888a612a56565b611ed19190612a56565b611edb9190612a56565b60069004905080826301e13380611ef28a8f612a56565b611efc9190612ac2565b611f12906b033b2e3c9fd0803ce8000000612978565b611f1c9190612978565b611f269190612978565b9b9a5050505050505050505050565b6040518061028001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001611fb96040518060200160405280600081525090565b815260006020820181905260408201819052606082018190526080820181905260a09091015290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516101c0810167ffffffffffffffff8111828210171561203557612035611fe2565b60405290565b60405160e0810167ffffffffffffffff8111828210171561203557612035611fe2565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156120a5576120a5611fe2565b604052919050565b73ffffffffffffffffffffffffffffffffffffffff811681146120cf57600080fd5b50565b8035611ccf816120ad565b600067ffffffffffffffff8211156120f7576120f7611fe2565b5060051b60200190565b600082601f83011261211257600080fd5b81356020612127612122836120dd565b61205e565b82815260059290921b8401810191818101908684111561214657600080fd5b8286015b8481101561216a57803561215d816120ad565b835291830191830161214a565b509695505050505050565b600082601f83011261218657600080fd5b81356020612196612122836120dd565b82815260059290921b840181019181810190868411156121b557600080fd5b8286015b8481101561216a57803583529183019183016121b9565b600082601f8301126121e157600080fd5b813567ffffffffffffffff8111156121fb576121fb611fe2565b61222c60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160161205e565b81815284602083860101111561224157600080fd5b816020850160208301376000918101602001919091529392505050565b803561ffff81168114611ccf57600080fd5b803560ff81168114611ccf57600080fd5b80151581146120cf57600080fd5b8035611ccf81612281565b600080600080600060a086880312156122b257600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff808211156122e657600080fd5b908701906101c0828a0312156122fb57600080fd5b612303612011565b61230c836120d2565b815260208301358281111561232057600080fd5b61232c8b828601612101565b60208301525060408301358281111561234457600080fd5b6123508b828601612175565b60408301525060608301358281111561236857600080fd5b6123748b828601612175565b606083015250612386608084016120d2565b608082015260a08301358281111561239d57600080fd5b6123a98b8286016121d0565b60a0830152506123bb60c0840161225e565b60c082015260e0838101359082015261010080840135908201526101208084013590820152610140808401359082015261016091506123fb8284016120d2565b82820152610180915061240f828401612270565b828201526101a0915061242382840161228f565b828201528093505050509295509295909350565b6000806040838503121561244a57600080fd5b82359150602083013567ffffffffffffffff8082111561246957600080fd5b9084019060e0828703121561247d57600080fd5b61248561203b565b61248e836120d2565b815261249c602084016120d2565b6020820152604083013560408201526060830135828111156124bd57600080fd5b6124c9888286016121d0565b6060830152506124db6080840161225e565b608082015260a083013560a082015260c083013560c08201528093505050509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561259157612591612530565b5060010190565b600081518084526020808501945080840160005b838110156125c8578151875295820195908201906001016125ac565b509495945050505050565b6000815180845260005b818110156125f9576020818501810151868301820152016125dd565b8181111561260b576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60a0808252865190820181905260009060209060c0840190828a01845b8281101561268d57815173ffffffffffffffffffffffffffffffffffffffff168452928401929084019060010161265b565b505050838103828501526126a18189612598565b91505082810360408401526126b68187612598565b905073ffffffffffffffffffffffffffffffffffffffff8516606084015282810360808401526126e681856125d3565b98975050505050505050565b60006020828403121561270457600080fd5b815161150a81612281565b60208152600061150a60208301846125d3565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60006020828403121561276357600080fd5b815161150a816120ad565b600381106127a5577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b858152602081018590526040810184905260608101839052815173ffffffffffffffffffffffffffffffffffffffff1660808201526102008101602083015173ffffffffffffffffffffffffffffffffffffffff811660a084015250604083015173ffffffffffffffffffffffffffffffffffffffff811660c084015250606083015160e083015260808301516101006128458185018361276e565b60a0850151915061012061285e8186018461ffff169052565b60c086015192506101406128758187018515159052565b60e087015161016087810191909152928701516101808701529086015173ffffffffffffffffffffffffffffffffffffffff9081166101a08701529086015160ff166101c0860152908501519081166101e0850152905061216a565b73ffffffffffffffffffffffffffffffffffffffff851681526020810184905260808101612902604083018561276e565b82606083015295945050505050565b600073ffffffffffffffffffffffffffffffffffffffff808816835286602084015285604084015280851660608401525060a0608083015261295660a08301846125d3565b979650505050505050565b60008282101561297357612973612530565b500390565b6000821982111561298b5761298b612530565b500190565b6000602082840312156129a257600080fd5b5051919050565b60006fffffffffffffffffffffffffffffffff8083168185168083038211156129d4576129d4612530565b01949350505050565b600080600080608085870312156129f357600080fd5b845193506020850151925060408501519150606085015164ffffffffff81168114612a1d57600080fd5b939692955090935050565b600080600060608486031215612a3d57600080fd5b8351925060208401519150604084015190509250925092565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612a8e57612a8e612530565b500290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600082612af8577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b50049056fea2646970667358221220fd644bbd7819630e6997155115445481409e88b57056e5d8d73db1642410bb1a64736f6c634300080a0033";

type FlashLoanLogicConstructorParams =
  | [linkLibraryAddresses: FlashLoanLogicLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FlashLoanLogicConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class FlashLoanLogic__factory extends ContractFactory {
  constructor(...args: FlashLoanLogicConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        FlashLoanLogic__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: FlashLoanLogicLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$0ea19f1bcf783a95212879584317b04f83\\$__", "g"),
      linkLibraryAddresses[
        "contracts/aave-core-v3/contracts/protocol/libraries/logic/BorrowLogic.sol:BorrowLogic"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FlashLoanLogic> {
    return super.deploy(overrides || {}) as Promise<FlashLoanLogic>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FlashLoanLogic {
    return super.attach(address) as FlashLoanLogic;
  }
  override connect(signer: Signer): FlashLoanLogic__factory {
    return super.connect(signer) as FlashLoanLogic__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FlashLoanLogicInterface {
    return new utils.Interface(_abi) as FlashLoanLogicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FlashLoanLogic {
    return new Contract(address, _abi, signerOrProvider) as FlashLoanLogic;
  }
}

export interface FlashLoanLogicLibraryAddresses {
  ["contracts/aave-core-v3/contracts/protocol/libraries/logic/BorrowLogic.sol:BorrowLogic"]: string;
}
