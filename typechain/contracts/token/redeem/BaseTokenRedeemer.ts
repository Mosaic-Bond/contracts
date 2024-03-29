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
} from "../../../common";

export interface BaseTokenRedeemerInterface extends utils.Interface {
  functions: {
    "BASIS_POINTS()": FunctionFragment;
    "SCALER()": FunctionFragment;
    "TOKEN()": FunctionFragment;
    "getRequestId(address,uint256)": FunctionFragment;
    "lockPeriod()": FunctionFragment;
    "percUnlockAtRelease()": FunctionFragment;
    "remainingQuota()": FunctionFragment;
    "reservedForUnlock()": FunctionFragment;
    "unlockPeriod()": FunctionFragment;
    "unlockRequestCount(address)": FunctionFragment;
    "unlockRequests(bytes32)": FunctionFragment;
    "unlocked(bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "BASIS_POINTS"
      | "SCALER"
      | "TOKEN"
      | "getRequestId"
      | "lockPeriod"
      | "percUnlockAtRelease"
      | "remainingQuota"
      | "reservedForUnlock"
      | "unlockPeriod"
      | "unlockRequestCount"
      | "unlockRequests"
      | "unlocked"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "BASIS_POINTS",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "SCALER", values?: undefined): string;
  encodeFunctionData(functionFragment: "TOKEN", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getRequestId",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "lockPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "percUnlockAtRelease",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "remainingQuota",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "reservedForUnlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unlockPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unlockRequestCount",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "unlockRequests",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "unlocked",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "BASIS_POINTS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "SCALER", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "TOKEN", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRequestId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lockPeriod", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "percUnlockAtRelease",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "remainingQuota",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reservedForUnlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unlockPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unlockRequestCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unlockRequests",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unlocked", data: BytesLike): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "SetLockPeriod(uint256)": EventFragment;
    "UnlockRequested(address,bytes32,uint256)": EventFragment;
    "Unlocked(address,bytes32,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetLockPeriod"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnlockRequested"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unlocked"): EventFragment;
}

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface SetLockPeriodEventObject {
  _lockPeriod: BigNumber;
}
export type SetLockPeriodEvent = TypedEvent<
  [BigNumber],
  SetLockPeriodEventObject
>;

export type SetLockPeriodEventFilter = TypedEventFilter<SetLockPeriodEvent>;

export interface UnlockRequestedEventObject {
  user: string;
  requestId: string;
  amount: BigNumber;
}
export type UnlockRequestedEvent = TypedEvent<
  [string, string, BigNumber],
  UnlockRequestedEventObject
>;

export type UnlockRequestedEventFilter = TypedEventFilter<UnlockRequestedEvent>;

export interface UnlockedEventObject {
  user: string;
  requestId: string;
  amount: BigNumber;
}
export type UnlockedEvent = TypedEvent<
  [string, string, BigNumber],
  UnlockedEventObject
>;

export type UnlockedEventFilter = TypedEventFilter<UnlockedEvent>;

export interface BaseTokenRedeemer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BaseTokenRedeemerInterface;

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
    BASIS_POINTS(overrides?: CallOverrides): Promise<[BigNumber]>;

    SCALER(overrides?: CallOverrides): Promise<[BigNumber]>;

    TOKEN(overrides?: CallOverrides): Promise<[string]>;

    getRequestId(
      _user: PromiseOrValue<string>,
      _unlockIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    lockPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    percUnlockAtRelease(overrides?: CallOverrides): Promise<[BigNumber]>;

    remainingQuota(overrides?: CallOverrides): Promise<[BigNumber]>;

    reservedForUnlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    unlockPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    unlockRequestCount(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    unlockRequests(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amount: BigNumber;
        claimed: BigNumber;
        requestTime: BigNumber;
      }
    >;

    unlocked(
      _requestId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  BASIS_POINTS(overrides?: CallOverrides): Promise<BigNumber>;

  SCALER(overrides?: CallOverrides): Promise<BigNumber>;

  TOKEN(overrides?: CallOverrides): Promise<string>;

  getRequestId(
    _user: PromiseOrValue<string>,
    _unlockIndex: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  lockPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  percUnlockAtRelease(overrides?: CallOverrides): Promise<BigNumber>;

  remainingQuota(overrides?: CallOverrides): Promise<BigNumber>;

  reservedForUnlock(overrides?: CallOverrides): Promise<BigNumber>;

  unlockPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  unlockRequestCount(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  unlockRequests(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      amount: BigNumber;
      claimed: BigNumber;
      requestTime: BigNumber;
    }
  >;

  unlocked(
    _requestId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    BASIS_POINTS(overrides?: CallOverrides): Promise<BigNumber>;

    SCALER(overrides?: CallOverrides): Promise<BigNumber>;

    TOKEN(overrides?: CallOverrides): Promise<string>;

    getRequestId(
      _user: PromiseOrValue<string>,
      _unlockIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    lockPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    percUnlockAtRelease(overrides?: CallOverrides): Promise<BigNumber>;

    remainingQuota(overrides?: CallOverrides): Promise<BigNumber>;

    reservedForUnlock(overrides?: CallOverrides): Promise<BigNumber>;

    unlockPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    unlockRequestCount(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unlockRequests(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amount: BigNumber;
        claimed: BigNumber;
        requestTime: BigNumber;
      }
    >;

    unlocked(
      _requestId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "SetLockPeriod(uint256)"(_lockPeriod?: null): SetLockPeriodEventFilter;
    SetLockPeriod(_lockPeriod?: null): SetLockPeriodEventFilter;

    "UnlockRequested(address,bytes32,uint256)"(
      user?: PromiseOrValue<string> | null,
      requestId?: null,
      amount?: null
    ): UnlockRequestedEventFilter;
    UnlockRequested(
      user?: PromiseOrValue<string> | null,
      requestId?: null,
      amount?: null
    ): UnlockRequestedEventFilter;

    "Unlocked(address,bytes32,uint256)"(
      user?: PromiseOrValue<string> | null,
      requestId?: null,
      amount?: null
    ): UnlockedEventFilter;
    Unlocked(
      user?: PromiseOrValue<string> | null,
      requestId?: null,
      amount?: null
    ): UnlockedEventFilter;
  };

  estimateGas: {
    BASIS_POINTS(overrides?: CallOverrides): Promise<BigNumber>;

    SCALER(overrides?: CallOverrides): Promise<BigNumber>;

    TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    getRequestId(
      _user: PromiseOrValue<string>,
      _unlockIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lockPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    percUnlockAtRelease(overrides?: CallOverrides): Promise<BigNumber>;

    remainingQuota(overrides?: CallOverrides): Promise<BigNumber>;

    reservedForUnlock(overrides?: CallOverrides): Promise<BigNumber>;

    unlockPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    unlockRequestCount(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unlockRequests(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unlocked(
      _requestId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BASIS_POINTS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SCALER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRequestId(
      _user: PromiseOrValue<string>,
      _unlockIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lockPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    percUnlockAtRelease(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    remainingQuota(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reservedForUnlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unlockPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unlockRequestCount(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unlockRequests(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unlocked(
      _requestId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
