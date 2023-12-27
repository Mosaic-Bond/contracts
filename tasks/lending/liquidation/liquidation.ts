import { LedgerSigner } from "@anders-t/ethers-ledger";
import hre, { ethers } from "hardhat";
async function main(router: string, addressProvider: string, admin: string, liquidator: string, isTest: boolean = false) {
    try {
        if (!isTest) console.log(`Deploying PerpFactory to ${hre.network.name} (${hre.network.config.chainId}) ...`);

        const liq = await ethers.deployContract("Liquidation", [router, addressProvider, admin, liquidator]);
        console.log("liquidation", liq.address);
    }
    catch (error) {
        console.log(error);
    }
    // 0x20F1990CD7e1864BB14a07092913B13d1f19f4c5   mainnet reaxLending
    // 0x7277571A69B63187544b07cEf5D3570b47b356b0   mainnet reaxLending v2
    // 0x5904d7ACD3b7e0cc58D99214f9b093E039944845   mainnet crypto Lending
    // 0x1ed9A09EfFC79E9C90935a80cF48C3D1DA0564E6   mainnet crypto Lending v2
};

main("0xe1FFC470a1dAFDF9aFB6627Cc3816F35fE09D09E", "0xAD0eb7305814F9D93bf6E156884BfA774807d43e", "0x0b1B466ED9Ff9EF1f14406A5A1815Cb59Eb25423", "0xBF731ff577EA917fb7Eb69B22Dba97011fB7DB85");    // reaxLending mainnet

// main("0xe1FFC470a1dAFDF9aFB6627Cc3816F35fE09D09E", "0x4567a8593B26f3c0E18923200C86B9DC762A90C6", "0x0b1B466ED9Ff9EF1f14406A5A1815Cb59Eb25423", "0xBF731ff577EA917fb7Eb69B22Dba97011fB7DB85"); // cryptoLending

