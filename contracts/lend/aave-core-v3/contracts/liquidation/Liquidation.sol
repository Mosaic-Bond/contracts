// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "../flashloan/base/FlashLoanSimpleReceiverBase.sol";
import "../interfaces/IPoolAddressesProvider.sol";
import "../protocol/pool/Pool.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@balancer-labs/v2-interfaces/contracts/vault/IAsset.sol";
import {IVault} from "@balancer-labs/v2-interfaces/contracts/vault/IVault.sol";
import "../../../aave-core-v3/contracts/dependencies/openzeppelin/contracts/AccessControl.sol";

interface IRouter {
    function swap(
        SwapData memory swapData,
        bytes[] memory pythUpdateData
    ) external payable returns (uint256);

    struct Swap {
        IVault.BatchSwapStep[] swap;
        int256[] limits;
        IAsset[] assets;
        bool isBalancerPool;
    }

    struct SwapData {
        IVault.SwapKind kind;
        Swap[] swaps;
        address payable recipient;
        uint256 deadline;
    }
}

// For AAVE Lending Pool;
contract Liquidation is
    ReentrancyGuard,
    FlashLoanSimpleReceiverBase,
    AccessControl
{
    using SafeERC20 for IERC20;
    IRouter public router;
    bytes32 public constant LIQUIDATOR = keccak256("LIQUIDATOR");

    constructor(
        address _router,
        address _addressProvider,
        address _admin,
        address _liquidator
    ) FlashLoanSimpleReceiverBase(IPoolAddressesProvider(_addressProvider)) {
        router = IRouter(_router);
        _setupRole(DEFAULT_ADMIN_ROLE, _admin);
        _setupRole(LIQUIDATOR, _liquidator);
    }

    function isAdmin(address _account) public view returns (bool) {
        return hasRole(DEFAULT_ADMIN_ROLE, _account);
    }

    function isLiquidator(address _account) public view returns (bool) {
        return hasRole(LIQUIDATOR, _account);
    }

    function approveAsset(address assetAddress) external onlyRole(LIQUIDATOR) {
        IERC20(assetAddress).safeIncreaseAllowance(
            address(POOL),
            type(uint256).max
        );
        IERC20(assetAddress).safeIncreaseAllowance(
            address(router),
            type(uint256).max
        );
    }

    receive() external payable {}

    function withdraw(
        uint256 amount,
        address token
    ) external onlyRole(DEFAULT_ADMIN_ROLE) {
        uint256 tokenBalance = IERC20(token).balanceOf(address(this));
        if (amount > tokenBalance) {
            amount = tokenBalance;
        }
        IERC20(token).safeTransfer(msg.sender, amount);
    }

    function withdrawNativeToken(
        uint256 amount
    ) external onlyRole(DEFAULT_ADMIN_ROLE) {
        uint256 nativeTokenBalance = address(this).balance;
        if (amount > nativeTokenBalance) {
            amount = nativeTokenBalance;
        }
        payable(msg.sender).transfer(amount);
    }

    function repayBadDebt(
        address asset,
        uint256 amount,
        uint256 interestRateMode,
        address onBehalfOf
    ) external onlyRole(LIQUIDATOR) returns (uint256) {
        uint256 balance = IERC20(asset).balanceOf(address(this));

        if (balance < amount) {
            amount = balance;
        }

        POOL.repay(asset, amount, interestRateMode, onBehalfOf);
        return amount;
    }

    struct ArgsLiquidateAndSwap {
        uint256 collAssetBalance;
        uint256 collAssetBalanceBefore;
        uint256 collAssetBalanceAfter;
        uint256 debtAssetbalance;
        uint256 debtAssetbalanceBefore;
        uint256 debtAssetbalanceAfter;
    }

    function liquidateAndSwap(
        address collateralAsset,
        address debtAsset,
        address user,
        IRouter.SwapData memory swapData,
        bytes[] calldata pythUpdateData
    ) public nonReentrant onlyRole(LIQUIDATOR) {
        ArgsLiquidateAndSwap memory args;
        args.collAssetBalanceBefore = IERC20(collateralAsset).balanceOf(
            address(this)
        );

        Pool(address(POOL)).liquidationCall(
            collateralAsset,
            debtAsset,
            user,
            type(uint256).max,
            false, // always get underline token not aToken
            pythUpdateData
        );

        args.collAssetBalanceAfter = IERC20(collateralAsset).balanceOf(
            address(this)
        );

        args.collAssetBalance =
            args.collAssetBalanceAfter -
            args.collAssetBalanceBefore;

        if (args.collAssetBalance > 0 && collateralAsset != debtAsset) {
            swapData.swaps[0].swap[0].amount = args.collAssetBalance;
            swapData.recipient = payable(address(this));
            require(
                router.swap(swapData, pythUpdateData) > 0,
                "Router swap failed"
            );
        }
    }

    function liquidate(
        address collateralAsset,
        address debtAsset,
        address user,
        uint256 debtToCover,
        bytes[] calldata pythUpdateData
    ) public nonReentrant onlyRole(LIQUIDATOR) {
        uint debtAssetBalance = IERC20(debtAsset).balanceOf(address(this));
        if (debtAssetBalance < debtToCover) {
            debtToCover = debtAssetBalance;
        }

       require(debtAssetBalance > 0, "No balance to liquidate");

        Pool(address(POOL)).liquidationCall(
            collateralAsset,
            debtAsset,
            user,
            type(uint256).max,
            false, // always get underline token not aToken
            pythUpdateData
        );
    }

    function liquidateAndSwapWithFlashLoan(
        address collateralAsset,
        address debtAsset,
        address user,
        uint256 debtToCover,
        uint256 badDebtAllowance,
        IRouter.SwapData memory swapData,
        bytes[] calldata pythUpdateData
    ) public nonReentrant onlyRole(LIQUIDATOR) {
        uint256 debtAssetbalanceBefore = IERC20(debtAsset).balanceOf(
            address(this)
        );
        POOL.flashLoanSimple(
            address(this),
            debtAsset,
            debtToCover,
            abi.encode(
                collateralAsset,
                user,
                debtAssetbalanceBefore,
                badDebtAllowance,
                swapData,
                pythUpdateData
            ),
            0 // referralCode
        );
    }

    struct ArgsExecuteOperation {
        uint256 collAssetBalance;
        uint256 collAssetBalanceBefore;
        uint256 collAssetBalanceAfter;
        uint256 totalDebt;
        uint256 debtAssetbalance;
        uint256 debtAssetbalanceBefore;
        uint256 debtAssetbalanceAfter;
        uint256 badDebtAllowance;
        address collateralAsset;
        address userToLiquidate;
        IRouter.SwapData swapData;
        bytes[] pythUpdateData;
    }

    function executeOperation(
        address asset,
        uint256 amount,
        uint256 premium,
        address initiator,
        bytes calldata params
    ) external override returns (bool) {
        ArgsExecuteOperation memory args;
        (
            args.collateralAsset,
            args.userToLiquidate,
            args.debtAssetbalanceBefore,
            args.badDebtAllowance,
            args.swapData,
            args.pythUpdateData
        ) = abi.decode(
            params,
            (address, address, uint256, uint256, IRouter.SwapData, bytes[])
        );

        args.collAssetBalanceBefore = IERC20(args.collateralAsset).balanceOf(
            address(this)
        );

        Pool(address(POOL)).liquidationCall(
            args.collateralAsset,
            asset,
            args.userToLiquidate,
            type(uint256).max,
            false, // always get underline token not aToken
            args.pythUpdateData
        );

        args.collAssetBalanceAfter = IERC20(args.collateralAsset).balanceOf(
            address(this)
        );

        args.collAssetBalance =
            args.collAssetBalanceAfter -
            args.collAssetBalanceBefore;

        if (args.collAssetBalance > 0 && args.collateralAsset != asset) {
            args.swapData.swaps[0].swap[0].amount = args.collAssetBalance;
            args.swapData.recipient = payable(address(this));
            require(
                router.swap(args.swapData, args.pythUpdateData) > 0,
                "Router swap failed"
            );
        }

        args.debtAssetbalanceAfter = IERC20(asset).balanceOf(address(this));

        args.debtAssetbalance =
            args.debtAssetbalanceAfter -
            args.debtAssetbalanceBefore;
        args.totalDebt = amount + premium;

        args.debtAssetbalance = args.debtAssetbalance + args.badDebtAllowance;

        if (args.debtAssetbalance > args.debtAssetbalanceAfter) {
            args.debtAssetbalance = args.debtAssetbalanceAfter;
        }
        require(
            args.debtAssetbalance >= args.totalDebt,
            "Not able to repay flash loan"
        );

        // no need to approve as we are already Max aprove pool;
        return true;
    }
}
