/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../../common";
import type {
  LiquidationLogic,
  LiquidationLogicInterface,
} from "../../../../../../../../contracts/lend/aave-core-v3/contracts/protocol/libraries/logic/LiquidationLogic";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "collateralAsset",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "debtAsset",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "debtToCover",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "liquidatedCollateralAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "receiveAToken",
        type: "bool",
      },
    ],
    name: "LiquidationCall",
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
    inputs: [],
    name: "CLOSE_FACTOR_HF_THRESHOLD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_LIQUIDATION_CLOSE_FACTOR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x61340061003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c806383c1087d14610050578063a18964a514610072578063d246754414610093575b600080fd5b81801561005c57600080fd5b5061007061006b366004612fbb565b61009c565b005b610081670de0b6b3a764000081565b60405190815260200160405180910390f35b61008161271081565b6100a4612e03565b6040808301516001600160a01b039081166000908152602089815283822060608701518416835284832060808801519094168352908890529290206100e8826106ff565b61016085018190526100fb9083906108e8565b6101678989886040518060a001604052808660405180602001604052908160008201548152505081526020018a6000015181526020018a608001516001600160a01b031681526020018a60c001516001600160a01b031681526020018a60e0015160ff16815250610959565b5060c08901819052610160890151610186955093508992509050610e3a565b8660200187604001886060018381525083815250838152505050506101e7818460405180608001604052808861016001518152602001886040015181526020018860c0015181526020018961010001516001600160a01b0316815250610ec0565b6101f28684876112a7565b60a08801526001600160a01b03908116610120880152908116610100870152908116610140860181905260808701516040516370a0823160e01b815292166004830152906370a0823190602401602060405180830381865afa15801561025c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061028091906130a6565b808552610160850151610100860151610120870151606088015160a089015160c08b01516102b5968a969594939290916113a7565b60e0870152606086018190526080860191909152604085015114156102f15760038201546102f1908290600160a81b900461ffff1660006116bb565b835160e0850151608086015161030791906130d5565b141561037357600383015461032a908290600160a81b900461ffff16600061171b565b84608001516001600160a01b031685604001516001600160a01b03167f44c58d81365b66dd4b1a7f36c25aa97b8c71c361ee4937adc1a00000227db5dd60405160405180910390a35b61037d858561176f565b6101608401516060808701519086015161039c9285929091600061199a565b6103b28989838761016001518860600151611c5a565b8460a00151156103cf576103ca898989868989611df9565b6103da565b6103da838686611f98565b60e0840151156105975760006103ef84612063565b9050600061040a828760e001516120ce90919063ffffffff16565b6101408701516080890151604051630ed1279f60e11b81526001600160a01b039182166004820152929350600092911690631da24f3e90602401602060405180830381865afa158015610461573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061048591906130a6565b90508082111561049f57610499818461210d565b60e08801525b8661014001516001600160a01b031663f866c31989608001518961014001516001600160a01b031663ae1673356040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051f91906130ed565b8a60e001516040518463ffffffff1660e01b8152600401610561939291906001600160a01b039384168152919092166020820152604081019190915260600190565b600060405180830381600087803b15801561057b57600080fd5b505af115801561058f573d6000803e3d6000fd5b505050505050505b6105c9338561016001516101e00151866060015188606001516001600160a01b0316612151909392919063ffffffff16565b6101608401516101e00151608086015160608601516040517f6fd976760000000000000000000000000000000000000000000000000000000081523360048201526001600160a01b0392831660248201526044810191909152911690636fd9767690606401600060405180830381600087803b15801561064857600080fd5b505af115801561065c573d6000803e3d6000fd5b5050505084608001516001600160a01b031685606001516001600160a01b031686604001516001600160a01b03167fe413a321e8681d831f4dbccbca790d2952b56f977908e45be37335533e00528687606001518860800151338b60a001516040516106ec949392919093845260208401929092526001600160a01b031660408301521515606082015260800190565b60405180910390a4505050505050505050565b610707612e84565b61070f612e84565b60408051602081018252845481526101c0830181905251901c61ffff166101a082015260018301546001600160801b03808216610100840181905260e084015260028501548082166101408501819052610120850152600160801b928390048216610160850152829004166101808301526004808501546001600160a01b039081166101e085015260058601548116610200850152600686015416610220840181905260038601549290920464ffffffffff16610240840152604080517fb1bf962d000000000000000000000000000000000000000000000000000000008152905163b1bf962d928281019260209291908290030181865afa158015610819573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083d91906130a6565b81602001818152508160000181815250508061020001516001600160a01b031663797743386040518163ffffffff1660e01b8152600401608060405180830381865afa158015610891573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b5919061310a565b64ffffffffff166102608501526060840181905260808401829052604084019290925260c083015260a082015292915050565b60038201544264ffffffffff908116600160801b90920416141561090a575050565b6109148282612205565b61091e82826122f7565b5060030180547fffffffffffffffffffffff0000000000ffffffffffffffffffffffffffffffff16600160801b4264ffffffffff1602179055565b60008060008060008061096f8760000151511590565b1561098d575060009450849350839250829150600019905081610e2d565b610a2f6040518061026001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016000151581526020016000151581525090565b608088015160ff1615610a7457608088015160ff16600090815260208a9052604090206060890151610a61919061245c565b6101808401526101c08301526101a08201525b87602001518160c001511015610d535760c08101518851610a9491612508565b610aa85760c0810180516001019052610a74565b60c0810151600090815260208b905260409020546001600160a01b03166102008201819052610ae15760c0810180516001019052610a74565b6102008101516001600160a01b0316600090815260208c8152604091829020825180830190935280549283905260ff60a884901c81166101e0860152603084901c166060850181905261ffff601085901c811660a08701529093166080850152600a9290920a9083015261018082015115801590610b6a5750816101e00151896080015160ff16145b610be857606089015161020083015160405163b3596f0760e01b81526001600160a01b03918216600482015291169063b3596f0790602401602060405180830381865afa158015610bbf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be391906130a6565b610bef565b8161018001515b825260a082015115801590610c0f575060c08201518951610c0f9161255b565b15610cff57610c2c896040015182846000015185602001516125aa565b6040830181905261010083018051610c459083906130d5565b90525060808901516101e0830151610c609160ff169061265f565b1515610240830152608082015115610cb657816102400151610c86578160800151610c8d565b816101a001515b8260400151610c9c9190613155565b8261014001818151610cae91906130d5565b905250610cbf565b60016102208301525b816102400151610cd3578160a00151610cda565b816101c001515b8260400151610ce99190613155565b8261016001818151610cfb91906130d5565b9052505b60c08201518951610d0f91612670565b15610d4257610d2c896040015182846000015185602001516126bd565b8261012001818151610d3e91906130d5565b9052505b5060c0810180516001019052610a74565b610100810151610d64576000610d7f565b80610100015181610140015181610d7d57610d7d613174565b045b610140820152610100810151610d96576000610db1565b80610100015181610160015181610daf57610daf613174565b045b61016082015261012081015115610df357610dee816101200151610de88361016001518461010001516127f190919063ffffffff16565b90612817565b610df7565b6000195b60e0820181905261010082015161012083015161014084015161016085015161022090950151929a509098509650919450925090505b9499939850945094509450565b6000806000806000610e5087608001518961284e565b90925090506000610e6182846130d5565b90506000670de0b6b3a76400008811610e7c57612710610e80565b6113885b90506000610e8e83836127f1565b90506000818b6020015111610ea7578a60200151610ea9565b815b949850929650929450505050505b93509350939050565b6040805160a081018252600080825260208201819052918101829052606081018290526080810191909152604080516020810190915283548152610f469051670100000000000000811615159167020000000000000082161515916704000000000000008116151591670800000000000000821615159167100000000000000016151590565b1515602086015250505015801580835283516101c0015151671000000000000000811615156060850152670100000000000000161515604084015290610f8d575080604001515b6040518060400160405280600281526020017f323700000000000000000000000000000000000000000000000000000000000081525090610fea5760405162461bcd60e51b8152600401610fe1919061318a565b60405180910390fd5b508060200151158015610fff57508060600151155b6040518060400160405280600281526020017f3239000000000000000000000000000000000000000000000000000000000000815250906110535760405162461bcd60e51b8152600401610fe1919061318a565b5060608201516001600160a01b031615806110795750670d2f13f7789f00008260400151105b806110e5575081606001516001600160a01b0316637a5d20ea6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156110c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110e591906131df565b6040518060400160405280600281526020017f3539000000000000000000000000000000000000000000000000000000000000815250906111395760405162461bcd60e51b8152600401610fe1919061318a565b50670de0b6b3a76400008260400151106040518060400160405280600281526020017f34350000000000000000000000000000000000000000000000000000000000008152509061119d5760405162461bcd60e51b8152600401610fe1919061318a565b50604080516020810190915283549081905260101c61ffff16158015906111e7575060038301546040805160208101909152855481526111e791600160a81b900461ffff1661255b565b15156080820181905260408051808201909152600281527f34360000000000000000000000000000000000000000000000000000000000006020820152906112425760405162461bcd60e51b8152600401610fe1919061318a565b508160200151600014156040518060400160405280600281526020017f3437000000000000000000000000000000000000000000000000000000000000815250906112a05760405162461bcd60e51b8152600401610fe1919061318a565b5050505050565b6004820154604080516020808201835285549182905291840151606085015160e08601516000958695869586956001600160a01b0390931694911c61ffff169260ff16156113965760e08901805160ff908116600090815260208e815260409182902054935182519182019092528d549081905266010000000000009093046001600160a01b031692611344929182169160a89190911c1661265f565b156113815760e08a015160ff16600090815260208d90526040902054640100000000900461ffff1693506001600160a01b03811615611381578092505b6001600160a01b03811615611394578091505b505b929a90995091975095509350505050565b6000806000611417604051806101a00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405163b3596f0760e01b81526001600160a01b038b8116600483015286169063b3596f0790602401602060405180830381865afa15801561145d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061148191906130a6565b815260405163b3596f0760e01b81526001600160a01b038a8116600483015286169063b3596f0790602401602060405180830381865afa1580156114c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114ed91906130a6565b6020828101919091526040805191820190528c549081905260301c60ff1660c08201526101c08b01515160301c60ff1660a0820181905260c0820151600a90810a60e08401520a61010082015260408051602081019091528c549081905260981c61ffff16610160820152610100810151815161156a9190613155565b8160e0015189836020015161157f9190613155565b6115899190613155565b61159391906131fc565b606082018190526115a490876127f1565b6040820181905287101561161157610120810187905260e081015160208201516116069188916115d49190613155565b61010084015161012085015185516115ec9190613155565b6115f69190613155565b61160091906131fc565b9061293f565b610140820152611625565b604081015161012082015261014081018890525b6101608101511561169757610120810151611640908761293f565b816101200151611650919061321e565b6080820181905261016082015161166791906127f1565b610180820181905261012082015161167f919061321e565b816101400151826101800151935093509350506116ad565b8061012001518161014001516000935093509350505b985098509895505050505050565b6040805180820190915260028152610dcd60f21b6020820152608083106116f55760405162461bcd60e51b8152600401610fe1919061318a565b50600182811b1b811561170d57835481178455611715565b835481191684555b50505050565b6040805180820190915260028152610dcd60f21b6020820152608083106117555760405162461bcd60e51b8152600401610fe1919061318a565b50600182811b81011b811561170d57835481178455611715565b8060600151816020015110611821576101608101516102208101516080840151606084015161014090930151604051637a94c56560e11b81526001600160a01b03928316600482015260248101949094526044840152169063f5298aca906064016020604051808303816000875af11580156117ef573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061181391906130a6565b610160820151602001525050565b6020810151156118cb576101608101516102208101516080840151602084015161014090930151604051637a94c56560e11b81526001600160a01b03928316600482015260248101949094526044840152169063f5298aca906064016020604051808303816000875af115801561189c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118c091906130a6565b610160820151602001525b80610160015161020001516001600160a01b0316639dc29fac8360800151836020015184606001516118fd919061321e565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b1681526001600160a01b039092166004830152602482015260440160408051808303816000875af115801561195f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119839190613235565b61016083015160a081019190915260c001525b5050565b6119c56040518060800160405280600081526020016000815260200160008152602001600081525090565b61014085015160208601516119d99161210d565b60608083019182526007880154604080516101208101825260088b01546001600160801b03600160801b9091041681526020810188905280820187905260c0808b0151948201949094529351608085015260a0808a0151908501526101a0890151928401929092526001600160a01b0387811660e08501526101e0890151811661010085015291517fa589870900000000000000000000000000000000000000000000000000000000815291169163a589870991611b0a9190600401600061012082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e08301516001600160a01b0380821660e0850152610100915080828601511682850152505092915050565b606060405180830381865afa158015611b27573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b4b9190613259565b60408401526020830152808252611b619061296a565b6001870180546001600160801b03928316600160801b0292169190911790556020810151611b8e9061296a565b6003870180546fffffffffffffffffffffffffffffffff19166001600160801b03929092169190911790556040810151611bc79061296a565b6002870180546001600160801b03928316600160801b02921691909117905580516020808301516040808501516101008a01516101408b015183519687529486019390935290840152606083015260808201526001600160a01b038516907f804c9b842b2748a22bb64b345453a3de7ca54a6ca45ce00d415894979e22897a9060a00160405180910390a2505050505050565b6040805160208101909152835481526000908190611c799088886129ed565b50915091508115611df0576001600160a01b0381166000908152602088905260408120600901546101c0860151516001600160801b039091169190611ce59060029060301c60ff16611ccb919061321e565b611cd690600a61336b565b611ce090876131fc565b61296a565b9050806001600160801b0316826001600160801b031611611d67576001600160a01b038316600081815260208b8152604080832060090180546fffffffffffffffffffffffffffffffff19169055519182527faef84d3b40895fd58c561f3998000f0583abb992a52fbdc99ace8e8de4d676a5910160405180910390a2611ded565b6000611d738284613377565b6001600160a01b038516600081815260208d815260409182902060090180546fffffffffffffffffffffffffffffffff19166001600160801b03959095169485179055905183815292935090917faef84d3b40895fd58c561f3998000f0583abb992a52fbdc99ace8e8de4d676a5910160405180910390a2505b50505b50505050505050565b6101408101516040516370a0823160e01b81523360048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015611e45573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e6991906130a6565b610140830151608080860151908501516040517ff866c3190000000000000000000000000000000000000000000000000000000081526001600160a01b0392831660048201523360248201526044810191909152929350169063f866c31990606401600060405180830381600087803b158015611ee557600080fd5b505af1158015611ef9573d6000803e3d6000fd5b505050508060001415611df0573360009081526020868152604091829020825191820190925285548152611f3290899089908490612a95565b15611f8e576003850154611f54908290600160a81b900461ffff16600161171b565b604080850151905133916001600160a01b0316907e058a56ea94653cdf4f152d227ace22d4c00ad99e2a43f58cb7d9e3feb295f290600090a35b5050505050505050565b6000611fa3846106ff565b9050611faf84826108e8565b60408301516080830151611fca91869184919060009061199a565b610140820151608080850151908401516101008401516040517fd7020d0a0000000000000000000000000000000000000000000000000000000081526001600160a01b0393841660048201523360248201526044810192909252606482015291169063d7020d0a90608401600060405180830381600087803b15801561204f57600080fd5b505af1158015611f8e573d6000803e3d6000fd5b6003810154600090600160801b900464ffffffffff1642811415612093575050600101546001600160801b031690565b60018301546120c1906001600160801b03808216916120bb91600160801b9091041684612b19565b9061210d565b9392505050565b50919050565b600081156b033b2e3c9fd0803ce8000000600284041904841117156120f257600080fd5b506b033b2e3c9fd0803ce80000009190910260028204010490565b600081156b019d971e4fe8401e74000000198390048411151761212f57600080fd5b506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b6040517f23b872dd000000000000000000000000000000000000000000000000000000008082526001600160a01b038581166004840152841660248301526044820183905290600080606483828a5af16121af573d6000803e3d6000fd5b506121b985612b56565b6112a05760405162461bcd60e51b815260206004820152601960248201527f475076323a206661696c6564207472616e7366657246726f6d000000000000006044820152606401610fe1565b6101608101511561227d576000612226826101600151836102400151612b19565b905061223f8260e001518261210d90919063ffffffff16565b61010083018190526122509061296a565b6001840180546fffffffffffffffffffffffffffffffff19166001600160801b0392909216919091179055505b80511561199657600061229a826101800151836102400151612c06565b90506122b48261012001518261210d90919063ffffffff16565b61014083018190526122c59061296a565b6002840180546001600160801b03929092166fffffffffffffffffffffffffffffffff19909216919091179055505050565b6123306040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6101a082015161233f57505050565b61012082015182516123509161210d565b602082015261014082015182516123669161210d565b6040820152606082015161026083015161024084015161238e92919064ffffffffff16612c0f565b6060820181905260408301516123a39161210d565b8082526020820151608084015160408401516123bf91906130d5565b6123c9919061321e565b6123d3919061321e565b608082018190526101a08301516123ea91906127f1565b60a082018190521561245757612415611ce08361010001518360a001516120ce90919063ffffffff16565b6008840180546000906124329084906001600160801b031661339f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505b505050565b8154600090819081908190660100000000000090046001600160a01b031680156124ed5760405163b3596f0760e01b81526001600160a01b03828116600483015287169063b3596f0790602401602060405180830381865afa1580156124c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124ea91906130a6565b91505b50945461ffff80821697620100009092041695945092505050565b6040805180820190915260028152610dcd60f21b6020820152600090608083106125455760405162461bcd60e51b8152600401610fe1919061318a565b50508151600182901b1c60031615155b92915050565b6040805180820190915260028152610dcd60f21b6020820152600090608083106125985760405162461bcd60e51b8152600401610fe1919061318a565b50509051600191821b82011c16151590565b6000806125b685612063565b600486810154604051630ed1279f60e11b81526001600160a01b038a8116938201939093529293506000928792612636928692911690631da24f3e90602401602060405180830381865afa158015612612573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120bb91906130a6565b6126409190613155565b905083818161265157612651613174565b04925050505b949350505050565b600082158015906120c15750501490565b6040805180820190915260028152610dcd60f21b6020820152600090608083106126ad5760405162461bcd60e51b8152600401610fe1919061318a565b50509051600191821b1c16151590565b6006830154604051630ed1279f60e11b81526001600160a01b0386811660048301526000928392911690631da24f3e90602401602060405180830381865afa15801561270d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061273191906130a6565b9050801561274f5761274c61274586612d38565b829061210d565b90505b60058501546040516370a0823160e01b81526001600160a01b038881166004830152909116906370a0823190602401602060405180830381865afa15801561279b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127bf91906130a6565b6127c990826130d5565b90506127d58185613155565b90508281816127e6576127e6613174565b049695505050505050565b60008115611388198390048411151761280957600080fd5b506127109102611388010490565b60008115670de0b6b3a76400006002840419048411171561283757600080fd5b50670de0b6b3a76400009190910260028204010490565b6102008101516040516370a0823160e01b81526001600160a01b03848116600483015260009283929116906370a0823190602401602060405180830381865afa15801561289f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128c391906130a6565b6102208401516040516370a0823160e01b81526001600160a01b038781166004830152909116906370a0823190602401602060405180830381865afa158015612910573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061293491906130a6565b915091509250929050565b600081156127106002840419048411171561295957600080fd5b506127109190910260028204010490565b60006001600160801b038211156129e95760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203160448201527f32382062697473000000000000000000000000000000000000000000000000006064820152608401610fe1565b5090565b60008060006129fb86612d90565b15612a85576000612a2c877faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa612dd4565b600081815260208781526040808320546001600160a01b03168084528a8352818420825193840190925290549182905292935060d41c64ffffffffff1690508015612a8157600195509093509150610eb79050565b5050505b5060009586955085945092505050565b60408051602081019091528254908190526000907faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa16612ad757506001612657565b604080516020810190915283548152600090612af49087876129ed565b5050905080158015612b0f5750825160d41c64ffffffffff16155b9695505050505050565b600080612b2d64ffffffffff84164261321e565b612b379085613155565b6301e1338090049050612657816b033b2e3c9fd0803ce80000006130d5565b6000612b7c565b62461bcd60e51b60005260206004528060245250806044525060646000fd5b3d8015612bbb5760208114612bf557612bb67f475076323a206d616c666f726d6564207472616e7366657220726573756c7400601f612b5d565b6120c8565b823b612bec57612bec7f475076323a206e6f74206120636f6e74726163740000000000000000000000006014612b5d565b600191506120c8565b3d6000803e50506000511515919050565b60006120c18383425b600080612c2364ffffffffff85168461321e565b905080612c3f576b033b2e3c9fd0803ce80000009150506120c1565b60001981016000808060028511612c57576000612c5c565b600285035b925066038882915c4000612c708a8061210d565b81612c7d57612c7d613174565b0491506301e13380612c8f838b61210d565b81612c9c57612c9c613174565b049050600082612cac8688613155565b612cb69190613155565b60029004905060008285612cca888a613155565b612cd49190613155565b612cde9190613155565b60069004905080826301e13380612cf58a8f613155565b612cff91906131fc565b612d15906b033b2e3c9fd0803ce80000006130d5565b612d1f91906130d5565b612d2991906130d5565b9b9a5050505050505050505050565b6003810154600090600160801b900464ffffffffff1642811415612d68575050600201546001600160801b031690565b60028301546120c1906001600160801b03808216916120bb91600160801b9091041684612c06565b80516000907faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1680158015906120c15750612dcc60018261321e565b161592915050565b815160009082166000198101198116825b60029190911c908115612dfa57600101612de5565b95945050505050565b604051806101800160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001612e7f612e84565b905290565b6040518061028001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001612f086040518060200160405280600081525090565b815260006020820181905260408201819052606082018190526080820181905260a09091015290565b604051610120810167ffffffffffffffff81118282101715612f6357634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114612f7e57600080fd5b50565b8035612f8c81612f69565b919050565b8015158114612f7e57600080fd5b8035612f8c81612f91565b803560ff81168114612f8c57600080fd5b60008060008060008587036101a0811215612fd557600080fd5b8635955060208701359450604087013593506060870135925061012080607f198301121561300257600080fd5b61300a612f31565b91506080880135825260a0880135602083015261302960c08901612f81565b604083015261303a60e08901612f81565b606083015261010061304d818a01612f81565b608084015261305d828a01612f9f565b60a084015261306f6101408a01612f81565b60c08401526130816101608a01612faa565b60e08401526130936101808a01612f81565b9083015250949793965091945092919050565b6000602082840312156130b857600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156130e8576130e86130bf565b500190565b6000602082840312156130ff57600080fd5b81516120c181612f69565b6000806000806080858703121561312057600080fd5b845193506020850151925060408501519150606085015164ffffffffff8116811461314a57600080fd5b939692955090935050565b600081600019048311821515161561316f5761316f6130bf565b500290565b634e487b7160e01b600052601260045260246000fd5b600060208083528351808285015260005b818110156131b75785810183015185820160400152820161319b565b818111156131c9576000604083870101525b50601f01601f1916929092016040019392505050565b6000602082840312156131f157600080fd5b81516120c181612f91565b60008261321957634e487b7160e01b600052601260045260246000fd5b500490565b600082821015613230576132306130bf565b500390565b6000806040838503121561324857600080fd5b505080516020909101519092909150565b60008060006060848603121561326e57600080fd5b8351925060208401519150604084015190509250925092565b600181815b808511156132c25781600019048211156132a8576132a86130bf565b808516156132b557918102915b93841c939080029061328c565b509250929050565b6000826132d957506001612555565b816132e657506000612555565b81600181146132fc576002811461330657613322565b6001915050612555565b60ff841115613317576133176130bf565b50506001821b612555565b5060208310610133831016604e8410600b8410161715613345575081810a612555565b61334f8383613287565b8060001904821115613363576133636130bf565b029392505050565b60006120c183836132ca565b60006001600160801b0383811690831681811015613397576133976130bf565b039392505050565b60006001600160801b038083168185168083038211156133c1576133c16130bf565b0194935050505056fea264697066735822122032f067359d0e607022abca1f54f58129efb30c52948c82ee4e4d1f0f5697ba0764736f6c634300080a0033";

type LiquidationLogicConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LiquidationLogicConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LiquidationLogic__factory extends ContractFactory {
  constructor(...args: LiquidationLogicConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LiquidationLogic> {
    return super.deploy(overrides || {}) as Promise<LiquidationLogic>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LiquidationLogic {
    return super.attach(address) as LiquidationLogic;
  }
  override connect(signer: Signer): LiquidationLogic__factory {
    return super.connect(signer) as LiquidationLogic__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LiquidationLogicInterface {
    return new utils.Interface(_abi) as LiquidationLogicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LiquidationLogic {
    return new Contract(address, _abi, signerOrProvider) as LiquidationLogic;
  }
}