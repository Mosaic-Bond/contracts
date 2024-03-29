/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export interface AAVEOracleInterface extends utils.Interface {
  functions: {
    "decimals()": FunctionFragment;
    "latestAnswer()": FunctionFragment;
    "lendingPoolAddressesProvider()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "decimals"
      | "latestAnswer"
      | "lendingPoolAddressesProvider"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "latestAnswer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lendingPoolAddressesProvider",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "latestAnswer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lendingPoolAddressesProvider",
    data: BytesLike
  ): Result;

  events: {};
}

export interface AAVEOracle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AAVEOracleInterface;

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
    decimals(overrides?: CallOverrides): Promise<[number]>;

    latestAnswer(overrides?: CallOverrides): Promise<[BigNumber]>;

    lendingPoolAddressesProvider(overrides?: CallOverrides): Promise<[string]>;
  };

  decimals(overrides?: CallOverrides): Promise<number>;

  latestAnswer(overrides?: CallOverrides): Promise<BigNumber>;

  lendingPoolAddressesProvider(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    decimals(overrides?: CallOverrides): Promise<number>;

    latestAnswer(overrides?: CallOverrides): Promise<BigNumber>;

    lendingPoolAddressesProvider(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    latestAnswer(overrides?: CallOverrides): Promise<BigNumber>;

    lendingPoolAddressesProvider(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    latestAnswer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lendingPoolAddressesProvider(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
