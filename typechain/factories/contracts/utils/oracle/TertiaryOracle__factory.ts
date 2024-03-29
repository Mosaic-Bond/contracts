/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  TertiaryOracle,
  TertiaryOracleInterface,
} from "../../../../contracts/utils/oracle/TertiaryOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_primaryOracle",
        type: "address",
      },
      {
        internalType: "address",
        name: "_secondaryOracle",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tertiaryOracle",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516103ca3803806103ca83398101604081905261002f9161008d565b600080546001600160a01b039485166001600160a01b0319918216179091556001805493851693821693909317909255600280549190931691161790556100d0565b80516001600160a01b038116811461008857600080fd5b919050565b6000806000606084860312156100a257600080fd5b6100ab84610071565b92506100b960208501610071565b91506100c760408501610071565b90509250925092565b6102eb806100df6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063313ce5671461003b57806350d25bcd1461004f575b600080fd5b604051600881526020015b60405180910390f35b610057610065565b604051908152602001610046565b60006101f4670de0b6b3a76400006101ee600260009054906101000a90046001600160a01b03166001600160a01b03166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100ed919061021a565b6101e8670de0b6b3a76400006101ee600160009054906101000a90046001600160a01b03166001600160a01b03166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561014f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610173919061021a565b60008054906101000a90046001600160a01b03166001600160a01b03166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e8919061021a565b906101f9565b9061020e565b905090565b60006102058284610249565b90505b92915050565b60006102058284610279565b60006020828403121561022c57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b80820260008212600160ff1b8414161561026557610265610233565b818105831482151761020857610208610233565b60008261029657634e487b7160e01b600052601260045260246000fd5b600160ff1b8214600019841416156102b0576102b0610233565b50059056fea2646970667358221220297dd178a45d80c7dc482d5acd445c14ed23557d0f3b8878e87186ecfed5c37664736f6c63430008130033";

type TertiaryOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TertiaryOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TertiaryOracle__factory extends ContractFactory {
  constructor(...args: TertiaryOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _primaryOracle: PromiseOrValue<string>,
    _secondaryOracle: PromiseOrValue<string>,
    _tertiaryOracle: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TertiaryOracle> {
    return super.deploy(
      _primaryOracle,
      _secondaryOracle,
      _tertiaryOracle,
      overrides || {}
    ) as Promise<TertiaryOracle>;
  }
  override getDeployTransaction(
    _primaryOracle: PromiseOrValue<string>,
    _secondaryOracle: PromiseOrValue<string>,
    _tertiaryOracle: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _primaryOracle,
      _secondaryOracle,
      _tertiaryOracle,
      overrides || {}
    );
  }
  override attach(address: string): TertiaryOracle {
    return super.attach(address) as TertiaryOracle;
  }
  override connect(signer: Signer): TertiaryOracle__factory {
    return super.connect(signer) as TertiaryOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TertiaryOracleInterface {
    return new utils.Interface(_abi) as TertiaryOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TertiaryOracle {
    return new Contract(address, _abi, signerOrProvider) as TertiaryOracle;
  }
}
