const { ethers, upgrades } = require("hardhat");

async function main() {
  
  const BOX_ADDRESS = "0xEe98b51DD35042aa9dcCDE94E248C012C870FAAF"
  const V2 = await ethers.getContractFactory("V2");
  const v2 = await upgrades.upgradeProxy(BOX_ADDRESS, V2);
  console.log("V2 upgraded");
}

main();