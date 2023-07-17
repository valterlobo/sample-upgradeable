# Project sample-upgradeable


This project demonstrates a basic openzeppelin upgradable use case. 

Simple contract:   V1 , V2 

ERC 20 token: ERC20UpgradableV1 , ERC20UpgradableV2 

# Ref: 
## How to Create and Deploy an Upgradeable Smart Contract using OpenZeppelin and Hardhat
https://www.quicknode.com/guides/ethereum-development/smart-contracts/how-to-create-and-deploy-an-upgradeable-smart-contract-using-openzeppelin-and-hardhat

## Upgradable ERC-20 Smart Contract
https://dev.to/envoy_/upgradable-erc-20-smart-contract-part-1-5433



## tasks:

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

# remove

npm install @openzeppelin/hardhat-upgrades
npm install @nomiclabs/hardhat-etherscan 



 npx hardhat  run scripts/deployv1.js --network mumbai 







npx hardhat verify --contract "contracts/ContractV1.sol:V1"  0xEe98b51DD35042aa9dcCDE94E248C012C870FAAF --network mumbai


https://mumbai.polygonscan.com/address/0xb08139004297cb7abd121cf38027df802e3879ac#code




npm install --save-dev @openzeppelin/contracts-upgradeable  @openzeppelin/hardhat-upgrades dotenv



npx hardhat verify --contract "contracts/ERC20UpgradableV1.sol:ERC20UpgradableV1"  0xf57107A130a7170fb1dE16424046B553f2701c23 --network mumbai


npx hardhat verify --contract "contracts/ERC20UpgradableV2.sol:ERC20UpgradableV2"  0xf57107A130a7170fb1dE16424046B553f2701c23 --network mumbai


0xf57107A130a7170fb1dE16424046B553f2701c23



