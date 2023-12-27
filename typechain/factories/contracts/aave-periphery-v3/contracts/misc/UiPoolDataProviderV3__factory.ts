/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  UiPoolDataProviderV3,
  UiPoolDataProviderV3Interface,
} from "../../../../../contracts/aave-periphery-v3/contracts/misc/UiPoolDataProviderV3";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEACAggregatorProxy",
        name: "_networkBaseTokenPriceInUsdProxyAggregator",
        type: "address",
      },
      {
        internalType: "contract IEACAggregatorProxy",
        name: "_marketReferenceCurrencyPriceInUsdProxyAggregator",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ETH_CURRENCY_UNIT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MKR_ADDRESS",
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
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_bytes32",
        type: "bytes32",
      },
    ],
    name: "bytes32ToString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPoolAddressesProvider",
        name: "provider",
        type: "address",
      },
    ],
    name: "getReservesData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "underlyingAsset",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "decimals",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "baseLTVasCollateral",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reserveLiquidationThreshold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reserveLiquidationBonus",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reserveFactor",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "usageAsCollateralEnabled",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "borrowingEnabled",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "stableBorrowRateEnabled",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isActive",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isFrozen",
            type: "bool",
          },
          {
            internalType: "uint128",
            name: "liquidityIndex",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "variableBorrowIndex",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "liquidityRate",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "variableBorrowRate",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "stableBorrowRate",
            type: "uint128",
          },
          {
            internalType: "uint40",
            name: "lastUpdateTimestamp",
            type: "uint40",
          },
          {
            internalType: "address",
            name: "aTokenAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "stableDebtTokenAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "variableDebtTokenAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "interestRateStrategyAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "availableLiquidity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalPrincipalStableDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "averageStableRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stableDebtLastUpdateTimestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalScaledVariableDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "priceInMarketReferenceCurrency",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "priceOracle",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "variableRateSlope1",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "variableRateSlope2",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stableRateSlope1",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stableRateSlope2",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "baseStableBorrowRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "baseVariableBorrowRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "optimalUsageRatio",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isPaused",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isSiloedBorrowing",
            type: "bool",
          },
          {
            internalType: "uint128",
            name: "accruedToTreasury",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "unbacked",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "isolationModeTotalDebt",
            type: "uint128",
          },
          {
            internalType: "bool",
            name: "flashLoanEnabled",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "debtCeiling",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "debtCeilingDecimals",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "eModeCategoryId",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "borrowCap",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "supplyCap",
            type: "uint256",
          },
          {
            internalType: "uint16",
            name: "eModeLtv",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "eModeLiquidationThreshold",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "eModeLiquidationBonus",
            type: "uint16",
          },
          {
            internalType: "address",
            name: "eModePriceSource",
            type: "address",
          },
          {
            internalType: "string",
            name: "eModeLabel",
            type: "string",
          },
          {
            internalType: "bool",
            name: "borrowableInIsolation",
            type: "bool",
          },
        ],
        internalType: "struct IUiPoolDataProviderV3.AggregatedReserveData[]",
        name: "",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "marketReferenceCurrencyUnit",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "marketReferenceCurrencyPriceInUsd",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "networkBaseTokenPriceInUsd",
            type: "int256",
          },
          {
            internalType: "uint8",
            name: "networkBaseTokenPriceDecimals",
            type: "uint8",
          },
        ],
        internalType: "struct IUiPoolDataProviderV3.BaseCurrencyInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPoolAddressesProvider",
        name: "provider",
        type: "address",
      },
    ],
    name: "getReservesList",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPoolAddressesProvider",
        name: "provider",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getUserReservesData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "underlyingAsset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "scaledATokenBalance",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "usageAsCollateralEnabledOnUser",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "stableBorrowRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "scaledVariableDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "principalStableDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stableBorrowLastUpdateTimestamp",
            type: "uint256",
          },
        ],
        internalType: "struct IUiPoolDataProviderV3.UserReserveData[]",
        name: "",
        type: "tuple[]",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "marketReferenceCurrencyPriceInUsdProxyAggregator",
    outputs: [
      {
        internalType: "contract IEACAggregatorProxy",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "networkBaseTokenPriceInUsdProxyAggregator",
    outputs: [
      {
        internalType: "contract IEACAggregatorProxy",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b506040516200314038038062003140833981016040819052620000349162000069565b6001600160a01b039182166080521660a052620000a1565b80516001600160a01b03811681146200006457600080fd5b919050565b600080604083850312156200007d57600080fd5b62000088836200004c565b915062000098602084016200004c565b90509250929050565b60805160a051613065620000db6000396000818161017c015261223901526000818160b40152818161201f01526120b701526130656000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063825ffd921161005b578063825ffd921461013c5780639201de5514610157578063d22cf68a14610177578063ec489c211461019e57600080fd5b80630496f53a1461008d5780633c1740ed146100af57806351974cc0146100fb578063586c14421461011c575b600080fd5b61009c670de0b6b3a764000081565b6040519081526020015b60405180910390f35b6100d67f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100a6565b61010e61010936600461241c565b6101bf565b6040516100a6929190612455565b61012f61012a366004612501565b6109e2565b6040516100a6919061251e565b6100d6739f8f72aa9304c8b593d555f12ef6589cc3a579a281565b61016a610165366004612578565b610aef565b6040516100a6919061260b565b6100d67f000000000000000000000000000000000000000000000000000000000000000081565b6101b16101ac366004612501565b610c67565b6040516100a692919061261e565b60606000808473ffffffffffffffffffffffffffffffffffffffff1663026b1d5f6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561020f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061023391906129ec565b905060008173ffffffffffffffffffffffffffffffffffffffff1663d1946dbc6040518163ffffffff1660e01b8152600401600060405180830381865afa158015610282573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526102c89190810190612ad4565b6040517f4417a58300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8781166004830152919250600091841690634417a58390602401602060405180830381865afa15801561033a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061035e9190612bc8565b6040517feddf1b7900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff888116600483015291925060009185169063eddf1b7990602401602060405180830381865afa1580156103d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f49190612be4565b9050600073ffffffffffffffffffffffffffffffffffffffff881661041a57600061041d565b83515b67ffffffffffffffff81111561043557610435612a09565b6040519080825280602002602001820160405280156104be57816020015b6104ab6040518060e00160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600015158152602001600081526020016000815260200160008152602001600081525090565b8152602001906001900390816104535790505b50905060005b84518110156109d45760008673ffffffffffffffffffffffffffffffffffffffff166335ea6a758784815181106104fd576104fd612bfd565b60200260200101516040518263ffffffff1660e01b815260040161053d919073ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b6101e060405180830381865afa15801561055b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057f9190612c73565b905085828151811061059357610593612bfd565b60200260200101518383815181106105ad576105ad612bfd565b602090810291909101015173ffffffffffffffffffffffffffffffffffffffff91821690526101008201516040517f1da24f3e0000000000000000000000000000000000000000000000000000000081528c83166004820152911690631da24f3e90602401602060405180830381865afa15801561062f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106539190612be4565b83838151811061066557610665612bfd565b602090810291909101810151015261067d85836122e8565b83838151811061068f5761068f612bfd565b60209081029190910101519015156040909101526106ad8583612375565b156109c1576101408101516040517f1da24f3e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8c8116600483015290911690631da24f3e90602401602060405180830381865afa158015610725573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107499190612be4565b83838151811061075b5761075b612bfd565b6020908102919091010151608001526101208101516040517fc634dfaa00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8c811660048301529091169063c634dfaa90602401602060405180830381865afa1580156107dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108019190612be4565b83838151811061081357610813612bfd565b602002602001015160a001818152505082828151811061083557610835612bfd565b602002602001015160a001516000146109c1576101208101516040517fe78c9b3b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8c811660048301529091169063e78c9b3b90602401602060405180830381865afa1580156108bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108df9190612be4565b8383815181106108f1576108f1612bfd565b6020908102919091010151606001526101208101516040517f79ce6b8c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8c81166004830152909116906379ce6b8c90602401602060405180830381865afa158015610973573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109979190612d96565b64ffffffffff168383815181106109b0576109b0612bfd565b602002602001015160c00181815250505b50806109cc81612de0565b9150506104c4565b509890975095505050505050565b606060008273ffffffffffffffffffffffffffffffffffffffff1663026b1d5f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5591906129ec565b90508073ffffffffffffffffffffffffffffffffffffffff1663d1946dbc6040518163ffffffff1660e01b8152600401600060405180830381865afa158015610aa2573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610ae89190810190612ad4565b9392505050565b606060005b60208160ff16108015610b405750828160ff1660208110610b1757610b17612bfd565b1a60f81b7fff000000000000000000000000000000000000000000000000000000000000001615155b15610b575780610b4f81612e19565b915050610af4565b60008160ff1667ffffffffffffffff811115610b7557610b75612a09565b6040519080825280601f01601f191660200182016040528015610b9f576020820181803683370190505b509050600091505b60208260ff16108015610bf35750838260ff1660208110610bca57610bca612bfd565b1a60f81b7fff000000000000000000000000000000000000000000000000000000000000001615155b15610ae857838260ff1660208110610c0d57610c0d612bfd565b1a60f81b818360ff1681518110610c2657610c26612bfd565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535081610c5f81612e19565b925050610ba7565b6060610c976040518060800160405280600081526020016000815260200160008152602001600060ff1681525090565b60008373ffffffffffffffffffffffffffffffffffffffff1663fca513a86040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ce4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d0891906129ec565b905060008473ffffffffffffffffffffffffffffffffffffffff1663026b1d5f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d57573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d7b91906129ec565b905060008573ffffffffffffffffffffffffffffffffffffffff1663e860accb6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610dca573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dee91906129ec565b905060008273ffffffffffffffffffffffffffffffffffffffff1663d1946dbc6040518163ffffffff1660e01b8152600401600060405180830381865afa158015610e3d573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610e839190810190612ad4565b90506000815167ffffffffffffffff811115610ea157610ea1612a09565b60405190808252806020026020018201604052801561109d57816020015b604080516106c0810182526000808252606060208084018290529383018190528083018290526080830182905260a0830182905260c0830182905260e08301829052610100830182905261012083018290526101408301829052610160830182905261018083018290526101a083018290526101c083018290526101e08301829052610200830182905261022083018290526102408301829052610260830182905261028083018290526102a083018290526102c083018290526102e08301829052610300830182905261032083018290526103408301829052610360830182905261038083018290526103a083018290526103c083018290526103e08301829052610400830182905261042083018290526104408301829052610460830182905261048083018290526104a083018290526104c083018290526104e08301829052610500830182905261052083018290526105408301829052610560830182905261058083018290526105a083018290526105c083018290526105e0830182905261060083018290526106208301829052610640830182905261066083018290526106808301526106a082015282527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff909201910181610ebf5790505b50905060005b8251811015611fee5760008282815181106110c0576110c0612bfd565b602002602001015190508382815181106110dc576110dc612bfd565b602090810291909101015173ffffffffffffffffffffffffffffffffffffffff9081168083526040517f35ea6a7500000000000000000000000000000000000000000000000000000000815260048101919091526000918816906335ea6a75906024016101e060405180830381865afa15801561115d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111819190612c73565b60208101516fffffffffffffffffffffffffffffffff9081166101a0850152606082015181166101c085015260408083015182166101e08601526080830151821661020086015260a083015190911661022085015260c082015164ffffffffff1661024085015261010082015173ffffffffffffffffffffffffffffffffffffffff908116610260860152610120830151811661028086015261014083015181166102a086015261016083015181166102c0860152845191517fb3596f0700000000000000000000000000000000000000000000000000000000815291811660048301529192509089169063b3596f0790602401602060405180830381865afa158015611292573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112b69190612be4565b61038083015281516040517f92bf2be000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9182166004820152908916906392bf2be090602401602060405180830381865afa15801561132b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061134f91906129ec565b73ffffffffffffffffffffffffffffffffffffffff9081166103a084015282516102608401516040517f70a0823100000000000000000000000000000000000000000000000000000000815290831660048201529116906370a0823190602401602060405180830381865afa1580156113cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113f09190612be4565b826102e001818152505081610280015173ffffffffffffffffffffffffffffffffffffffff1663797743386040518163ffffffff1660e01b8152600401608060405180830381865afa15801561144a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061146e9190612e39565b64ffffffffff16610340860152610320850152506103008301526102a0820151604080517fb1bf962d000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff9092169163b1bf962d916004808201926020929091908290030181865afa1580156114fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061151f9190612be4565b610360830152815173ffffffffffffffffffffffffffffffffffffffff16739f8f72aa9304c8b593d555f12ef6589cc3a579a2141561166a576000826000015173ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b8152600401602060405180830381865afa1580156115a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115cd9190612be4565b90506000836000015173ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b8152600401602060405180830381865afa158015611620573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116449190612be4565b905061164f82610aef565b604085015261165d81610aef565b6020850152506117a29050565b816000015173ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa1580156116b9573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526116ff9190810190612f02565b8260400181905250816000015173ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b8152600401600060405180830381865afa158015611756573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261179c9190810190612f02565b60208301525b8051805161ffff604082811c821660e087015260ff603084901c81166060880152602084811c841660c0890152601085901c841660a08901529284166080880181905215156101008801528451671000000000000000811615156104a08901526708000000000000008116151561014089015267040000000000000081161515610120890152670200000000000000811615156101808901526701000000000000001615156101608801526102c087015182517f0b3429a2000000000000000000000000000000000000000000000000000000008152925160a89590951c9091169373ffffffffffffffffffffffffffffffffffffffff90911692630b3429a292600480820193918290030181865afa9250505080156118fd575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526118fa91810190612be4565b60015b6119065761190d565b6103c08501525b836102c0015173ffffffffffffffffffffffffffffffffffffffff1663f42024096040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611997575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261199491810190612be4565b60015b6119a0576119a7565b6103e08501525b836102c0015173ffffffffffffffffffffffffffffffffffffffff1663d5cd73916040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611a31575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252611a2e91810190612be4565b60015b611a3a57611a41565b6104008501525b836102c0015173ffffffffffffffffffffffffffffffffffffffff166314e32da46040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611acb575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252611ac891810190612be4565b60015b611ad457611adb565b6104208501525b836102c0015173ffffffffffffffffffffffffffffffffffffffff1663acd786866040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611b65575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252611b6291810190612be4565b60015b611b6e57611b75565b6104408501525b836102c0015173ffffffffffffffffffffffffffffffffffffffff166334762ca56040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611bff575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252611bfc91810190612be4565b60015b611c0857611c0f565b6104608501525b836102c0015173ffffffffffffffffffffffffffffffffffffffff166354c365c66040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611c99575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252611c9691810190612be4565b60015b611ca257611ca9565b6104808501525b60ff81166105a0850152815160d41c64ffffffffff16846105600181815250508773ffffffffffffffffffffffffffffffffffffffff166369b169e16040518163ffffffff1660e01b8152600401602060405180830381865afa158015611d14573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d389190612be4565b6105808501528151640fffffffff605082901c81169160741c166105e08601526105c085015283516040517fd7ed3ef400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201529089169063d7ed3ef490602401602060405180830381865afa925050508015611e07575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252611e0491810190612f37565b60015b611e49573d808015611e35576040519150601f19603f3d011682016040523d82523d6000602084013e611e3a565b606091505b50506001610540850152611e52565b15156105408501525b815167400000000000000016151515156104c08501526101a08301516fffffffffffffffffffffffffffffffff9081166105008601526101c08401518116610520860152610180840151166104e08501526105a08401516040517f6c6f6ae100000000000000000000000000000000000000000000000000000000815260ff909116600482015260009073ffffffffffffffffffffffffffffffffffffffff8b1690636c6f6ae190602401600060405180830381865afa158015611f1a573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052611f609190810190612f59565b805161ffff90811661060088015260208201518116610620880152604082015116610640870152606081015173ffffffffffffffffffffffffffffffffffffffff1661066087015260808101516106808701529050611fc9835167200000000000000016151590565b15156106a09095019490945250839250611fe69150829050612de0565b9150506110a3565b5061201d6040518060800160405280600081526020016000815260200160008152602001600060ff1681525090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612088573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120ac9190612be4565b8160400181815250507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015612120573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612144919061300c565b60ff166060820152604080517f8c89b64f000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff881691638c89b64f9160048083019260209291908290030181865afa9250505080156121f1575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526121ee91810190612be4565b60015b6122d1573d80801561221f576040519150601f19603f3d011682016040523d82523d6000602084013e612224565b606091505b50670de0b6b3a76400008260000181815250507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156122a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122c69190612be4565b6020830152506122da565b80825260208201525b909890975095505050505050565b60408051808201909152600281527f3734000000000000000000000000000000000000000000000000000000000000602082015260009060808310612363576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161235a919061260b565b60405180910390fd5b50509051600191821b82011c16151590565b60408051808201909152600281527f37340000000000000000000000000000000000000000000000000000000000006020820152600090608083106123e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161235a919061260b565b50509051600191821b1c16151590565b73ffffffffffffffffffffffffffffffffffffffff8116811461241957600080fd5b50565b6000806040838503121561242f57600080fd5b823561243a816123f7565b9150602083013561244a816123f7565b809150509250929050565b6040808252835182820181905260009190606090818501906020808901865b838110156124e2578151805173ffffffffffffffffffffffffffffffffffffffff16865283810151848701528781015115158887015286810151878701526080808201519087015260a0808201519087015260c0908101519086015260e09094019390820190600101612474565b50508295506124f58188018960ff169052565b50505050509392505050565b60006020828403121561251357600080fd5b8135610ae8816123f7565b6020808252825182820181905260009190848201906040850190845b8181101561256c57835173ffffffffffffffffffffffffffffffffffffffff168352928401929184019160010161253a565b50909695505050505050565b60006020828403121561258a57600080fd5b5035919050565b60005b838110156125ac578181015183820152602001612594565b838111156125bb576000848401525b50505050565b600081518084526125d9816020860160208601612591565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000610ae860208301846125c1565b600060a080830181845280865180835260c092508286019150828160051b8701016020808a0160005b8481101561299a578984037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff400186528151805173ffffffffffffffffffffffffffffffffffffffff1685526106c08482015181868801526126aa828801826125c1565b915050604080830151878303828901526126c483826125c1565b606085810151908a0152608080860151908a01528c8501518d8a01528b8501518c8a015260e080860151908a0152610100808601511515908a0152610120808601511515908a0152610140808601511515908a0152610160808601511515908a0152610180808601511515908a01526101a0808601516fffffffffffffffffffffffffffffffff908116918b01919091526101c0808701518216908b01526101e0808701518216908b0152610200808701518216908b0152610220808701518216908b01526102408087015164ffffffffff16908b01526102608087015173ffffffffffffffffffffffffffffffffffffffff908116918c0191909152610280808801518216908c01526102a0808801518216908c01526102c0808801518216908c01526102e080880151908c015261030080880151908c015261032080880151908c015261034080880151908c015261036080880151908c015261038080880151908c01526103a0808801518216908c01526103c080880151908c01526103e080880151908c015261040080880151908c015261042080880151908c015261044080880151908c015261046080880151908c015261048080880151908c01526104a0808801511515908c01526104c0808801511515908c01526104e0808801518316908c0152610500808801518316908c015261052080880151909216918b0191909152610540808701511515908b015261056080870151908b015261058080870151908b01526105a08087015160ff16908b01526105c080870151908b01526105e080870151908b01526106008087015161ffff908116918c0191909152610620808801518216908c015261064080880151909116908b015261066080870151909116908a0152610680808601518a8303828c01529194509250905061296c83826125c1565b925050506106a08083015192506129868188018415159052565b509684019694505090820190600101612647565b50508196506129cf8189018a80518252602081015160208301526040810151604083015260ff60608201511660608301525050565b5050505050509392505050565b80516129e7816123f7565b919050565b6000602082840312156129fe57600080fd5b8151610ae8816123f7565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516101e0810167ffffffffffffffff81118282101715612a5c57612a5c612a09565b60405290565b60405160a0810167ffffffffffffffff81118282101715612a5c57612a5c612a09565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715612acc57612acc612a09565b604052919050565b60006020808385031215612ae757600080fd5b825167ffffffffffffffff80821115612aff57600080fd5b818501915085601f830112612b1357600080fd5b815181811115612b2557612b25612a09565b8060051b9150612b36848301612a85565b8181529183018401918481019088841115612b5057600080fd5b938501935b83851015612b7a5784519250612b6a836123f7565b8282529385019390850190612b55565b98975050505050505050565b600060208284031215612b9857600080fd5b6040516020810181811067ffffffffffffffff82111715612bbb57612bbb612a09565b6040529151825250919050565b600060208284031215612bda57600080fd5b610ae88383612b86565b600060208284031215612bf657600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b80516fffffffffffffffffffffffffffffffff811681146129e757600080fd5b805164ffffffffff811681146129e757600080fd5b805161ffff811681146129e757600080fd5b60006101e08284031215612c8657600080fd5b612c8e612a38565b612c988484612b86565b8152612ca660208401612c2c565b6020820152612cb760408401612c2c565b6040820152612cc860608401612c2c565b6060820152612cd960808401612c2c565b6080820152612cea60a08401612c2c565b60a0820152612cfb60c08401612c4c565b60c0820152612d0c60e08401612c61565b60e0820152610100612d1f8185016129dc565b90820152610120612d318482016129dc565b90820152610140612d438482016129dc565b90820152610160612d558482016129dc565b90820152610180612d67848201612c2c565b908201526101a0612d79848201612c2c565b908201526101c0612d8b848201612c2c565b908201529392505050565b600060208284031215612da857600080fd5b610ae882612c4c565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612e1257612e12612db1565b5060010190565b600060ff821660ff811415612e3057612e30612db1565b60010192915050565b60008060008060808587031215612e4f57600080fd5b845193506020850151925060408501519150612e6d60608601612c4c565b905092959194509250565b600082601f830112612e8957600080fd5b815167ffffffffffffffff811115612ea357612ea3612a09565b612ed460207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601612a85565b818152846020838601011115612ee957600080fd5b612efa826020830160208701612591565b949350505050565b600060208284031215612f1457600080fd5b815167ffffffffffffffff811115612f2b57600080fd5b612efa84828501612e78565b600060208284031215612f4957600080fd5b81518015158114610ae857600080fd5b600060208284031215612f6b57600080fd5b815167ffffffffffffffff80821115612f8357600080fd5b9083019060a08286031215612f9757600080fd5b612f9f612a62565b612fa883612c61565b8152612fb660208401612c61565b6020820152612fc760408401612c61565b60408201526060830151612fda816123f7565b6060820152608083015182811115612ff157600080fd5b612ffd87828601612e78565b60808301525095945050505050565b60006020828403121561301e57600080fd5b815160ff81168114610ae857600080fdfea2646970667358221220ecbefc575e54cab2ab9348fbd0c7e29f738d85a3dc77510c126ad3c44d73a64e64736f6c634300080a0033";

type UiPoolDataProviderV3ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UiPoolDataProviderV3ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UiPoolDataProviderV3__factory extends ContractFactory {
  constructor(...args: UiPoolDataProviderV3ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _networkBaseTokenPriceInUsdProxyAggregator: PromiseOrValue<string>,
    _marketReferenceCurrencyPriceInUsdProxyAggregator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UiPoolDataProviderV3> {
    return super.deploy(
      _networkBaseTokenPriceInUsdProxyAggregator,
      _marketReferenceCurrencyPriceInUsdProxyAggregator,
      overrides || {}
    ) as Promise<UiPoolDataProviderV3>;
  }
  override getDeployTransaction(
    _networkBaseTokenPriceInUsdProxyAggregator: PromiseOrValue<string>,
    _marketReferenceCurrencyPriceInUsdProxyAggregator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _networkBaseTokenPriceInUsdProxyAggregator,
      _marketReferenceCurrencyPriceInUsdProxyAggregator,
      overrides || {}
    );
  }
  override attach(address: string): UiPoolDataProviderV3 {
    return super.attach(address) as UiPoolDataProviderV3;
  }
  override connect(signer: Signer): UiPoolDataProviderV3__factory {
    return super.connect(signer) as UiPoolDataProviderV3__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UiPoolDataProviderV3Interface {
    return new utils.Interface(_abi) as UiPoolDataProviderV3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UiPoolDataProviderV3 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UiPoolDataProviderV3;
  }
}
