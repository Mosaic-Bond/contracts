import { LedgerSigner } from "@anders-t/ethers-ledger";
import { ethers } from "hardhat";

const POOL_CONFIG = '0x23d44C8765AB79EE9b2fe3E13D624306E61B9781';
const POOL = '0xd02eE908D48CEB3A736C6500E95F973E3a875391';
const INCENTIVES = '0x46A2891f55E0ecb8FdB8cD760626645664ff9fab';
const TREASURY = '0xF2cef51E1A7D84a57eA89000CdDdCc83079c7Ff6';

const ASSET = '0xB9821fb9e1e77ffb0f7D6b638A551D565EB882c8';
const DECIMALS = 8;
const A_TOKEN_NAME = 'Aave Reax USDT';
const A_TOKEN_SYMBOL = 'aReaxUSDT';
const V_TOKEN_NAME = 'Aave Reax Variable Debt USDT';
const V_TOKEN_SYMBOL = 'variableDebtReaxUSDT';
const S_TOKEN_NAME = 'Aave Reax Stable Debt USDT';
const S_TOKEN_SYMBOL = 'stableDebtReaxUSDT';
const RESERVE_STRATEGY = '0xE354180826efA6B00136c47252A5E6d304085707';

const BASE_LTV = '7500';
const LIQUIDATION_THRESHOLD = '8500';
const LIQUIDATION_BONUS = '10400';
const BORROW_CAP = '0';
const SUPPLY_CAP = '0';
const RESERVE_FACTOR = '2500';

const main = async () => {
    // Create atoken contract
    const aToken = await ethers.getContractFactory('AToken');
    const aTokenImpl = await aToken.deploy(POOL);
    console.log(A_TOKEN_NAME, aTokenImpl.address);

    const vToken = await ethers.getContractFactory('VariableDebtToken');
    const vTokenImpl = await vToken.deploy(POOL);
    console.log(V_TOKEN_NAME, vTokenImpl.address);

    const sToken = await ethers.getContractFactory('StableDebtToken');
    const sTokenImpl = await sToken.deploy(POOL);
    console.log(S_TOKEN_NAME, sTokenImpl.address);

    const poolConfigrator = await ethers.getContractAt('PoolConfigurator', POOL_CONFIG);

    await poolConfigrator.initReserves([{
        aTokenImpl: aTokenImpl.address,
        stableDebtTokenImpl: sTokenImpl.address,
        variableDebtTokenImpl: vTokenImpl.address,
        underlyingAssetDecimals: DECIMALS,
        interestRateStrategyAddress: RESERVE_STRATEGY,
        underlyingAsset: ASSET,
        treasury: TREASURY,
        incentivesController: INCENTIVES,
        aTokenName: A_TOKEN_NAME,
        aTokenSymbol: A_TOKEN_SYMBOL,
        variableDebtTokenName: V_TOKEN_NAME,
        variableDebtTokenSymbol: V_TOKEN_SYMBOL,
        stableDebtTokenName: S_TOKEN_NAME,
        stableDebtTokenSymbol: S_TOKEN_SYMBOL,
        params: '0x',
    }])

    await poolConfigrator.configureReserveAsCollateral(
        ASSET,
        BASE_LTV,
        LIQUIDATION_THRESHOLD,
        LIQUIDATION_BONUS
    );

    await poolConfigrator.setReserveBorrowing(ASSET, true);

    await poolConfigrator.setBorrowCap(ASSET, BORROW_CAP);
    await poolConfigrator.setReserveStableRateBorrowing(
        ASSET,
        true
    );

    await poolConfigrator.setReserveFlashLoaning(ASSET, true);
    await poolConfigrator.setSupplyCap(ASSET, SUPPLY_CAP);
    await poolConfigrator.setReserveFactor(ASSET, RESERVE_FACTOR);
}

main()