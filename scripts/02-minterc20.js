const { ethers } = require("ethers");


async function main() {
    const ERC20UpgradableV1 = await hre.ethers.getContractFactory(
        "ERC20UpgradableV1"
    );
    console.log("Attach ERC20UpgradableV1...");

    const contract = await ERC20UpgradableV1.attach(
        "0xf57107A130a7170fb1dE16424046B553f2701c23"
    );

    const to = '0x3F9E5E96b26156541D369e57337881f6BA9Bc6A9'

    await contract.mint(
        to,
        ethers.parseUnits("1200000.00", 18)
    );

    console.log("ERC20UpgradableV1 dmint  to:", to);
}

main();


