import { LedgerSigner } from "@anders-t/ethers-ledger";
import { EvmPriceServiceConnection } from "@pythnetwork/pyth-evm-js";
import { ethers } from "hardhat";

// Crypto Lending
const Pool = '0x4bbea708F4e48eB0BB15E0041611d27c3c8638Cf';
// Reax Lending
// const Pool = '0xAD0eb7305814F9D93bf6E156884BfA774807d43e';

const CollateralAsset = '0x78c1b0c915c4faa5fffa6cabf0219da63d7f4cb8' // WMNT
const DebtAsset = '0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE' // USDT
const User = '0x9414a996ccf346e5f5a9a6b479865f850b4e2cb6';
const amountOfDebt = 31_020;
const Liquidator = '0x6ceebbff9faa802990f58659c1ff227b4534570c';

const main = async () => {
    const pool = await ethers.getContractAt('Pool', Pool);
    // const signer = await ethers.getImpersonatedSigner(Liquidator);
    const signer = new LedgerSigner(ethers.provider);

    const pythPriceService = new EvmPriceServiceConnection('https://xc-mainnet.pyth.network');
    const pythData = await pythPriceService.getPriceFeedsUpdateData([
        '0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace', // ETH
        '0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b', // USDT
        '0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43', // BTC
        '0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a', // USDC
        '0x4e3037c822d852d79af3ac80e35eb420ee3b870dca49f9344a38ef4773fb0585', // MNT
    ]);

    const collateral = await ethers.getContractAt("MockToken", CollateralAsset);
    const debt = await ethers.getContractAt("MockToken", DebtAsset);

    const amount = ethers.utils.parseUnits(amountOfDebt.toString(), await debt.decimals());


    const allowance = await debt.allowance(Liquidator, pool.address);
    if(allowance.lt(amount)){
        console.log('Approving...');
        await debt.connect(signer).approve(pool.address, ethers.constants.MaxUint256);
    }

    console.log('Liquidating...');
    console.log('Collateral Balance:', ethers.utils.formatUnits(await collateral.balanceOf(Liquidator), await collateral.decimals()));
    console.log('Debt Balance:', ethers.utils.formatUnits(await debt.balanceOf(Liquidator), await debt.decimals()));

    await pool.connect(signer).liquidationCall(
        collateral.address,
        debt.address,
        User,
        amount,
        false,
        pythData
    );

    console.log('Liquidated!');
    console.log('Collateral Balance:', ethers.utils.formatUnits(await collateral.balanceOf(Liquidator), await collateral.decimals()));
    console.log('Debt Balance:', ethers.utils.formatUnits(await debt.balanceOf(Liquidator), await debt.decimals()));
}

main()