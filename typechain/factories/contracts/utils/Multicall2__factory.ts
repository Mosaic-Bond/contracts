/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Multicall2,
  Multicall2Interface,
} from "../../../contracts/utils/Multicall2";

const _abi = [
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
        ],
        internalType: "struct Multicall2.Call[]",
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
        ],
        internalType: "struct Multicall2.Call[]",
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
        internalType: "struct Multicall2.Result[]",
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
        ],
        internalType: "struct Multicall2.Call[]",
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
        internalType: "struct Multicall2.Result[]",
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
        ],
        internalType: "struct Multicall2.Call[]",
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
        internalType: "struct Multicall2.Result[]",
        name: "returnData",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610a34806100206000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c806372425d9d11610081578063bce38bd71161005b578063bce38bd714610181578063c3077fa9146101a1578063ee82ac5e146101b457600080fd5b806372425d9d1461016757806386d516e81461016d578063a8b0574e1461017357600080fd5b8063399542e9116100b2578063399542e91461011757806342cbb15c146101395780634d2301cc1461013f57600080fd5b80630f28c97d146100d9578063252dba42146100ee57806327e86d6e1461010f575b600080fd5b425b6040519081526020015b60405180910390f35b6101016100fc36600461075a565b6101c6565b6040516100e59291906107e7565b6100db61035b565b61012a610125366004610851565b61036e565b6040516100e59392919061090e565b436100db565b6100db61014d366004610936565b73ffffffffffffffffffffffffffffffffffffffff163190565b446100db565b456100db565b6040514181526020016100e5565b61019461018f366004610851565b610386565b6040516100e59190610958565b61012a6101af36600461075a565b610569565b6100db6101c236600461096b565b4090565b8051439060609067ffffffffffffffff8111156101e5576101e5610586565b60405190808252806020026020018201604052801561021857816020015b60608152602001906001900390816102035790505b50905060005b83518110156103555760008085838151811061023c5761023c610984565b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff1686848151811061027057610270610984565b602002602001015160200151604051610289919061099a565b6000604051808303816000865af19150503d80600081146102c6576040519150601f19603f3d011682016040523d82523d6000602084013e6102cb565b606091505b5091509150816103225760405162461bcd60e51b815260206004820181905260248201527f4d756c746963616c6c206167677265676174653a2063616c6c206661696c656460448201526064015b60405180910390fd5b8084848151811061033557610335610984565b60200260200101819052505050808061034d906109cc565b91505061021e565b50915091565b60006103686001436109e5565b40905090565b438040606061037d8585610386565b90509250925092565b6060815167ffffffffffffffff8111156103a2576103a2610586565b6040519080825280602002602001820160405280156103e857816020015b6040805180820190915260008152606060208201528152602001906001900390816103c05790505b50905060005b82518110156105625760008084838151811061040c5761040c610984565b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff1685848151811061044057610440610984565b602002602001015160200151604051610459919061099a565b6000604051808303816000865af19150503d8060008114610496576040519150601f19603f3d011682016040523d82523d6000602084013e61049b565b606091505b5091509150851561051957816105195760405162461bcd60e51b815260206004820152602160248201527f4d756c746963616c6c32206167677265676174653a2063616c6c206661696c6560448201527f64000000000000000000000000000000000000000000000000000000000000006064820152608401610319565b604051806040016040528083151581526020018281525084848151811061054257610542610984565b60200260200101819052505050808061055a906109cc565b9150506103ee565b5092915050565b600080606061057960018561036e565b9196909550909350915050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156105bf576105bf610586565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156105ee576105ee610586565b604052919050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461061a57600080fd5b919050565b6000601f838184011261063157600080fd5b8235602067ffffffffffffffff8083111561064e5761064e610586565b8260051b61065d8382016105c5565b938452868101830193838101908986111561067757600080fd5b84890192505b8583101561074d578235848111156106955760008081fd5b89016040601f19828d0381018213156106ae5760008081fd5b6106b661059c565b6106c18985016105f6565b815282840135888111156106d55760008081fd5b8085019450508d603f8501126106eb5760008081fd5b88840135888111156106ff576106ff610586565b61070e8a848e840116016105c5565b92508083528e848287010111156107255760008081fd5b808486018b85013760009083018a01528089019190915284525050918401919084019061067d565b9998505050505050505050565b60006020828403121561076c57600080fd5b813567ffffffffffffffff81111561078357600080fd5b61078f8482850161061f565b949350505050565b60005b838110156107b257818101518382015260200161079a565b50506000910152565b600081518084526107d3816020860160208601610797565b601f01601f19169290920160200192915050565b600060408201848352602060408185015281855180845260608601915060608160051b870101935082870160005b8281101561084357605f198887030184526108318683516107bb565b95509284019290840190600101610815565b509398975050505050505050565b6000806040838503121561086457600080fd5b8235801515811461087457600080fd5b9150602083013567ffffffffffffffff81111561089057600080fd5b61089c8582860161061f565b9150509250929050565b6000815180845260208085019450848260051b860182860160005b85811015610901578383038952815180511515845285015160408685018190526108ed818601836107bb565b9a87019a94505050908401906001016108c1565b5090979650505050505050565b83815282602082015260606040820152600061092d60608301846108a6565b95945050505050565b60006020828403121561094857600080fd5b610951826105f6565b9392505050565b60208152600061095160208301846108a6565b60006020828403121561097d57600080fd5b5035919050565b634e487b7160e01b600052603260045260246000fd5b600082516109ac818460208701610797565b9190910192915050565b634e487b7160e01b600052601160045260246000fd5b6000600182016109de576109de6109b6565b5060010190565b818103818111156109f8576109f86109b6565b9291505056fea2646970667358221220a32a521dfc3646f6728344fd9055f828eec6d090890d2427498ef8526cdb10af64736f6c63430008130033";

type Multicall2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Multicall2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Multicall2__factory extends ContractFactory {
  constructor(...args: Multicall2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Multicall2> {
    return super.deploy(overrides || {}) as Promise<Multicall2>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Multicall2 {
    return super.attach(address) as Multicall2;
  }
  override connect(signer: Signer): Multicall2__factory {
    return super.connect(signer) as Multicall2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Multicall2Interface {
    return new utils.Interface(_abi) as Multicall2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Multicall2 {
    return new Contract(address, _abi, signerOrProvider) as Multicall2;
  }
}
