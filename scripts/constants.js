const { ethers } = require("hardhat");
require("dotenv").config();

/* FlashloanProvider address for mumbai testnet */
const FlashloanAddressProvider = "0x4CeDCB57Af02293231BAA9D39354D6BFDFD251e0";

/* Input token address: USDC Contract Address of mumbai testnet */
const USDCContractAddress = "0x52D800ca262522580CeBAD275395ca6e7598C014";

/* Amount to transfer USDC to SwapContractAddress while deployment */
const usdcTransferAmount = "50000000";

/* Contract Address that swaps the tokens (Address of the contract that we deployed using npm run deploy) */
const SwapContractAddress = "0x63BA8fE3B5daee7c5E82ab504B9649fA3267f981";

/* Uniswap V2 Router Address */
const Router1Address = "0x8954AfA98594b838bda56FE4C12a09D7739D179b";

/* Sushiswap V2 Router Address */
const Router2Address = "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506";

/* Another deployed token address which will be used for swapping with USDC */
const DeployedTokenAddress = "0xc6F53B8b782b35C207B452d2FC19A15b45B46a70";

/* USDC Input amount to swap the token i,e USDC amountIn value that will be used for swapping */
// Don't make it more than 350000000 USDC, as the AAVE Flashloan has maximum 350000000 amount of tokens
const inputAmt = "60000000"; // 60 USDC

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
