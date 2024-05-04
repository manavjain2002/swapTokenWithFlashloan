const { ethers } = require("hardhat");
require("dotenv").config();

/* FlashloanProvider address for sepolia testnet */
const FlashloanAddressProvider = "0x012bAC54348C0E635dCAc9D5FB99f06F24136C9A";

/* Input token address: USDC Contract Address of sepolia testnet */
const USDCContractAddress = "0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8";

/* Amount to transfer USDC to SwapContractAddress while deployment */
const usdcTransferAmount = "50000000";

/* Contract Address that swaps the tokens (Address of the contract that we deployed using npm run deploy) */
const SwapContractAddress = "0x4adB26C1d41Bd5371633BC98dF9711AD4B896a43";

/* Uniswap V2 Router Address */
const Router1Address = "0xC532a74256D3Db42D0Bf7a0400fEFDbad7694008";

/* Sushiswap V2 Router Address */
const Router2Address = "0xC532a74256D3Db42D0Bf7a0400fEFDbad7694008";

/* Another deployed token address which will be used for swapping with USDC */
const DeployedTokenAddress = "0x9E85Aea252237c08e31Ae4FC1b2dF5ea2F4C055d";

/* USDC Input amount to swap the token i,e USDC amountIn value that will be used for swapping */
// Don't make it more than 350000000 USDC, as the AAVE Flashloan has maximum 350000000 amount of tokens
const inputAmt = "10000000"; // 60 USDC

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
