const { ethers, upgrades } = require("hardhat");

async function main() {
  const ERC20UpgradableV1 = await ethers.getContractFactory(
    "ERC20UpgradableV1"
  );
  console.log("Deploying ERC20UpgradableV1...");
  const contract = await upgrades.deployProxy(ERC20UpgradableV1, [], {
    initializer: "initialize",
    kind: "transparent",
  });
  await contract.waitForDeployment();
  console.log("ERC20UpgradableV1 deployed to:", await contract.getAddress());
}

main();