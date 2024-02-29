// scripts/deploy.js
const hre = require("hardhat");
const { ethers, network, run } = require('hardhat');
// const verify = async (contractAddress, args) => {
//   console.log("Verifying contract...");
//   try {
//       await run("verify:verify", {
//           address: contractAddress,
//           constructorArguments: args,
//       });
//   } catch (e) {
//       if (e.message.toLowerCase().includes("already verified")) {
//           console.log("Already verified!");
//       } else {
//           console.log(e);
//       }
//   }
// };
async function main() {
  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy();
  await nft.deployed();
  console.log(`NFT deployed to ${nft.address}`);

  // verify NFT
  console.log(`Waiting for blocks confirmations...`);
  await nft.deployTransaction.wait(6);
  await verify(nft.address, []);
  console.log(`Confirmed!`);


  const Healthiers = await hre.ethers.getContractFactory("healthiers");
  const healthiers = await Healthiers.deploy(nft.address);
  await healthiers.deployed();
  console.log(`healthiers deployed to ${healthiers.address}`);

    // verify NFT
    console.log(`Waiting for blocks confirmations...`);
    await healthiers.deployTransaction.wait(6);
    await verify(healthiers.address, [nft.address]);
    console.log(`Confirmed!`);
  
  // // Example interaction between NFT and MyMartNFT
  // await nft.setMyMartNFTContractAddress(myMartNFT.address);
  // const myMartNFTAddress = await nft.getMyMartNFTContractAddress();
  // console.log(`MyMartNFT contract address set in NFT: ${myMartNFTAddress}`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
