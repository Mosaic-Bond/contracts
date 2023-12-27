import { ethers } from "hardhat";
import { WRAPPED_NATIVE_TOKEN_PER_NETWORK } from "../../../helpers/constants";
import { eMantleNetwork } from "../../../helpers";

// Supporting contracts
let WETH: string|null = WRAPPED_NATIVE_TOKEN_PER_NETWORK[eMantleNetwork.mantle];
let Pool: string|null = '0x4bbea708F4e48eB0BB15E0041611d27c3c8638Cf';
let Owner: string|null = '0x6ceebbff9faa802990f58659c1ff227b4534570c';

const main = async () => {
    const Wrapper = (await (await ethers.getContractFactory('WrappedTokenGatewayV3')).deploy(
        WETH!, Owner!, Pool!
    )).address;
    console.log('Wrapper deployed to:', Wrapper);
}

main()