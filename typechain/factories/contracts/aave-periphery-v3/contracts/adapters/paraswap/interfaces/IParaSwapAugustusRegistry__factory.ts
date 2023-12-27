/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IParaSwapAugustusRegistry,
  IParaSwapAugustusRegistryInterface,
} from "../../../../../../../contracts/aave-periphery-v3/contracts/adapters/paraswap/interfaces/IParaSwapAugustusRegistry";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "augustus",
        type: "address",
      },
    ],
    name: "isValidAugustus",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IParaSwapAugustusRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): IParaSwapAugustusRegistryInterface {
    return new utils.Interface(_abi) as IParaSwapAugustusRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IParaSwapAugustusRegistry {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IParaSwapAugustusRegistry;
  }
}
