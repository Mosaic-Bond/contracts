import { LedgerSigner } from "@anders-t/ethers-ledger";
import { ethers } from "hardhat";

const POOL_CONFIG = '0xAC1241321455FC003Bd7777540383088f42e3ccB';
const ASSETS = ['0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE', '0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9'];

const categoryId = 1
const ltv = 9800
const liquidationThreshold = 9900
const liquidationBonus = 10100
const oracle = ethers.constants.AddressZero;
const label = "Stablecoins"

const main = async () => {
    const poolConfigrator = await ethers.getContractAt('PoolConfigurator', POOL_CONFIG);
    
    await poolConfigrator.setEModeCategory(categoryId, ltv, liquidationThreshold, liquidationBonus, oracle, label);
    
    for (const ASSET of ASSETS){
        await poolConfigrator.setAssetEModeCategory(ASSET, categoryId);
    }
}

main()