/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  SecondaryOracle,
  SecondaryOracleInterface,
} from "../../../../contracts/utils/oracle/SecondaryOracle";

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
  "0x608060405234801561001057600080fd5b5060405161035738038061035783398101604081905261002f9161007c565b600080546001600160a01b039384166001600160a01b031991821617909155600180549290931691161790556100af565b80516001600160a01b038116811461007757600080fd5b919050565b6000806040838503121561008f57600080fd5b61009883610060565b91506100a660208401610060565b90509250929050565b610299806100be6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063313ce5671461003b57806350d25bcd1461004f575b600080fd5b604051600881526020015b60405180910390f35b610057610065565b604051908152602001610046565b60006101a2670de0b6b3a764000061019c600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100e3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061010791906101c8565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610172573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061019691906101c8565b906101a7565b906101bc565b905090565b60006101b382846101f7565b90505b92915050565b60006101b38284610227565b6000602082840312156101da57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b80820260008212600160ff1b84141615610213576102136101e1565b81810583148215176101b6576101b66101e1565b60008261024457634e487b7160e01b600052601260045260246000fd5b600160ff1b82146000198414161561025e5761025e6101e1565b50059056fea2646970667358221220164d9a0c7023c55d8e0a9cc715ffd9b0c26ac49b233c67c338a258e7e02810e964736f6c63430008130033";

type SecondaryOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SecondaryOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SecondaryOracle__factory extends ContractFactory {
  constructor(...args: SecondaryOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _primaryOracle: PromiseOrValue<string>,
    _secondaryOracle: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SecondaryOracle> {
    return super.deploy(
      _primaryOracle,
      _secondaryOracle,
      overrides || {}
    ) as Promise<SecondaryOracle>;
  }
  override getDeployTransaction(
    _primaryOracle: PromiseOrValue<string>,
    _secondaryOracle: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _primaryOracle,
      _secondaryOracle,
      overrides || {}
    );
  }
  override attach(address: string): SecondaryOracle {
    return super.attach(address) as SecondaryOracle;
  }
  override connect(signer: Signer): SecondaryOracle__factory {
    return super.connect(signer) as SecondaryOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SecondaryOracleInterface {
    return new utils.Interface(_abi) as SecondaryOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SecondaryOracle {
    return new Contract(address, _abi, signerOrProvider) as SecondaryOracle;
  }
}
