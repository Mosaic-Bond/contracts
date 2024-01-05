# Mosaic Contracts

## Compile Contracts

```bash
yarn compile
```

## Deploying Markets 

```bash
MARKET=TestnetCryptoTelos npx hardhat deploy --network [network]
```

## Deploying Mosaic Tokens 

```bash
npx hardhat run tasks/token/deploy.ts --network [network]
```