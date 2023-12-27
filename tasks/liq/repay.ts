import { LedgerSigner } from "@anders-t/ethers-ledger";
import { EvmPriceServiceConnection } from "@pythnetwork/pyth-evm-js";
import { ethers } from "hardhat";


const POOL = '0x78B2fa94A94bF3E96fcF9CE965bed55bE49FA9E7';
const SYNTH_IN = '0x62959ad021402f48d0d8067bc5c4c03f63fceaa4';
const AMOUNT_IN = ethers.utils.parseEther('500');
const LIQUIDATEE = '0x47E05bB20A14C9a27fa8706Af83Fff7a480de47F';

const main = async () => {
    const [signer] = await ethers.getSigners();
    console.log(signer.address);
    const pool = await ethers.getContractAt('SynthPool', POOL);
    // const token = await ethers.getContractAt('MockToken', ASSET);
    // const depositBalance = await pool.accountCollateralBalance(LIQUIDATION, ASSET);
    const pythPriceService = new EvmPriceServiceConnection('https://xc-mainnet.pyth.network');
    const pythData = await pythPriceService.getPriceFeedsUpdateData([
        '0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43', // ETH
        '0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b', // USDT
        '0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace', // BTC
        '0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43', // USDC
        '0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace', // MNT
        '0xec5d399846a9209f3fe5881d70aae9268c94339ff9817e8d18ff19fa05eea1c8',
        '0x2f95862b045670cd22bee3114c39763a4a08beeb663b145d283c31d7d1101c4f',
        '0xef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d',
        '0xdcef50dd0a4cd2dcc17e45df1676dcb336a11a61c69df7a0299b0150c672d25c',
        '0x6e3f3fa8253588df9326580180233eb791e03b443a3ba7a1d892e73874e19a54',
        '0x2a01deaec9e51a579277b34b122399984d0bbf57e2458a7e42fecd2829867a0d',
        '0xca3eed9b267293f6595901c734c7525ce8ef49adafe8284606ceb307afa2ca5b',
        '0x4e3037c822d852d79af3ac80e35eb420ee3b870dca49f9344a38ef4773fb0585',
        '0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a'
    ]);
    await pool.connect(signer).burn(
        SYNTH_IN,
        AMOUNT_IN,
        LIQUIDATEE,
        pythData
    );
}

main()