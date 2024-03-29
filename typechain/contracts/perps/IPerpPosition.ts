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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface IPerpPositionInterface extends utils.Interface {
  functions: {
    "call(address,bytes,uint256)": FunctionFragment;
    "closePosition(address,uint256,address)": FunctionFragment;
    "getPositionData()": FunctionFragment;
    "openPosition(address,uint256,address)": FunctionFragment;
    "supply(address,uint256)": FunctionFragment;
    "swap(address,uint256,address)": FunctionFragment;
    "transferOut(address,uint256)": FunctionFragment;
    "updatePythData(bytes[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "call"
      | "closePosition"
      | "getPositionData"
      | "openPosition"
      | "supply"
      | "swap"
      | "transferOut"
      | "updatePythData"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "call",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "closePosition",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getPositionData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "openPosition",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "supply",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOut",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePythData",
    values: [PromiseOrValue<BytesLike>[]]
  ): string;

  decodeFunctionResult(functionFragment: "call", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "closePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPositionData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "openPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "supply", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePythData",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IPerpPosition extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IPerpPositionInterface;

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
    call(
      target: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    closePosition(
      token1: PromiseOrValue<string>,
      token1Amount: PromiseOrValue<BigNumberish>,
      token0: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getPositionData(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        totalCollateralBase: BigNumber;
        totalDebtBase: BigNumber;
        availableBorrowsBase: BigNumber;
        currentLiquidationThreshold: BigNumber;
        ltv: BigNumber;
        healthFactor: BigNumber;
      }
    >;

    openPosition(
      token0: PromiseOrValue<string>,
      token0Amount: PromiseOrValue<BigNumberish>,
      token1: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supply(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swap(
      fromAsset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      toAsset: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOut(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updatePythData(
      pythUpdateData: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  call(
    target: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  closePosition(
    token1: PromiseOrValue<string>,
    token1Amount: PromiseOrValue<BigNumberish>,
    token0: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getPositionData(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      totalCollateralBase: BigNumber;
      totalDebtBase: BigNumber;
      availableBorrowsBase: BigNumber;
      currentLiquidationThreshold: BigNumber;
      ltv: BigNumber;
      healthFactor: BigNumber;
    }
  >;

  openPosition(
    token0: PromiseOrValue<string>,
    token0Amount: PromiseOrValue<BigNumberish>,
    token1: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supply(
    asset: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swap(
    fromAsset: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    toAsset: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOut(
    token: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updatePythData(
    pythUpdateData: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    call(
      target: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    closePosition(
      token1: PromiseOrValue<string>,
      token1Amount: PromiseOrValue<BigNumberish>,
      token0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getPositionData(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        totalCollateralBase: BigNumber;
        totalDebtBase: BigNumber;
        availableBorrowsBase: BigNumber;
        currentLiquidationThreshold: BigNumber;
        ltv: BigNumber;
        healthFactor: BigNumber;
      }
    >;

    openPosition(
      token0: PromiseOrValue<string>,
      token0Amount: PromiseOrValue<BigNumberish>,
      token1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    supply(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    swap(
      fromAsset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      toAsset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOut(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    updatePythData(
      pythUpdateData: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    call(
      target: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    closePosition(
      token1: PromiseOrValue<string>,
      token1Amount: PromiseOrValue<BigNumberish>,
      token0: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getPositionData(overrides?: CallOverrides): Promise<BigNumber>;

    openPosition(
      token0: PromiseOrValue<string>,
      token0Amount: PromiseOrValue<BigNumberish>,
      token1: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supply(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swap(
      fromAsset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      toAsset: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOut(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updatePythData(
      pythUpdateData: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    call(
      target: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    closePosition(
      token1: PromiseOrValue<string>,
      token1Amount: PromiseOrValue<BigNumberish>,
      token0: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getPositionData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    openPosition(
      token0: PromiseOrValue<string>,
      token0Amount: PromiseOrValue<BigNumberish>,
      token1: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supply(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swap(
      fromAsset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      toAsset: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOut(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updatePythData(
      pythUpdateData: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
