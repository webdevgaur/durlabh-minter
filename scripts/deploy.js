const hre = require("hardhat");

async function main() {

  const DurlabhNFTs = await hre.ethers.getContractFactory("DurlabhNFTs");
  const durlabhNFTs = await DurlabhNFTs.deploy();

  await durlabhNFTs.deployed();

  console.log(
    `DurlabhNFTs deployed to ${durlabhNFTs.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
.then(() => process.exitCode = 0)
.catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
