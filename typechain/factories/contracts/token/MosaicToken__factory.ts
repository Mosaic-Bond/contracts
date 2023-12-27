/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MosaicToken,
  MosaicTokenInterface,
} from "../../../contracts/token/MosaicToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event",
  },
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
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
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "version",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
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
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
    inputs: [],
    name: "unpause",
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
  "0x60a0604052306080523480156200001557600080fd5b506200002062000026565b620000e7565b600054610100900460ff1615620000935760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff90811614620000e5576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b608051612ac76200011f600039600081816106e601528181610770015281816108d70152818161095c0152610a420152612ac76000f3fe6080604052600436106101c25760003560e01c80635c975abb116100f757806384b0196e11610095578063a9059cbb11610064578063a9059cbb146104c0578063d505accf146104e0578063dd62ed3e14610500578063f2fde38b1461054657600080fd5b806384b0196e1461043b5780638da5cb5b1461046357806395d89b411461048b578063a457c2d7146104a057600080fd5b806379cc6790116100d157806379cc6790146103d15780637ecebe00146103f15780638129fc1c146104115780638456cb591461042657600080fd5b80635c975abb1461036d57806370a0823114610386578063715018a6146103bc57600080fd5b80633659cfe61161016457806340c10f191161013e57806340c10f191461030557806342966c68146103255780634f1ef2861461034557806352d1902d1461035857600080fd5b80633659cfe6146102ae57806339509351146102d05780633f4ba83a146102f057600080fd5b806318160ddd116101a057806318160ddd1461023e57806323b872dd1461025d578063313ce5671461027d5780633644e5151461029957600080fd5b806301ffc9a7146101c757806306fdde03146101fc578063095ea7b31461021e575b600080fd5b3480156101d357600080fd5b506101e76101e2366004612531565b610566565b60405190151581526020015b60405180910390f35b34801561020857600080fd5b506102116105ff565b6040516101f391906125c3565b34801561022a57600080fd5b506101e76102393660046125f2565b610691565b34801561024a57600080fd5b506067545b6040519081526020016101f3565b34801561026957600080fd5b506101e761027836600461261c565b6106a9565b34801561028957600080fd5b50604051601281526020016101f3565b3480156102a557600080fd5b5061024f6106cd565b3480156102ba57600080fd5b506102ce6102c9366004612658565b6106dc565b005b3480156102dc57600080fd5b506101e76102eb3660046125f2565b61085c565b3480156102fc57600080fd5b506102ce61089b565b34801561031157600080fd5b506102ce6103203660046125f2565b6108ad565b34801561033157600080fd5b506102ce610340366004612673565b6108c3565b6102ce6103533660046126a2565b6108cd565b34801561036457600080fd5b5061024f610a35565b34801561037957600080fd5b506101305460ff166101e7565b34801561039257600080fd5b5061024f6103a1366004612658565b6001600160a01b031660009081526065602052604090205490565b3480156103c857600080fd5b506102ce610afa565b3480156103dd57600080fd5b506102ce6103ec3660046125f2565b610b0c565b3480156103fd57600080fd5b5061024f61040c366004612658565b610b21565b34801561041d57600080fd5b506102ce610b3f565b34801561043257600080fd5b506102ce610d06565b34801561044757600080fd5b50610450610d16565b6040516101f39796959493929190612764565b34801561046f57600080fd5b506033546040516001600160a01b0390911681526020016101f3565b34801561049757600080fd5b50610211610dd8565b3480156104ac57600080fd5b506101e76104bb3660046125f2565b610de7565b3480156104cc57600080fd5b506101e76104db3660046125f2565b610e91565b3480156104ec57600080fd5b506102ce6104fb366004612816565b610e9f565b34801561050c57600080fd5b5061024f61051b366004612889565b6001600160a01b03918216600090815260666020908152604080832093909416825291909152205490565b34801561055257600080fd5b506102ce610561366004612658565b611003565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f36372b070000000000000000000000000000000000000000000000000000000014806105f957507fffffffff0000000000000000000000000000000000000000000000000000000082167fa219a02500000000000000000000000000000000000000000000000000000000145b92915050565b60606068805461060e906128bc565b80601f016020809104026020016040519081016040528092919081815260200182805461063a906128bc565b80156106875780601f1061065c57610100808354040283529160200191610687565b820191906000526020600020905b81548152906001019060200180831161066a57829003601f168201915b5050505050905090565b60003361069f818585611090565b5060019392505050565b6000336106b78582856111e8565b6106c285858561127a565b506001949350505050565b60006106d7611479565b905090565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016300361076e5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b60648201526084015b60405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166107c97f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146108345760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610765565b61083d81611483565b604080516000808252602082019092526108599183919061148b565b50565b3360008181526066602090815260408083206001600160a01b038716845290915281205490919061069f90829086906108969087906128f0565b611090565b6108a3611630565b6108ab61168a565b565b6108b5611630565b6108bf82826116dd565b5050565b61085933826117aa565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016300361095a5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608401610765565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166109b57f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614610a205760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610765565b610a2982611483565b6108bf8282600161148b565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610ad55760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610765565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b610b02611630565b6108ab6000611921565b610b178233836111e8565b6108bf82826117aa565b6001600160a01b038116600090815260fd60205260408120546105f9565b600054610100900460ff1615808015610b5f5750600054600160ff909116105b80610b795750303b158015610b79575060005460ff166001145b610beb5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610765565b6000805460ff191660011790558015610c0e576000805461ff0019166101001790555b610c716040518060400160405280600c81526020016b26b7b9b0b4b1902a37b5b2b760a11b8152506040518060400160405280600481526020017f4d4f534100000000000000000000000000000000000000000000000000000000815250611980565b610c796119f5565b610ca66040518060400160405280600c81526020016b26b7b9b0b4b1902a37b5b2b760a11b815250611a60565b610cae611b0a565b610cb66119f5565b610cbe611b7d565b8015610859576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150565b610d0e611630565b6108ab611bf0565b60006060806000806000606060c9546000801b148015610d36575060ca54155b610d825760405162461bcd60e51b815260206004820152601560248201527f4549503731323a20556e696e697469616c697a656400000000000000000000006044820152606401610765565b610d8a611c2e565b610d92611c3d565b604080516000808252602082019092527f0f000000000000000000000000000000000000000000000000000000000000009b939a50919850469750309650945092509050565b60606069805461060e906128bc565b3360008181526066602090815260408083206001600160a01b038716845290915281205490919083811015610e845760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610765565b6106c28286868403611090565b60003361069f81858561127a565b83421115610eef5760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606401610765565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9888888610f1e8c611c4c565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610f7982611c74565b90506000610f8982878787611cbc565b9050896001600160a01b0316816001600160a01b031614610fec5760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152606401610765565b610ff78a8a8a611090565b50505050505050505050565b61100b611630565b6001600160a01b0381166110875760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610765565b61085981611921565b6001600160a01b03831661110b5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610765565b6001600160a01b0382166111875760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610765565b6001600160a01b0383811660008181526066602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b03838116600090815260666020908152604080832093861683529290522054600019811461127457818110156112675760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610765565b6112748484848403611090565b50505050565b6001600160a01b0383166112f65760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610765565b6001600160a01b0382166113725760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610765565b61137d838383611ce6565b6001600160a01b0383166000908152606560205260409020548181101561140c5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610765565b6001600160a01b0380851660008181526065602052604080822086860390559286168082529083902080548601905591517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061146c9086815260200190565b60405180910390a3611274565b60006106d7611cee565b610859611630565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff16156114c3576114be83611d62565b505050565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801561151d575060408051601f3d908101601f1916820190925261151a91810190612911565b60015b61158f5760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608401610765565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc81146116245760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152608401610765565b506114be838383611e2d565b6033546001600160a01b031633146108ab5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610765565b611692611e52565b610130805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b0382166117335760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610765565b61173f60008383611ce6565b806067600082825461175191906128f0565b90915550506001600160a01b0382166000818152606560209081526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b6001600160a01b0382166118265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610765565b61183282600083611ce6565b6001600160a01b038216600090815260656020526040902054818110156118c15760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610765565b6001600160a01b03831660008181526065602090815260408083208686039055606780548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3505050565b603380546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff166119eb5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610765565b6108bf8282611ea5565b600054610100900460ff166108ab5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610765565b600054610100900460ff16611acb5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610765565b610859816040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250611f29565b600054610100900460ff16611b755760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610765565b6108ab611fbc565b600054610100900460ff16611be85760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610765565b6108ab612034565b611bf86120a8565b610130805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586116c03390565b606060cb805461060e906128bc565b606060cc805461060e906128bc565b6001600160a01b038116600090815260fd602052604090208054600181018255905b50919050565b60006105f9611c81611479565b836040517f19010000000000000000000000000000000000000000000000000000000000008152600281019290925260228201526042902090565b6000806000611ccd878787876120fc565b91509150611cda816121c0565b5090505b949350505050565b6114be6120a8565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f611d19612325565b611d2161237e565b60408051602081019490945283019190915260608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6001600160a01b0381163b611ddf5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401610765565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b611e36836123af565b600082511180611e435750805b156114be5761127483836123ef565b6101305460ff166108ab5760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f74207061757365640000000000000000000000006044820152606401610765565b600054610100900460ff16611f105760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610765565b6068611f1c8382612978565b5060696114be8282612978565b600054610100900460ff16611f945760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610765565b60cb611fa08382612978565b5060cc611fad8282612978565b5050600060c981905560ca5550565b600054610100900460ff166120275760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610765565b610130805460ff19169055565b600054610100900460ff1661209f5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610765565b6108ab33611921565b6101305460ff16156108ab5760405162461bcd60e51b815260206004820152601060248201527f5061757361626c653a20706175736564000000000000000000000000000000006044820152606401610765565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561213357506000905060036121b7565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015612187573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166121b0576000600192509250506121b7565b9150600090505b94509492505050565b60008160048111156121d4576121d4612a38565b036121dc5750565b60018160048111156121f0576121f0612a38565b0361223d5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610765565b600281600481111561225157612251612a38565b0361229e5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610765565b60038160048111156122b2576122b2612a38565b036108595760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608401610765565b600080612330611c2e565b805190915015612347578051602090910120919050565b60c95480156123565792915050565b7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4709250505090565b600080612389611c3d565b8051909150156123a0578051602090910120919050565b60ca5480156123565792915050565b6123b881611d62565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606124148383604051806060016040528060278152602001612a6b6027913961241b565b9392505050565b6060600080856001600160a01b0316856040516124389190612a4e565b600060405180830381855af49150503d8060008114612473576040519150601f19603f3d011682016040523d82523d6000602084013e612478565b606091505b509150915061248986838387612493565b9695505050505050565b606083156125025782516000036124fb576001600160a01b0385163b6124fb5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610765565b5081611cde565b611cde83838151156125175781518083602001fd5b8060405162461bcd60e51b815260040161076591906125c3565b60006020828403121561254357600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461241457600080fd5b60005b8381101561258e578181015183820152602001612576565b50506000910152565b600081518084526125af816020860160208601612573565b601f01601f19169290920160200192915050565b6020815260006124146020830184612597565b80356001600160a01b03811681146125ed57600080fd5b919050565b6000806040838503121561260557600080fd5b61260e836125d6565b946020939093013593505050565b60008060006060848603121561263157600080fd5b61263a846125d6565b9250612648602085016125d6565b9150604084013590509250925092565b60006020828403121561266a57600080fd5b612414826125d6565b60006020828403121561268557600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156126b557600080fd5b6126be836125d6565b9150602083013567ffffffffffffffff808211156126db57600080fd5b818501915085601f8301126126ef57600080fd5b8135818111156127015761270161268c565b604051601f8201601f19908116603f011681019083821181831017156127295761272961268c565b8160405282815288602084870101111561274257600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b7fff00000000000000000000000000000000000000000000000000000000000000881681526000602060e0818401526127a060e084018a612597565b83810360408501526127b2818a612597565b606085018990526001600160a01b038816608086015260a0850187905284810360c0860152855180825283870192509083019060005b81811015612804578351835292840192918401916001016127e8565b50909c9b505050505050505050505050565b600080600080600080600060e0888a03121561283157600080fd5b61283a886125d6565b9650612848602089016125d6565b95506040880135945060608801359350608088013560ff8116811461286c57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561289c57600080fd5b6128a5836125d6565b91506128b3602084016125d6565b90509250929050565b600181811c908216806128d057607f821691505b602082108103611c6e57634e487b7160e01b600052602260045260246000fd5b808201808211156105f957634e487b7160e01b600052601160045260246000fd5b60006020828403121561292357600080fd5b5051919050565b601f8211156114be57600081815260208120601f850160051c810160208610156129515750805b601f850160051c820191505b818110156129705782815560010161295d565b505050505050565b815167ffffffffffffffff8111156129925761299261268c565b6129a6816129a084546128bc565b8461292a565b602080601f8311600181146129db57600084156129c35750858301515b600019600386901b1c1916600185901b178555612970565b600085815260208120601f198616915b82811015612a0a578886015182559484019460019091019084016129eb565b5085821015612a285787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052602160045260246000fd5b60008251612a60818460208701612573565b919091019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220f1accfe459a1669ddb300c3b516da2f8cbd1ff5ca25aa07f907d6a6b912b3d8464736f6c63430008130033";

type MosaicTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MosaicTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MosaicToken__factory extends ContractFactory {
  constructor(...args: MosaicTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MosaicToken> {
    return super.deploy(overrides || {}) as Promise<MosaicToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MosaicToken {
    return super.attach(address) as MosaicToken;
  }
  override connect(signer: Signer): MosaicToken__factory {
    return super.connect(signer) as MosaicToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MosaicTokenInterface {
    return new utils.Interface(_abi) as MosaicTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MosaicToken {
    return new Contract(address, _abi, signerOrProvider) as MosaicToken;
  }
}