import { LedgerSigner } from "@anders-t/ethers-ledger";
import { ethers } from "hardhat";

// Crypto Markets
const RewardsController = '0x82615cadAea1D54F0ad40d4E32747Ba019550b3A';
const RewardsAdmin = '0x6CeEBBFF9FaA802990f58659c1Ff227B4534570C';
const RewardsVault = '0x6CeEBBFF9FaA802990f58659c1Ff227B4534570C';
const EmissionManager  = '0xB11e734242b662feA690B6f894848443b6554806';
let PullRewardsTransferStrategyAddress: null|string = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
let DummyRewardsOracle: string = '0xe7BD7A11829e46231EeC0b648eAd38138d682c2d';
const veREAX = '0x27F3D47F71DA7EcA2C5F56d1a28aE6B5c5f4AB23';

const ASSETS = [
    '0x0B22e3e85E28bdeaeAABEc982F0F82f699f97b71',
    '0x936933D6C86E9B6A72B1D2B3F527324C71242BBb',
    // '0x06325278D58cb1D5B819bE6d222aa608a996B182',
    '0x6479859AB0A777F5E22E5935EdCc4CFfaE199315',
    '0x9AB2578f9e757b5e0FD624e64A172bB82A5E6Ee8',
    // '0xf9b76D5595Bd86874dADfb1a6539c29e5E099615',
    '0xbC9309BD5f69B649E88DacaF53c711C6863711Be',
    '0x596736f7Aa39BA1881149F1346d7DE0cf9bF5373',
    // '0xD6C6f5227003E4D728a6b96d32D45403EAf8e153',
];

async function main() {
    const eManager = await ethers.getContractAt("EmissionManager", EmissionManager);
    const rewardsController = await ethers.getContractAt("RewardsController", RewardsController);
    if(!PullRewardsTransferStrategyAddress){
        console.log("deploying pull rewards transfer strategy");
        const PullRewardsTransferStrategy = await ethers.getContractFactory("PullRewardsTransferStrategy");
        const pullRewardsTransferStrategy = await PullRewardsTransferStrategy.deploy(RewardsController, RewardsAdmin, RewardsVault);
        await pullRewardsTransferStrategy.deployed();
        PullRewardsTransferStrategyAddress = pullRewardsTransferStrategy.address;
        console.log("PullRewardsTransferStrategy deployed to:", PullRewardsTransferStrategyAddress);
    }
    const signer = new LedgerSigner(ethers.provider);
    await eManager.connect(signer).setTransferStrategy(veREAX, PullRewardsTransferStrategyAddress);

    // let input: any[] = [];
    // for(let i in ASSETS){
    //     input.push({});
    //     input[i].reward = veREAX;
    //     input[i].asset = ASSETS[i];
    //     input[i].rewardOracle = DummyRewardsOracle;
    //     input[i].distributionEnd = Number((Date.now()/1000).toFixed(0)) + 60*60*24*365; // 1 year
    //     input[i].transferStrategy = PullRewardsTransferStrategyAddress;
    //     input[i].totalSupply = 0;
    //     // emissionPerSecond
    //     input[i].emissionPerSecond = 1e16.toString();
    // }
    // console.log("setting emission admin", await eManager.owner());
    // await eManager.setEmissionAdmin(veREAX, RewardsAdmin);
    // console.log('emission admin set to', await eManager.getEmissionAdmin(veREAX));
    // console.log("setting config");
    // const signer = new LedgerSigner(ethers.provider);
    // console.log(await signer.getAddress());
    // await eManager.connect(signer).configureAssets(input);
}

main()