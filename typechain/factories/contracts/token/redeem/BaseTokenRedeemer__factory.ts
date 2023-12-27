/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  BaseTokenRedeemer,
  BaseTokenRedeemerInterface,
} from "../../../../contracts/token/redeem/BaseTokenRedeemer";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_lockPeriod",
        type: "uint256",
      },
    ],
    name: "SetLockPeriod",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "UnlockRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Unlocked",
    type: "event",
  },
  {
    inputs: [],
    name: "BASIS_POINTS",
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
    name: "SCALER",
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
    name: "TOKEN",
    outputs: [
      {
        internalType: "contract IERC20Upgradeable",
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
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_unlockIndex",
        type: "uint256",
      },
    ],
    name: "getRequestId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "lockPeriod",
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
    name: "percUnlockAtRelease",
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
    name: "remainingQuota",
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
    name: "reservedForUnlock",
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
    name: "unlockPeriod",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "unlockRequestCount",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "unlockRequests",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "claimed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requestTime",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_requestId",
        type: "bytes32",
      },
    ],
    name: "unlocked",
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
  "0x608060405234801561001057600080fd5b50610636806100206000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c806382bfefc811610081578063e7017f781161005b578063e7017f781461019f578063e9fb141e146101e9578063f003f2c0146101fc57600080fd5b806382bfefc814610143578063d6db44261461018e578063e1f1c4a71461019657600080fd5b806320d3a0b4116100b257806320d3a0b41461011e5780633ddd2511146101275780633fd8b02f1461013a57600080fd5b8063025ddd45146100d95780630589789c146100f5578063117eb255146100fe575b600080fd5b6100e260015481565b6040519081526020015b60405180910390f35b6100e260045481565b6100e261010c36600461050d565b60066020526000908152604090205481565b6100e260035481565b6100e261013536600461052f565b61020b565b6100e260025481565b6000546101699062010000900473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100ec565b6100e2610253565b6100e261271081565b6101ce6101ad366004610559565b60056020526000908152604090208054600182015460029092015490919083565b604080519384526020840192909252908201526060016100ec565b6100e26101f7366004610559565b610300565b6100e2670de0b6b3a764000081565b6040516bffffffffffffffffffffffff19606084901b166020820152603481018290526000906054016040516020818303038152906040528051906020012090505b92915050565b600154600080546040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529192916201000090910473ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa1580156102cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102f19190610572565b6102fb91906105a1565b905090565b60008181526005602090815260408083208151606081018352815480825260018301549482019490945260029091015491810191909152906103895760405162461bcd60e51b815260206004820152601660248201527f524551554553545f444f45535f4e4f545f45584953540000000000000000000060448201526064015b60405180910390fd5b600254816040015161039b91906105b4565b4210156103ea5760405162461bcd60e51b815260206004820152601260248201527f554e4c4f434b5f4e4f545f5354415254454400000000000000000000000000006044820152606401610380565b600060025482604001516103fe91906105b4565b61040890426105a1565b90506000600354670de0b6b3a76400008361042391906105c7565b61042d91906105de565b9050670de0b6b3a764000081111561044a5750670de0b6b3a76400005b610456612710826105c7565b905060008360200151612710670de0b6b3a76400006127106004548661047c91906105c7565b61048691906105de565b670de0b6b3a764000060045461049c91906105c7565b6104a690876105b4565b6104b091906105a1565b87516104bc91906105c7565b6104c691906105de565b6104d091906105de565b6104da91906105a1565b9695505050505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461050857600080fd5b919050565b60006020828403121561051f57600080fd5b610528826104e4565b9392505050565b6000806040838503121561054257600080fd5b61054b836104e4565b946020939093013593505050565b60006020828403121561056b57600080fd5b5035919050565b60006020828403121561058457600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561024d5761024d61058b565b8082018082111561024d5761024d61058b565b808202811582820484141761024d5761024d61058b565b6000826105fb57634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220fc8c6b9f6536f293dfeb202f07404b4e8e7a6a977bea541c96bf03383847cfc264736f6c63430008130033";

type BaseTokenRedeemerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BaseTokenRedeemerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BaseTokenRedeemer__factory extends ContractFactory {
  constructor(...args: BaseTokenRedeemerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BaseTokenRedeemer> {
    return super.deploy(overrides || {}) as Promise<BaseTokenRedeemer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BaseTokenRedeemer {
    return super.attach(address) as BaseTokenRedeemer;
  }
  override connect(signer: Signer): BaseTokenRedeemer__factory {
    return super.connect(signer) as BaseTokenRedeemer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaseTokenRedeemerInterface {
    return new utils.Interface(_abi) as BaseTokenRedeemerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseTokenRedeemer {
    return new Contract(address, _abi, signerOrProvider) as BaseTokenRedeemer;
  }
}