import { LedgerSigner } from "@anders-t/ethers-ledger";
import { ethers } from "hardhat";

// Crypto Lending
const PoolAddressesProvider = '0x4567a8593B26f3c0E18923200C86B9DC762A90C6';
// Reax Lending
// const PoolAddressesProvider = '0xAD0eb7305814F9D93bf6E156884BfA774807d43e';

// Supporting contracts
let LiquidationLogic: string|null = '0x04fAc2923dA1Ef3D6b7ff3007D7Fc3322D66545f';
let SupplyLogic: string|null = '0xd8fc9Ba018f018c2dBF0CBc3162b83e61A55d4Fa';
let EModeLogic: string|null = '0xa21474DE97a0d8741Dc586dFe465cC7EC594219D';
let FlashLoanLogic: string|null = '0x031e9155F546c605b29607B57E6BF598fcCb76a6';
let BorrowLogic: string|null = '0x2e7966776b077aC31d7844957F6f339ea4877b10';
let BridgeLogic: string|null = '0x5841360012d9d7AD0DdC15e9ff65a734A9Bbac62';
let PoolLogic: string|null = '0xE43a1234ed7715fcF8410Ca8bd5aEa3b720771FA';
let Pool: string|null = null;

const main = async () => {
    const addressProviderInstance = await ethers.getContractAt('PoolAddressesProvider', PoolAddressesProvider);
    if(!LiquidationLogic){
        LiquidationLogic = (await (await ethers.getContractFactory('LiquidationLogic')).deploy()).address;
        console.log('LiquidationLogic deployed to:', LiquidationLogic);
    }
    if(!SupplyLogic){
        SupplyLogic = (await (await ethers.getContractFactory('SupplyLogic')).deploy()).address;
        console.log('SupplyLogic deployed to:', SupplyLogic);
    }
    if(!EModeLogic){
        EModeLogic = (await (await ethers.getContractFactory('EModeLogic')).deploy()).address;
        console.log('EModeLogic deployed to:', EModeLogic);
    }
    if(!BorrowLogic){
        BorrowLogic = (await (await ethers.getContractFactory('BorrowLogic')).deploy()).address;
        console.log('BorrowLogic deployed to:', BorrowLogic);
    }
    if(!FlashLoanLogic){
        FlashLoanLogic = (await (await ethers.getContractFactory('FlashLoanLogic', {libraries: {BorrowLogic}})).deploy()).address;
        console.log('FlashLoanLogic deployed to:', FlashLoanLogic);
    }
    if(!BridgeLogic){
        BridgeLogic = (await (await ethers.getContractFactory('BridgeLogic')).deploy()).address;
        console.log('BridgeLogic deployed to:', BridgeLogic);
    }
    if(!PoolLogic){
        PoolLogic = (await (await ethers.getContractFactory('PoolLogic')).deploy()).address;
        console.log('PoolLogic deployed to:', PoolLogic);
    }
    if(!Pool){
        const PoolFactory = await ethers.getContractFactory('Pool', {
            libraries: {
                LiquidationLogic,
                SupplyLogic,
                EModeLogic,
                FlashLoanLogic,
                BorrowLogic,
                BridgeLogic,
                PoolLogic
            }
        });
        const pool = await PoolFactory.deploy(addressProviderInstance.address);
        await pool.deployed();
        console.log('Pool deployed to:', pool.address);
        Pool = pool.address;
    }

    await addressProviderInstance.setPoolImpl(Pool);
    console.log('Pool implementation set');
}

main()