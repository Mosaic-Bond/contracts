/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ITransferHook,
  ITransferHookInterface,
} from "../../../../../../../@aave/safety-module/contracts/proposals/extend-stkaave-distribution/StakedTokenV2Rev3.sol/ITransferHook";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "onTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ITransferHook__factory {
  static readonly abi = _abi;
  static createInterface(): ITransferHookInterface {
    return new utils.Interface(_abi) as ITransferHookInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITransferHook {
    return new Contract(address, _abi, signerOrProvider) as ITransferHook;
  }
}
