/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Errors,
  ErrorsInterface,
} from "../../../contracts/synthex/Errors";

const _abi = [
  {
    inputs: [],
    name: "ACCOUNT_ALREADY_ENTERED",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ACCOUNT_BELOW_LIQ_THRESHOLD",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ACCOUNT_NOT_ENTERED",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ADDRESS_IS_CONTRACT",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ADDRESS_IS_NOT_CONTRACT",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ALREADY_SET",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ASSET_ALREADY_ADDED",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ASSET_NOT_ACTIVE",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ASSET_NOT_ENABLED",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ASSET_NOT_FOUND",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CALLER_NOT_L0_ADMIN",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CALLER_NOT_L1_ADMIN",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CALLER_NOT_L2_ADMIN",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EXCEEDED_MAX_CAPACITY",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INSUFFICIENT_BALANCE",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INSUFFICIENT_COLLATERAL",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INSUFFICIENT_DEBT",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INVALID_ADDRESS",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INVALID_AMOUNT",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INVALID_ARGUMENT",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INVALID_MERKLE_PROOF",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INVALID_TIME",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NOT_AUTHORIZED",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NOT_ENOUGH_SYX_TO_UNLOCK",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REQUEST_ALREADY_EXISTS",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REQUEST_DOES_NOT_EXIST",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TIME_ENDED",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TIME_NOT_STARTED",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TOKEN_NOT_SUPPORTED",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TRANSFER_FAILED",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UNLOCK_NOT_STARTED",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WITHDRAWING_MORE_THAN_ALLOWED",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ZERO_AMOUNT",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x610a9561003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106102155760003560e01c80637d23b90111610134578063c8ac40b3116100c7578063f1b858ee11610096578063f844d2df1161007b578063f844d2df14610938578063fae8279114610974578063ffb0fd07146109b057600080fd5b8063f1b858ee146108c0578063f6fa5450146108fc57600080fd5b8063c8ac40b3146107d0578063de4253451461080c578063de5871f714610848578063e65442b41461088457600080fd5b8063a25b587911610103578063a25b5879146106e0578063a6b9f2201461071c578063c6fbfff714610758578063c88958331461079457600080fd5b80637d23b901146105f05780638c6a3d8c1461062c57806397f9d957146106685780639963271d146106a457600080fd5b8063485d8ff2116101ac5780635963709b1161017b5780635963709b146105005780636167a3fe1461053c578063704e147614610578578063739a3ade146105b457600080fd5b8063485d8ff21461041057806350b1f3561461044c5780635683afce1461048857806356dfa07e146104c457600080fd5b80633a9097a5116101e85780633a9097a5146103205780633d83866f1461035c5780633f4ab80e1461039857806342cee4d8146103d457600080fd5b806325b2b2cd1461021a578063273aae101461026c5780632c1b6418146102a85780633a7a7e65146102e4575b600080fd5b6102566040518060400160405280600281526020017f313000000000000000000000000000000000000000000000000000000000000081525081565b60405161026391906109ec565b60405180910390f35b6102566040518060400160405280600181526020017f380000000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f313100000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600181526020017f320000000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f323000000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f313500000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f313600000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f323300000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f333100000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600181526020017f390000000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600181526020017f350000000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600181526020017f340000000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f323800000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f313900000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f313800000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f333200000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f323500000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f323200000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f333300000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f323400000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f313400000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f323600000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f323100000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f333000000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f313300000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f323900000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600181526020017f330000000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600181526020017f360000000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f313200000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600181526020017f370000000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600181526020017f310000000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f323700000000000000000000000000000000000000000000000000000000000081525081565b6102566040518060400160405280600281526020017f313700000000000000000000000000000000000000000000000000000000000081525081565b600060208083528351808285015260005b81811015610a19578581018301518582016040015282016109fd565b81811115610a2b576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01692909201604001939250505056fea2646970667358221220a6747df7e1ae3e68378fc4cc1907c487438b072ebc873f41351ce688eb0fb2e564736f6c634300080a0033";

type ErrorsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ErrorsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Errors__factory extends ContractFactory {
  constructor(...args: ErrorsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Errors> {
    return super.deploy(overrides || {}) as Promise<Errors>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Errors {
    return super.attach(address) as Errors;
  }
  override connect(signer: Signer): Errors__factory {
    return super.connect(signer) as Errors__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ErrorsInterface {
    return new utils.Interface(_abi) as ErrorsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Errors {
    return new Contract(address, _abi, signerOrProvider) as Errors;
  }
}
