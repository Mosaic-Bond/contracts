/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
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
  PromiseOrValue,
} from "../../common";

export interface SyntheXStorageInterface extends utils.Interface {
  functions: {
    "L1_ADMIN_ROLE()": FunctionFragment;
    "L2_ADMIN_ROLE()": FunctionFragment;
    "VAULT()": FunctionFragment;
    "rewardAccrued(address,address)": FunctionFragment;
    "rewardIndex(address,address,address)": FunctionFragment;
    "rewardInitialIndex()": FunctionFragment;
    "rewardSpeeds(address,address)": FunctionFragment;
    "rewardState(address,address)": FunctionFragment;
    "rewardTokens(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "L1_ADMIN_ROLE"
      | "L2_ADMIN_ROLE"
      | "VAULT"
      | "rewardAccrued"
      | "rewardIndex"
      | "rewardInitialIndex"
      | "rewardSpeeds"
      | "rewardState"
      | "rewardTokens"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "L1_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "L2_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "VAULT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rewardAccrued",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardIndex",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardInitialIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardSpeeds",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardState",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardTokens",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "L1_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "L2_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "VAULT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardAccrued",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardInitialIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardSpeeds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardTokens",
    data: BytesLike
  ): Result;

  events: {};
}

export interface SyntheXStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SyntheXStorageInterface;

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
    L1_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    L2_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    VAULT(overrides?: CallOverrides): Promise<[string]>;

    rewardAccrued(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rewardIndex(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rewardInitialIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardSpeeds(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rewardState(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, number] & { index: BigNumber; timestamp: number }>;

    rewardTokens(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  L1_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  L2_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  VAULT(overrides?: CallOverrides): Promise<string>;

  rewardAccrued(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rewardIndex(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rewardInitialIndex(overrides?: CallOverrides): Promise<BigNumber>;

  rewardSpeeds(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rewardState(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, number] & { index: BigNumber; timestamp: number }>;

  rewardTokens(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    L1_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    L2_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    VAULT(overrides?: CallOverrides): Promise<string>;

    rewardAccrued(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardIndex(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardInitialIndex(overrides?: CallOverrides): Promise<BigNumber>;

    rewardSpeeds(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardState(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, number] & { index: BigNumber; timestamp: number }>;

    rewardTokens(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    L1_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    L2_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    VAULT(overrides?: CallOverrides): Promise<BigNumber>;

    rewardAccrued(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardIndex(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardInitialIndex(overrides?: CallOverrides): Promise<BigNumber>;

    rewardSpeeds(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardState(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardTokens(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    L1_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    L2_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    VAULT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardAccrued(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardIndex(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardInitialIndex(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardSpeeds(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardState(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardTokens(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
