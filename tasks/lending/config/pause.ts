import { LedgerSigner } from "@anders-t/ethers-ledger";
import { ethers } from "hardhat";

const POOL_CONFIG = '0x23d44C8765AB79EE9b2fe3E13D624306E61B9781';
const ASSETS = ['0xB9821fb9e1e77ffb0f7D6b638A551D565EB882c8'];

const main = async () => {
    const poolConfigrator = await ethers.getContractAt('PoolConfigurator', POOL_CONFIG);
    for (const ASSET of ASSETS){
        await poolConfigrator.setReservePause(ASSET, true);
    }
}

main()