/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  ReservesSetupHelper,
  ReservesSetupHelperInterface,
} from "../../../../../../contracts/lend/aave-core-v3/contracts/deployments/ReservesSetupHelper";

const _abi = [
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
        internalType: "contract PoolConfigurator",
        name: "configurator",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "baseLTV",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidationThreshold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidationBonus",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reserveFactor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "borrowCap",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "supplyCap",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "stableBorrowingEnabled",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "borrowingEnabled",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "flashLoanEnabled",
            type: "bool",
          },
        ],
        internalType: "struct ReservesSetupHelper.ConfigureReserveInput[]",
        name: "inputParams",
        type: "tuple[]",
      },
    ],
    name: "configureReserves",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b031916339081178255604051909182917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506109e5806100616000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806323bb109314610051578063715018a6146100665780638da5cb5b1461006e578063f2fde38b1461008d575b600080fd5b61006461005f3660046108a1565b6100a0565b005b61006461069a565b600054604080516001600160a01b039092168252519081900360200190f35b61006461009b36600461092a565b61074b565b6000546001600160a01b031633146100ff5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b60005b8181101561069457836001600160a01b0316637c4e560b84848481811061012b5761012b61094e565b61014292602061014090920201908101915061092a565b8585858181106101545761015461094e565b90506101400201602001358686868181106101715761017161094e565b905061014002016040013587878781811061018e5761018e61094e565b6040516001600160e01b031960e089901b1681526001600160a01b039096166004870152602486019490945250604484019190915260606101409092020101356064820152608401600060405180830381600087803b1580156101f057600080fd5b505af1158015610204573d6000803e3d6000fd5b5050505082828281811061021a5761021a61094e565b905061014002016101000160208101906102349190610964565b1561044d57836001600160a01b031663682cf26484848481811061025a5761025a61094e565b61027192602061014090920201908101915061092a565b6040516001600160e01b031960e084901b1681526001600160a01b03909116600482015260016024820152604401600060405180830381600087803b1580156102b957600080fd5b505af11580156102cd573d6000803e3d6000fd5b50505050836001600160a01b031663d14a09838484848181106102f2576102f261094e565b61030992602061014090920201908101915061092a565b85858581811061031b5761031b61094e565b9050610140020160a001356040518363ffffffff1660e01b81526004016103579291906001600160a01b03929092168252602082015260400190565b600060405180830381600087803b15801561037157600080fd5b505af1158015610385573d6000803e3d6000fd5b50505050836001600160a01b0316638a751a608484848181106103aa576103aa61094e565b6103c192602061014090920201908101915061092a565b8585858181106103d3576103d361094e565b9050610140020160e00160208101906103ec9190610964565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015215156024820152604401600060405180830381600087803b15801561043457600080fd5b505af1158015610448573d6000803e3d6000fd5b505050505b836001600160a01b031663f213ef0e84848481811061046e5761046e61094e565b61048592602061014090920201908101915061092a565b8585858181106104975761049761094e565b905061014002016101200160208101906104b19190610964565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015215156024820152604401600060405180830381600087803b1580156104f957600080fd5b505af115801561050d573d6000803e3d6000fd5b50505050836001600160a01b031663571f03e58484848181106105325761053261094e565b61054992602061014090920201908101915061092a565b85858581811061055b5761055b61094e565b9050610140020160c001356040518363ffffffff1660e01b81526004016105979291906001600160a01b03929092168252602082015260400190565b600060405180830381600087803b1580156105b157600080fd5b505af11580156105c5573d6000803e3d6000fd5b50505050836001600160a01b0316634b4e67538484848181106105ea576105ea61094e565b61060192602061014090920201908101915061092a565b8585858181106106135761061361094e565b90506101400201608001356040518363ffffffff1660e01b815260040161064f9291906001600160a01b03929092168252602082015260400190565b600060405180830381600087803b15801561066957600080fd5b505af115801561067d573d6000803e3d6000fd5b50505050808061068c90610986565b915050610102565b50505050565b6000546001600160a01b031633146106f45760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016100f6565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b6000546001600160a01b031633146107a55760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016100f6565b6001600160a01b0381166108215760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016100f6565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6001600160a01b038116811461089e57600080fd5b50565b6000806000604084860312156108b657600080fd5b83356108c181610889565b9250602084013567ffffffffffffffff808211156108de57600080fd5b818601915086601f8301126108f257600080fd5b81358181111561090157600080fd5b8760206101408302850101111561091757600080fd5b6020830194508093505050509250925092565b60006020828403121561093c57600080fd5b813561094781610889565b9392505050565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561097657600080fd5b8135801515811461094757600080fd5b60006000198214156109a857634e487b7160e01b600052601160045260246000fd5b506001019056fea264697066735822122032330571f7a528addc58827f30cb7c0cb249e2a36387e6e0e51c2cd702aef42a64736f6c634300080a0033";

type ReservesSetupHelperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReservesSetupHelperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReservesSetupHelper__factory extends ContractFactory {
  constructor(...args: ReservesSetupHelperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ReservesSetupHelper> {
    return super.deploy(overrides || {}) as Promise<ReservesSetupHelper>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ReservesSetupHelper {
    return super.attach(address) as ReservesSetupHelper;
  }
  override connect(signer: Signer): ReservesSetupHelper__factory {
    return super.connect(signer) as ReservesSetupHelper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReservesSetupHelperInterface {
    return new utils.Interface(_abi) as ReservesSetupHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReservesSetupHelper {
    return new Contract(address, _abi, signerOrProvider) as ReservesSetupHelper;
  }
}
