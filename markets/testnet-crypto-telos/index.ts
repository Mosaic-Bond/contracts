import { AssetType, eMantleNetwork, eTelosNetwork, IMosaicConfiguration, TransferStrategy } from "../../helpers/types";
import { ZERO_ADDRESS } from "../../helpers";
import { strategyCBTC, strategyCETH, strategyCUSD } from "./reservesConfig";
import { rateStrategyStableOne, rateStrategyStableTwo, rateStrategyVolatileOne } from "./rateStrategies";

export const TestnetCryptoTelos: IMosaicConfiguration = {
    SynthexAddress: "0x605F8E97e2FB05fb4bf7B980E6b7d7a26cE9a16D",
    PythId: "0xb39f69A45C063DEdad74Af8A86254B2B135A65b3",
    MarketId: "Main Market",
    ATokenNamePrefix: "Mosaic",
    StableDebtTokenNamePrefix: "Mosaic",
    VariableDebtTokenNamePrefix: "Mosaic",
    SymbolPrefix: "mosa",
    OracleQuoteUnit: ["8"],
    OracleQuoteCurrencyAddress: ["0xC99478c85d31238d52b20180C25D41166B154A5d"],
    OracleQuoteCurrency: ["CUSD"],
    ProviderId: 40,
    ReservesConfig: {
        CUSD: strategyCUSD,
        CBTC: strategyCBTC,
        CETH: strategyCETH,
    },
    ReserveAssets: {
        [eTelosNetwork.telosTestnet]: {
            CUSD: "0xC99478c85d31238d52b20180C25D41166B154A5d",
            CBTC: "0xF3B7738FfEb157F94f1DE75983C6d3FB389243c7",
            CETH: "0x16C28780228fdF4347005af657f3B925c119e4aE",
        },
    },
    EModes: {
        // StableEMode: {
        //     id: "1",
        //     ltv: "9700",
        //     liquidationThreshold: "9800",
        //     liquidationBonus: "10100",
        //     label: "Stablecoins",
        //     assets: ["USDC", "USDT"],
        // },
    },
    ChainlinkAggregator: {
        [eTelosNetwork.telosTestnet]: {
            // USDC: "0x1692Bdd32F31b831caAc1b0c9fAF68613682813b",
            // ETH: "0x62CAe0FA2da220f43a51F86Db2EDb36DcA9A5A08",
            // CETH: "0x62CAe0FA2da220f43a51F86Db2EDb36DcA9A5A08",
            // CBTC: "0x6550bc2301936011c1334555e62A87705A81C12C",
            // USDT: "0x0a023a3423D9b27A0BE48c768CCF2dD7877fEf5E",
            // TLOS: "0xb69DD71d54a1168830732B25d35868641D20a42a"
        }
    },
    PythAggregator: {
        [eTelosNetwork.telosTestnet]: {
          // MNT: "0x0e9ec6a3f2fba0a3df73db71c84d736b8fc1970577639c9456a2fee0c8f66d93",
          // USDC: "0x41f3625971ca2ed2263e78573fe5ce23e13d2558ed3f2e47ab0f84fb9e7ae722",
          // USDT: "0x41f3625971ca2ed2263e78573fe5ce23e13d2558ed3f2e47ab0f84fb9e7ae722",
          CETH: "0xca80ba6dc32e08d06f1aa886011eed1d77c77be9eb761cc10d72b7d0a2fd57a6",
          CBTC: "0xf9c0172ba10dfa4d19088d94f5bf61d3b54d5bd7483a322a982e1373ee8ea31b",
          // SAAPL: "0xafcc9a5bb5eefd55e12b6f0b4c8e6bccf72b785134ee232a5d175afd082e8832",
          // SGOOGL: "0xabb1a3382ab1c96282e4ee8c847acc0efdb35f0564924b35f3246e8f401b2a3d",
          // CXRP: "0xbfaf7739cb6fe3e1c57a0ac08e1d931e9e6062d476fa57804e165ab572b5b621",
          // SCOIN: "0xa29b53fbc56604ef1f2b65e89e48b0f09bb77b3fb890f4c70ee8cbd68a12a94b",
          // SMSFT: "0x4e10201a9ad79892f1b4e9a468908f061f330272c7987ddc6506a254f77becd7",
          // CBNB: "0xecf553770d9b10965f8fb64771e93f5690a182edc32be4a3236e0caaa6e0581a",
        },
    },
    ReserveFactorTreasuryAddress: {
        [eMantleNetwork.mantleTestnet]: ZERO_ADDRESS
    },
    WrappedNativeTokenSymbol: "",
    IncentivesConfig: {
        enabled: {
          [eTelosNetwork.telosTestnet]: true
        },
        rewards: {
          [eTelosNetwork.telosTestnet]: {
            veREAX: "0x3acAD17a2974Ad11c7bCB7d14f81ec720Db1B1F8",
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


export default TestnetCryptoTelos;

