/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../../common";
import type {
  PoolLogic,
  PoolLogicInterface,
} from "../../../../../../../../contracts/lend/aave-core-v3/contracts/protocol/libraries/logic/PoolLogic";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalDebt",
        type: "uint256",
      },
    ],
    name: "IsolationModeTotalDebtUpdated",
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
        internalType: "uint256",
        name: "amountMinted",
        type: "uint256",
      },
    ],
    name: "MintedToTreasury",
    type: "event",
  },
] as const;

const _bytecode =
  "0x611f2161003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061007c5760003560e01c806369fc1bdf1161005a57806369fc1bdf1461010857806387b322b2146101385780639cf570231461015857600080fd5b80631e3b41451461008157806326ec273f146100a357806348c2ca8c146100e8575b600080fd5b81801561008d57600080fd5b506100a161009c366004611a34565b610178565b005b6100b66100b1366004611af9565b61026d565b604080519687526020870195909552938501929092526060840152608083015260a082015260c0015b60405180910390f35b8180156100f457600080fd5b506100a1610103366004611bb4565b6102aa565b81801561011457600080fd5b50610128610123366004611c45565b61045a565b60405190151581526020016100df565b81801561014457600080fd5b506100a1610153366004611d02565b610743565b81801561016457600080fd5b506100a1610173366004611d3e565b61075c565b6001600160a01b03811660009081526020838152604091829020825191820190925290549081905260d41c64ffffffffff1660408051808201909152600281527f3831000000000000000000000000000000000000000000000000000000000000602082015290156102065760405162461bcd60e51b81526004016101fd9190611d73565b60405180910390fd5b506001600160a01b03811660008181526020848152604080832060090180546fffffffffffffffffffffffffffffffff19169055519182527faef84d3b40895fd58c561f3998000f0583abb992a52fbdc99ace8e8de4d676a5910160405180910390a25050565b6000806000806000806102828a8a8a8a610857565b509399509197509094509250905061029b868684610d38565b93509499939850945094509450565b60005b818110156104545760008383838181106102c9576102c9611dc8565b90506020020160208101906102de9190611dde565b6001600160a01b038116600090815260208781526040918290208251918201909252815490819052919250906701000000000000001661031f575050610442565b60088101546fffffffffffffffffffffffffffffffff16801561043e576008820180546fffffffffffffffffffffffffffffffff19169055600061036283610d6c565b905060006103708383610de2565b6004808601546040517f7df5bd3b0000000000000000000000000000000000000000000000000000000081529293506001600160a01b031691637df5bd3b916103c6918591879101918252602082015260400190565b600060405180830381600087803b1580156103e057600080fd5b505af11580156103f4573d6000803e3d6000fd5b50505050846001600160a01b03167fbfa21aa5d5f9a1f0120a95e7c0749f389863cbdbfff531aa7339077a5bc919de8260405161043391815260200190565b60405180910390a250505b5050505b8061044c81611e0f565b9150506102ad565b50505050565b60006104698260000151610e26565b6040518060400160405280600181526020017f3900000000000000000000000000000000000000000000000000000000000000815250906104bd5760405162461bcd60e51b81526004016101fd9190611d73565b506020808301516040808501516060860151608087015187516001600160a01b03166000908152958a9052929094206104f894909392610e62565b81516001600160a01b0316600090815260208590526040812060030154600160a81b900461ffff16151580610548575082516000808052602086905260409020546001600160a01b039081169116145b905080156040518060400160405280600281526020017f3134000000000000000000000000000000000000000000000000000000000000815250906105a05760405162461bcd60e51b81526004016101fd9190611d73565b5060005b8360a0015161ffff168161ffff16101561065d5761ffff81166000908152602086905260409020546001600160a01b031661064b5783516001600160a01b03908116600090815260208881526040808320600301805461ffff60a81b1916600160a81b61ffff979097169687021790558751948352908890528120805473ffffffffffffffffffffffffffffffffffffffff191693909216929092179055915061073c9050565b8061065581611e2a565b9150506105a4565b508260c0015161ffff168360a0015161ffff16106040518060400160405280600281526020017f3135000000000000000000000000000000000000000000000000000000000000815250906106c55760405162461bcd60e51b81526004016101fd9190611d73565b50505060a08101805182516001600160a01b03908116600090815260208781526040808320600301805461ffff60a81b1916600160a81b61ffff9788160217905586519551909416825286905291909120805473ffffffffffffffffffffffffffffffffffffffff19169290911691909117905560015b9392505050565b6107576001600160a01b0384168383610f67565b505050565b6001600160a01b038116600090815260208490526040902061077f838284611013565b506001600160a01b0316600081815260208481526040808320600381018054600160a81b900461ffff168552958352908320805473ffffffffffffffffffffffffffffffffffffffff19908116909155938352949052808455600184018190556002840181905582547fffffffffffffffffff0000000000000000000000000000000000000000000000169092556004830180548216905560058301805482169055600683018054821690556007830180549091169055600882015560090180546fffffffffffffffffffffffffffffffff19169055565b60008060008060008061086d8760000151511590565b1561088b575060009450849350839250829150600019905081610d2b565b61092d6040518061026001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016000151581526020016000151581525090565b608088015160ff161561097257608088015160ff16600090815260208a905260409020606089015161095f919061138f565b6101808401526101c08301526101a08201525b87602001518160c001511015610c515760c081015188516109929161143b565b6109a65760c0810180516001019052610972565b60c0810151600090815260208b905260409020546001600160a01b031661020082018190526109df5760c0810180516001019052610972565b6102008101516001600160a01b0316600090815260208c8152604091829020825180830190935280549283905260ff60a884901c81166101e0860152603084901c166060850181905261ffff601085901c811660a08701529093166080850152600a9290920a9083015261018082015115801590610a685750816101e00151896080015160ff16145b610ae657606089015161020083015160405163b3596f0760e01b81526001600160a01b03918216600482015291169063b3596f0790602401602060405180830381865afa158015610abd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae19190611e4c565b610aed565b8161018001515b825260a082015115801590610b0d575060c08201518951610b0d9161148b565b15610bfd57610b2a896040015182846000015185602001516114da565b6040830181905261010083018051610b43908390611e65565b90525060808901516101e0830151610b5e9160ff169061158d565b1515610240830152608082015115610bb457816102400151610b84578160800151610b8b565b816101a001515b8260400151610b9a9190611e7d565b8261014001818151610bac9190611e65565b905250610bbd565b60016102208301525b816102400151610bd1578160a00151610bd8565b816101c001515b8260400151610be79190611e7d565b8261016001818151610bf99190611e65565b9052505b60c08201518951610c0d9161159e565b15610c4057610c2a896040015182846000015185602001516115eb565b8261012001818151610c3c9190611e65565b9052505b5060c0810180516001019052610972565b610100810151610c62576000610c7d565b80610100015181610140015181610c7b57610c7b611e9c565b045b610140820152610100810151610c94576000610caf565b80610100015181610160015181610cad57610cad611e9c565b045b61016082015261012081015115610cf157610cec816101200151610ce683610160015184610100015161173890919063ffffffff16565b9061175e565b610cf5565b6000195b60e0820181905261010082015161012083015161014084015161016085015161022090950151929a509098509650919450925090505b9499939850945094509450565b600080610d458584611738565b905083811015610d5957600091505061073c565b610d638482611eb2565b95945050505050565b6003810154600090600160801b900464ffffffffff1642811415610da5575050600101546fffffffffffffffffffffffffffffffff1690565b600183015461073c906fffffffffffffffffffffffffffffffff80821691610dd691600160801b9091041684611795565b90610de2565b50919050565b600081156b019d971e4fe8401e740000001983900484111517610e0457600080fd5b506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470818114801590610e5a57508115155b949350505050565b600485015460408051808201909152600281527f36310000000000000000000000000000000000000000000000000000000000006020820152906001600160a01b031615610ec35760405162461bcd60e51b81526004016101fd9190611d73565b506001850180546b033b2e3c9fd0803ce80000006fffffffffffffffffffffffffffffffff199182168117909255600287018054909116909117905560048501805473ffffffffffffffffffffffffffffffffffffffff199081166001600160a01b03968716179091556005860180548216948616949094179093556006850180548416928516929092179091556007909301805490911692909116919091179055565b6040517fa9059cbb000000000000000000000000000000000000000000000000000000008082526001600160a01b0384166004830152602482018390529060008060448382895af1610fbd573d6000803e3d6000fd5b50610fc7846117d2565b6104545760405162461bcd60e51b815260206004820152601560248201527f475076323a206661696c6564207472616e73666572000000000000000000000060448201526064016101fd565b60408051808201909152600281527f373700000000000000000000000000000000000000000000000000000000000060208201526001600160a01b03821661106e5760405162461bcd60e51b81526004016101fd9190611d73565b506003820154600160a81b900461ffff161515806110a557506000808052602084905260409020546001600160a01b038281169116145b6040518060400160405280600281526020017f3832000000000000000000000000000000000000000000000000000000000000815250906110f95760405162461bcd60e51b81526004016101fd9190611d73565b508160050160009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561114f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111739190611e4c565b60408051808201909152600281527f3535000000000000000000000000000000000000000000000000000000000000602082015290156111c65760405162461bcd60e51b81526004016101fd9190611d73565b508160060160009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561121c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112409190611e4c565b60408051808201909152600281527f3536000000000000000000000000000000000000000000000000000000000000602082015290156112935760405162461bcd60e51b81526004016101fd9190611d73565b50600480830154604080517f18160ddd00000000000000000000000000000000000000000000000000000000815290516001600160a01b03909216926318160ddd9282820192602092908290030181865afa1580156112f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061131a9190611e4c565b15801561133b575060088201546fffffffffffffffffffffffffffffffff16155b6040518060400160405280600281526020017f3534000000000000000000000000000000000000000000000000000000000000815250906104545760405162461bcd60e51b81526004016101fd9190611d73565b8154600090819081908190660100000000000090046001600160a01b031680156114205760405163b3596f0760e01b81526001600160a01b03828116600483015287169063b3596f0790602401602060405180830381865afa1580156113f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061141d9190611e4c565b91505b50945461ffff80821697620100009092041695945092505050565b6040805180820190915260028152610dcd60f21b6020820152600090608083106114785760405162461bcd60e51b81526004016101fd9190611d73565b5050905160019190911b1c600316151590565b6040805180820190915260028152610dcd60f21b6020820152600090608083106114c85760405162461bcd60e51b81526004016101fd9190611d73565b50509051600191821b82011c16151590565b6000806114e685610d6c565b600486810154604051630ed1279f60e11b81526001600160a01b038a8116938201939093529293506000928792611566928692911690631da24f3e90602401602060405180830381865afa158015611542573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dd69190611e4c565b6115709190611e7d565b905083818161158157611581611e9c565b04979650505050505050565b6000821580159061073c5750501490565b6040805180820190915260028152610dcd60f21b6020820152600090608083106115db5760405162461bcd60e51b81526004016101fd9190611d73565b50509051600191821b1c16151590565b6006830154604051630ed1279f60e11b81526001600160a01b0386811660048301526000928392911690631da24f3e90602401602060405180830381865afa15801561163b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061165f9190611e4c565b9050801561167d5761167a61167386611882565b8290610de2565b90505b60058501546040517f70a082310000000000000000000000000000000000000000000000000000000081526001600160a01b038881166004830152909116906370a0823190602401602060405180830381865afa1580156116e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117069190611e4c565b6117109082611e65565b905061171c8185611e7d565b905082818161172d5761172d611e9c565b049695505050505050565b60008115611388198390048411151761175057600080fd5b506127109102611388010490565b60008115670de0b6b3a76400006002840419048411171561177e57600080fd5b50670de0b6b3a76400009190910260028204010490565b6000806117a964ffffffffff841642611eb2565b6117b39085611e7d565b6301e1338090049050610e5a816b033b2e3c9fd0803ce8000000611e65565b60006117f8565b62461bcd60e51b60005260206004528060245250806044525060646000fd5b3d80156118375760208114611871576118327f475076323a206d616c666f726d6564207472616e7366657220726573756c7400601f6117d9565b610ddc565b823b611868576118687f475076323a206e6f74206120636f6e747261637400000000000000000000000060146117d9565b60019150610ddc565b3d6000803e50506000511515919050565b6003810154600090600160801b900464ffffffffff16428114156118bb575050600201546fffffffffffffffffffffffffffffffff1690565b600283015461073c906fffffffffffffffffffffffffffffffff80821691610dd691600160801b9091041684600061073c83834260008061190364ffffffffff851684611eb2565b90508061191f576b033b2e3c9fd0803ce800000091505061073c565b6000198101600080806002851161193757600061193c565b600285035b925066038882915c40006119508a80610de2565b8161195d5761195d611e9c565b0491506301e1338061196f838b610de2565b8161197c5761197c611e9c565b04905060008261198c8688611e7d565b6119969190611e7d565b600290049050600082856119aa888a611e7d565b6119b49190611e7d565b6119be9190611e7d565b60069004905080826301e133806119d58a8f611e7d565b6119df9190611ec9565b6119f5906b033b2e3c9fd0803ce8000000611e65565b6119ff9190611e65565b611a099190611e65565b9b9a5050505050505050505050565b80356001600160a01b0381168114611a2f57600080fd5b919050565b60008060408385031215611a4757600080fd5b82359150611a5760208401611a18565b90509250929050565b60405160a0810167ffffffffffffffff81118282101715611a9157634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715611a9157634e487b7160e01b600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715611a9157634e487b7160e01b600052604160045260246000fd5b600080600080848603610100811215611b1157600080fd5b853594506020860135935060408601359250605f190160a0811215611b3557600080fd5b611b3d611a60565b6020821215611b4b57600080fd5b611b53611a97565b91506060870135825281815260808701356020820152611b7560a08801611a18565b6040820152611b8660c08801611a18565b606082015260e0870135915060ff82168214611ba157600080fd5b6080810191909152939692955090935050565b600080600060408486031215611bc957600080fd5b83359250602084013567ffffffffffffffff80821115611be857600080fd5b818601915086601f830112611bfc57600080fd5b813581811115611c0b57600080fd5b8760208260051b8501011115611c2057600080fd5b6020830194508093505050509250925092565b803561ffff81168114611a2f57600080fd5b6000806000838503610120811215611c5c57600080fd5b843593506020850135925060e0603f1982011215611c7957600080fd5b50611c82611ac8565b611c8e60408601611a18565b8152611c9c60608601611a18565b6020820152611cad60808601611a18565b6040820152611cbe60a08601611a18565b6060820152611ccf60c08601611a18565b6080820152611ce060e08601611c33565b60a0820152611cf26101008601611c33565b60c0820152809150509250925092565b600080600060608486031215611d1757600080fd5b611d2084611a18565b9250611d2e60208501611a18565b9150604084013590509250925092565b600080600060608486031215611d5357600080fd5b8335925060208401359150611d6a60408501611a18565b90509250925092565b600060208083528351808285015260005b81811015611da057858101830151858201604001528201611d84565b81811115611db2576000604083870101525b50601f01601f1916929092016040019392505050565b634e487b7160e01b600052603260045260246000fd5b600060208284031215611df057600080fd5b61073c82611a18565b634e487b7160e01b600052601160045260246000fd5b6000600019821415611e2357611e23611df9565b5060010190565b600061ffff80831681811415611e4257611e42611df9565b6001019392505050565b600060208284031215611e5e57600080fd5b5051919050565b60008219821115611e7857611e78611df9565b500190565b6000816000190483118215151615611e9757611e97611df9565b500290565b634e487b7160e01b600052601260045260246000fd5b600082821015611ec457611ec4611df9565b500390565b600082611ee657634e487b7160e01b600052601260045260246000fd5b50049056fea264697066735822122087647007523189ff6a1267c61066a208e606ee266d339a07c148222e071c36fe64736f6c634300080a0033";

type PoolLogicConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PoolLogicConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PoolLogic__factory extends ContractFactory {
  constructor(...args: PoolLogicConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PoolLogic> {
    return super.deploy(overrides || {}) as Promise<PoolLogic>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PoolLogic {
    return super.attach(address) as PoolLogic;
  }
  override connect(signer: Signer): PoolLogic__factory {
    return super.connect(signer) as PoolLogic__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PoolLogicInterface {
    return new utils.Interface(_abi) as PoolLogicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoolLogic {
    return new Contract(address, _abi, signerOrProvider) as PoolLogic;
  }
}