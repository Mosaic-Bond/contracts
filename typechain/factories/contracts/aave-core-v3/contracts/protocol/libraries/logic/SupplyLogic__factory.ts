/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../common";
import type {
  SupplyLogic,
  SupplyLogicInterface,
} from "../../../../../../../contracts/aave-core-v3/contracts/protocol/libraries/logic/SupplyLogic";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "reserve",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "ReserveUsedAsCollateralDisabled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "reserve",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "ReserveUsedAsCollateralEnabled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "reserve",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint16",
        name: "referralCode",
        type: "uint16",
      },
    ],
    name: "Supply",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "reserve",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
];

const _bytecode =
  "0x613b0e61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100565760003560e01c8063186dea441461005b5780631913f1611461008d5780638a5dadd1146100af578063bf697a26146100cf575b600080fd5b81801561006757600080fd5b5061007b61007636600461343d565b6100ef565b60405190815260200160405180910390f35b81801561009957600080fd5b506100ad6100a836600461350e565b6104a0565b005b8180156100bb57600080fd5b506100ad6100ca3660046135be565b610749565b8180156100db57600080fd5b506100ad6100ea3660046136ca565b610a1d565b805173ffffffffffffffffffffffffffffffffffffffff1660009081526020869052604081208161011f82610ce9565b905061012b8282610f02565b6101008101516101e08201516040517f1da24f3e0000000000000000000000000000000000000000000000000000000081523360048201526000926101d692909173ffffffffffffffffffffffffffffffffffffffff90911690631da24f3e906024015b602060405180830381865afa1580156101ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d09190613751565b90610f8d565b60208601519091507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114156102095750805b610214838284610fe4565b85516102269085908590600085611201565b600384015460408051602081019091528854815260009161026491907501000000000000000000000000000000000000000000900461ffff16611542565b905080801561027257508282145b156102eb5760038501546102a69089907501000000000000000000000000000000000000000000900461ffff1660006115cd565b8651604051339173ffffffffffffffffffffffffffffffffffffffff16907f44c58d81365b66dd4b1a7f36c25aa97b8c71c361ee4937adc1a00000227db5dd90600090a35b6101e084015160408089015161010087015191517fd7020d0a00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff91821660248201526044810186905260648101929092529091169063d7020d0a90608401600060405180830381600087803b15801561037b57600080fd5b505af115801561038f573d6000803e3d6000fd5b505050508080156103d1575060408051602081019091528854908190527f55555555555555555555555555555555555555555555555555555555555555551615155b1561040c5761040c8b8b8b8b6040518060200160405290816000820154815250508b60000151338d606001518e608001518f60a00151611664565b866040015173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16886000015173ffffffffffffffffffffffffffffffffffffffff167f3115d1449a7b732c986cba18244e897a450f61e1bb8d589cd2e69e6c8924f9f78560405161048a91815260200190565b60405180910390a4509998505050505050505050565b805173ffffffffffffffffffffffffffffffffffffffff166000908152602085905260408120906104d082610ce9565b90506104dc8282610f02565b6104eb81838560200151611820565b825160208401516105029184918491906000611201565b6101e0810151602084015184516105349273ffffffffffffffffffffffffffffffffffffffff90911691339190611ba8565b6101e0810151604080850151602086015161010085015192517fb3f1c93d00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff928316602482015260448101919091526064810192909252600092169063b3f1c93d906084016020604051808303816000875af11580156105d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f4919061376a565b905080156106a35761060d878787856101c00151611c8a565b156106a35760038301546106419086907501000000000000000000000000000000000000000000900461ffff1660016115cd565b836040015173ffffffffffffffffffffffffffffffffffffffff16846000015173ffffffffffffffffffffffffffffffffffffffff167e058a56ea94653cdf4f152d227ace22d4c00ad99e2a43f58cb7d9e3feb295f260405160405180910390a35b836060015161ffff16846040015173ffffffffffffffffffffffffffffffffffffffff16856000015173ffffffffffffffffffffffffffffffffffffffff167f2b627736bca15cd5381dcf80b0bf11fd197d01a037c52b927a881a10fb73ba6133886020015160405161073892919073ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b60405180910390a450505050505050565b805173ffffffffffffffffffffffffffffffffffffffff16600090815260208690526040902061077881611d10565b600381015460408301516020840151750100000000000000000000000000000000000000000090920461ffff169173ffffffffffffffffffffffffffffffffffffffff9182169116148015906107d15750606083015115155b15610a145760208084015173ffffffffffffffffffffffffffffffffffffffff166000908152858252604090819020815192830190915280548252906108179083611542565b1561094f5760408051602081019091528154908190527f555555555555555555555555555555555555555555555555555555555555555516156108d0576108d0888888886000896020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806020016040529081600082015481525050886000015189602001518a60c001518b60e001518c6101000151611664565b83606001518460800151141561094f576108ec818360006115cd565b836020015173ffffffffffffffffffffffffffffffffffffffff16846000015173ffffffffffffffffffffffffffffffffffffffff167f44c58d81365b66dd4b1a7f36c25aa97b8c71c361ee4937adc1a00000227db5dd60405160405180910390a35b60a0840151610a125760408085015173ffffffffffffffffffffffffffffffffffffffff16600090815260208781529082902082519182019092528454815261099d908a908a908490611c8a565b15610a10576109ae818460016115cd565b846040015173ffffffffffffffffffffffffffffffffffffffff16856000015173ffffffffffffffffffffffffffffffffffffffff167e058a56ea94653cdf4f152d227ace22d4c00ad99e2a43f58cb7d9e3feb295f260405160405180910390a35b505b505b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff8516600090815260208a90526040812090610a4c82610ce9565b6101e08101516040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015291925060009173ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa158015610ac3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae79190613751565b9050610af38282611d98565b600383015460408051602081019091528a548152610b2d917501000000000000000000000000000000000000000000900461ffff16611542565b15158715151415610b4057505050610a10565b8615610c4557610b578c8c8b856101c00151611c8a565b6040518060400160405280600281526020017f363200000000000000000000000000000000000000000000000000000000000081525090610bce576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc59190613787565b60405180910390fd5b506003830154610bfe908a907501000000000000000000000000000000000000000000900461ffff1660016115cd565b604051339073ffffffffffffffffffffffffffffffffffffffff8a16907e058a56ea94653cdf4f152d227ace22d4c00ad99e2a43f58cb7d9e3feb295f290600090a3610cdb565b6003830154610c74908a907501000000000000000000000000000000000000000000900461ffff1660006115cd565b604080516020810190915289548152610c97908d908d908d908c338c8c8c611664565b604051339073ffffffffffffffffffffffffffffffffffffffff8a16907f44c58d81365b66dd4b1a7f36c25aa97b8c71c361ee4937adc1a00000227db5dd90600090a35b505050505050505050505050565b610cf1613271565b610cf9613271565b60408051602081018252845481526101c0830181905251901c61ffff166101a082015260018301546fffffffffffffffffffffffffffffffff808216610100840181905260e0840152600285015480821661014085018190526101208501527001000000000000000000000000000000009283900482166101608501528290041661018083015260048085015473ffffffffffffffffffffffffffffffffffffffff9081166101e085015260058601548116610200850152600686015416610220840181905260038601549290920464ffffffffff16610240840152604080517fb1bf962d000000000000000000000000000000000000000000000000000000008152905163b1bf962d928281019260209291908290030181865afa158015610e26573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4a9190613751565b816020018181525081600001818152505080610200015173ffffffffffffffffffffffffffffffffffffffff1663797743386040518163ffffffff1660e01b8152600401608060405180830381865afa158015610eab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ecf91906137fa565b64ffffffffff166102608501526060840181905260808401829052604084019290925260c083015260a082015292915050565b60038201544264ffffffffff908116700100000000000000000000000000000000909204161415610f31575050565b610f3b8282611f3d565b610f45828261205f565b5060030180547fffffffffffffffffffffff0000000000ffffffffffffffffffffffffffffffff167001000000000000000000000000000000004264ffffffffff1602179055565b600081157ffffffffffffffffffffffffffffffffffffffffffe6268e1b017bfe18bffffff83900484111517610fc257600080fd5b506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b60408051808201909152600281527f3236000000000000000000000000000000000000000000000000000000000000602082015282611050576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc59190613787565b5060408051808201909152600281527f33320000000000000000000000000000000000000000000000000000000000006020820152818311156110c0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc59190613787565b50600080611115856101c0015151670100000000000000811615159167020000000000000082161515916704000000000000008116151591670800000000000000821615159167100000000000000016151590565b94505050509150816040518060400160405280600281526020017f32370000000000000000000000000000000000000000000000000000000000008152509061118b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc59190613787565b5060408051808201909152600281527f3239000000000000000000000000000000000000000000000000000000000000602082015281156111f9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc59190613787565b505050505050565b61122c6040518060800160405280600081526020016000815260200160008152602001600081525090565b610140850151602086015161124091610f8d565b60608083019182526007880154604080516101208101825260088b01546fffffffffffffffffffffffffffffffff7001000000000000000000000000000000009091041681526020810188905280820187905260c0808b0151948201949094529351608085015260a0808a0151908501526101a08901519284019290925273ffffffffffffffffffffffffffffffffffffffff87811660e08501526101e0890151811661010085015291517fa589870900000000000000000000000000000000000000000000000000000000815291169163a5898709916113a19190600401600061012082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015173ffffffffffffffffffffffffffffffffffffffff80821660e0850152610100915080828601511682850152505092915050565b606060405180830381865afa1580156113be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113e29190613845565b604084015260208301528082526113f8906121e4565b6001870180546fffffffffffffffffffffffffffffffff928316700100000000000000000000000000000000029216919091179055602081015161143b906121e4565b6003870180547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff92909216919091179055604081015161148c906121e4565b6002870180546fffffffffffffffffffffffffffffffff92831670010000000000000000000000000000000002921691909117905580516020808301516040808501516101008a01516101408b0151835196875294860193909352908401526060830152608082015273ffffffffffffffffffffffffffffffffffffffff8516907f804c9b842b2748a22bb64b345453a3de7ca54a6ca45ce00d415894979e22897a9060a00160405180910390a2505050505050565b60408051808201909152600281527f37340000000000000000000000000000000000000000000000000000000000006020820152600090608083106115b4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc59190613787565b50508151600182811b81019190911c1615155b92915050565b60408051808201909152600281527f373400000000000000000000000000000000000000000000000000000000000060208201526080831061163c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc59190613787565b50600182811b81011b81156116565783548117845561165e565b835481191684555b50505050565b73ffffffffffffffffffffffffffffffffffffffff858116600090815260208b8152604080832081516102008101835281546101e08201908152815260018201546fffffffffffffffffffffffffffffffff80821695830195909552700100000000000000000000000000000000908190048516938201939093526002820154808516606083015283900484166080820152600382015480851660a083015283810464ffffffffff1660c08301527501000000000000000000000000000000000000000000900461ffff1660e0820152600482015486166101008201526005820154861661012082015260068201548616610140820152600782015490951661016086015260088101548084166101808701529190910482166101a085015260090154166101c083015261179e8b8b8b8b8a888b8b61228a565b9150508015806117b2575081515161ffff16155b6040518060400160405280600281526020017f353700000000000000000000000000000000000000000000000000000000000081525090610cdb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc59190613787565b60408051808201909152600281527f323600000000000000000000000000000000000000000000000000000000000060208201528161188c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc59190613787565b5060008060006118e3866101c0015151670100000000000000811615159167020000000000000082161515916704000000000000008116151591670800000000000000821615159167100000000000000016151590565b9450505092509250826040518060400160405280600281526020017f32370000000000000000000000000000000000000000000000000000000000008152509061195a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc59190613787565b5060408051808201909152600281527f3239000000000000000000000000000000000000000000000000000000000000602082015281156119c8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc59190613787565b5060408051808201909152600281527f323800000000000000000000000000000000000000000000000000000000000060208201528215611a36576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc59190613787565b506101c08601515160741c640fffffffff16801580611b3a57506101c08701515160301c60ff16611a6890600a6139c2565b611a7290826139ce565b85611b2d8961010001518960080160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff168b6101e0015173ffffffffffffffffffffffffffffffffffffffff1663b1bf962d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611aff573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b239190613751565b6101d09190613a0b565b611b379190613a0b565b11155b6040518060400160405280600281526020017f353100000000000000000000000000000000000000000000000000000000000081525090610a12576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc59190613787565b6040517f23b872dd0000000000000000000000000000000000000000000000000000000080825273ffffffffffffffffffffffffffffffffffffffff8581166004840152841660248301526044820183905290600080606483828a5af1611c13573d6000803e3d6000fd5b50611c1d85612385565b611c83576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f475076323a206661696c6564207472616e7366657246726f6d000000000000006044820152606401610bc5565b5050505050565b60408051602081019091528254908190526000907faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa16611ccc57506001611d08565b604080516020810190915283548152600090611ce9908787612451565b5050905080158015611d045750825160d41c64ffffffffff16155b9150505b949350505050565b60408051602080820183528354918290528251808401909352600283527f3239000000000000000000000000000000000000000000000000000000000000908301526710000000000000001615611d94576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc59190613787565b5050565b60408051808201909152600281527f3433000000000000000000000000000000000000000000000000000000000000602082015281611e04576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc59190613787565b50600080611e59846101c0015151670100000000000000811615159167020000000000000082161515916704000000000000008116151591670800000000000000821615159167100000000000000016151590565b94505050509150816040518060400160405280600281526020017f323700000000000000000000000000000000000000000000000000000000000081525090611ecf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc59190613787565b5060408051808201909152600281527f323900000000000000000000000000000000000000000000000000000000000060208201528115611c83576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc59190613787565b61016081015115611fcd576000611f5e826101600151836102400151612509565b9050611f778260e0015182610f8d90919063ffffffff16565b6101008301819052611f88906121e4565b6001840180547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff92909216919091179055505b805115611d94576000611fea826101800151836102400151612546565b905061200482610120015182610f8d90919063ffffffff16565b6101408301819052612015906121e4565b6002840180546fffffffffffffffffffffffffffffffff929092167fffffffffffffffffffffffffffffffff00000000000000000000000000000000909216919091179055505050565b6120986040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6101a08201516120a757505050565b61012082015182516120b891610f8d565b602082015261014082015182516120ce91610f8d565b604082015260608201516102608301516102408401516120f692919064ffffffffff1661255a565b60608201819052604083015161210b91610f8d565b8082526020820151608084015160408401516121279190613a0b565b6121319190613a23565b61213b9190613a23565b608082018190526101a083015161215291906126a1565b60a08201819052156121df5761218261217d8361010001518360a001516126e490919063ffffffff16565b6121e4565b6008840180546000906121a89084906fffffffffffffffffffffffffffffffff16613a3a565b92506101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055505b505050565b60006fffffffffffffffffffffffffffffffff821115612286576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203160448201527f32382062697473000000000000000000000000000000000000000000000000006064820152608401610bc5565b5090565b6000806000806122f18c8c8c6040518060a001604052808e81526020018b81526020018d73ffffffffffffffffffffffffffffffffffffffff1681526020018a73ffffffffffffffffffffffffffffffffffffffff1681526020018c60ff16815250612723565b9550955050505050670de0b6b3a76400008210156040518060400160405280600281526020017f333500000000000000000000000000000000000000000000000000000000000081525090612373576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc59190613787565b50909b909a5098505050505050505050565b60006123c5565b7f08c379a00000000000000000000000000000000000000000000000000000000060005260206004528060245250806044525060646000fd5b3d8015612404576020811461243e576123ff7f475076323a206d616c666f726d6564207472616e7366657220726573756c7400601f61238c565b61244b565b823b612435576124357f475076323a206e6f74206120636f6e7472616374000000000000000000000000601461238c565b6001915061244b565b3d6000803e600051151591505b50919050565b600080600061245f86612c8d565b156124f6576000612490877faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa612cd1565b6000818152602087815260408083205473ffffffffffffffffffffffffffffffffffffffff168084528a8352818420825193840190925290549182905292935060d41c64ffffffffff16905080156124f2576001955090935091506125009050565b5050505b5060009150819050805b93509350939050565b60008061251d64ffffffffff841642613a23565b61252790856139ce565b6301e1338090049050611d08816b033b2e3c9fd0803ce8000000613a0b565b600061255383834261255a565b9392505050565b60008061256e64ffffffffff851684613a23565b90508061258a576b033b2e3c9fd0803ce8000000915050612553565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810160008080600285116125c05760006125c5565b600285035b925066038882915c40006125d98a80610f8d565b816125e6576125e6613a6e565b0491506301e133806125f8838b610f8d565b8161260557612605613a6e565b04905060008261261586886139ce565b61261f91906139ce565b60029004905060008285612633888a6139ce565b61263d91906139ce565b61264791906139ce565b60069004905080826301e1338061265e8a8f6139ce565b6126689190613a9d565b61267e906b033b2e3c9fd0803ce8000000613a0b565b6126889190613a0b565b6126929190613a0b565b9b9a5050505050505050505050565b600081157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec77839004841115176126d657600080fd5b506127109102611388010490565b600081156b033b2e3c9fd0803ce80000006002840419048411171561270857600080fd5b506b033b2e3c9fd0803ce80000009190910260028204010490565b6000806000806000806127398760000151511590565b156127755750600094508493508392508291507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905081612c80565b61282460405180610260016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000151581526020016000151581525090565b608088015160ff161561286957608088015160ff16600090815260208a90526040902060608901516128569190612d1e565b6101808401526101c08301526101a08201525b87602001518160c001511015612b885760c0810151885161288991612dfd565b61289d5760c0810180516001019052612869565b60c0810151600090815260208b9052604090205473ffffffffffffffffffffffffffffffffffffffff1661020082018190526128e35760c0810180516001019052612869565b61020081015173ffffffffffffffffffffffffffffffffffffffff16600090815260208c8152604091829020825180830190935280549283905260ff60a884901c81166101e0860152603084901c166060850181905261ffff601085901c811660a08701529093166080850152600a9290920a90830152610180820151158015906129795750816101e00151896080015160ff16145b612a1d5760608901516102008301516040517fb3596f0700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216600482015291169063b3596f0790602401602060405180830381865afa1580156129f4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a189190613751565b612a24565b8161018001515b825260a082015115801590612a44575060c08201518951612a4491611542565b15612b3457612a6189604001518284600001518560200151612e82565b6040830181905261010083018051612a7a908390613a0b565b90525060808901516101e0830151612a959160ff1690612f1f565b1515610240830152608082015115612aeb57816102400151612abb578160800151612ac2565b816101a001515b8260400151612ad191906139ce565b8261014001818151612ae39190613a0b565b905250612af4565b60016102208301525b816102400151612b08578160a00151612b0f565b816101c001515b8260400151612b1e91906139ce565b8261016001818151612b309190613a0b565b9052505b60c08201518951612b4491612f30565b15612b7757612b6189604001518284600001518560200151612fb2565b8261012001818151612b739190613a0b565b9052505b5060c0810180516001019052612869565b610100810151612b99576000612bb4565b80610100015181610140015181612bb257612bb2613a6e565b045b610140820152610100810151612bcb576000612be6565b80610100015181610160015181612be457612be4613a6e565b045b61016082015261012081015115612c2857612c23816101200151612c1d8361016001518461010001516126a190919063ffffffff16565b90613132565b612c4a565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b60e0820181905261010082015161012083015161014084015161016085015161022090950151929a509098509650919450925090505b9499939850945094509450565b80516000907faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1680158015906125535750612cc9600182613a23565b161592915050565b815160009082167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8101198116825b60029190911c908115612d1557600101612d00565b95945050505050565b81546000908190819081906601000000000000900473ffffffffffffffffffffffffffffffffffffffff168015612de2576040517fb3596f0700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff828116600483015287169063b3596f0790602401602060405180830381865afa158015612dbb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ddf9190613751565b91505b50945461ffff80821697620100009092041695945092505050565b60408051808201909152600281527f3734000000000000000000000000000000000000000000000000000000000000602082015260009060808310612e6f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc59190613787565b5050905160019190911b1c600316151590565b600080612e8e85613169565b6004868101546040517f1da24f3e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a8116938201939093529293506000928792612ef8928692911690631da24f3e9060240161018f565b612f0291906139ce565b9050838181612f1357612f13613a6e565b04979650505050505050565b600082158015906125535750501490565b60408051808201909152600281527f3734000000000000000000000000000000000000000000000000000000000000602082015260009060808310612fa2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc59190613787565b50509051600191821b1c16151590565b60068301546040517f1da24f3e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86811660048301526000928392911690631da24f3e90602401602060405180830381865afa158015613028573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061304c9190613751565b9050801561306a57613067613060866131ed565b8290610f8d565b90505b60058501546040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8881166004830152909116906370a0823190602401602060405180830381865afa1580156130dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906131009190613751565b61310a9082613a0b565b905061311681856139ce565b905082818161312757613127613a6e565b049695505050505050565b60008115670de0b6b3a76400006002840419048411171561315257600080fd5b50670de0b6b3a76400009190910260028204010490565b6003810154600090700100000000000000000000000000000000900464ffffffffff16428114156131af575050600101546fffffffffffffffffffffffffffffffff1690565b6001830154612553906fffffffffffffffffffffffffffffffff808216916101d0917001000000000000000000000000000000009091041684612509565b6003810154600090700100000000000000000000000000000000900464ffffffffff1642811415613233575050600201546fffffffffffffffffffffffffffffffff1690565b6002830154612553906fffffffffffffffffffffffffffffffff808216916101d0917001000000000000000000000000000000009091041684612546565b60405180610280016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016132f56040518060200160405280600081525090565b815260006020820181905260408201819052606082018190526080820181905260a09091015290565b60405160c0810167ffffffffffffffff81118282101715613368577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405290565b6040516080810167ffffffffffffffff81118282101715613368577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610120810167ffffffffffffffff81118282101715613368577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b803573ffffffffffffffffffffffffffffffffffffffff8116811461342757600080fd5b919050565b803560ff8116811461342757600080fd5b600080600080600085870361014081121561345757600080fd5b8635955060208701359450604087013593506060870135925060c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80820112156134a057600080fd5b506134a961331e565b6134b560808801613403565b815260a087013560208201526134cd60c08801613403565b604082015260e087013560608201526134e96101008801613403565b60808201526134fb610120880161342c565b60a0820152809150509295509295909350565b60008060008084860360e081121561352557600080fd5b85359450602086013593506040860135925060807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa08201121561356757600080fd5b5061357061336e565b61357c60608701613403565b81526080860135602082015261359460a08701613403565b604082015260c086013561ffff811681146135ae57600080fd5b6060820152939692955090935050565b60008060008060008587036101a08112156135d857600080fd5b86359550602087013594506040870135935060608701359250610120807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808301121561362357600080fd5b61362b6133b8565b915061363960808901613403565b825261364760a08901613403565b602083015261365860c08901613403565b604083015260e088013560608301526101008089013560808401528189013560a084015261014089013560c08401526136946101608a01613403565b60e08401526136a66101808a0161342c565b9083015250949793965091945092919050565b80151581146136c757600080fd5b50565b60008060008060008060008060006101208a8c0312156136e957600080fd5b8935985060208a0135975060408a0135965060608a0135955061370e60808b01613403565b945060a08a013561371e816136b9565b935060c08a0135925061373360e08b01613403565b91506137426101008b0161342c565b90509295985092959850929598565b60006020828403121561376357600080fd5b5051919050565b60006020828403121561377c57600080fd5b8151612553816136b9565b600060208083528351808285015260005b818110156137b457858101830151858201604001528201613798565b818111156137c6576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b6000806000806080858703121561381057600080fd5b845193506020850151925060408501519150606085015164ffffffffff8116811461383a57600080fd5b939692955090935050565b60008060006060848603121561385a57600080fd5b8351925060208401519150604084015190509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600181815b808511156138fb57817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156138e1576138e1613873565b808516156138ee57918102915b93841c93908002906138a7565b509250929050565b600082613912575060016115c7565b8161391f575060006115c7565b8160018114613935576002811461393f5761395b565b60019150506115c7565b60ff84111561395057613950613873565b50506001821b6115c7565b5060208310610133831016604e8410600b841016171561397e575081810a6115c7565b61398883836138a2565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156139ba576139ba613873565b029392505050565b60006125538383613903565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615613a0657613a06613873565b500290565b60008219821115613a1e57613a1e613873565b500190565b600082821015613a3557613a35613873565b500390565b60006fffffffffffffffffffffffffffffffff808316818516808303821115613a6557613a65613873565b01949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600082613ad3577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b50049056fea2646970667358221220cb5d5432fb1f66a59c7811346160a999cd2d3a7db99d2a3395d64b0fe4bf1b4664736f6c634300080a0033";

type SupplyLogicConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SupplyLogicConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SupplyLogic__factory extends ContractFactory {
  constructor(...args: SupplyLogicConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SupplyLogic> {
    return super.deploy(overrides || {}) as Promise<SupplyLogic>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SupplyLogic {
    return super.attach(address) as SupplyLogic;
  }
  override connect(signer: Signer): SupplyLogic__factory {
    return super.connect(signer) as SupplyLogic__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SupplyLogicInterface {
    return new utils.Interface(_abi) as SupplyLogicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SupplyLogic {
    return new Contract(address, _abi, signerOrProvider) as SupplyLogic;
  }
}
