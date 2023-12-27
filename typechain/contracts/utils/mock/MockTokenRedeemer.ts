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

export interface MockTokenRedeemerInterface extends utils.Interface {
  functions: {
    "BASIS_POINTS()": FunctionFragment;
    "LOCKED_TOKEN()": FunctionFragment;
    "SCALER()": FunctionFragment;
    "TOKEN()": FunctionFragment;
    "getRequestId(address,uint256)": FunctionFragment;
    "lock(uint256)": FunctionFragment;
    "lockPeriod()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "percUnlockAtRelease()": FunctionFragment;
    "remainingQuota()": FunctionFragment;
    "reservedForUnlock()": FunctionFragment;
    "setLockPeriod(uint256)": FunctionFragment;
    "startUnlock(uint256)": FunctionFragment;
    "synthex()": FunctionFragment;
    "unlock(bytes32[])": FunctionFragment;
    "unlockPeriod()": FunctionFragment;
    "unlockRequestCount(address)": FunctionFragment;
    "unlockRequests(bytes32)": FunctionFragment;
    "unlocked(bytes32)": FunctionFragment;
    "unpause()": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "BASIS_POINTS"
      | "LOCKED_TOKEN"
      | "SCALER"
      | "TOKEN"
      | "getRequestId"
      | "lock"
      | "lockPeriod"
      | "pause"
      | "paused"
      | "percUnlockAtRelease"
      | "remainingQuota"
      | "reservedForUnlock"
      | "setLockPeriod"
      | "startUnlock"
      | "synthex"
      | "unlock"
      | "unlockPeriod"
      | "unlockRequestCount"
      | "unlockRequests"
      | "unlocked"
      | "unpause"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "BASIS_POINTS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LOCKED_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "SCALER", values?: undefined): string;
  encodeFunctionData(functionFragment: "TOKEN", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getRequestId",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "lock",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "lockPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
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
    functionFragment: "setLockPeriod",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "startUnlock",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "synthex", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "unlock",
    values: [PromiseOrValue<BytesLike>[]]
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
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "BASIS_POINTS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LOCKED_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "SCALER", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "TOKEN", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRequestId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lockPeriod", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
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
    functionFragment: "setLockPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startUnlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "synthex", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unlock", data: BytesLike): Result;
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
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "Paused(address)": EventFragment;
    "SetLockPeriod(uint256)": EventFragment;
    "UnlockRequested(address,bytes32,uint256)": EventFragment;
    "Unlocked(address,bytes32,uint256)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetLockPeriod"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnlockRequested"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unlocked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

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

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface MockTokenRedeemer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockTokenRedeemerInterface;

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

    LOCKED_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    SCALER(overrides?: CallOverrides): Promise<[BigNumber]>;

    TOKEN(overrides?: CallOverrides): Promise<[string]>;

    getRequestId(
      _user: PromiseOrValue<string>,
      _unlockIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    lock(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    lockPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    percUnlockAtRelease(overrides?: CallOverrides): Promise<[BigNumber]>;

    remainingQuota(overrides?: CallOverrides): Promise<[BigNumber]>;

    reservedForUnlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    setLockPeriod(
      _lockPeriod: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    startUnlock(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    synthex(overrides?: CallOverrides): Promise<[string]>;

    unlock(
      _requestIds: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

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

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  BASIS_POINTS(overrides?: CallOverrides): Promise<BigNumber>;

  LOCKED_TOKEN(overrides?: CallOverrides): Promise<string>;

  SCALER(overrides?: CallOverrides): Promise<BigNumber>;

  TOKEN(overrides?: CallOverrides): Promise<string>;

  getRequestId(
    _user: PromiseOrValue<string>,
    _unlockIndex: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  lock(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  lockPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  pause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  percUnlockAtRelease(overrides?: CallOverrides): Promise<BigNumber>;

  remainingQuota(overrides?: CallOverrides): Promise<BigNumber>;

  reservedForUnlock(overrides?: CallOverrides): Promise<BigNumber>;

  setLockPeriod(
    _lockPeriod: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  startUnlock(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  synthex(overrides?: CallOverrides): Promise<string>;

  unlock(
    _requestIds: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

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

  unpause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    BASIS_POINTS(overrides?: CallOverrides): Promise<BigNumber>;

    LOCKED_TOKEN(overrides?: CallOverrides): Promise<string>;

    SCALER(overrides?: CallOverrides): Promise<BigNumber>;

    TOKEN(overrides?: CallOverrides): Promise<string>;

    getRequestId(
      _user: PromiseOrValue<string>,
      _unlockIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    lock(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    lockPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    percUnlockAtRelease(overrides?: CallOverrides): Promise<BigNumber>;

    remainingQuota(overrides?: CallOverrides): Promise<BigNumber>;

    reservedForUnlock(overrides?: CallOverrides): Promise<BigNumber>;

    setLockPeriod(
      _lockPeriod: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    startUnlock(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    synthex(overrides?: CallOverrides): Promise<string>;

    unlock(
      _requestIds: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;

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

    unpause(overrides?: CallOverrides): Promise<void>;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

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

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;
  };

  estimateGas: {
    BASIS_POINTS(overrides?: CallOverrides): Promise<BigNumber>;

    LOCKED_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    SCALER(overrides?: CallOverrides): Promise<BigNumber>;

    TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    getRequestId(
      _user: PromiseOrValue<string>,
      _unlockIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lock(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    lockPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    percUnlockAtRelease(overrides?: CallOverrides): Promise<BigNumber>;

    remainingQuota(overrides?: CallOverrides): Promise<BigNumber>;

    reservedForUnlock(overrides?: CallOverrides): Promise<BigNumber>;

    setLockPeriod(
      _lockPeriod: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    startUnlock(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    synthex(overrides?: CallOverrides): Promise<BigNumber>;

    unlock(
      _requestIds: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

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

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BASIS_POINTS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    LOCKED_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SCALER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRequestId(
      _user: PromiseOrValue<string>,
      _unlockIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lock(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    lockPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    percUnlockAtRelease(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    remainingQuota(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reservedForUnlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setLockPeriod(
      _lockPeriod: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    startUnlock(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    synthex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unlock(
      _requestIds: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

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

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
