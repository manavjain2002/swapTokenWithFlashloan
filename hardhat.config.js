require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    "mumbai": {
      url: process.env.RPC,
      accounts: [process.env.PVT_KEY]
    }
  }
};
