import { ethers } from "hardhat";

async function main(veMosa: string, role: string, account: string) {
    const [deployer] = await ethers.getSigners();

    const VestedMOSA = await ethers.getContractFactory("VestedMOSA");
    const veMOSA = await VestedMOSA.attach(veMosa);

    const tx = await veMOSA.grantRole(role, account);
    await tx.wait();
    console.log("done");
}

main("0xBdD20B4358572742BDb96E26cB9533546C897258", ethers.utils.id('AUTHORIZED_SENDER'), "0xAf8127ba4272d39C6B5522F9E26C987C01bf535E")