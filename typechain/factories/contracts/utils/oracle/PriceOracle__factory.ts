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
import type { PromiseOrValue } from "../../../../common";
import type {
  PriceOracle,
  PriceOracleInterface,
} from "../../../../contracts/utils/oracle/PriceOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "assets",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "sources",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "fallbackOracle",
        type: "address",
      },
      {
        internalType: "address",
        name: "baseCurrency",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "baseCurrencyUnit",
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
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "source",
        type: "address",
      },
    ],
    name: "AssetSourceUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "baseCurrency",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "baseCurrencyUnit",
        type: "uint256",
      },
    ],
    name: "BaseCurrencySet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "fallbackOracle",
        type: "address",
      },
    ],
    name: "FallbackOracleUpdated",
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
    inputs: [],
    name: "BASE_CURRENCY",
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
    name: "BASE_CURRENCY_UNIT",
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
        name: "asset",
        type: "address",
      },
    ],
    name: "getAssetPrice",
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
        internalType: "address[]",
        name: "assets",
        type: "address[]",
      },
    ],
    name: "getAssetsPrices",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFallbackOracle",
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
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "getSourceOfAsset",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "assets",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "sources",
        type: "address[]",
      },
    ],
    name: "setAssetSources",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "fallbackOracle",
        type: "address",
      },
    ],
    name: "setFallbackOracle",
    outputs: [],
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
] as const;

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162000ee238038062000ee283398101604081905262000034916200038c565b6200003f33620000a8565b6200004a83620000f8565b62000056858562000142565b6001600160a01b038216608081905260a08290526040518281527fe27c4c1372396a3d15a9922f74f9dfc7c72b1ad6d63868470787249c356454c19060200160405180910390a2505050505062000463565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600280546001600160a01b0319166001600160a01b0383169081179091556040517fce7a780d33665b1ea097af5f155e3821b809ecbaa839d3b33aa83ba28168cefb90600090a250565b80518251146200018b5760405162461bcd60e51b815260206004820152601060248201526f1253959053125117d05491d55351539560821b604482015260640160405180910390fd5b60005b8251811015620002a757818181518110620001ad57620001ad62000425565b602002602001015160016000858481518110620001ce57620001ce62000425565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b031602179055508181815181106200022f576200022f62000425565b60200260200101516001600160a01b031683828151811062000255576200025562000425565b60200260200101516001600160a01b03167f22c5b7b2d8561d39f7f210b6b326a1aa69f15311163082308ac4877db6339dc160405160405180910390a3806200029e816200043b565b9150506200018e565b505050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620002da57600080fd5b919050565b600082601f830112620002f157600080fd5b815160206001600160401b0380831115620003105762000310620002ac565b8260051b604051601f19603f83011681018181108482111715620003385762000338620002ac565b6040529384528581018301938381019250878511156200035757600080fd5b83870191505b8482101562000381576200037182620002c2565b835291830191908301906200035d565b979650505050505050565b600080600080600060a08688031215620003a557600080fd5b85516001600160401b0380821115620003bd57600080fd5b620003cb89838a01620002df565b96506020880151915080821115620003e257600080fd5b50620003f188828901620002df565b9450506200040260408701620002c2565b92506200041260608701620002c2565b9150608086015190509295509295909350565b634e487b7160e01b600052603260045260246000fd5b6000600182016200045c57634e487b7160e01b600052601160045260246000fd5b5060010190565b60805160a051610a4b620004976000396000818161011a01526103ac0152600081816101d201526103810152610a4b6000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c806392bf2be011610081578063b3596f071161005b578063b3596f07146101ba578063e19f4700146101cd578063f2fde38b146101f457600080fd5b806392bf2be01461015b5780639d23d9f214610187578063abfd5310146101a757600080fd5b8063715018a6116100b2578063715018a61461010d5780638c89b64f146101155780638da5cb5b1461014a57600080fd5b8063170aee73146100ce5780636210308c146100e3575b600080fd5b6100e16100dc366004610842565b610207565b005b6002546001600160a01b03165b6040516001600160a01b0390911681526020015b60405180910390f35b6100e161021b565b61013c7f000000000000000000000000000000000000000000000000000000000000000081565b604051908152602001610104565b6000546001600160a01b03166100f0565b6100f0610169366004610842565b6001600160a01b039081166000908152600160205260409020541690565b61019a6101953660046108b7565b61022f565b60405161010491906108f9565b6100e16101b536600461093d565b6102e4565b61013c6101c8366004610842565b61035f565b6100f07f000000000000000000000000000000000000000000000000000000000000000081565b6100e1610202366004610842565b610540565b61020f6105d2565b6102188161062c565b50565b6102236105d2565b61022d6000610683565b565b606060008267ffffffffffffffff81111561024c5761024c6109a9565b604051908082528060200260200182016040528015610275578160200160208202803683370190505b50905060005b838110156102dc576102ad858583818110610298576102986109bf565b90506020020160208101906101c89190610842565b8282815181106102bf576102bf6109bf565b6020908102919091010152806102d4816109d5565b91505061027b565b509392505050565b6102ec6105d2565b610359848480806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250506040805160208088028281018201909352878252909350879250869182918501908490808284376000920191909152506106e092505050565b50505050565b6001600160a01b038082166000818152600160205260408120549092908116917f000000000000000000000000000000000000000000000000000000000000000090911690036103d157507f000000000000000000000000000000000000000000000000000000000000000092915050565b6001600160a01b0381166104545760025460405163b3596f0760e01b81526001600160a01b0385811660048301529091169063b3596f0790602401602060405180830381865afa158015610429573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061044d91906109fc565b9392505050565b6000816001600160a01b03166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610494573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b891906109fc565b905060008113156104ca579392505050565b60025460405163b3596f0760e01b81526001600160a01b0386811660048301529091169063b3596f0790602401602060405180830381865afa158015610514573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053891906109fc565b949350505050565b6105486105d2565b6001600160a01b0381166105c95760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61021881610683565b6000546001600160a01b0316331461022d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105c0565b6002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040517fce7a780d33665b1ea097af5f155e3821b809ecbaa839d3b33aa83ba28168cefb90600090a250565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80518251146107315760405162461bcd60e51b815260206004820152601060248201527f494e56414c49445f415247554d454e540000000000000000000000000000000060448201526064016105c0565b60005b825181101561083d5781818151811061074f5761074f6109bf565b60200260200101516001600085848151811061076d5761076d6109bf565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b031602179055508181815181106107cb576107cb6109bf565b60200260200101516001600160a01b03168382815181106107ee576107ee6109bf565b60200260200101516001600160a01b03167f22c5b7b2d8561d39f7f210b6b326a1aa69f15311163082308ac4877db6339dc160405160405180910390a380610835816109d5565b915050610734565b505050565b60006020828403121561085457600080fd5b81356001600160a01b038116811461044d57600080fd5b60008083601f84011261087d57600080fd5b50813567ffffffffffffffff81111561089557600080fd5b6020830191508360208260051b85010111156108b057600080fd5b9250929050565b600080602083850312156108ca57600080fd5b823567ffffffffffffffff8111156108e157600080fd5b6108ed8582860161086b565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b8181101561093157835183529284019291840191600101610915565b50909695505050505050565b6000806000806040858703121561095357600080fd5b843567ffffffffffffffff8082111561096b57600080fd5b6109778883890161086b565b9096509450602087013591508082111561099057600080fd5b5061099d8782880161086b565b95989497509550505050565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6000600182016109f557634e487b7160e01b600052601160045260246000fd5b5060010190565b600060208284031215610a0e57600080fd5b505191905056fea26469706673582212206e8a29910489ffc3e9470037a98d25621a04b850fb5303e0baf7d6460315752764736f6c63430008130033";

type PriceOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PriceOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PriceOracle__factory extends ContractFactory {
  constructor(...args: PriceOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    assets: PromiseOrValue<string>[],
    sources: PromiseOrValue<string>[],
    fallbackOracle: PromiseOrValue<string>,
    baseCurrency: PromiseOrValue<string>,
    baseCurrencyUnit: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PriceOracle> {
    return super.deploy(
      assets,
      sources,
      fallbackOracle,
      baseCurrency,
      baseCurrencyUnit,
      overrides || {}
    ) as Promise<PriceOracle>;
  }
  override getDeployTransaction(
    assets: PromiseOrValue<string>[],
    sources: PromiseOrValue<string>[],
    fallbackOracle: PromiseOrValue<string>,
    baseCurrency: PromiseOrValue<string>,
    baseCurrencyUnit: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      assets,
      sources,
      fallbackOracle,
      baseCurrency,
      baseCurrencyUnit,
      overrides || {}
    );
  }
  override attach(address: string): PriceOracle {
    return super.attach(address) as PriceOracle;
  }
  override connect(signer: Signer): PriceOracle__factory {
    return super.connect(signer) as PriceOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PriceOracleInterface {
    return new utils.Interface(_abi) as PriceOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PriceOracle {
    return new Contract(address, _abi, signerOrProvider) as PriceOracle;
  }
}
