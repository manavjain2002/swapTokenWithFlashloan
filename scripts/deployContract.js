// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const ethers = require("ethers");
const {
  FlashloanAddressProvider,
  USDCContractAddress,
  usdcTransferAmount,
  wallet,
} = require("./constants");
const IERC20 = require("./abi/IERC20.json");
const SwapContract = require("../artifacts/contracts/SwapContract.sol/SwapContract.json");

async function deployContract() {
  let contractAddress;

  try {
    const factory = new ethers.ContractFactory(
      SwapContract.abi,
      SwapContract.bytecode,
      wallet
    );
    const contract = await factory.deploy(FlashloanAddressProvider);

    await contract.waitForDeployment();
    contractAddress = contract.target;
  } catch (e) {
    console.error(`Erorr while deploying contract: ${e}`);
    return;
  }

  console.log("Swap Contract Deployed to address : ", contractAddress);

  try {
    const usdcContract = new ethers.Contract(
      USDCContractAddress,
      IERC20.abi,
      wallet
    );

    const transferUSDC = await usdcContract.transfer(
      contractAddress,
      usdcTransferAmount
    );

    if (transferUSDC) {
      console.log(
        `USDC transferred to : ${contractAddress}. Amount : ${usdcTransferAmount}`
      );
    }
  } catch (e) {
    console.error(`Error while transferring USDC: ${e}`);
    return;
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
deployContract().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
