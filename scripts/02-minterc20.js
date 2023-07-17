const { ethers } = require("ethers");


async function main() {
    const ERC20Upgradable = await hre.ethers.getContractFactory(
        "ERC20UpgradableV2"
    );
    console.log("Attach ERC20UpgradableV2...");

    const contract = await ERC20Upgradable.attach(
        "0xf57107A130a7170fb1dE16424046B553f2701c23"
    );

    const to = '0x3F9E5E96b26156541D369e57337881f6BA9Bc6A9'

    await contract.addUser(to)

    await contract.verifyUser(to)

    await contract.mint(
        to,
        ethers.parseUnits("400.00", 18)
    )

    console.log("ERC20UpgradableV2 mint  to:", to);
}

main();


