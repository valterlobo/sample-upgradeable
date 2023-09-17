#  --  Project sample-upgradeable --


This project demonstrates a basic openzeppelin upgradable use case. 

Simple contract:   V1 , V2 

ERC 20 token: ERC20UpgradableV1 , ERC20UpgradableV2 

 > # safety requirements were not observed 


# Ref: 
## How to Create and Deploy an Upgradeable Smart Contract using OpenZeppelin and Hardhat
https://www.quicknode.com/guides/ethereum-development/smart-contracts/how-to-create-and-deploy-an-upgradeable-smart-contract-using-openzeppelin-and-hardhat

## Upgradable ERC-20 Smart Contract
https://dev.to/envoy_/upgradable-erc-20-smart-contract-part-1-5433

## Upgrades Plugins
https://docs.openzeppelin.com/upgrades-plugins/1.x/

## UPGRADING SMART CONTRACTS 
https://ethereum.org/en/developers/docs/smart-contracts/upgrading/

## How to create ERC-721 Upgradeable Smart Contracts
https://medium.com/@KamalliElmeddin/how-to-create-erc-721-upgradeable-smart-contracts-d960493b640c

# Tasks:

```shell
npm install
npx hardhat help
npx hardhat clean 
npx hardhat compile 
npx hardhat node
```
##  Simple V1 , V2 :  

```shell
npx hardhat run scripts/deployv1.js
npx hardhat run scripts/deployv2.js

npx hardhat verify --contract "contracts/ContractV1.sol:V1" ???? --network mumbai

npx hardhat verify --contract "contracts/ContractV2.sol:V2" ???? --network mumbai
```


## ERC 20 token : ERC20UpgradableV1 , ERC20UpgradableV2

```shell
npx hardhat run scripts/01-deployerc20.js --network mumbai

npx hardhat run scripts/03-upgradeERC20V2.js --network mumbai

npx hardhat verify --contract "contracts/ERC20UpgradableV1.sol:ERC20UpgradableV1"  ?? --network mumbai


npx hardhat run scripts/02-minterc20.js --network mumbai

```



