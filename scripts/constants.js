const { ethers } = require("hardhat");
require("dotenv").config();

const FlashloanAddressProvider = "0x4CeDCB57Af02293231BAA9D39354D6BFDFD251e0";

const USDCContractAddress = "0x52D800ca262522580CeBAD275395ca6e7598C014";

const usdcTransferAmount = "50000000";

const SwapContractAddress = "0x30a0b263c30Be6fC3de57d5F57f773bce16C8DA1";

const Router1Address = "0x8954AfA98594b838bda56FE4C12a09D7739D179b";

const Router2Address = "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506";

const DeployedTokenAddress = "0xD065601A439512223E4555914DAce902f9fCF736";

// Don't make it more than 350000000 USDC, as the AAVE Flashloan has maximum 350000000 amount of tokens
const inputAmt = "60000000";

const provider = new ethers.JsonRpcProvider(process.env.RPC);

const wallet = new ethers.Wallet(process.env.PVT_KEY, provider);

module.exports = {
  FlashloanAddressProvider,
  USDCContractAddress,
  usdcTransferAmount,
  SwapContractAddress,
  Router1Address,
  Router2Address,
  DeployedTokenAddress,
  inputAmt,
  provider,
  wallet,
};
