/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BigNumber, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface SynthLogicInterface extends utils.Interface {
  functions: {};

  events: {
    "Liquidate(address,address,address,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Liquidate"): EventFragment;
}

export interface LiquidateEventObject {
  liquidator: string;
  account: string;
  outAsset: string;
  outAmount: BigNumber;
  outPenalty: BigNumber;
  outRefund: BigNumber;
}
export type LiquidateEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber, BigNumber],
  LiquidateEventObject
>;

export type LiquidateEventFilter = TypedEventFilter<LiquidateEvent>;

export interface SynthLogic extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SynthLogicInterface;

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

  functions: {};

  callStatic: {};

  filters: {
    "Liquidate(address,address,address,uint256,uint256,uint256)"(
      liquidator?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null,
      outAsset?: PromiseOrValue<string> | null,
      outAmount?: null,
      outPenalty?: null,
      outRefund?: null
    ): LiquidateEventFilter;
    Liquidate(
      liquidator?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null,
      outAsset?: PromiseOrValue<string> | null,
      outAmount?: null,
      outPenalty?: null,
      outRefund?: null
    ): LiquidateEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}