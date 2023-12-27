import { AssetType, eMantleNetwork, eTelosNetwork, ITelosConfiguration, TransferStrategy } from "../../helpers/types";
import { ZERO_ADDRESS } from "../../helpers";
import {
    strategyETH,
    strategyUSDC,
    strategyTLOS,
    strategyUSDT,
    strategyBTCb
} from "./reservesConfig";
import { rateStrategyStableOne, rateStrategyStableTwo, rateStrategyVolatileOne } from "./rateStrategies";
import { ethers } from "ethers";

export const TestnetMosaicTelos: ITelosConfiguration = {
    MarketId: "Main Market",
    ATokenNamePrefix: "Mosaic",
    StableDebtTokenNamePrefix: "Mosaic",
    VariableDebtTokenNamePrefix: "Mosaic",
    SymbolPrefix: "mosa",
    
    ProviderId: 40,
    ReservesConfig: {
        ETH: strategyETH,
        TLOS: strategyTLOS,
        USDC: strategyUSDC,
        USDT: strategyUSDT,
        BTCb: strategyBTCb,
    },
    ReserveAssets: {
        [eTelosNetwork.telosTestnet]: {
            ETH: "0xbe14BA84d7000898ec6A35B1C44B295b8E239E31",
            BTCb: "0x6B206d802682C2b5C6a9AF46C1c03206dcb40Bcb",
            USDC: "0x2dd5D0EF7BAE5c5B93270e82699528B3bd766CFa",
            USDT: "0x8214Bf94ad62ff5932826B204eAF4034b8DE9Db6",
            TLOS: "0x8F91A345f3Bc2A7c89f4f5eDf60cCc0Ef36C65a8"
        },
    },
    EModes: {
        StableEMode: {
            id: "1",
            ltv: "9700",
            liquidationThreshold: "9800",
            liquidationBonus: "10100",
            label: "Stablecoins",
            assets: ["USDC", "USDT"],
        },
    },
    PriceOracle: {
      kind: "DIAOracle",
      address: "0x14D42b3eC03899aBDD3d10E62791973e02De7718",
      OracleQuoteCurrencyAddress: ethers.constants.AddressZero,
      OracleQuoteUnit: "0",
      config: {
          USDC: "USDC/USD",
          ETH: "WETH/USD",
          BTCb: "BTC/USD",
          USDT: "USDT/USD",
          TLOS: "TLOS/USD"
      }
    },
    FallbackOracle: {
      kind: "PriceOracle",
      address: ZERO_ADDRESS,
      config: {},
      OracleQuoteCurrencyAddress: ethers.constants.AddressZero,
      OracleQuoteUnit: "0",
    },
    ReserveFactorTreasuryAddress: {
        [eTelosNetwork.telosTestnet]: ZERO_ADDRESS
    },
    WrappedNativeTokenSymbol: "",
    IncentivesConfig: {
        enabled: {
          [eTelosNetwork.telosTestnet]: true
        },
        rewards: {
          [eTelosNetwork.telosTestnet]: {
            veMOSA: "0x3acAD17a2974Ad11c7bCB7d14f81ec720Db1B1F8",
          },
        },
        rewardsOracle: {
          [eTelosNetwork.telosTestnet]: {
            veREAX: ZERO_ADDRESS,
          }
        },
        incentivesInput: {
          [eTelosNetwork.telosTestnet]: [],
        },
      },
    FlashLoanPremiums: {
      total: 0.0005e4,
      protocol: 0.0004e4,
    },
    RateStrategies: {
        rateStrategyVolatileOne,
        rateStrategyStableOne,
        rateStrategyStableTwo,
    },
};


export default TestnetMosaicTelos;

