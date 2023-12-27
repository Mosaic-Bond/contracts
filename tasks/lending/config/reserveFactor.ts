import { ethers } from "hardhat";

// const POOL_CONFIG = '0xAC1241321455FC003Bd7777540383088f42e3ccB';
// const ASSETS = [
//     '0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9', // USDC
//     '0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE', // USDT
//     '0xdEAddEaDdeadDEadDEADDEAddEADDEAddead1111', // ETH
//     '0x78c1b0c915c4faa5fffa6cabf0219da63d7f4cb8', // WMNT
//     '0xCAbAE6f6Ea1ecaB08Ad02fE02ce9A44F09aebfA2', // WBTC
// ];

const POOL_CONFIG = '0x1B5DdC71E4e358D6F1074423E735A3cD8E3305bb';
const ASSETS = [
    '0x62959ad021402f48d0d8067bc5c4c03f63fceaa4', // cUSD
    '0xa84bdecd44e6cee1c588a3c97fcc4482831fde05', // cETH
    '0xf7dfe223e19701a514e78f3ce7ba98f2c5fbb5b2', // cBTC
];
const NEW_RF = [5000, 5000, 5000, 5000, 5000];

const main = async () => {
    // const mockSigner = await ethers.getImpersonatedSigner("0xc98f11daaac76d3ef368fdf54fbba34ffd951976");
    const poolConfigrator = await ethers.getContractAt('PoolConfigurator', POOL_CONFIG);
    for (let i in ASSETS){
        await poolConfigrator.setReserveFactor(ASSETS[i], NEW_RF[i]);
        console.log(`Set Reserve Factor for ${ASSETS[i]}`);
    }
}

main()