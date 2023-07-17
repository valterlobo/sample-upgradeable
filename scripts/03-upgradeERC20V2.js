const { ethers, upgrades } = require("hardhat");

async function main() {

  const UC_ADDRESS = "0xf57107A130a7170fb1dE16424046B553f2701c23"
  const V2 = await ethers.getContractFactory("ERC20UpgradableV2");
  const v2 = await upgrades.upgradeProxy(UC_ADDRESS, V2);
  console.log("ERC20UpgradableV2 upgraded");
}

main();