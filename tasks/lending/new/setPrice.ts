import { LedgerSigner } from "@anders-t/ethers-ledger";
import { ethers } from "hardhat";

const PYTH_ORACLE = '0x5C42BF29C25C7CE687B2481e861395F5b3Ec692c';
const ASSET = '0xB9821fb9e1e77ffb0f7D6b638A551D565EB882c8';
const PYTH_FEED = "0x1fc18861232290221461220bd4e2acd1dcdfbc89c84092c93c18bdc7756c1588";

const main = async () => {
    const pythOracle = await ethers.getContractAt('PythOracle', PYTH_ORACLE);
    await pythOracle.setAssetSources([ASSET], [PYTH_FEED]);
}

main()