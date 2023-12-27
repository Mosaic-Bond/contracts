/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../../common";
import type {
  MockInitializableImple,
  MockInitializableImpleInterface,
} from "../../../../../../../../contracts/lend/aave-core-v3/contracts/mocks/upgradeability/MockInitializableImplementation.sol/MockInitializableImple";

const _abi = [
  {
    inputs: [],
    name: "REVISION",
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
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "txt",
        type: "string",
      },
      {
        internalType: "uint256[]",
        name: "vals",
        type: "uint256[]",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "setValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "setValueViaProxy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "text",
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
    name: "value",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "values",
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
  "0x60806040526000805534801561001457600080fd5b506105f3806100246000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80635dd216101161005b5780635dd21610146100b75780635e383d21146100cc578063d31f8b6b146100df578063dde43cba146100f257600080fd5b80631f1bd692146100825780633fa4f245146100a057806355241077146100b7575b600080fd5b61008a6100fa565b604051610097919061038d565b60405180910390f35b6100a960345481565b604051908152602001610097565b6100ca6100c53660046103e2565b603455565b005b6100a96100da3660046103e2565b610188565b6100ca6100ed3660046104c2565b6101a9565b6100a9600181565b6035805461010790610582565b80601f016020809104026020016040519081016040528092919081815260200182805461013390610582565b80156101805780601f1061015557610100808354040283529160200191610180565b820191906000526020600020905b81548152906001019060200180831161016357829003601f168201915b505050505081565b6036818154811061019857600080fd5b600091825260209091200154905081565b6001805460ff16806101ba5750303b155b806101c6575060005481115b610256576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560448201527f656e20696e697469616c697a6564000000000000000000000000000000000000606482015260840160405180910390fd5b60015460ff16158015610275576001805460ff19168117905560008290555b6034859055835161028d9060359060208701906102ba565b5082516102a190603690602086019061033e565b5080156102b3576001805460ff191690555b5050505050565b8280546102c690610582565b90600052602060002090601f0160209004810192826102e8576000855561032e565b82601f1061030157805160ff191683800117855561032e565b8280016001018555821561032e579182015b8281111561032e578251825591602001919060010190610313565b5061033a929150610378565b5090565b82805482825590600052602060002090810192821561032e579160200282018281111561032e578251825591602001919060010190610313565b5b8082111561033a5760008155600101610379565b600060208083528351808285015260005b818110156103ba5785810183015185820160400152820161039e565b818111156103cc576000604083870101525b50601f01601f1916929092016040019392505050565b6000602082840312156103f457600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561043a5761043a6103fb565b604052919050565b600082601f83011261045357600080fd5b8135602067ffffffffffffffff82111561046f5761046f6103fb565b8160051b61047e828201610411565b928352848101820192828101908785111561049857600080fd5b83870192505b848310156104b75782358252918301919083019061049e565b979650505050505050565b6000806000606084860312156104d757600080fd5b8335925060208085013567ffffffffffffffff808211156104f757600080fd5b818701915087601f83011261050b57600080fd5b81358181111561051d5761051d6103fb565b61052f601f8201601f19168501610411565b818152898583860101111561054357600080fd5b81858501868301376000918101909401529193506040860135918083111561056a57600080fd5b505061057886828701610442565b9150509250925092565b600181811c9082168061059657607f821691505b602082108114156105b757634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212207a8414089fea1b751666c27c7c2729a741dbc9e47abada97c2891da57248af2f64736f6c634300080a0033";

type MockInitializableImpleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockInitializableImpleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockInitializableImple__factory extends ContractFactory {
  constructor(...args: MockInitializableImpleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockInitializableImple> {
    return super.deploy(overrides || {}) as Promise<MockInitializableImple>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockInitializableImple {
    return super.attach(address) as MockInitializableImple;
  }
  override connect(signer: Signer): MockInitializableImple__factory {
    return super.connect(signer) as MockInitializableImple__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockInitializableImpleInterface {
    return new utils.Interface(_abi) as MockInitializableImpleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockInitializableImple {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockInitializableImple;
  }
}
