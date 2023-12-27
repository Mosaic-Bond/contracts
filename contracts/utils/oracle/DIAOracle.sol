// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {IDIAOracle, IPriceOracleGetter} from "./IPriceOracle.sol";
import "@aave/core-v3/contracts/dependencies/chainlink/AggregatorInterface.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


/**
 * @title PriceOracle
 * @author Prasad
 * @notice Contract to get asset prices, manage price sources and update the fallback oracle
 * - Use of DIA Aggregators as first source of price
 * - If the returned price by a Chainlink aggregator is <= 0, the call is forwarded to a fallback oracle
 */
contract DIAOracle is IDIAOracle, Ownable {
  // Map of asset price sources (asset => priceSource)
  mapping(address => string) private assetsSources;
  IDIAOracleV2 public immutable diaOracle;
  
  IPriceOracleGetter private _fallbackOracle;
  address public immutable BASE_CURRENCY;
  uint public immutable BASE_CURRENCY_UNIT;

  /**
   * @notice Constructor
   * @param assets The addresses of the assets
   * @param sources The address of the source of each asset
   * @param fallbackOracle The address of the fallback oracle to use if the data of an
   *        aggregator is not consistent
   * @param baseCurrency The base currency used for the price quotes. If USD is used, base currency is 0x0
   * @param baseCurrencyUnit The unit of the base currency
   */
  constructor(
    address _diaOracle,
    address[] memory assets,
    string[] memory sources,
    address fallbackOracle,
    address baseCurrency,
    uint baseCurrencyUnit
  ) {
    diaOracle = IDIAOracleV2(_diaOracle);
    _setFallbackOracle(fallbackOracle);
    _setAssetsSources(assets, sources);
    BASE_CURRENCY = baseCurrency;
    BASE_CURRENCY_UNIT = baseCurrencyUnit;
    emit BaseCurrencySet(baseCurrency, baseCurrencyUnit);
  }

  /// @inheritdoc IDIAOracle
  function setAssetSources(address[] calldata assets, string[] calldata sources)
    external
    override
    onlyOwner
  {
    _setAssetsSources(assets, sources);
  }

  /// @inheritdoc IDIAOracle
  function setFallbackOracle(address fallbackOracle)
    external
    override
    onlyOwner
  {
    _setFallbackOracle(fallbackOracle);
  }

  /**
   * @notice Internal function to set the sources for each asset
   * @param assets The addresses of the assets
   * @param sources The address of the source of each asset
   */
  function _setAssetsSources(address[] memory assets, string[] memory sources) internal {
    require(assets.length == sources.length, "INVALID_ARGUMENT");
    for (uint256 i = 0; i < assets.length; i++) {
      assetsSources[assets[i]] = (sources[i]);
      emit AssetSourceUpdated(assets[i], sources[i]);
    }
  }

  /**
   * @notice Internal function to set the fallback oracle
   * @param fallbackOracle The address of the fallback oracle
   */
  function _setFallbackOracle(address fallbackOracle) internal {
    _fallbackOracle = IPriceOracleGetter(fallbackOracle);
    emit FallbackOracleUpdated(fallbackOracle);
  }

  /// @inheritdoc IDIAOracle
  function getAssetPrice(address asset) public override returns (uint) {
    string memory key = assetsSources[asset];

    if (asset == BASE_CURRENCY) {
      return BASE_CURRENCY_UNIT;
    } else if (bytes(key).length == 0) {
      return _fallbackOracle.getAssetPrice(asset);
    } else {
      (uint128 price,) = diaOracle.getValue(key);
      if (price > 0) {
        return uint256(price);
      } else {
        return _fallbackOracle.getAssetPrice(asset);
      }
    }
  }

  /// @inheritdoc IDIAOracle
  function getAssetsPrices(address[] calldata assets)
    external
    override
    returns (uint[] memory)
  {
    uint[] memory prices = new uint[](assets.length);
    for (uint256 i = 0; i < assets.length; i++) {
      prices[i] = getAssetPrice(assets[i]);
    }
    return prices;
  }

  /// @inheritdoc IDIAOracle
  function getSourceOfAsset(address asset) external view override returns (string memory) {
    return (assetsSources[asset]);
  }

  /// @inheritdoc IDIAOracle
  function getFallbackOracle() external view returns (address) {
    return address(_fallbackOracle);
  }
}


interface IDIAOracleV2{
    function getValue(string memory) external returns (uint128, uint128);
}