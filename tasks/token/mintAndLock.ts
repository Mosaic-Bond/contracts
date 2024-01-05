import { ethers } from "hardhat";

async function main(mosa: string, veMosa: string, amountInEth: string) {
    const [deployer] = await ethers.getSigners();

    const MosaicToken = await ethers.getContractFactory("MosaicToken");
    const MOSA = await MosaicToken.attach(mosa);

    const VestedMOSA = await ethers.getContractFactory("VestedMOSA");
    const veMOSA = await VestedMOSA.attach(veMosa);

    const tx = await MOSA.mint(deployer.address, ethers.utils.parseEther(amountInEth), { gasLimit: 10000000 });
    await tx.wait();
    const tx2 = await MOSA.increaseAllowance(veMOSA.address, ethers.utils.parseEther(amountInEth), { gasLimit: 10000000});
    await tx2.wait();
    const tx3 = await veMOSA.lock(ethers.utils.parseEther(amountInEth), deployer.address, { gasLimit: 10000000 });
    await tx3.wait();
    console.log("done");
}

main("0x48eBa33aA461Caba8B979e87b07c7B0a99DCAc6F", "0xBdD20B4358572742BDb96E26cB9533546C897258", "10000000000000")