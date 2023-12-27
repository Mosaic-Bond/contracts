import { LedgerSigner } from "@anders-t/ethers-ledger";
import { ethers } from "hardhat";

const LIQUIDATION = '0x6027800aC3E71C3dbC583217B5B40DeB7E679557';

const POOL = '0x78B2fa94A94bF3E96fcF9CE965bed55bE49FA9E7';
const ASSET = '0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9';

const main = async () => {
    const pool = await ethers.getContractAt('SynthPool', POOL);
    const token = await ethers.getContractAt('MockToken', ASSET);
    const depositBalance = await pool.accountCollateralBalance(LIQUIDATION, ASSET);
    if(depositBalance.gt(0)){
        const signer = new LedgerSigner(ethers.provider);
        // const signer = await ethers.getImpersonatedSigner("0x6CeEBBFF9FaA802990f58659c1Ff227B4534570C");
        console.log("Balance before force withdraw: ", (await token.balanceOf(LIQUIDATION)).toString());
        console.log("Force withdraw: ", depositBalance.toString());
        await pool.connect(signer).forceWithdraw(ASSET, LIQUIDATION, depositBalance);
        console.log("Balance after force withdraw: ", (await token.balanceOf(LIQUIDATION)).toString());
    }
}

main()