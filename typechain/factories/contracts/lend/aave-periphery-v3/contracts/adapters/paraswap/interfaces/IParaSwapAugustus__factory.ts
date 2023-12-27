/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IParaSwapAugustus,
  IParaSwapAugustusInterface,
} from "../../../../../../../../contracts/lend/aave-periphery-v3/contracts/adapters/paraswap/interfaces/IParaSwapAugustus";

const _abi = [
  {
    inputs: [],
    name: "getTokenTransferProxy",
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
] as const;

export class IParaSwapAugustus__factory {
  static readonly abi = _abi;
  static createInterface(): IParaSwapAugustusInterface {
    return new utils.Interface(_abi) as IParaSwapAugustusInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IParaSwapAugustus {
    return new Contract(address, _abi, signerOrProvider) as IParaSwapAugustus;
  }
}
