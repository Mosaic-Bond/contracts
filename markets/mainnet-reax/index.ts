import { AssetType, eEthereumNetwork, eMantleNetwork, IMosaicConfiguration, TransferStrategy } from "../../helpers/types";
import { ZERO_ADDRESS } from "../../helpers";
import {
    strategyETH,
    strategyUSDT,
    strategyWBTC
} from "./reservesConfig";
import { rateStrategyStableOne, rateStrategyStableTwo, rateStrategyVolatileOne } from "./rateStrategies";

export const MainnetReax: IMosaicConfiguration = {
    SynthexAddress: "0xd5Ad970415e95e67889D02F759DAC312cefF0fdF",
    PythId: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
    MarketId: "Mantle Reax Market",
    ATokenNamePrefix: "Reax",
    StableDebtTokenNamePrefix: "Reax",
    VariableDebtTokenNamePrefix: "Reax",
    SymbolPrefix: "rMNT",
    OracleQuoteUnit: [],
    OracleQuoteCurrencyAddress: [],
    OracleQuoteCurrency: [],
    ProviderId: 40,
    ReservesConfig: {
        ETH: strategyETH,
        USDT: strategyUSDT,
        WBTC: strategyWBTC,
    },
    ReserveAssets: {
        [eMantleNetwork.mantle]: {
            ETH: "0xdEAddEaDdeadDEadDEADDEAddEADDEAddead1111",
            USDT: "0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE",
            WBTC: "0xCAbAE6f6Ea1ecaB08Ad02fE02ce9A44F09aebfA2",
        },
    },
    EModes: {
        // StableEMode: {
        //     id: "1",
        //     ltv: "9700",
        //     liquidationThreshold: "9800",
        //     liquidationBonus: "10100",
        //     label: "Stablecoins",
        //     assets: ["USDC", "CUSD", "SUSD"],
        // },
        // ethereumEMode: {
        //     id: "2",
        //     ltv: "9200",
        //     liquidationThreshold: "9550",
        //     liquidationBonus: "10100",
        //     label: "Ethereumcoins",
        //     assets: ["ETH", "CETH"],
        // }
    },
    ChainlinkAggregator: {
        [eMantleNetwork.mantle]: {
            // USDC: "0x1692Bdd32F31b831caAc1b0c9fAF68613682813b",
            // ETH: "0x62CAe0FA2da220f43a51F86Db2EDb36DcA9A5A08",
            // CETH: "0x62CAe0FA2da220f43a51F86Db2EDb36DcA9A5A08",
            // CBTC: "0x6550bc2301936011c1334555e62A87705A81C12C",
            // USDT: "0x0a023a3423D9b27A0BE48c768CCF2dD7877fEf5E",
        }
    },
    PythAggregator: {
        [eMantleNetwork.mantle]: {
            // USDC: "0x41f3625971ca2ed2263e78573fe5ce23e13d2558ed3f2e47ab0f84fb9e7ae722",
            // MNT: "0x0e9ec6a3f2fba0a3df73db71c84d736b8fc1970577639c9456a2fee0c8f66d93",
            // ETH: "0xca80ba6dc32e08d06f1aa886011eed1d77c77be9eb761cc10d72b7d0a2fd57a6",
            USDT: "0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b",
            WBTC: "0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43",
            ETH: "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace",
            // SAAPL: "0xafcc9a5bb5eefd55e12b6f0b4c8e6bccf72b785134ee232a5d175afd082e8832",
            // SGOOGL: "0xabb1a3382ab1c96282e4ee8c847acc0efdb35f0564924b35f3246e8f401b2a3d",
            // CXRP: "0xbfaf7739cb6fe3e1c57a0ac08e1d931e9e6062d476fa57804e165ab572b5b621",
            // SCOIN: "0xa29b53fbc56604ef1f2b65e89e48b0f09bb77b3fb890f4c70ee8cbd68a12a94b",
            // SMSFT: "0x4e10201a9ad79892f1b4e9a468908f061f330272c7987ddc6506a254f77becd7",
            // CBNB: "0xecf553770d9b10965f8fb64771e93f5690a182edc32be4a3236e0caaa6e0581a",
        },
    },
    ReserveFactorTreasuryAddress: {
        [eMantleNetwork.mantle]: ZERO_ADDRESS
    },
    WrappedNativeTokenSymbol: "",
    IncentivesConfig: {
        enabled: {
          [eMantleNetwork.mantle]: true
        },
        rewards: {
          [eMantleNetwork.mantle]: {
            veREAX: "0x27F3D47F71DA7EcA2C5F56d1a28aE6B5c5f4AB23",
          },
        },
        rewardsOracle: {
          [eMantleNetwork.mantle]: {
            veREAX: ZERO_ADDRESS,
          }
        },
        incentivesInput: {
          [eMantleNetwork.mantle]: [
            {
              emissionPerSecond: "100000000000000000",
              duration: 7890000,
              asset: "ETH",
              assetType: AssetType.AToken,
              reward: "veREAX",
              rewardOracle: "0",
              transferStrategy: TransferStrategy.PullRewardsStrategy,
              transferStrategyParams: "0",
            },
            {
              emissionPerSecond: "100000000000000000",
              duration: 7890000,
              asset: "ETH",
              assetType: AssetType.VariableDebtToken,
              reward: "veREAX",
              rewardOracle: "0",
              transferStrategy: TransferStrategy.PullRewardsStrategy,
              transferStrategyParams: "0",
            },
            // {
            //   emissionPerSecond: "100000000000000000",
            //   duration: 7890000,
            //   asset: "ETH",
            //   assetType: AssetType.StableDebtToken,
            //   reward: "veREAX",
            //   rewardOracle: "0",
            //   transferStrategy: TransferStrategy.PullRewardsStrategy,
            //   transferStrategyParams: "0",
            // },
            {
              emissionPerSecond: "100000000000000000",
              duration: 7890000,
              asset: "USDC",
              assetType: AssetType.AToken,
              reward: "veREAX",
              rewardOracle: "0",
              transferStrategy: TransferStrategy.PullRewardsStrategy,
              transferStrategyParams: "0",
            },
            {
              emissionPerSecond: "100000000000000000",
              duration: 7890000,
              asset: "USDC",
              assetType: AssetType.VariableDebtToken,
              reward: "veREAX",
              rewardOracle: "0",
              transferStrategy: TransferStrategy.PullRewardsStrategy,
              transferStrategyParams: "0",
            },
            // {
            //   emissionPerSecond: "100000000000000000",
            //   duration: 7890000,
            //   asset: "CBTC",
            //   assetType: AssetType.StableDebtToken,
            //   reward: "veREAX",
            //   rewardOracle: "0",
            //   transferStrategy: TransferStrategy.PullRewardsStrategy,
            //   transferStrategyParams: "0",
            // },
            {
              emissionPerSecond: "100000000000000000",
              duration: 7890000,
              asset: "MNT",
              assetType: AssetType.AToken,
              reward: "veREAX",
              rewardOracle: "0",
              transferStrategy: TransferStrategy.PullRewardsStrategy,
              transferStrategyParams: "0",
            },
            {
              emissionPerSecond: "100000000000000000",
              duration: 7890000,
              asset: "MNT",
              assetType: AssetType.VariableDebtToken,
              reward: "veREAX",
              rewardOracle: "0",
              transferStrategy: TransferStrategy.PullRewardsStrategy,
              transferStrategyParams: "0",
            },
            // {
            //   emissionPerSecond: "100000000000000000",
            //   duration: 7890000,
            //   asset: "CETH",
            //   assetType: AssetType.StableDebtToken,
            //   reward: "veREAX",
            //   rewardOracle: "0",
            //   transferStrategy: TransferStrategy.PullRewardsStrategy,
            //   transferStrategyParams: "0",
            // },
          ],
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


export default MainnetReax;

