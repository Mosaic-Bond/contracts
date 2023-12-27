import { LedgerSigner } from "@anders-t/ethers-ledger";
import { ethers } from "hardhat";

const POOL = '0xd02eE908D48CEB3A736C6500E95F973E3a875391';
const ASSETS = ['0xb9821fb9e1e77ffb0f7d6b638a551d565eb882c8', '0x5b156dca04f775046064032e1f5e45fd1fcca1e0', '0x86fb905bd14923fd66a5353d2cda955564ddb9aa', '0xbe28691f9032333076f64e8cbd18beebd84dfc01'];
const SUPPLY_FEES = [0, 0, 0, 0];
const BORROW_FEES = [0, 0, 0, 0];

const main = async () => {
    const pool = await ethers.getContractAt('Pool', POOL);
    await pool.updateAssetFees(ASSETS, SUPPLY_FEES.map((fee) => fee.toFixed(0)), BORROW_FEES.map((fee) => fee.toFixed(0)));
}

main()