const hre = require("hardhat");

async function main() {

  const AALC = await hre.ethers.getContractFactory("AALC");
  const aalc = await AALC.deploy();

  await aalc.deployed();

  await hre.run('verify:verify', {
    address: aalc.address,
    constructorArguments: [],
  });

  console.log("AALC deployed to:", aalc.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
