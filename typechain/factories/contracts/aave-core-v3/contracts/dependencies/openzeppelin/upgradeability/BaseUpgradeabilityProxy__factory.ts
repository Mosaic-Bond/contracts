/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../common";
import type {
  BaseUpgradeabilityProxy,
  BaseUpgradeabilityProxyInterface,
} from "../../../../../../../contracts/aave-core-v3/contracts/dependencies/openzeppelin/upgradeability/BaseUpgradeabilityProxy";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060948061001e6000396000f3fe6080604052600a600c565b005b603960357f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b603b565b565b3660008037600080366000845af43d6000803e8080156059573d6000f35b3d6000fdfea2646970667358221220da0a8cf354c21cacdee29a281680acbbbfbe5540d7786c5e83541e462f9dfc6e64736f6c634300080a0033";

type BaseUpgradeabilityProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BaseUpgradeabilityProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BaseUpgradeabilityProxy__factory extends ContractFactory {
  constructor(...args: BaseUpgradeabilityProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BaseUpgradeabilityProxy> {
    return super.deploy(overrides || {}) as Promise<BaseUpgradeabilityProxy>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BaseUpgradeabilityProxy {
    return super.attach(address) as BaseUpgradeabilityProxy;
  }
  override connect(signer: Signer): BaseUpgradeabilityProxy__factory {
    return super.connect(signer) as BaseUpgradeabilityProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaseUpgradeabilityProxyInterface {
    return new utils.Interface(_abi) as BaseUpgradeabilityProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseUpgradeabilityProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BaseUpgradeabilityProxy;
  }
}
