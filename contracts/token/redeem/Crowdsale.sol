// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.0;

import "./BaseTokenRedeemer.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

/**
 * @title Crowdsale contract
 * @author Prasad prasad@chainscore.finance
 * @notice Crowdsale contract that allows users to buy SYX tokens with ETH/ERC20 tokens at a fixed rate
 * @notice Also has whitelisting functionality
 * @dev Token release is based on TokenRedeemer contract
 */
contract Crowdsale is 
    BaseTokenRedeemer, 
    OwnableUpgradeable,
    PausableUpgradeable, 
    UUPSUpgradeable 
{
    using SafeERC20Upgradeable for IERC20Upgradeable;

    bytes32 public merkleRoot;

    // start and end timestamps
    uint256 public whitelistDuration;
    uint256 public startTime;
    uint256 public endTime;

    // whitelist cap: max amount of SYX tokens that can be purchased by whitelisted users
    uint256 public whitelistCap;

    /// @notice exchange rate
    mapping (address => uint) rate;
    uint public constant RATE_PRECISION = 1e18;
    address public constant ETH_ADDRESS = 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE;

    /// @notice gap for future storage variables
    uint256[50] private __gap;

    function initialize(
        address _synthex,
        address _token,
        uint256 _startTime,
        uint256 _endTime,
        uint256 _lockPeriod,
        uint256 _unlockPeriod,
        uint256 _percUnlockAtRelease,
        bytes32 _merkleRoot,
        uint256 _whitelistDuration,
        uint256 _whitelistCap
    )
        public initializer
    {
        require(_startTime >= block.timestamp, "INVALID_TIME");
        require(_endTime >= _startTime, "INVALID_TIME");
        require(_synthex != address(0), "INVALID_ADDRESS");
        require(_token != address(0), "INVALID_ADDRESS");

        __Pausable_init();
        __UUPSUpgradeable_init();
        __Ownable_init();

        __BaseTokenRedeemer_init(
            _token,
            _lockPeriod,
            _unlockPeriod,
            _percUnlockAtRelease
        );

        whitelistDuration = _whitelistDuration;
        startTime = _startTime;
        endTime = _endTime;

        whitelistCap = _whitelistCap;

        merkleRoot = _merkleRoot;
    }

    /// @dev UUPS upgradeable proxy
    function _authorizeUpgrade(address) internal override onlyOwner {}

    // Receive ETH
    receive() external payable {
        buyWithETH();
    }

    fallback() external payable {
        buyWithETH();
    }

    /**
     * @notice Buy in whitelist period with ETH
     * @param _proof Merkle proof
     */
    function buyWithETH_w(bytes32[] calldata _proof) external payable whenNotPaused {
        require(block.timestamp >= startTime && block.timestamp <= startTime + whitelistDuration, "INVALID_TIME");
        // verify merkle proof 
        require(MerkleProof.verify(_proof, merkleRoot, keccak256(abi.encodePacked(msg.sender))), "INVALID_MERKLE_PROOF");
        
        require(buyWithETHInternal() < whitelistCap, "EXCEEDED_MAX_CAPACITY");
    }

    /**
     * @notice Buy in whitelist period with ERC20 token
     * @param _token Token address
     * @param _amount Amount of token to spend for buying SYX
     * @param _proof Merkle proof
     */
    function buyWithToken_w(address _token, uint _amount, bytes32[] calldata _proof) external whenNotPaused {
        require(block.timestamp >= startTime && block.timestamp <= startTime + whitelistDuration, "INVALID_TIME");
        // verify merkle proof
        require(MerkleProof.verify(_proof, merkleRoot, keccak256(abi.encodePacked(msg.sender))), "INVALID_MERKLE_PROOF");

        require(buyWithTokenInternal(_token, _amount) < whitelistCap, "EXCEEDED_MAX_CAPACITY");
    }

    /**
     * @notice Buy SYX tokens with ETH
     * @dev Only available after whitelist period
     */
    function buyWithETH() public payable whenNotPaused {
        require(block.timestamp >= startTime + whitelistDuration && block.timestamp <= endTime, "INVALID_TIME");
        buyWithETHInternal();
    }

    /**
     * @notice Buy SYX tokens with ERC20 token
     * @dev Only available after whitelist period
     * @param _token Token address to buy SYX
     * @param _amount Amount of token to spend for buying SYX
     */
    function buyWithToken(address _token, uint _amount) external whenNotPaused {
        require(block.timestamp >= startTime && block.timestamp <= endTime, "INVALID_TIME");
        buyWithTokenInternal(_token, _amount);
    }

    /**
     * @notice Internal function to buy SYX tokens with ETH
     * @dev Returns amount of SYX tokens bought
     */
    function buyWithETHInternal() internal returns (uint amount) {
        require(rate[ETH_ADDRESS] > 0, "TOKEN_NOT_SUPPORTED");
        // start unlock
        amount = msg.value * rate[ETH_ADDRESS] / RATE_PRECISION;
        require(amount > 0, "ZERO_AMOUNT");
        _startUnlock(msg.sender, amount);
    }

    /**
     * @notice Internal function to buy SYX tokens with ERC20 token
     * @dev Returns amount of SYX tokens bought
     */
    function buyWithTokenInternal(address _token, uint _amount) internal returns (uint amount) {
        require(rate[_token] > 0, "TOKEN_NOT_SUPPORTED");
        // Transfer In
        IERC20Upgradeable(_token).safeTransferFrom(
            msg.sender,
            address(this),
            _amount
        );
        // start unlock
        amount = _amount * rate[_token] / RATE_PRECISION;
        require(amount > 0, "ZERO_AMOUNT");
        _startUnlock(msg.sender, amount);
    }

    /**
     * @notice Claim all unlocked SYN tokens
     * @param _requestIds Request IDs of unlock requests
     */
    function unlock(bytes32[] calldata _requestIds) external whenNotPaused {
        for (uint256 i = 0; i < _requestIds.length; i++) {
            _unlockInternal(msg.sender, _requestIds[i]);
        }
    }

    /* -------------------------------------------------------------------------- */
    /*                               Admin Functions                              */
    /* -------------------------------------------------------------------------- */

    function updateRate(address _token, uint256 _rate) public onlyOwner {
        rate[_token] = _rate;
    }

    function endSale() external onlyOwner {
        require(block.timestamp < endTime, "INVALID_TIME");
        endTime = block.timestamp;
    }

    /**
     * @notice Withdraw ETH/ERC20 tokens from contract
     * @param _token Token address
     * @param _amount Amount of token to withdraw
     */
    function transferOut(address _token, uint256 _amount) external onlyOwner {
        if (_token == ETH_ADDRESS) {
            Address.sendValue(payable(msg.sender), _amount);
        } else {
            IERC20Upgradeable(_token).safeTransfer(msg.sender, _amount);
        }
    }

    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }
}