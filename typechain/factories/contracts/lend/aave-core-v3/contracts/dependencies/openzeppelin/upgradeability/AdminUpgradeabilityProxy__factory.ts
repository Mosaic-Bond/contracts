/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BytesLike,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../../common";
import type {
  AdminUpgradeabilityProxy,
  AdminUpgradeabilityProxyInterface,
} from "../../../../../../../../contracts/lend/aave-core-v3/contracts/dependencies/openzeppelin/upgradeability/AdminUpgradeabilityProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "changeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405260405162000b9f38038062000b9f8339810160408190526200002691620002ab565b82816200005560017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd6200038b565b60008051602062000b7f83398151915214620000755762000075620003b1565b620000808262000168565b805115620000f7576000826001600160a01b031682604051620000a49190620003c7565b600060405180830381855af49150503d8060008114620000e1576040519150601f19603f3d011682016040523d82523d6000602084013e620000e6565b606091505b5050905080620000f557600080fd5b505b5062000127905060017fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61046200038b565b60008051602062000b5f83398151915214620001475762000147620003b1565b6200015f8260008051602062000b5f83398151915255565b505050620003e5565b6200017e816200020860201b620004731760201c565b620001f55760405162461bcd60e51b815260206004820152603b60248201527f43616e6e6f742073657420612070726f787920696d706c656d656e746174696f60448201527f6e20746f2061206e6f6e2d636f6e747261637420616464726573730000000000606482015260840160405180910390fd5b60008051602062000b7f83398151915255565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708181148015906200023d57508115155b949350505050565b80516001600160a01b03811681146200025d57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620002955781810151838201526020016200027b565b83811115620002a5576000848401525b50505050565b600080600060608486031215620002c157600080fd5b620002cc8462000245565b9250620002dc6020850162000245565b60408501519092506001600160401b0380821115620002fa57600080fd5b818601915086601f8301126200030f57600080fd5b81518181111562000324576200032462000262565b604051601f8201601f19908116603f011681019083821181831017156200034f576200034f62000262565b816040528281528960208487010111156200036957600080fd5b6200037c83602083016020880162000278565b80955050505050509250925092565b600082821015620003ac57634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052600160045260246000fd5b60008251620003db81846020870162000278565b9190910192915050565b61076a80620003f56000396000f3fe60806040526004361061005a5760003560e01c80635c60da1b116100435780635c60da1b146100975780638f283970146100c8578063f851a440146100e85761005a565b80633659cfe6146100645780634f1ef28614610084575b6100626100fd565b005b34801561007057600080fd5b5061006261007f36600461067f565b610137565b6100626100923660046106a1565b610186565b3480156100a357600080fd5b506100ac610247565b6040516001600160a01b03909116815260200160405180910390f35b3480156100d457600080fd5b506100626100e336600461067f565b6102bb565b3480156100f457600080fd5b506100ac61040a565b6101056104af565b6101356101307f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6104b7565b565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103546001600160a01b0316336001600160a01b0316141561017e5761017b816104db565b50565b61017b6100fd565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103546001600160a01b0316336001600160a01b0316141561023a576101ca836104db565b6000836001600160a01b031683836040516101e6929190610724565b600060405180830381855af49150503d8060008114610221576040519150601f19603f3d011682016040523d82523d6000602084013e610226565b606091505b505090508061023457600080fd5b50505050565b6102426100fd565b505050565b60006102717fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b6001600160a01b0316336001600160a01b031614156102b057507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6102b86100fd565b90565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103546001600160a01b0316336001600160a01b0316141561017e576001600160a01b0381166103775760405162461bcd60e51b815260206004820152603660248201527f43616e6e6f74206368616e6765207468652061646d696e206f6620612070726f60448201527f787920746f20746865207a65726f20616464726573730000000000000000000060648201526084015b60405180910390fd5b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6103c07fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b604080516001600160a01b03928316815291841660208301520160405180910390a161017b817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b60006104347fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b6001600160a01b0316336001600160a01b031614156102b057507fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708181148015906104a757508115155b949350505050565b61013561051b565b3660008037600080366000845af43d6000803e8080156104d6573d6000f35b3d6000fd5b6104e4816105c4565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103546001600160a01b0316336001600160a01b031614156101355760405162461bcd60e51b815260206004820152603260248201527f43616e6e6f742063616c6c2066616c6c6261636b2066756e6374696f6e20667260448201527f6f6d207468652070726f78792061646d696e0000000000000000000000000000606482015260840161036e565b6105cd81610473565b61063f5760405162461bcd60e51b815260206004820152603b60248201527f43616e6e6f742073657420612070726f787920696d706c656d656e746174696f60448201527f6e20746f2061206e6f6e2d636f6e747261637420616464726573730000000000606482015260840161036e565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b80356001600160a01b038116811461067a57600080fd5b919050565b60006020828403121561069157600080fd5b61069a82610663565b9392505050565b6000806000604084860312156106b657600080fd5b6106bf84610663565b9250602084013567ffffffffffffffff808211156106dc57600080fd5b818601915086601f8301126106f057600080fd5b8135818111156106ff57600080fd5b87602082850101111561071157600080fd5b6020830194508093505050509250925092565b818382376000910190815291905056fea26469706673582212201025996f4d40c39ccfdc758af26e00ee2da7b1a198f497c552f9a9e4ccc5bd1e64736f6c634300080a0033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc";

type AdminUpgradeabilityProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AdminUpgradeabilityProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AdminUpgradeabilityProxy__factory extends ContractFactory {
  constructor(...args: AdminUpgradeabilityProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _logic: PromiseOrValue<string>,
    _admin: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<AdminUpgradeabilityProxy> {
    return super.deploy(
      _logic,
      _admin,
      _data,
      overrides || {}
    ) as Promise<AdminUpgradeabilityProxy>;
  }
  override getDeployTransaction(
    _logic: PromiseOrValue<string>,
    _admin: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_logic, _admin, _data, overrides || {});
  }
  override attach(address: string): AdminUpgradeabilityProxy {
    return super.attach(address) as AdminUpgradeabilityProxy;
  }
  override connect(signer: Signer): AdminUpgradeabilityProxy__factory {
    return super.connect(signer) as AdminUpgradeabilityProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AdminUpgradeabilityProxyInterface {
    return new utils.Interface(_abi) as AdminUpgradeabilityProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AdminUpgradeabilityProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AdminUpgradeabilityProxy;
  }
}