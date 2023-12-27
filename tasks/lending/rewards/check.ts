import { LedgerSigner } from "@anders-t/ethers-ledger";
import { ethers } from "hardhat";


// Mosaic Telos Markets
const EmissionManager  = '0x102471F42427F88EfC024087A9F233a25eBbc899';

async function main() {
    const eManager = await ethers.getContractAt("EmissionManager", EmissionManager);

    console.log("emission admin", await eManager.owner());
    // await eManager.setEmissionAdmin(veREAX, RewardsAdmin);
    // console.log('emission admin set to', await eManager.getEmissionAdmin(veREAX));
    
    // console.log("setting config");
    // const signer = new LedgerSigner(ethers.provider);
    // console.log(await signer.getAddress());
    // await eManager.connect(signer).configureAssets(input);
}

main()