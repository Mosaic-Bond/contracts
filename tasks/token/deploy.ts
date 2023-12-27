import hre, { ethers, upgrades } from 'hardhat';
import fs from 'fs';
import { Contract } from 'ethers';

export default async function main(
    WETH = "0x8F91A345f3Bc2A7c89f4f5eDf60cCc0Ef36C65a8",
    initialRewardsDuration = "30",
    lockPeriod = "15552000",
    unlockPeriod = "4838400",
    percReleaseAtUnlock = "500",
    rewardVault = "0x84b7A5Bc208a8aA820fE95969737bF008c32d732",
    premint = "1000000000",
): Promise<void> {

    const [deployer] = await ethers.getSigners();

    /* -------------------------------------------------------------------------- */
    /*                                  MOSA Token                                 */
    /* -------------------------------------------------------------------------- */
    console.log(`Deploying MosaicToken to ${hre.network.name} (${hre.network.config.chainId}) ...`);
    // deploy token
    const MosaicToken = await ethers.getContractFactory("MosaicToken");
    const MOSA = await upgrades.deployProxy(MosaicToken, []);
    console.log(`MOSA deployed at ${MOSA.address}`);

    /* -------------------------------------------------------------------------- */
    /*                                 veMOSA Token                               */
    /* -------------------------------------------------------------------------- */
    console.log(`Deploying veMOSA Token to ${hre.network.name} (${hre.network.config.chainId}) ...`);
    const veMOSAArgs = [
        MOSA.address,
        WETH,
        initialRewardsDuration,
        lockPeriod,
        unlockPeriod,
        percReleaseAtUnlock
    ]

    // deploy veMOSA
    const VestedMOSA = await ethers.getContractFactory("VestedMOSA");
    const veMOSA = await upgrades.deployProxy(VestedMOSA, veMOSAArgs);
    console.log(`VestedMOSA deployed at ${veMOSA.address}`);
    
    // mint initial reward tokens to synthex
    let tx = await MOSA.mint(deployer.address, ethers.utils.parseEther(premint));
    await tx.wait();
    tx = await MOSA.increaseAllowance(veMOSA.address, ethers.utils.parseEther(premint));
    await tx.wait();
    tx = await veMOSA.lock(ethers.utils.parseEther(premint), rewardVault);
    await tx.wait();
    await veMOSA.grantRole(ethers.utils.id('AUTHORIZED_SENDER'), rewardVault);
}

main()