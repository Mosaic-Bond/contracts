import { LedgerSigner } from "@anders-t/ethers-ledger";
import { ethers } from "hardhat";

const LIQUIDATION = '0x7277571A69B63187544b07cEf5D3570b47b356b0';
const ASSETS = [
    '0xdeaddeaddeaddeaddeaddeaddeaddeaddead1111', 
    "0x78c1b0c915c4faa5fffa6cabf0219da63d7f4cb8", 
    "0xcabae6f6ea1ecab08ad02fe02ce9a44f09aebfa2", 
    "0x201eba5cc46d216ce6dc03f6a759e8e766e956ae",
    "0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9",
    // "0x62959ad021402f48d0d8067bc5c4c03f63fceaa4", // cUSD
];

const main = async () => {
    const [ signer ] = await ethers.getSigners();
    // const signer = await ethers.getImpersonatedSigner("0x0b1B466ED9Ff9EF1f14406A5A1815Cb59Eb25423")
    // const signer = new LedgerSigner(ethers.provider);
    const liq = await ethers.getContractAt('Liquidation', LIQUIDATION);
    for(let i in ASSETS){
        const token = await ethers.getContractAt('MockToken', ASSETS[i]);
        if((await token.balanceOf(LIQUIDATION)).gt(0)){
            console.log("Balance before withdraw: ", (await token.balanceOf(signer.address)).toString());
            await liq.connect(signer).withdraw(await token.balanceOf(LIQUIDATION), ASSETS[i]);
            console.log("Balance after withdraw: ", (await token.balanceOf(signer.address)).toString());
        }
    }
}

main()