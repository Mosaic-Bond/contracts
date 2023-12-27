/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface PerpFactoryInterface extends utils.Interface {
  functions: {
    "balanceOf(address)": FunctionFragment;
    "baseTokenURI()": FunctionFragment;
    "getAllPositions(address)": FunctionFragment;
    "getPositionAddress(address,uint256)": FunctionFragment;
    "newPosition(bytes[])": FunctionFragment;
    "nonces(address)": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
    "provider()": FunctionFragment;
    "pyth()": FunctionFragment;
    "synthPool()": FunctionFragment;
    "tokenURI(uint256)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "balanceOf"
      | "baseTokenURI"
      | "getAllPositions"
      | "getPositionAddress"
      | "newPosition"
      | "nonces"
      | "ownerOf"
      | "provider"
      | "pyth"
      | "synthPool"
      | "tokenURI"
      | "totalSupply"
      | "transferFrom"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "baseTokenURI",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllPositions",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPositionAddress",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "newPosition",
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "nonces",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "provider", values?: undefined): string;
  encodeFunctionData(functionFragment: "pyth", values?: undefined): string;
  encodeFunctionData(functionFragment: "synthPool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "baseTokenURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllPositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPositionAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "newPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "provider", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pyth", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "synthPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {
    "PositionCreated(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PositionCreated"): EventFragment;
}

export interface PositionCreatedEventObject {
  position: string;
  owner: string;
}
export type PositionCreatedEvent = TypedEvent<
  [string, string],
  PositionCreatedEventObject
>;

export type PositionCreatedEventFilter = TypedEventFilter<PositionCreatedEvent>;

export interface PerpFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PerpFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    balanceOf(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    baseTokenURI(overrides?: CallOverrides): Promise<[string]>;

    getAllPositions(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getPositionAddress(
      user: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    newPosition(
      data: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nonces(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    ownerOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { owner: string }>;

    provider(overrides?: CallOverrides): Promise<[string]>;

    pyth(overrides?: CallOverrides): Promise<[string]>;

    synthPool(overrides?: CallOverrides): Promise<[string]>;

    tokenURI(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  balanceOf(
    user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  baseTokenURI(overrides?: CallOverrides): Promise<string>;

  getAllPositions(
    user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getPositionAddress(
    user: PromiseOrValue<string>,
    id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  newPosition(
    data: PromiseOrValue<BytesLike>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nonces(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  ownerOf(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  pyth(overrides?: CallOverrides): Promise<string>;

  synthPool(overrides?: CallOverrides): Promise<string>;

  tokenURI(
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transferFrom(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    balanceOf(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    baseTokenURI(overrides?: CallOverrides): Promise<string>;

    getAllPositions(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getPositionAddress(
      user: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    newPosition(
      data: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<string>;

    nonces(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ownerOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    provider(overrides?: CallOverrides): Promise<string>;

    pyth(overrides?: CallOverrides): Promise<string>;

    synthPool(overrides?: CallOverrides): Promise<string>;

    tokenURI(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "PositionCreated(address,address)"(
      position?: PromiseOrValue<string> | null,
      owner?: PromiseOrValue<string> | null
    ): PositionCreatedEventFilter;
    PositionCreated(
      position?: PromiseOrValue<string> | null,
      owner?: PromiseOrValue<string> | null
    ): PositionCreatedEventFilter;
  };

  estimateGas: {
    balanceOf(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    baseTokenURI(overrides?: CallOverrides): Promise<BigNumber>;

    getAllPositions(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPositionAddress(
      user: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    newPosition(
      data: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nonces(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ownerOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    provider(overrides?: CallOverrides): Promise<BigNumber>;

    pyth(overrides?: CallOverrides): Promise<BigNumber>;

    synthPool(overrides?: CallOverrides): Promise<BigNumber>;

    tokenURI(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    baseTokenURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllPositions(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPositionAddress(
      user: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    newPosition(
      data: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nonces(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ownerOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    provider(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pyth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    synthPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenURI(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}