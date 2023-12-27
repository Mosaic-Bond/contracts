/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  Liquidation2,
  Liquidation2Interface,
} from "../../../../../../contracts/lend/aave-core-v3/contracts/liquidation/Liquidation2";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_synthPool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_addressProvider",
        type: "address",
      },
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        internalType: "address",
        name: "_liquidator",
        type: "address",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "ADDRESSES_PROVIDER",
    outputs: [
      {
        internalType: "contract IPoolAddressesProvider",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
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
    name: "LIQUIDATOR",
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
    name: "POOL",
    outputs: [
      {
        internalType: "contract IPool",
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
        name: "assetAddress",
        type: "address",
      },
    ],
    name: "approveAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "premium",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "executeOperation",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
        name: "_account",
        type: "address",
      },
    ],
    name: "isAdmin",
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
        name: "_account",
        type: "address",
      },
    ],
    name: "isLiquidator",
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
        name: "collateralAsset",
        type: "address",
      },
      {
        internalType: "address",
        name: "debtAsset",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "debtToCover",
        type: "uint256",
      },
      {
        internalType: "bytes[]",
        name: "pythUpdateData",
        type: "bytes[]",
      },
    ],
    name: "liquidateAndSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collateralAsset",
        type: "address",
      },
      {
        internalType: "address",
        name: "debtAsset",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "debtToCover",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "badDebtAllowance",
        type: "uint256",
      },
      {
        internalType: "bytes[]",
        name: "pythUpdateData",
        type: "bytes[]",
      },
    ],
    name: "liquidateAndSwapWithFlashLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "interestRateMode",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
    ],
    name: "repayBadDebt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
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
    name: "synthPool",
    outputs: [
      {
        internalType: "contract ISynthPool",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "withdrawNativeToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162002580380380620025808339810160408190526200003491620001ca565b60016000556001600160a01b03831660808190526040805163026b1d5f60e01b8152905185929163026b1d5f9160048083019260209291908290030181865afa15801562000086573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000ac919062000227565b6001600160a01b0390811660a052600280546001600160a01b03191691871691909117905550620000df60008362000115565b6200010b7feb33521169e672634fcae38dcc3bab0be8a080072000cfbdc0e041665d727c188262000115565b505050506200024c565b62000121828262000125565b5050565b60008281526001602090815260408083206001600160a01b038516845290915290205460ff16620001215760008281526001602081815260408084206001600160a01b0386168086529252808420805460ff19169093179092559051339285917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9190a45050565b80516001600160a01b0381168114620001c557600080fd5b919050565b60008060008060808587031215620001e157600080fd5b620001ec85620001ad565b9350620001fc60208601620001ad565b92506200020c60408601620001ad565b91506200021c60608601620001ad565b905092959194509250565b6000602082840312156200023a57600080fd5b6200024582620001ad565b9392505050565b60805160a0516122eb62000295600039600081816103760152818161068b015281816109b201528181610ea401528181610fbf01526110bc015260006101d701526122eb6000f3fe6080604052600436106101625760003560e01c806346b88796116100c0578063941db3ec11610074578063a75995e411610059578063a75995e414610433578063d547741f14610453578063e69d1ff71461047357600080fd5b8063941db3ec146103fe578063a217fddf1461041e57600080fd5b80637535d246116100a55780637535d246146103645780639143dd5e1461039857806391d14854146103b857600080fd5b806346b8879614610310578063529a356f1461034457600080fd5b80631b11d0ff1161011757806324d7806c116100fc57806324d7806c146102b05780632f2ff15d146102d057806336568abe146102f057600080fd5b80631b11d0ff14610251578063248a9ca31461027157600080fd5b80630542975c116101485780630542975c146101c557806317c9df3c1461021157806317e0f2521461023157600080fd5b8062f714ce1461016e57806301ffc9a71461019057600080fd5b3661016957005b600080fd5b34801561017a57600080fd5b5061018e610189366004611906565b610493565b005b34801561019c57600080fd5b506101b06101ab366004611936565b610532565b60405190151581526020015b60405180910390f35b3480156101d157600080fd5b506101f97f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016101bc565b34801561021d57600080fd5b5061018e61022c3660046119ac565b61059b565b34801561023d57600080fd5b5061018e61024c366004611a31565b61083a565b34801561025d57600080fd5b506101b061026c366004611a4a565b610880565b34801561027d57600080fd5b506102a261028c366004611a31565b6000908152600160208190526040909120015490565b6040519081526020016101bc565b3480156102bc57600080fd5b506101b06102cb366004611af4565b610c78565b3480156102dc57600080fd5b5061018e6102eb366004611906565b610cb8565b3480156102fc57600080fd5b5061018e61030b366004611906565b610ce4565b34801561031c57600080fd5b506102a27feb33521169e672634fcae38dcc3bab0be8a080072000cfbdc0e041665d727c1881565b34801561035057600080fd5b506101b061035f366004611af4565b610d70565b34801561037057600080fd5b506101f97f000000000000000000000000000000000000000000000000000000000000000081565b3480156103a457600080fd5b506102a26103b3366004611b11565b610db0565b3480156103c457600080fd5b506101b06103d3366004611906565b60009182526001602090815260408084206001600160a01b0393909316845291905290205460ff1690565b34801561040a57600080fd5b5061018e610419366004611b5b565b610f1d565b34801561042a57600080fd5b506102a2600081565b34801561043f57600080fd5b5061018e61044e366004611af4565b611082565b34801561045f57600080fd5b5061018e61046e366004611906565b6110ff565b34801561047f57600080fd5b506002546101f9906001600160a01b031681565b600061049f8133611126565b6040516370a0823160e01b81523060048201526000906001600160a01b038416906370a0823190602401602060405180830381865afa1580156104e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050a9190611bea565b905080841115610518578093505b61052c6001600160a01b03841633866111a6565b50505050565b60006001600160e01b031982167f7965db0b00000000000000000000000000000000000000000000000000000000148061059557507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316145b92915050565b6105a3611237565b7feb33521169e672634fcae38dcc3bab0be8a080072000cfbdc0e041665d727c186105ce8133611126565b6106076040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040516370a0823160e01b81523060048201526001600160a01b038916906370a0823190602401602060405180830381865afa15801561064b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066f9190611bea565b602082015260405163186c254560e31b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063c3612a28906106cd908b908b908b908b906000908c908c90600401611cbd565b600060405180830381600087803b1580156106e757600080fd5b505af11580156106fb573d6000803e3d6000fd5b50506040516370a0823160e01b81523060048201526001600160a01b038b1692506370a082319150602401602060405180830381865afa158015610743573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107679190611bea565b60408201819052602082015161077c91611d23565b8082521580159061079f5750866001600160a01b0316886001600160a01b031614155b1561082657600254815160405163395fea0960e01b81526001600160a01b039092169163395fea09916107e2918c91908c9060009030908c908c90600401611d5c565b60408051808303816000875af1158015610800573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108249190611deb565b505b50506108326001600055565b505050505050565b60006108468133611126565b4780831115610853578092505b604051339084156108fc029085906000818181858888f1935050505015801561052c573d6000803e3d6000fd5b60006108f1604051806101600160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001606081525090565b6108fd83850185611e6b565b61014086015260e085015260a08401526001600160a01b039081166101208401521661010082018190526040516370a0823160e01b81523060048201526370a0823190602401602060405180830381865afa158015610960573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109849190611bea565b602082015261010081015161012082015161014083015160405163186c254560e31b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169363c3612a28936109ef9391928e928e9160009190600401612069565b600060405180830381600087803b158015610a0957600080fd5b505af1158015610a1d573d6000803e3d6000fd5b5050506101008201516040516370a0823160e01b81523060048201526001600160a01b0390911691506370a0823190602401602060405180830381865afa158015610a6c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a909190611bea565b604082018190526020820151610aa591611d23565b81526101008101516001600160a01b03898116911614610b4b57600254610100820151825161014084015160405163395fea0960e01b81526001600160a01b039094169363395fea0993610b0793909290918e916000913091906004016120b7565b60408051808303816000875af1158015610b25573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b499190611deb565b505b6040516370a0823160e01b81523060048201526001600160a01b038916906370a0823190602401602060405180830381865afa158015610b8f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb39190611bea565b60c0820181905260a0820151610bc891611d23565b6080820152610bd786886120fe565b606082015260e08101516080820151610bf091906120fe565b6080820181905260c08201511015610c0d5760c081015160808201525b806060015181608001511015610c6a5760405162461bcd60e51b815260206004820152601c60248201527f4e6f742061626c6520746f20726570617920666c617368206c6f616e0000000060448201526064015b60405180910390fd5b506001979650505050505050565b6001600160a01b03811660009081527fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb49602052604081205460ff16610595565b60008281526001602081905260409091200154610cd58133611126565b610cdf8383611291565b505050565b6001600160a01b0381163314610d625760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c6600000000000000000000000000000000006064820152608401610c61565b610d6c8282611318565b5050565b6001600160a01b03811660009081527f41e96e705ef65212608b5807af20a4c70b0e99668a5d9252dcb2e83ebd1c6300602052604081205460ff16610595565b60007feb33521169e672634fcae38dcc3bab0be8a080072000cfbdc0e041665d727c18610ddd8133611126565b6040516370a0823160e01b81523060048201526000906001600160a01b038816906370a0823190602401602060405180830381865afa158015610e24573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e489190611bea565b905085811015610e56578095505b6040517f573ade810000000000000000000000000000000000000000000000000000000081526001600160a01b038881166004830152602482018890526044820187905285811660648301527f0000000000000000000000000000000000000000000000000000000000000000169063573ade81906084016020604051808303816000875af1158015610eed573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f119190611bea565b50949695505050505050565b610f25611237565b7feb33521169e672634fcae38dcc3bab0be8a080072000cfbdc0e041665d727c18610f508133611126565b6040516370a0823160e01b81523060048201526000906001600160a01b038916906370a0823190602401602060405180830381865afa158015610f97573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fbb9190611bea565b90507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166342b0b77c308a898d8c878c8c8c60405160200161100a96959493929190612116565b60405160208183030381529060405260006040518663ffffffff1660e01b815260040161103b95949392919061214f565b600060405180830381600087803b15801561105557600080fd5b505af1158015611069573d6000803e3d6000fd5b5050505050506110796001600055565b50505050505050565b7feb33521169e672634fcae38dcc3bab0be8a080072000cfbdc0e041665d727c186110ad8133611126565b6110e36001600160a01b0383167f000000000000000000000000000000000000000000000000000000000000000060001961139b565b600254610d6c906001600160a01b03848116911660001961139b565b6000828152600160208190526040909120015461111c8133611126565b610cdf8383611318565b60008281526001602090815260408083206001600160a01b038516845290915290205460ff16610d6c57611164816001600160a01b0316601461147a565b61116f83602061147a565b604051602001611180929190612197565b60408051601f198184030181529082905262461bcd60e51b8252610c6191600401612218565b6040516001600160a01b038316602482015260448101829052610cdf9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166001600160e01b031990931692909217909152611662565b6002600054141561128a5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610c61565b6002600055565b60008281526001602090815260408083206001600160a01b038516845290915290205460ff16610d6c5760008281526001602081815260408084206001600160a01b0386168086529252808420805460ff19169093179092559051339285917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9190a45050565b60008281526001602090815260408083206001600160a01b038516845290915290205460ff1615610d6c5760008281526001602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6040517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b0383811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611404573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114289190611bea565b905061052c847f095ea7b3000000000000000000000000000000000000000000000000000000008561145a86866120fe565b6040516001600160a01b03909216602483015260448201526064016111eb565b6060600061148983600261222b565b6114949060026120fe565b67ffffffffffffffff8111156114ac576114ac611da4565b6040519080825280601f01601f1916602001820160405280156114d6576020820181803683370190505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061150d5761150d61224a565b60200101906001600160f81b031916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106115585761155861224a565b60200101906001600160f81b031916908160001a905350600061157c84600261222b565b6115879060016120fe565b90505b600181111561160c577f303132333435363738396162636465660000000000000000000000000000000085600f16601081106115c8576115c861224a565b1a60f81b8282815181106115de576115de61224a565b60200101906001600160f81b031916908160001a90535060049490941c9361160581612260565b905061158a565b50831561165b5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610c61565b9392505050565b60006116b7826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661174a9092919063ffffffff16565b90508051600014806116d85750808060200190518101906116d89190612277565b610cdf5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610c61565b60606117598484600085611761565b949350505050565b6060824710156117d95760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610c61565b600080866001600160a01b031685876040516117f59190612299565b60006040518083038185875af1925050503d8060008114611832576040519150601f19603f3d011682016040523d82523d6000602084013e611837565b606091505b509150915061184887838387611853565b979650505050505050565b606083156118bf5782516118b8576001600160a01b0385163b6118b85760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610c61565b5081611759565b61175983838151156118d45781518083602001fd5b8060405162461bcd60e51b8152600401610c619190612218565b6001600160a01b038116811461190357600080fd5b50565b6000806040838503121561191957600080fd5b82359150602083013561192b816118ee565b809150509250929050565b60006020828403121561194857600080fd5b81356001600160e01b03198116811461165b57600080fd5b60008083601f84011261197257600080fd5b50813567ffffffffffffffff81111561198a57600080fd5b6020830191508360208260051b85010111156119a557600080fd5b9250929050565b60008060008060008060a087890312156119c557600080fd5b86356119d0816118ee565b955060208701356119e0816118ee565b945060408701356119f0816118ee565b935060608701359250608087013567ffffffffffffffff811115611a1357600080fd5b611a1f89828a01611960565b979a9699509497509295939492505050565b600060208284031215611a4357600080fd5b5035919050565b60008060008060008060a08789031215611a6357600080fd5b8635611a6e816118ee565b955060208701359450604087013593506060870135611a8c816118ee565b9250608087013567ffffffffffffffff80821115611aa957600080fd5b818901915089601f830112611abd57600080fd5b813581811115611acc57600080fd5b8a6020828501011115611ade57600080fd5b6020830194508093505050509295509295509295565b600060208284031215611b0657600080fd5b813561165b816118ee565b60008060008060808587031215611b2757600080fd5b8435611b32816118ee565b935060208501359250604085013591506060850135611b50816118ee565b939692955090935050565b600080600080600080600060c0888a031215611b7657600080fd5b8735611b81816118ee565b96506020880135611b91816118ee565b95506040880135611ba1816118ee565b9450606088013593506080880135925060a088013567ffffffffffffffff811115611bcb57600080fd5b611bd78a828b01611960565b989b979a50959850939692959293505050565b600060208284031215611bfc57600080fd5b5051919050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b81835260006020808501808196508560051b810191508460005b87811015611cb05782840389528135601e19883603018112611c6757600080fd5b8701803567ffffffffffffffff811115611c8057600080fd5b803603891315611c8f57600080fd5b611c9c8682898501611c03565b9a87019a9550505090840190600101611c46565b5091979650505050505050565b60006001600160a01b03808a1683528089166020840152808816604084015250856060830152841515608083015260c060a0830152611d0060c083018486611c2c565b9998505050505050505050565b634e487b7160e01b600052601160045260246000fd5b600082821015611d3557611d35611d0d565b500390565b60028110611d5857634e487b7160e01b600052602160045260246000fd5b9052565b60006001600160a01b03808a1683528860208401528088166040840152611d866060840188611d3a565b80861660808401525060c060a0830152611d0060c083018486611c2c565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611de357611de3611da4565b604052919050565b600060408284031215611dfd57600080fd5b82601f830112611e0c57600080fd5b6040516040810181811067ffffffffffffffff82111715611e2f57611e2f611da4565b8060405250806040840185811115611e4657600080fd5b845b81811015611e60578051835260209283019201611e48565b509195945050505050565b600080600080600060a08688031215611e8357600080fd5b611e8d86356118ee565b853594506020860135611e9f816118ee565b93506040860135925060608601359150608086013567ffffffffffffffff80821115611eca57600080fd5b818801915088601f830112611ede57600080fd5b813581811115611ef057611ef0611da4565b611eff60208260051b01611dba565b8082825260208201915060208360051b86010192508b831115611f2157600080fd5b602085015b83811015611fb6578481351115611f3c57600080fd5b803586018d603f820112611f4f57600080fd5b602081013586811115611f6457611f64611da4565b611f77601f8201601f1916602001611dba565b8181528f6040838501011115611f8c57600080fd5b81604084016020830137600060208383010152808652505050602083019250602081019050611f26565b5080955050505050509295509295909350565b60005b83811015611fe4578181015183820152602001611fcc565b8381111561052c5750506000910152565b6000815180845261200d816020860160208601611fc9565b601f01601f19169290920160200192915050565b600081518084526020808501808196508360051b8101915082860160005b85811015611cb0578284038952612057848351611ff5565b9885019893509084019060010161203f565b60006001600160a01b0380891683528088166020840152808716604084015250846060830152831515608083015260c060a08301526120ab60c0830184612021565b98975050505050505050565b60006001600160a01b03808916835287602084015280871660408401526120e16060840187611d3a565b80851660808401525060c060a08301526120ab60c0830184612021565b6000821982111561211157612111611d0d565b500190565b60006001600160a01b03808916835280881660208401525085604083015284606083015260a060808301526120ab60a083018486611c2c565b60006001600160a01b03808816835280871660208401525084604083015260a0606083015261218160a0830185611ff5565b905061ffff831660808301529695505050505050565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516121cf816017850160208801611fc9565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000601791840191820152835161220c816028840160208801611fc9565b01602801949350505050565b60208152600061165b6020830184611ff5565b600081600019048311821515161561224557612245611d0d565b500290565b634e487b7160e01b600052603260045260246000fd5b60008161226f5761226f611d0d565b506000190190565b60006020828403121561228957600080fd5b8151801515811461165b57600080fd5b600082516122ab818460208701611fc9565b919091019291505056fea264697066735822122099173fd3ba12ad4585ddced35c76acdfa9856b20b7daad460904821b84a9259164736f6c634300080a0033";

type Liquidation2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Liquidation2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Liquidation2__factory extends ContractFactory {
  constructor(...args: Liquidation2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _synthPool: PromiseOrValue<string>,
    _addressProvider: PromiseOrValue<string>,
    _admin: PromiseOrValue<string>,
    _liquidator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Liquidation2> {
    return super.deploy(
      _synthPool,
      _addressProvider,
      _admin,
      _liquidator,
      overrides || {}
    ) as Promise<Liquidation2>;
  }
  override getDeployTransaction(
    _synthPool: PromiseOrValue<string>,
    _addressProvider: PromiseOrValue<string>,
    _admin: PromiseOrValue<string>,
    _liquidator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _synthPool,
      _addressProvider,
      _admin,
      _liquidator,
      overrides || {}
    );
  }
  override attach(address: string): Liquidation2 {
    return super.attach(address) as Liquidation2;
  }
  override connect(signer: Signer): Liquidation2__factory {
    return super.connect(signer) as Liquidation2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Liquidation2Interface {
    return new utils.Interface(_abi) as Liquidation2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Liquidation2 {
    return new Contract(address, _abi, signerOrProvider) as Liquidation2;
  }
}
