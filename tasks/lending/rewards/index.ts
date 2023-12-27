import { LedgerSigner } from "@anders-t/ethers-ledger";
import { ethers } from "hardhat";

let RewardsAdmin = '0x6CeEBBFF9FaA802990f58659c1Ff227B4534570C';
let RewardsVault = '0x6CeEBBFF9FaA802990f58659c1Ff227B4534570C';
let DummyRewardsOracle: string = '0xe7BD7A11829e46231EeC0b648eAd38138d682c2d';

let PullRewardsTransferStrategyAddress: null|string = null;

// Crypto Markets
// const veREAX = '0x27F3D47F71DA7EcA2C5F56d1a28aE6B5c5f4AB23';
// const RewardsController = '0x82615cadAea1D54F0ad40d4E32747Ba019550b3A';
// const EmissionManager  = '0xB11e734242b662feA690B6f894848443b6554806';
// const ASSETS = [
//     '0x32142Fe91Da6620B10547f5DA09bD196c0213e94', // acUSD
//     '0x82EE0b281B3277f497982f02e73b08D89a7712C9', // vcUSD
//     '0xFCA95754193eB72da7e6be897d037D6201D6432F', // acETH
//     '0xF3aB700F8D9BE2ac7f12F5d6E29492f2Ae859df0', // vcETH
//     '0x05295BC7f5B98528E69Ea5C519D7A161e2DdF569', // acBTC
//     '0x2EF5b7358c26322DFaD1305d3C21A1486850d50d', // vcBTC
// ];
// const EMISSIONS = [
//     1e15.toString(), 
//     1e14.toString(),
//     1e15.toString(),
//     1e14.toString(),
//     1e14.toString(),
//     1e13.toString(),
// ]

// Reax Markets
// const veREAX = '0x27F3D47F71DA7EcA2C5F56d1a28aE6B5c5f4AB23';
// const RewardsController = '0xFC86E8e3beA1319bFC827d12e84fc2eE3ab06cED';
// const EmissionManager  = '0xD3F4e1464Cdba105e587E675CcAe65D2F3AeD1C7';
// const ASSETS = [
//     '0x0B22e3e85E28bdeaeAABEc982F0F82f699f97b71', // aWETH
//     '0x936933D6C86E9B6A72B1D2B3F527324C71242BBb', // vWETH
//     '0x6479859ab0a777f5e22e5935edcc4cffae199315', // aUSDT
//     '0x9ab2578f9e757b5e0fd624e64a172bb82a5e6ee8', // vUSDT
//     '0x782ed01afc948965aeb3f6af6a9d9142240df06f', // aUSDC
//     '0x28500c2c0b321f83227871a794957ac9f229c6be', // vUSDC
//     '0x7e1e95800e621430912dc829fc6607fba4704326', // aMNT
//     '0xcac6e62e98e54abfe2b965c71e90c1798914e7c3', // vMNT
//     '0xbc9309bd5f69b649e88dacaf53c711c6863711be', // aWBTC
//     '0x596736f7aa39ba1881149f1346d7de0cf9bf5373', // vWBTC
// ];

// const EMISSIONS = [
//     "10000000000000000",
//     "3000000000000000",
//     "20000000000000000",
//     "10000000000000000",
//     "20000000000000000",
//     "10000000000000000",
//     "30000000000000000",
//     "5000000000000000",
//     "1000000000000000",
//     "500000000000000"
// ]


// Mosaic Telos Markets
const veREAX = "0xBdD20B4358572742BDb96E26cB9533546C897258"
const RewardsController = '0xE02F71Ab7db925F7dbE770c064d12b6941209934';
const EmissionManager  = '0x102471F42427F88EfC024087A9F233a25eBbc899';
RewardsAdmin = '0x84b7A5Bc208a8aA820fE95969737bF008c32d732';
RewardsVault = '0x84b7A5Bc208a8aA820fE95969737bF008c32d732';
DummyRewardsOracle = '0x681F87010e638B0eb0e44536D29295F56F59851C';
PullRewardsTransferStrategyAddress = '0xAf8127ba4272d39C6B5522F9E26C987C01bf535E';

const ASSETS = [
    '0x70CAEB6255061f57caE517a8961F128cEd27AACA', // aETH
    '0x559Ed2eA969b3401402eA573c505bFbAeD7b33c7', // vETH
    '0xb17B0315BC086D688552b45BB60dAECa79e593f1', // aBTCb
    '0xd0B8e75B8f181b7dFaA524eeE1f44bAD0fD5469B', // vBTCb
    '0x814039BC536169D6E78ed08AFe82ede60006dc8A', // aUSDC
    '0x44da021BaED6FD6f7065DF3cAD1b194872bA4309', // vUSDC
    '0x53f5f618FB047c33fC8B3de7cF6B01f2B49468d3', // aTLOS
    '0x26275D61811F12F270C9242FcC70FFCA72d59522', // vTLOS
    '0x43d825A951E5305c1e38Dc24E3CBDef8fA05D5bF', // aUSDT
    '0xEDdBE1129108bee7497cCa13372823bCA93e5B0A', // vUSDT
];
const EMISSIONS = [
    "10000000000000000000",
    "10000000000000000000",
    "10000000000000000000",
    "10000000000000000000",
    "10000000000000000000",
    "10000000000000000000",
    "10000000000000000000",
    "10000000000000000000",
    "10000000000000000000",
    "10000000000000000000",
]

async function main() {
    const eManager = await ethers.getContractAt("EmissionManager", EmissionManager);
    const rewardsController = await ethers.getContractAt("RewardsController", RewardsController);

    if(!PullRewardsTransferStrategyAddress) PullRewardsTransferStrategyAddress = await rewardsController.getTransferStrategy(veREAX);
    
    if(!PullRewardsTransferStrategyAddress || PullRewardsTransferStrategyAddress == ethers.constants.AddressZero){
        console.log("Deploying pull rewards transfer strategy");
        const PullRewardsTransferStrategy = await ethers.getContractFactory("PullRewardsTransferStrategy");
        const pullRewardsTransferStrategy = await PullRewardsTransferStrategy.deploy(RewardsController, RewardsAdmin, RewardsVault);
        await pullRewardsTransferStrategy.deployed();
        PullRewardsTransferStrategyAddress = pullRewardsTransferStrategy.address;
        console.log("PullRewardsTransferStrategy deployed to:", PullRewardsTransferStrategyAddress);
    }


    let input: any[] = [];
    for(let i in ASSETS){
        input.push({});
        input[i].reward = veREAX;
        input[i].asset = ASSETS[i];
        input[i].rewardOracle = DummyRewardsOracle;
        input[i].distributionEnd = Number((Date.now()/1000).toFixed(0)) + 60*60*24*365; // 1 year
        input[i].transferStrategy = PullRewardsTransferStrategyAddress;
        input[i].totalSupply = 0;
        // emissionPerSecond
        input[i].emissionPerSecond = EMISSIONS[i]

        // console.log(await rewardsController.getRewardsData(ASSETS[i], veREAX));
    }

    console.log(input);
    // console.log("get emission admin", await eManager.getEmissionAdmin(veREAX));
    // console.log("get emission admin", await eManager.owner());
    // console.log("setting emission admin");
    // await eManager.setEmissionAdmin(veREAX, RewardsAdmin);
    // console.log('emission admin set to', await eManager.getEmissionAdmin(veREAX));
    
    console.log("setting config");
    // const signer = new LedgerSigner(ethers.provider);
    // console.log(await signer.getAddress());
    // await eManager.connect(signer).configureAssets(input);

    await eManager.configureAssets(input);
}

main()