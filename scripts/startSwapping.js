const ethers = require("ethers");
const {
  USDCContractAddress,
  SwapContractAddress,
  inputAmt,
  wallet,
} = require("./constants");
const SwapContract = require("../artifacts/contracts/SwapContract.sol/SwapContract.json");

async function start() {
  const swapContract = new ethers.Contract(
    SwapContractAddress,
    SwapContract.abi,
    wallet
  );

  if (!swapContract) {
    console.error(`Unable to get swap contract.`);
    return;
  }

  try {
    const tradeTokensTx = await swapContract.tradeTokens(
      USDCContractAddress,
      inputAmt,
      "0x"
    );
    if (tradeTokensTx) {
      console.log(`Tokens traded successfully.`);
    }
  } catch (e) {
    console.error(`Error while trading tokens: ${e}`);
    return;
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
start().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
