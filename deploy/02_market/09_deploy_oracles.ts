import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { COMMON_DEPLOY_PARAMS } from "../../helpers/env";
import { V3_CORE_VERSION, ZERO_ADDRESS } from "../../helpers/constants";
import {
    FALLBACK_ORACLE_ID,
    ORACLE_ID,
    POOL_ADDRESSES_PROVIDER_ID,
} from "../../helpers/deploy-ids";
import {
    loadPoolConfig,
    ConfigNames,
    getParamPerNetwork,
    checkRequiredEnvironment,
    getReserveAddresses,
} from "../../helpers/market-config-helpers";
import { eNetwork, ICommonConfiguration, OracleConfig, SymbolMap } from '../../helpers/types';
import { getPairsTokenAggregator } from "../../helpers/init-helpers";
import { parseUnits } from "ethers/lib/utils";
import { MARKET_NAME } from "../../helpers/env";
import { PoolAddressesProvider } from "../../typechain";
import { waitForTx } from "../../helpers";

const func: DeployFunction = async function ({
    getNamedAccounts,
    deployments,
    ...hre
}: HardhatRuntimeEnvironment) {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
    const poolConfig = await loadPoolConfig(MARKET_NAME as ConfigNames);
    const network = (
        process.env.FORK ? process.env.FORK : hre.network.name
    ) as eNetwork;

    const { PriceOracle, FallbackOracle } = poolConfig as ICommonConfiguration;

    const reserveAssets = await getReserveAddresses(poolConfig, network);
    let fallbackOracle = ZERO_ADDRESS;

    // Deploy fallback oracle 
    if(FallbackOracle){
        let args = [];
        let factory = null;
        let [assets, sources] = getPairsTokenAggregator(reserveAssets, FallbackOracle.config);
        switch(FallbackOracle.kind){
            case "PythOracle":
                args = [FallbackOracle.address, assets, sources]
                break;
            case "PriceOracle":
                args = [assets, sources]
                break;
            case "DIAOracle":
                args = [FallbackOracle.address, assets, sources]
                break;
            default:
                throw new Error("Invalid FallbackOracle kind");
        }
        args.push(ZERO_ADDRESS);
        args.push(FallbackOracle.OracleQuoteCurrencyAddress);
        args.push(parseUnits("1", FallbackOracle.OracleQuoteUnit).toString());

        const deployResult = await deploy(FALLBACK_ORACLE_ID, {
            from: deployer,
            args: args,
            ...COMMON_DEPLOY_PARAMS,
            contract: FallbackOracle.kind,
        });

        fallbackOracle = deployResult.address;
    }
    const addressesProviderArtifact = await deployments.get(
        POOL_ADDRESSES_PROVIDER_ID
    );
    const addressesProviderInstance = (
        await hre.ethers.getContractAt(
            addressesProviderArtifact.abi,
            addressesProviderArtifact.address
        )
    ).connect(await hre.ethers.getSigner(deployer)) as PoolAddressesProvider;

    const pool = await addressesProviderInstance.getPool();

    let args = [];
    let factory = null;
    let [assets, sources] = getPairsTokenAggregator(reserveAssets, PriceOracle.config);
    switch(PriceOracle.kind){
        case "PythOracle":
            args = [PriceOracle.address, assets, sources]
            break;
        case "PriceOracle":
            args = [assets, sources]
            break;
        case "DIAOracle":
            args = [PriceOracle.address, assets, sources]
            break;
        default:
            throw new Error("Invalid FallbackOracle kind");
    }
    args.push(fallbackOracle);
    args.push(PriceOracle.OracleQuoteCurrencyAddress);
    args.push(parseUnits("1", PriceOracle.OracleQuoteUnit).toString());

    const deployResult = await deploy(ORACLE_ID, {
        from: deployer,
        args: args,
        ...COMMON_DEPLOY_PARAMS,
        contract: PriceOracle.kind,
    });

    let configPriceOracle = deployResult.address;

    // Set Price Oracle
    const tx = await waitForTx(
        await addressesProviderInstance.setPriceOracle(configPriceOracle)
    );
    console.log(
        `[Deployment] Added PriceOracle ${configPriceOracle} to PoolAddressesProvider`
    );
    return true;
};

func.id = `Oracles:${MARKET_NAME}:aave-v3-core@${V3_CORE_VERSION}`;

func.tags = ["market", "pythOracle"];

func.dependencies = ["before-deploy", "oracle"];

func.skip = async () => checkRequiredEnvironment();

export default func;
