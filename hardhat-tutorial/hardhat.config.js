require("@nomicfoundation/hardhat-toolbox");
// 1. Import the Ethers plugin required to interact with the contract
require('@nomiclabs/hardhat-ethers');
// require("@nomicfoundation/hardhat-chai");

// 2. Import your private key from your pre-funded Moonbase Alpha testing account
const { privateKey } = require('./secrets.json');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity:"0.8.20",
    settings: {
      evmVersion: 'london',
  networks: {
    moonbase: {
      url: 'https://rpc.api.moonbase.moonbeam.network',
      chainId: 1287, // (hex: 0x507),
      accounts: [privateKey]
    },
}
}
}
