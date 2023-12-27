/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../../common";
import type {
  IsolationModeLogic,
  IsolationModeLogicInterface,
} from "../../../../../../../../contracts/lend/aave-core-v3/contracts/protocol/libraries/logic/IsolationModeLogic";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalDebt",
        type: "uint256",
      },
    ],
    name: "IsolationModeTotalDebtUpdated",
    type: "event",
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122076aca61210726fb0df1e114780370cdf018f8f79a1c90d9cc29022918a929e4a64736f6c634300080a0033";

type IsolationModeLogicConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IsolationModeLogicConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class IsolationModeLogic__factory extends ContractFactory {
  constructor(...args: IsolationModeLogicConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<IsolationModeLogic> {
    return super.deploy(overrides || {}) as Promise<IsolationModeLogic>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): IsolationModeLogic {
    return super.attach(address) as IsolationModeLogic;
  }
  override connect(signer: Signer): IsolationModeLogic__factory {
    return super.connect(signer) as IsolationModeLogic__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IsolationModeLogicInterface {
    return new utils.Interface(_abi) as IsolationModeLogicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IsolationModeLogic {
    return new Contract(address, _abi, signerOrProvider) as IsolationModeLogic;
  }
}
