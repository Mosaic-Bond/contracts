import { LedgerSigner } from "@anders-t/ethers-ledger";
import { ethers } from "hardhat";

const POOL_CONFIG = '0xAC1241321455FC003Bd7777540383088f42e3ccB';
const ASSETS = [
    '0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9', // USDC
    '0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE', // USDT
    '0xdEAddEaDdeadDEadDEADDEAddEADDEAddead1111', // ETH
    '0x78c1b0c915c4faa5fffa6cabf0219da63d7f4cb8', // WMNT
    '0xCAbAE6f6Ea1ecaB08Ad02fE02ce9A44F09aebfA2', // WBTC
];
const NEW_LIQ_THRESHOLDS = [8500, 8500, 8500, 8500, 8500];
const NEW_LTVS = [7500, 7500, 7500, 7500, 7500];
const NEW_LIQ_BONUS = [11750, 11750, 11750, 11750, 11750];

const main = async () => {
    // const mockSigner = await ethers.getImpersonatedSigner("0xc98f11daaac76d3ef368fdf54fbba34ffd951976");

    const poolConfigrator = await ethers.getContractAt('PoolConfigurator', POOL_CONFIG);
    for (let i in ASSETS){
        await poolConfigrator.configureReserveAsCollateral(ASSETS[i], NEW_LTVS[i], NEW_LIQ_THRESHOLDS[i], NEW_LIQ_BONUS[i]);
        console.log(`Configured ${ASSETS[i]}`);
    }
}

main()