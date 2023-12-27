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
} from "../../../../../../common";

export declare namespace IVault {
  export type BatchSwapStepStruct = {
    poolId: PromiseOrValue<BytesLike>;
    assetInIndex: PromiseOrValue<BigNumberish>;
    assetOutIndex: PromiseOrValue<BigNumberish>;
    amount: PromiseOrValue<BigNumberish>;
    userData: PromiseOrValue<BytesLike>;
  };

  export type BatchSwapStepStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string
  ] & {
    poolId: string;
    assetInIndex: BigNumber;
    assetOutIndex: BigNumber;
    amount: BigNumber;
    userData: string;
  };
}

export declare namespace IRouter {
  export type SwapStruct = {
    swap: IVault.BatchSwapStepStruct[];
    limits: PromiseOrValue<BigNumberish>[];
    assets: PromiseOrValue<string>[];
    isBalancerPool: PromiseOrValue<boolean>;
  };

  export type SwapStructOutput = [
    IVault.BatchSwapStepStructOutput[],
    BigNumber[],
    string[],
    boolean
  ] & {
    swap: IVault.BatchSwapStepStructOutput[];
    limits: BigNumber[];
    assets: string[];
    isBalancerPool: boolean;
  };

  export type SwapDataStruct = {
    kind: PromiseOrValue<BigNumberish>;
    swaps: IRouter.SwapStruct[];
    recipient: PromiseOrValue<string>;
    deadline: PromiseOrValue<BigNumberish>;
  };

  export type SwapDataStructOutput = [
    number,
    IRouter.SwapStructOutput[],
    string,
    BigNumber
  ] & {
    kind: number;
    swaps: IRouter.SwapStructOutput[];
    recipient: string;
    deadline: BigNumber;
  };
}

export interface LiquidationInterface extends utils.Interface {
  functions: {
    "ADDRESSES_PROVIDER()": FunctionFragment;
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "LIQUIDATOR()": FunctionFragment;
    "POOL()": FunctionFragment;
    "approveAsset(address)": FunctionFragment;
    "executeOperation(address,uint256,uint256,address,bytes)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "isAdmin(address)": FunctionFragment;
    "isLiquidator(address)": FunctionFragment;
    "liquidate(address,address,address,uint256,bytes[])": FunctionFragment;
    "liquidateAndSwap(address,address,address,(uint8,((bytes32,uint256,uint256,uint256,bytes)[],int256[],address[],bool)[],address,uint256),bytes[])": FunctionFragment;
    "liquidateAndSwapWithFlashLoan(address,address,address,uint256,uint256,(uint8,((bytes32,uint256,uint256,uint256,bytes)[],int256[],address[],bool)[],address,uint256),bytes[])": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "repayBadDebt(address,uint256,uint256,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "router()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "withdraw(uint256,address)": FunctionFragment;
    "withdrawNativeToken(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ADDRESSES_PROVIDER"
      | "DEFAULT_ADMIN_ROLE"
      | "LIQUIDATOR"
      | "POOL"
      | "approveAsset"
      | "executeOperation"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "isAdmin"
      | "isLiquidator"
      | "liquidate"
      | "liquidateAndSwap"
      | "liquidateAndSwapWithFlashLoan"
      | "renounceRole"
      | "repayBadDebt"
      | "revokeRole"
      | "router"
      | "supportsInterface"
      | "withdraw"
      | "withdrawNativeToken"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "ADDRESSES_PROVIDER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LIQUIDATOR",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "POOL", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "approveAsset",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "executeOperation",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isAdmin",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isLiquidator",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidate",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidateAndSwap",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      IRouter.SwapDataStruct,
      PromiseOrValue<BytesLike>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidateAndSwapWithFlashLoan",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      IRouter.SwapDataStruct,
      PromiseOrValue<BytesLike>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "repayBadDebt",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "router", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawNativeToken",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "ADDRESSES_PROVIDER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "LIQUIDATOR", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "POOL", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "approveAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeOperation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isLiquidator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "liquidate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "liquidateAndSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidateAndSwapWithFlashLoan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "repayBadDebt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawNativeToken",
    data: BytesLike
  ): Result;

  events: {
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}

export interface RoleAdminChangedEventObject {
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  RoleAdminChangedEventObject
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export interface RoleGrantedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  RoleGrantedEventObject
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export interface RoleRevokedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  RoleRevokedEventObject
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface Liquidation extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LiquidationInterface;

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
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<[string]>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    LIQUIDATOR(overrides?: CallOverrides): Promise<[string]>;

    POOL(overrides?: CallOverrides): Promise<[string]>;

    approveAsset(
      assetAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeOperation(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      premium: PromiseOrValue<BigNumberish>,
      initiator: PromiseOrValue<string>,
      params: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isAdmin(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isLiquidator(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    liquidate(
      collateralAsset: PromiseOrValue<string>,
      debtAsset: PromiseOrValue<string>,
      user: PromiseOrValue<string>,
      debtToCover: PromiseOrValue<BigNumberish>,
      pythUpdateData: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    liquidateAndSwap(
      collateralAsset: PromiseOrValue<string>,
      debtAsset: PromiseOrValue<string>,
      user: PromiseOrValue<string>,
      swapData: IRouter.SwapDataStruct,
      pythUpdateData: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    liquidateAndSwapWithFlashLoan(
      collateralAsset: PromiseOrValue<string>,
      debtAsset: PromiseOrValue<string>,
      user: PromiseOrValue<string>,
      debtToCover: PromiseOrValue<BigNumberish>,
      badDebtAllowance: PromiseOrValue<BigNumberish>,
      swapData: IRouter.SwapDataStruct,
      pythUpdateData: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    repayBadDebt(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      interestRateMode: PromiseOrValue<BigNumberish>,
      onBehalfOf: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    router(overrides?: CallOverrides): Promise<[string]>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawNativeToken(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  LIQUIDATOR(overrides?: CallOverrides): Promise<string>;

  POOL(overrides?: CallOverrides): Promise<string>;

  approveAsset(
    assetAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeOperation(
    asset: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    premium: PromiseOrValue<BigNumberish>,
    initiator: PromiseOrValue<string>,
    params: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getRoleAdmin(
    role: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  grantRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isAdmin(
    _account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isLiquidator(
    _account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  liquidate(
    collateralAsset: PromiseOrValue<string>,
    debtAsset: PromiseOrValue<string>,
    user: PromiseOrValue<string>,
    debtToCover: PromiseOrValue<BigNumberish>,
    pythUpdateData: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  liquidateAndSwap(
    collateralAsset: PromiseOrValue<string>,
    debtAsset: PromiseOrValue<string>,
    user: PromiseOrValue<string>,
    swapData: IRouter.SwapDataStruct,
    pythUpdateData: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  liquidateAndSwapWithFlashLoan(
    collateralAsset: PromiseOrValue<string>,
    debtAsset: PromiseOrValue<string>,
    user: PromiseOrValue<string>,
    debtToCover: PromiseOrValue<BigNumberish>,
    badDebtAllowance: PromiseOrValue<BigNumberish>,
    swapData: IRouter.SwapDataStruct,
    pythUpdateData: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  repayBadDebt(
    asset: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    interestRateMode: PromiseOrValue<BigNumberish>,
    onBehalfOf: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  router(overrides?: CallOverrides): Promise<string>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  withdraw(
    amount: PromiseOrValue<BigNumberish>,
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawNativeToken(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    LIQUIDATOR(overrides?: CallOverrides): Promise<string>;

    POOL(overrides?: CallOverrides): Promise<string>;

    approveAsset(
      assetAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeOperation(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      premium: PromiseOrValue<BigNumberish>,
      initiator: PromiseOrValue<string>,
      params: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isAdmin(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isLiquidator(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    liquidate(
      collateralAsset: PromiseOrValue<string>,
      debtAsset: PromiseOrValue<string>,
      user: PromiseOrValue<string>,
      debtToCover: PromiseOrValue<BigNumberish>,
      pythUpdateData: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;

    liquidateAndSwap(
      collateralAsset: PromiseOrValue<string>,
      debtAsset: PromiseOrValue<string>,
      user: PromiseOrValue<string>,
      swapData: IRouter.SwapDataStruct,
      pythUpdateData: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;

    liquidateAndSwapWithFlashLoan(
      collateralAsset: PromiseOrValue<string>,
      debtAsset: PromiseOrValue<string>,
      user: PromiseOrValue<string>,
      debtToCover: PromiseOrValue<BigNumberish>,
      badDebtAllowance: PromiseOrValue<BigNumberish>,
      swapData: IRouter.SwapDataStruct,
      pythUpdateData: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    repayBadDebt(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      interestRateMode: PromiseOrValue<BigNumberish>,
      onBehalfOf: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    router(overrides?: CallOverrides): Promise<string>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawNativeToken(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;
  };

  estimateGas: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    LIQUIDATOR(overrides?: CallOverrides): Promise<BigNumber>;

    POOL(overrides?: CallOverrides): Promise<BigNumber>;

    approveAsset(
      assetAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeOperation(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      premium: PromiseOrValue<BigNumberish>,
      initiator: PromiseOrValue<string>,
      params: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isAdmin(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isLiquidator(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liquidate(
      collateralAsset: PromiseOrValue<string>,
      debtAsset: PromiseOrValue<string>,
      user: PromiseOrValue<string>,
      debtToCover: PromiseOrValue<BigNumberish>,
      pythUpdateData: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    liquidateAndSwap(
      collateralAsset: PromiseOrValue<string>,
      debtAsset: PromiseOrValue<string>,
      user: PromiseOrValue<string>,
      swapData: IRouter.SwapDataStruct,
      pythUpdateData: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    liquidateAndSwapWithFlashLoan(
      collateralAsset: PromiseOrValue<string>,
      debtAsset: PromiseOrValue<string>,
      user: PromiseOrValue<string>,
      debtToCover: PromiseOrValue<BigNumberish>,
      badDebtAllowance: PromiseOrValue<BigNumberish>,
      swapData: IRouter.SwapDataStruct,
      pythUpdateData: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    repayBadDebt(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      interestRateMode: PromiseOrValue<BigNumberish>,
      onBehalfOf: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    router(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawNativeToken(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ADDRESSES_PROVIDER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    LIQUIDATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    approveAsset(
      assetAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeOperation(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      premium: PromiseOrValue<BigNumberish>,
      initiator: PromiseOrValue<string>,
      params: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isAdmin(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isLiquidator(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidate(
      collateralAsset: PromiseOrValue<string>,
      debtAsset: PromiseOrValue<string>,
      user: PromiseOrValue<string>,
      debtToCover: PromiseOrValue<BigNumberish>,
      pythUpdateData: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    liquidateAndSwap(
      collateralAsset: PromiseOrValue<string>,
      debtAsset: PromiseOrValue<string>,
      user: PromiseOrValue<string>,
      swapData: IRouter.SwapDataStruct,
      pythUpdateData: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    liquidateAndSwapWithFlashLoan(
      collateralAsset: PromiseOrValue<string>,
      debtAsset: PromiseOrValue<string>,
      user: PromiseOrValue<string>,
      debtToCover: PromiseOrValue<BigNumberish>,
      badDebtAllowance: PromiseOrValue<BigNumberish>,
      swapData: IRouter.SwapDataStruct,
      pythUpdateData: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    repayBadDebt(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      interestRateMode: PromiseOrValue<BigNumberish>,
      onBehalfOf: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    router(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawNativeToken(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}