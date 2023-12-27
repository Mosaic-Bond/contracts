/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPythOracleGetter,
  IPythOracleGetterInterface,
} from "../../../contracts/IPythOracle.sol/IPythOracleGetter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "getAssetPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IPythOracleGetter__factory {
  static readonly abi = _abi;
  static createInterface(): IPythOracleGetterInterface {
    return new utils.Interface(_abi) as IPythOracleGetterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPythOracleGetter {
    return new Contract(address, _abi, signerOrProvider) as IPythOracleGetter;
  }
}