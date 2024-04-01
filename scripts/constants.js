const { ethers } = require("hardhat");
require("dotenv").config();

const FlashloanAddressProvider = "0x4CeDCB57Af02293231BAA9D39354D6BFDFD251e0";

const USDCContractAddress = "0x52D800ca262522580CeBAD275395ca6e7598C014";

const usdcTransferAmount = "50000000";

const SwapContractAddress = "0x28e22216b95D1D72Da58A78a37198f10F8139a8c";

const Router1Address = "0x8954AfA98594b838bda56FE4C12a09D7739D179b";

const Router2Address = "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506";

const DeployedTokenAddress = "0xd7E9Db4186fb1DedD82CD2324421293FECd722b1";

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
