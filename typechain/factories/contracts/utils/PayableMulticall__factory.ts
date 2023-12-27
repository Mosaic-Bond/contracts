/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  PayableMulticall,
  PayableMulticallInterface,
} from "../../../contracts/utils/PayableMulticall";

const _abi = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        internalType: "struct PayableMulticall.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "aggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes[]",
        name: "returnData",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        internalType: "struct PayableMulticall.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "blockAndAggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes",
          },
        ],
        internalType: "struct PayableMulticall.Result[]",
        name: "returnData",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBlockNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockCoinbase",
    outputs: [
      {
        internalType: "address",
        name: "coinbase",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockDifficulty",
    outputs: [
      {
        internalType: "uint256",
        name: "difficulty",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockGasLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "gaslimit",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
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
        name: "addr",
        type: "address",
      },
    ],
    name: "getEthBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "requireSuccess",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        internalType: "struct PayableMulticall.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "tryAggregate",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes",
          },
        ],
        internalType: "struct PayableMulticall.Result[]",
        name: "returnData",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "requireSuccess",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        internalType: "struct PayableMulticall.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "tryBlockAndAggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes",
          },
        ],
        internalType: "struct PayableMulticall.Result[]",
        name: "returnData",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x6080604052610afb806100136000396000f3fe6080604052600436106100cb5760003560e01c80634d2301cc1161007457806386d516e81161004e57806386d516e814610217578063a8b0574e1461022a578063ee82ac5e1461024557600080fd5b80634d2301cc146101af5780636508f11b146101e457806372425d9d1461020457600080fd5b806327e86d6e116100a557806327e86d6e1461015a5780632adcd7af1461016f57806342cbb15c1461019c57600080fd5b80630b6c7e49146100d75780630f28c97d1461010f57806314977fa21461012c57600080fd5b366100d257005b600080fd5b3480156100e357600080fd5b506100f76100f236600461081b565b610264565b6040516101069392919061092e565b60405180910390f35b34801561011b57600080fd5b50425b604051908152602001610106565b34801561013857600080fd5b5061014c610147366004610956565b61027c565b604051610106929190610993565b34801561016657600080fd5b5061011e61042f565b34801561017b57600080fd5b5061018f61018a36600461081b565b610442565b60405161010691906109fd565b3480156101a857600080fd5b504361011e565b3480156101bb57600080fd5b5061011e6101ca366004610a17565b73ffffffffffffffffffffffffffffffffffffffff163190565b3480156101f057600080fd5b506100f76101ff366004610956565b610625565b34801561021057600080fd5b504461011e565b34801561022357600080fd5b504561011e565b34801561023657600080fd5b50604051418152602001610106565b34801561025157600080fd5b5061011e610260366004610a32565b4090565b43804060606102738585610442565b90509250925092565b8051439060609067ffffffffffffffff81111561029b5761029b610642565b6040519080825280602002602001820160405280156102ce57816020015b60608152602001906001900390816102b95790505b50905060005b8351811015610429576000808583815181106102f2576102f2610a4b565b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff1686848151811061032657610326610a4b565b60200260200101516040015187858151811061034457610344610a4b565b60200260200101516020015160405161035d9190610a61565b60006040518083038185875af1925050503d806000811461039a576040519150601f19603f3d011682016040523d82523d6000602084013e61039f565b606091505b5091509150816103f65760405162461bcd60e51b815260206004820181905260248201527f4d756c746963616c6c206167677265676174653a2063616c6c206661696c656460448201526064015b60405180910390fd5b8084848151811061040957610409610a4b565b60200260200101819052505050808061042190610a93565b9150506102d4565b50915091565b600061043c600143610aac565b40905090565b6060815167ffffffffffffffff81111561045e5761045e610642565b6040519080825280602002602001820160405280156104a457816020015b60408051808201909152600081526060602082015281526020019060019003908161047c5790505b50905060005b825181101561061e576000808483815181106104c8576104c8610a4b565b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff168584815181106104fc576104fc610a4b565b6020026020010151602001516040516105159190610a61565b6000604051808303816000865af19150503d8060008114610552576040519150601f19603f3d011682016040523d82523d6000602084013e610557565b606091505b509150915085156105d557816105d55760405162461bcd60e51b815260206004820152602160248201527f4d756c746963616c6c32206167677265676174653a2063616c6c206661696c6560448201527f640000000000000000000000000000000000000000000000000000000000000060648201526084016103ed565b60405180604001604052808315158152602001828152508484815181106105fe576105fe610a4b565b60200260200101819052505050808061061690610a93565b9150506104aa565b5092915050565b6000806060610635600185610264565b9196909550909350915050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff8111828210171561067b5761067b610642565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156106aa576106aa610642565b604052919050565b803573ffffffffffffffffffffffffffffffffffffffff811681146106d657600080fd5b919050565b600082601f8301126106ec57600080fd5b8135602067ffffffffffffffff8083111561070957610709610642565b8260051b610718838201610681565b938452858101830193838101908886111561073257600080fd5b84880192505b8583101561080f578235848111156107505760008081fd5b88016060601f19828c0381018213156107695760008081fd5b610771610658565b61077c8985016106b2565b8152604080850135898111156107925760008081fd5b8501603f81018f136107a45760008081fd5b8a8101358a8111156107b8576107b8610642565b6107c88c86601f84011601610681565b94508085528f838284010111156107df5760008081fd5b808383018d87013760009085018c015250818a019290925292909101359082015282529184019190840190610738565b98975050505050505050565b6000806040838503121561082e57600080fd5b8235801515811461083e57600080fd5b9150602083013567ffffffffffffffff81111561085a57600080fd5b610866858286016106db565b9150509250929050565b60005b8381101561088b578181015183820152602001610873565b50506000910152565b600081518084526108ac816020860160208601610870565b601f01601f19169290920160200192915050565b600082825180855260208086019550808260051b84010181860160005b8481101561092157858303601f190189528151805115158452840151604085850181905261090d81860183610894565b9a86019a94505050908301906001016108dd565b5090979650505050505050565b83815282602082015260606040820152600061094d60608301846108c0565b95945050505050565b60006020828403121561096857600080fd5b813567ffffffffffffffff81111561097f57600080fd5b61098b848285016106db565b949350505050565b600060408201848352602060408185015281855180845260608601915060608160051b870101935082870160005b828110156109ef57605f198887030184526109dd868351610894565b955092840192908401906001016109c1565b509398975050505050505050565b602081526000610a1060208301846108c0565b9392505050565b600060208284031215610a2957600080fd5b610a10826106b2565b600060208284031215610a4457600080fd5b5035919050565b634e487b7160e01b600052603260045260246000fd5b60008251610a73818460208701610870565b9190910192915050565b634e487b7160e01b600052601160045260246000fd5b600060018201610aa557610aa5610a7d565b5060010190565b81810381811115610abf57610abf610a7d565b9291505056fea2646970667358221220dbb6c3942e9cdc8b77248e61f930ddeccda4755e1ba548b05c9d8e20b7d5e83f64736f6c63430008130033";

type PayableMulticallConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PayableMulticallConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PayableMulticall__factory extends ContractFactory {
  constructor(...args: PayableMulticallConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<PayableMulticall> {
    return super.deploy(overrides || {}) as Promise<PayableMulticall>;
  }
  override getDeployTransaction(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PayableMulticall {
    return super.attach(address) as PayableMulticall;
  }
  override connect(signer: Signer): PayableMulticall__factory {
    return super.connect(signer) as PayableMulticall__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PayableMulticallInterface {
    return new utils.Interface(_abi) as PayableMulticallInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PayableMulticall {
    return new Contract(address, _abi, signerOrProvider) as PayableMulticall;
  }
}
