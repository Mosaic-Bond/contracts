import { LedgerSigner } from "@anders-t/ethers-ledger";
import { ethers } from "hardhat";

const Pool = '0x5069736565cdBdff640328a59541C3854C331192';
const Treasury = '0x9ee3fFB8394f413626178C73fEb0bE2D6426Ff73';
const TreasuryController = '0x87944C76C3F332B4Cc2BEb82C2AA3E51DDe66545';
const PoolDataProvider = '0x77923DA74dEEb39D8D50A29C23a85c1a394b3423'

// const Pool = '0x4bbea708F4e48eB0BB15E0041611d27c3c8638Cf';
// const Treasury = '0xfd2Fe5E9D3Fa7a721f664f9aFFC817F8F1430584';
// const TreasuryController = '0x2C9ad9F031705717fCBa8C24B30083364DffE107';
// const PoolDataProvider = '0x49b5382C03CD5c536F92daEb97043D286902Bf11'

async function main() {
    const signer = await ethers.getImpersonatedSigner("0x6CeEBBFF9FaA802990f58659c1Ff227B4534570C");
    // const signer = new LedgerSigner(ethers.provider);
    const signerAddress = await signer.getAddress();

    // console.log("Signer:", await signer.getAddress());
    const pool = await ethers.getContractAt("Pool", Pool, signer);
    // const treasury = await ethers.getContractAt("AaveEcosystemReserveV2", Treasury, signer);
    const controller = await ethers.getContractAt("AaveEcosystemReserveController", TreasuryController, signer);
    const poolData = await ethers.getContractAt("AaveProtocolDataProvider", PoolDataProvider, signer);
    const assets = (await poolData.getAllReservesTokens()).map((tokenData: any[]) => tokenData[1]);
    await pool.connect(signer).mintToTreasury(assets);
    const a_assets = await poolData.getAllATokens()
    
    for(let i = 0; i < a_assets.length; i++) {
        const erc20 = await ethers.getContractAt("MockToken", a_assets[i][1]);
        const balance = await erc20.balanceOf(Treasury);
        if(balance.gt(0)){
            console.log("Transferring", balance.toString(), "of", a_assets[i][0]);
            await controller.connect(signer).transfer(Treasury, a_assets[i][1], signerAddress, balance);
            console.log("Transferred!! Balance of", signerAddress, "is now", (await erc20.balanceOf(signerAddress)).toString());
            console.log("-----------------------------------");
        }
    }
}

main()