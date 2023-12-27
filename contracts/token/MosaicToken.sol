// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/draft-ERC20PermitUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

/**
 * @title Mosaic Token contract
 * @author Prasad prasad@chainscore.finance
 * @notice Mosaic Token contract, based on OpenZeppelin ERC20
 * @dev Pausable, Burnable, Permit
 */
contract MosaicToken is Initializable, OwnableUpgradeable, ERC20Upgradeable, ERC20BurnableUpgradeable, ERC20PermitUpgradeable, PausableUpgradeable, UUPSUpgradeable {
    /// @notice gap for future storage variables
    uint256[50] private __gap;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize() public initializer {
        __ERC20_init("Mosaic Token", "MOSA");
        __ERC20Burnable_init();
        __ERC20Permit_init("Mosaic Token");
        __Pausable_init();
        __UUPSUpgradeable_init();
        __Ownable_init();
    }

    ///@notice required by the OZ UUPS module
    function _authorizeUpgrade(address) internal override onlyOwner {}

    // support interface
    function supportsInterface(bytes4 interfaceId) public view virtual returns (bool) {
        return interfaceId == type(IERC20Upgradeable).interfaceId || interfaceId == type(IERC20MetadataUpgradeable).interfaceId;
    }

    /**
     * @notice Pause the token transfers, mints and burns
     * @dev Only L2_ADMIN can pause
     */
    function pause() external onlyOwner {
        _pause();
    }

    /**
     * @notice Unpause the token transfers, mints and burns
     * @dev Only L2_ADMIN can unpause
     */
    function unpause() external onlyOwner {
        _unpause();
    }

    /**
     * @notice Mint tokens
     * @dev Only L1_ADMIN can mint
     * @param to Address to mint tokens to
     * @param amount Amount to mint
     */
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    /**
     * @dev Override _beforeTokenTransfer hook to add pausable functionality
     */
    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, amount);
    }
}