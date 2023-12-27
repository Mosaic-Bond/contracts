/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  CompoundOracle,
  CompoundOracleInterface,
} from "../../../../../contracts/utils/oracle/CompOracle.sol/CompoundOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ComptrollerInterface",
        name: "_comptroller",
        type: "address",
      },
      {
        internalType: "contract CTokenInterface",
        name: "_cToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_underlyingDecimals",
        type: "uint256",
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
        internalType: "int256",
        name: "current",
        type: "int256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
    ],
    name: "AnswerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "startedBy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
    ],
    name: "NewRound",
    type: "event",
  },
  {
    inputs: [],
    name: "cToken",
    outputs: [
      {
        internalType: "contract CTokenInterface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "comptroller",
    outputs: [
      {
        internalType: "contract ComptrollerInterface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "roundId",
        type: "uint256",
      },
    ],
    name: "getAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "roundId",
        type: "uint256",
      },
    ],
    name: "getTimestamp",
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
    name: "latestAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRound",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "latestTimestamp",
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
  "0x608060405234801561001057600080fd5b506040516104c53803806104c583398101604081905261002f9161007f565b600080546001600160a01b039485166001600160a01b03199182161790915560018054939094169216919091179091556002556100c2565b6001600160a01b038116811461007c57600080fd5b50565b60008060006060848603121561009457600080fd5b835161009f81610067565b60208501519093506100b081610067565b80925050604084015190509250925092565b6103f4806100d16000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806369e527da1161005b57806369e527da146100e95780638205bf6a146100fc578063b5ab58dc14610102578063b633620c1461011557600080fd5b8063313ce5671461008d57806350d25bcd146100a15780635fe3b567146100b7578063668a0f02146100e2575b600080fd5b604051600881526020015b60405180910390f35b6100a9610128565b604051908152602001610098565b6000546100ca906001600160a01b031681565b6040516001600160a01b039091168152602001610098565b60006100a9565b6001546100ca906001600160a01b031681565b426100a9565b6100a96101103660046102d7565b6102bf565b6100a96101233660046102d7565b6102cf565b600068056bc75e2d63100000600160009054906101000a90046001600160a01b03166001600160a01b031663182df0f56040518163ffffffff1660e01b8152600401602060405180830381865afa158015610187573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101ab91906102f0565b60008054906101000a90046001600160a01b03166001600160a01b0316637dc0d1d06040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102209190610309565b6001546040517ffc57d4df0000000000000000000000000000000000000000000000000000000081526001600160a01b03918216600482015291169063fc57d4df90602401602060405180830381865afa158015610282573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102a691906102f0565b6102b0919061034f565b6102ba9190610366565b905090565b60006102c9610128565b92915050565b6000426102c9565b6000602082840312156102e957600080fd5b5035919050565b60006020828403121561030257600080fd5b5051919050565b60006020828403121561031b57600080fd5b81516001600160a01b038116811461033257600080fd5b9392505050565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176102c9576102c9610339565b60008261038357634e487b7160e01b600052601260045260246000fd5b7f80000000000000000000000000000000000000000000000000000000000000008214600019841416156103b9576103b9610339565b50059056fea2646970667358221220d9eecb86e06559c5ce9d7d96ad1ff723de95e0f42fe539a293a965b735b7a20264736f6c63430008130033";

type CompoundOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CompoundOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CompoundOracle__factory extends ContractFactory {
  constructor(...args: CompoundOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _comptroller: PromiseOrValue<string>,
    _cToken: PromiseOrValue<string>,
    _underlyingDecimals: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CompoundOracle> {
    return super.deploy(
      _comptroller,
      _cToken,
      _underlyingDecimals,
      overrides || {}
    ) as Promise<CompoundOracle>;
  }
  override getDeployTransaction(
    _comptroller: PromiseOrValue<string>,
    _cToken: PromiseOrValue<string>,
    _underlyingDecimals: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _comptroller,
      _cToken,
      _underlyingDecimals,
      overrides || {}
    );
  }
  override attach(address: string): CompoundOracle {
    return super.attach(address) as CompoundOracle;
  }
  override connect(signer: Signer): CompoundOracle__factory {
    return super.connect(signer) as CompoundOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CompoundOracleInterface {
    return new utils.Interface(_abi) as CompoundOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CompoundOracle {
    return new Contract(address, _abi, signerOrProvider) as CompoundOracle;
  }
}