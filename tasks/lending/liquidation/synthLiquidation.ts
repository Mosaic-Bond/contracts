import { LedgerSigner } from "@anders-t/ethers-ledger";
import hre, { ethers } from "hardhat";
async function main(synthPool: string, router: string, addressProvider: string, admin: string, liquidator: string, isTest: boolean = false) {
    if (!isTest) console.log(`Deploying liquidation to ${hre.network.name} (${hre.network.config.chainId}) ...`);

    const liq = await ethers.deployContract("SynthLiquidation", [router, synthPool, addressProvider, admin, liquidator]);
    console.log("SynthLiquidation", liq.address);
   // 0x101e43bB7703975BE6ec7f5953779084A714D378
};

// main("0xCE0dC34Db439D21a1400e37aaAFCd6e1F1e6D43e", "0x2089ba6d5fa49f711c0dd7549a1c0b9e1f8e6e8d", "0x841A3Bf359393A346E33Ab4e74ccde6258F5f441", "0x95D2aefD060DB5Da61e31FfF7A855cc4c7ef6160", "0xBf59B84c9a7aD688D87ABe3357f70039C1540006"); // testnet  add cryptolending pool provider as it has cUSD

main("0x78B2fa94A94bF3E96fcF9CE965bed55bE49FA9E7", "0xe1FFC470a1dAFDF9aFB6627Cc3816F35fE09D09E", "0x4567a8593B26f3c0E18923200C86B9DC762A90C6", "0x0b1B466ED9Ff9EF1f14406A5A1815Cb59Eb25423", "0xBF731ff577EA917fb7Eb69B22Dba97011fB7DB85"); 
// crypto pool address as synthPool, 