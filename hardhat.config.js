require("@openzeppelin/hardhat-upgrades");
require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()



const { WALLET_PRIVATE_KEY } = process.env;
const { POLYGONSCAN_API_KEY } = process.env;


module.exports = {
  solidity: "0.8.19",
  networks: {
    mumbai: {
      url: process.env.TESTE_URL,
      accounts: [`0x${WALLET_PRIVATE_KEY}`],
    },
    
  }, etherscan: {
    apiKey: POLYGONSCAN_API_KEY,
  },
};