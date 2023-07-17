const { ethers, upgrades } = require("hardhat");

async function main() {
  const V1 = await ethers.getContractFactory("V1");
  const v1 = await upgrades.deployProxy(V1, [42]);
  await v1.waitForDeployment();
  console.log("Box deployed to:", await v1.getAddress());
}

main();
