/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  PerpPosition,
  PerpPositionInterface,
} from "../../../contracts/perps/PerpPosition";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IPoolAddressesProvider",
        name: "provider",
        type: "address",
      },
      {
        internalType: "contract ISynthPool",
        name: "synthPool",
        type: "address",
      },
      {
        internalType: "contract IPyth",
        name: "_pyth",
        type: "address",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "enum DataTypes.InterestRateMode",
        name: "rateMode",
        type: "uint8",
      },
    ],
    name: "borrow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "token1Amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token0",
        type: "address",
      },
    ],
    name: "closePosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "categoryId",
        type: "uint8",
      },
    ],
    name: "enterEmode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getPositionData",
    outputs: [
      {
        internalType: "uint256",
        name: "totalCollateralBase",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalDebtBase",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "availableBorrowsBase",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentLiquidationThreshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ltv",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "healthFactor",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onFlashLoan",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "token0Amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
    ],
    name: "openPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "enum DataTypes.InterestRateMode",
        name: "rateMode",
        type: "uint8",
      },
    ],
    name: "repay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "supply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "fromAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "toAsset",
        type: "address",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferIn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferOut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "pythUpdateData",
        type: "bytes[]",
      },
    ],
    name: "updatePythData",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e06040523480156200001157600080fd5b5060405162002b5a38038062002b5a833981016040819052620000349162000237565b6200003f33620000f0565b6001600160a01b03841660a08190526040805163026b1d5f60e01b8152905163026b1d5f916004808201926020929091908290030181865afa1580156200008a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000b091906200029f565b6001600160a01b0390811660805283811660c052600180546001600160a01b031916918416919091179055620000e68162000140565b50505050620002c6565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6200014a620001c3565b6001600160a01b038116620001b55760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b620001c081620000f0565b50565b6000546001600160a01b031633146200021f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401620001ac565b565b6001600160a01b0381168114620001c057600080fd5b600080600080608085870312156200024e57600080fd5b84516200025b8162000221565b60208601519094506200026e8162000221565b6040860151909350620002818162000221565b6060860151909250620002948162000221565b939692955090935050565b600060208284031215620002b257600080fd5b8151620002bf8162000221565b9392505050565b60805160a05160c0516128176200034360003960008181610e3701528181610ece0152818161106e0152818161110201526113f601526000610555015260008181610cfe01528181611308015281816115c501528181611688015281816117350152818161175c01528181611906015261197701526128176000f3fe6080604052600436106101295760003560e01c8063ac9650d8116100a5578063d505accf11610074578063e8f3796311610059578063e8f3796314610320578063f2b9fdb814610362578063f2fde38b1461038257600080fd5b8063d505accf146102e0578063e88889151461030057600080fd5b8063ac9650d814610260578063b6e82e031461028d578063bcfb99fa146102ad578063c652f60e146102c057600080fd5b80636d069a67116100fc57806376890c58116100e157806376890c58146101f85780638da5cb5b146102185780639a79fd0c1461024057600080fd5b80636d069a67146101c3578063715018a6146101e357600080fd5b806323e30c8b1461012e5780633a41b2e71461016157806365264cd11461018357806369328dec146101a3575b600080fd5b34801561013a57600080fd5b5061014e610149366004611e11565b6103a2565b6040519081526020015b60405180910390f35b34801561016d57600080fd5b5061018161017c366004611ebb565b6106d1565b005b34801561018f57600080fd5b5061018161019e366004611ebb565b610809565b3480156101af57600080fd5b506101816101be366004611ebb565b61087f565b3480156101cf57600080fd5b506101816101de366004611ebb565b610898565b3480156101ef57600080fd5b50610181610921565b34801561020457600080fd5b50610181610213366004611efd565b610935565b34801561022457600080fd5b506000546040516001600160a01b039091168152602001610158565b34801561024c57600080fd5b5061018161025b366004611f3f565b6109c9565b34801561026c57600080fd5b5061028061027b366004611f5a565b6109dd565b6040516101589190612077565b34801561029957600080fd5b506101816102a836600461208a565b610ad3565b6101816102bb366004612130565b610ae6565b3480156102cc57600080fd5b506101816102db36600461208a565b610bf3565b3480156102ec57600080fd5b506101816102fb36600461223c565b610bfe565b34801561030c57600080fd5b5061018161031b366004611efd565b610ca6565b34801561032c57600080fd5b50610335610cbb565b604080519687526020870195909552938501929092526060840152608083015260a082015260c001610158565b34801561036e57600080fd5b5061018161037d366004611efd565b610d7c565b34801561038e57600080fd5b5061018161039d3660046122aa565b610d86565b60006001600160a01b03871630146103f05760405162461bcd60e51b815260206004820152600c60248201526b155b985d5d1a1bdc9a5e995960a21b60448201526064015b60405180910390fd5b336001600160a01b038716146104375760405162461bcd60e51b815260206004820152600c60248201526b155b985d5d1a1bdc9a5e995960a21b60448201526064016103e7565b61047b6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001606081525090565b6001600160a01b0387168152602081018690526040810185905260006104a3848601866122c7565b6001600160a01b031660608401529050600060026040519080825280602002602001820160405280156104e0578160200160208202803683370190505b5090508260000151816000815181106104fb576104fb612304565b60200260200101906001600160a01b031690816001600160a01b03168152505082606001518160018151811061053357610533612304565b60200260200101906001600160a01b031690816001600160a01b0316815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663fca513a86040518163ffffffff1660e01b8152600401602060405180830381865afa1580156105b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d5919061231a565b6001600160a01b0316639d23d9f2826040518263ffffffff1660e01b81526004016106009190612337565b600060405180830381865afa15801561061d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106459190810190612384565b6080840152600082600181111561065e5761065e61240a565b036106715761066c83610e13565b6106a0565b60018260018111156106855761068561240a565b036106935761066c83611047565b50600092506106c7915050565b7f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd993505050505b9695505050505050565b600082116107215760405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e203000000060448201526064016103e7565b826001600160a01b0316635cffe9de30858560008660405160200161074792919061243e565b6040516020818303038152906040526040518563ffffffff1660e01b81526004016107759493929190612463565b6020604051808303816000875af1158015610794573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b891906124a5565b6108045760405162461bcd60e51b815260206004820152601160248201527f466c617368206c6f616e206661696c656400000000000000000000000000000060448201526064016103e7565b505050565b600082116108595760405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e203000000060448201526064016103e7565b826001600160a01b0316635cffe9de30858560018660405160200161074792919061243e565b61088761124d565b6108928383836112a7565b50505050565b6108a061124d565b6000198203610914576040516370a0823160e01b81523060048201526001600160a01b038416906370a0823190602401602060405180830381865afa1580156108ed573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091191906124c0565b91505b610892838383600061138f565b61092961124d565b6109336000611483565b565b61093d61124d565b60001981036109b1576040516370a0823160e01b81523060048201526001600160a01b038316906370a0823190602401602060405180830381865afa15801561098a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ae91906124c0565b90505b6109c56001600160a01b03831633836114eb565b5050565b6109d161124d565b6109da81611594565b50565b60608167ffffffffffffffff8111156109f8576109f86120c5565b604051908082528060200260200182016040528015610a2b57816020015b6060815260200190600190039081610a165790505b50905060005b82811015610acb57610a9b30858584818110610a4f57610a4f612304565b9050602002810190610a6191906124d9565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061162c92505050565b828281518110610aad57610aad612304565b60200260200101819052508080610ac39061253d565b915050610a31565b505b92915050565b610adb61124d565b610804838383611658565b6001546040517fd47eed450000000000000000000000000000000000000000000000000000000081526000916001600160a01b03169063d47eed4590610b30908590600401612077565b602060405180830381865afa158015610b4d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b7191906124c0565b6001546040517fef9e5e280000000000000000000000000000000000000000000000000000000081529192506001600160a01b03169063ef9e5e28908390610bbd908690600401612077565b6000604051808303818588803b158015610bd657600080fd5b505af1158015610bea573d6000803e3d6000fd5b50505050505050565b610804838383611726565b6040517fd505accf0000000000000000000000000000000000000000000000000000000081523360048201526001600160a01b038781166024830152604482018790526064820186905260ff8516608483015260a4820184905260c4820183905288169063d505accf9060e401600060405180830381600087803b158015610c8557600080fd5b505af1158015610c99573d6000803e3d6000fd5b5050505050505050505050565b6109c56001600160a01b038316333084611832565b6040517fbf92857c000000000000000000000000000000000000000000000000000000008152306004820152600090819081908190819081906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063bf92857c9060240160c060405180830381865afa158015610d45573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d699190612556565b949b939a50919850965094509092509050565b6109c58282611883565b610d8e61124d565b6001600160a01b038116610e0a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016103e7565b6109da81611483565b8051604051634f843eeb60e11b81526001600160a01b0391821660048201526000917f00000000000000000000000000000000000000000000000000000000000000001690639f087dd690602401608060405180830381865afa158015610e7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ea291906125a0565b506060850151604051634f843eeb60e11b81526001600160a01b039182166004820152919450600093507f0000000000000000000000000000000000000000000000000000000000000000169150639f087dd690602401608060405180830381865afa158015610f16573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f3a91906125a0565b5085516040870151919450610f9c93509150612710610f5985876125e3565b60028860200151610f6a91906125f6565b610f7491906125f6565b610f7e919061260d565b8660200151610f8d919061262f565b610f97919061262f565b611883565b6000610ff38460800151600081518110610fb857610fb8612304565b60200260200101518560800151600181518110610fd757610fd7612304565b602002602001015186602001516119d79092919063ffffffff16565b90506110058460600151826002611658565b61101a8460600151828660000151600061138f565b508351604085015160208601516108929291611035916125e3565b86516001600160a01b031691906119ed565b6060810151604051634f843eeb60e11b81526001600160a01b0391821660048201526000917f00000000000000000000000000000000000000000000000000000000000000001690639f087dd690602401608060405180830381865afa1580156110b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110d991906125a0565b508451604051634f843eeb60e11b81526001600160a01b039182166004820152919450600093507f0000000000000000000000000000000000000000000000000000000000000000169150639f087dd690602401608060405180830381865afa15801561114a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061116e91906125a0565b50855160408701519194506111d29350915061271061118d85876125e3565b6002886020015161119e91906125f6565b6111a891906125f6565b6111b2919061260d565b86602001516111c1919061262f565b6111cb919061262f565b6002611726565b60006111ee8460800151600081518110610fb857610fb8612304565b905080611200856060015183306112a7565b146110055760405162461bcd60e51b815260206004820152600f60248201527f5769746864726177206661696c6564000000000000000000000000000000000060448201526064016103e7565b6000546001600160a01b031633146109335760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103e7565b604080516000808252602082019092528190816112d4565b60608152602001906001900390816112bf5790505b506040517fb26a434e0000000000000000000000000000000000000000000000000000000081529091506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063b26a434e90611343908890889088908790600401612642565b6020604051808303816000875af1158015611362573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061138691906124c0565b95945050505050565b611397611dde565b60408051600080825260208201909252816113c2565b60608152602001906001900390816113ad5790505b506040517f395fea090000000000000000000000000000000000000000000000000000000081529091506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063395fea099061143590899089908990899030908990600401612674565b60408051808303816000875af1158015611453573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061147791906126c9565b9150505b949350505050565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040516001600160a01b0383166024820152604481018290526108049084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611acc565b6040517f28530a4700000000000000000000000000000000000000000000000000000000815260ff821660048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906328530a4790602401600060405180830381600087803b15801561161157600080fd5b505af1158015611625573d6000803e3d6000fd5b5050505050565b606061165183836040518060600160405280602781526020016127bb60279139611bb4565b9392505050565b6040805160008082526020820190925281611683565b606081526020019060019003908161166e5790505b5090507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316633fa01eab85858560028111156116c9576116c961240a565b600030876040518763ffffffff1660e01b81526004016116ee96959493929190612749565b600060405180830381600087803b15801561170857600080fd5b505af115801561171c573d6000803e3d6000fd5b5050505050505050565b61175a6001600160a01b0384167f0000000000000000000000000000000000000000000000000000000000000000846119ed565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663573ade81848484600281111561179d5761179d61240a565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b1681526001600160a01b039093166004840152602483019190915260448201523060648201526084016020604051808303816000875af115801561180e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061089291906124c0565b6040516001600160a01b03808516602483015283166044820152606481018290526108929085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611530565b60001981036118f7576040516370a0823160e01b81523060048201526001600160a01b038316906370a0823190602401602060405180830381865afa1580156118d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118f491906124c0565b90505b61192b6001600160a01b0383167f0000000000000000000000000000000000000000000000000000000000000000836119ed565b6040517f617ba0370000000000000000000000000000000000000000000000000000000081526001600160a01b03838116600483015260248201839052306044830152600060648301527f0000000000000000000000000000000000000000000000000000000000000000169063617ba03790608401600060405180830381600087803b1580156119bb57600080fd5b505af11580156119cf573d6000803e3d6000fd5b505050505050565b600061147b826119e78686611c22565b90611c2e565b6040517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b0383811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611a56573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a7a91906124c0565b9050610892847f095ea7b30000000000000000000000000000000000000000000000000000000085611aac86866125e3565b6040516001600160a01b0390921660248301526044820152606401611530565b6000611b21826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611c3a9092919063ffffffff16565b9050805160001480611b42575080806020019051810190611b4291906124a5565b6108045760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016103e7565b6060600080856001600160a01b031685604051611bd1919061278b565b600060405180830381855af49150503d8060008114611c0c576040519150601f19603f3d011682016040523d82523d6000602084013e611c11565b606091505b50915091506106c786838387611c49565b600061165182846125f6565b6000611651828461260d565b606061147b8484600085611cc2565b60608315611cb8578251600003611cb1576001600160a01b0385163b611cb15760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016103e7565b508161147b565b61147b8383611db4565b606082471015611d3a5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016103e7565b600080866001600160a01b03168587604051611d56919061278b565b60006040518083038185875af1925050503d8060008114611d93576040519150601f19603f3d011682016040523d82523d6000602084013e611d98565b606091505b5091509150611da987838387611c49565b979650505050505050565b815115611dc45781518083602001fd5b8060405162461bcd60e51b81526004016103e791906127a7565b60405180604001604052806002906020820280368337509192915050565b6001600160a01b03811681146109da57600080fd5b60008060008060008060a08789031215611e2a57600080fd5b8635611e3581611dfc565b95506020870135611e4581611dfc565b94506040870135935060608701359250608087013567ffffffffffffffff80821115611e7057600080fd5b818901915089601f830112611e8457600080fd5b813581811115611e9357600080fd5b8a6020828501011115611ea557600080fd5b6020830194508093505050509295509295509295565b600080600060608486031215611ed057600080fd5b8335611edb81611dfc565b9250602084013591506040840135611ef281611dfc565b809150509250925092565b60008060408385031215611f1057600080fd5b8235611f1b81611dfc565b946020939093013593505050565b803560ff81168114611f3a57600080fd5b919050565b600060208284031215611f5157600080fd5b61165182611f29565b60008060208385031215611f6d57600080fd5b823567ffffffffffffffff80821115611f8557600080fd5b818501915085601f830112611f9957600080fd5b813581811115611fa857600080fd5b8660208260051b8501011115611fbd57600080fd5b60209290920196919550909350505050565b60005b83811015611fea578181015183820152602001611fd2565b50506000910152565b6000815180845261200b816020860160208601611fcf565b601f01601f19169290920160200192915050565b600082825180855260208086019550808260051b84010181860160005b8481101561206a57601f19868403018952612058838351611ff3565b9884019892509083019060010161203c565b5090979650505050505050565b602081526000611651602083018461201f565b60008060006060848603121561209f57600080fd5b83356120aa81611dfc565b925060208401359150604084013560038110611ef257600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715612104576121046120c5565b604052919050565b600067ffffffffffffffff821115612126576121266120c5565b5060051b60200190565b6000602080838503121561214357600080fd5b823567ffffffffffffffff8082111561215b57600080fd5b8185019150601f868184011261217057600080fd5b823561218361217e8261210c565b6120db565b81815260059190911b840185019085810190898311156121a257600080fd5b8686015b8381101561222e578035868111156121be5760008081fd5b8701603f81018c136121d05760008081fd5b888101356040888211156121e6576121e66120c5565b6121f7828901601f19168c016120db565b8281528e8284860101111561220c5760008081fd5b828285018d83013760009281018c0192909252508452509187019187016121a6565b509998505050505050505050565b600080600080600080600060e0888a03121561225757600080fd5b873561226281611dfc565b9650602088013561227281611dfc565b9550604088013594506060880135935061228e60808901611f29565b925060a0880135915060c0880135905092959891949750929550565b6000602082840312156122bc57600080fd5b813561165181611dfc565b600080604083850312156122da57600080fd5b8235600281106122e957600080fd5b915060208301356122f981611dfc565b809150509250929050565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561232c57600080fd5b815161165181611dfc565b6020808252825182820181905260009190848201906040850190845b818110156123785783516001600160a01b031683529284019291840191600101612353565b50909695505050505050565b6000602080838503121561239757600080fd5b825167ffffffffffffffff8111156123ae57600080fd5b8301601f810185136123bf57600080fd5b80516123cd61217e8261210c565b81815260059190911b820183019083810190878311156123ec57600080fd5b928401925b82841015611da9578351825292840192908401906123f1565b634e487b7160e01b600052602160045260246000fd5b600281106109da57634e487b7160e01b600052602160045260246000fd5b6040810161244b84612420565b9281526001600160a01b039190911660209091015290565b60006001600160a01b038087168352808616602084015250836040830152608060608301526106c76080830184611ff3565b80518015158114611f3a57600080fd5b6000602082840312156124b757600080fd5b61165182612495565b6000602082840312156124d257600080fd5b5051919050565b6000808335601e198436030181126124f057600080fd5b83018035915067ffffffffffffffff82111561250b57600080fd5b60200191503681900382131561252057600080fd5b9250929050565b634e487b7160e01b600052601160045260246000fd5b60006001820161254f5761254f612527565b5060010190565b60008060008060008060c0878903121561256f57600080fd5b865195506020870151945060408701519350606087015192506080870151915060a087015190509295509295509295565b600080600080608085870312156125b657600080fd5b6125bf85612495565b93506125cd60208601612495565b6040860151606090960151949790965092505050565b80820180821115610acd57610acd612527565b8082028115828204841417610acd57610acd612527565b60008261262a57634e487b7160e01b600052601260045260246000fd5b500490565b81810381811115610acd57610acd612527565b60006001600160a01b038087168352856020840152808516604084015250608060608301526106c7608083018461201f565b60006001600160a01b038089168352876020840152808716604084015261269a86612420565b85606084015280851660808401525060c060a08301526126bd60c083018461201f565b98975050505050505050565b6000604082840312156126db57600080fd5b82601f8301126126ea57600080fd5b6040516040810181811067ffffffffffffffff8211171561270d5761270d6120c5565b806040525080604084018581111561272457600080fd5b845b8181101561273e578051835260209283019201612726565b509195945050505050565b60006001600160a01b03808916835287602084015286604084015261ffff8616606084015280851660808401525060c060a08301526126bd60c083018461201f565b6000825161279d818460208701611fcf565b9190910192915050565b6020815260006116516020830184611ff356fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212205bcb99b09e76acaf0c155cec4e1f1e6fdd6550379b4ea0bb426963f328168f9664736f6c63430008130033";

type PerpPositionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PerpPositionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PerpPosition__factory extends ContractFactory {
  constructor(...args: PerpPositionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    provider: PromiseOrValue<string>,
    synthPool: PromiseOrValue<string>,
    _pyth: PromiseOrValue<string>,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PerpPosition> {
    return super.deploy(
      provider,
      synthPool,
      _pyth,
      _owner,
      overrides || {}
    ) as Promise<PerpPosition>;
  }
  override getDeployTransaction(
    provider: PromiseOrValue<string>,
    synthPool: PromiseOrValue<string>,
    _pyth: PromiseOrValue<string>,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      provider,
      synthPool,
      _pyth,
      _owner,
      overrides || {}
    );
  }
  override attach(address: string): PerpPosition {
    return super.attach(address) as PerpPosition;
  }
  override connect(signer: Signer): PerpPosition__factory {
    return super.connect(signer) as PerpPosition__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PerpPositionInterface {
    return new utils.Interface(_abi) as PerpPositionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PerpPosition {
    return new Contract(address, _abi, signerOrProvider) as PerpPosition;
  }
}
