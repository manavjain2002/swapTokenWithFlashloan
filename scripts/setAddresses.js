const ethers = require("ethers");
const {
  USDCContractAddress,
  SwapContractAddress,
  Router1Address,
  Router2Address,
  DeployedTokenAddress,
  wallet,
} = require("./constants");
const SwapContract = require("../artifacts/contracts/SwapContract.sol/SwapContract.json");

async function setToken() {
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
    let setRouterTx;
    try {
      setRouterTx = await swapContract.setRouters(
        Router1Address,
        Router2Address
      );
    } catch (e) {
      console.error(`Error while setting router address : ${e}`);
      return;
    }

    if (setRouterTx) {
      console.log(
        `Router Address configured as ${Router1Address} and ${Router2Address}`
      );

      try {
        const setTokenTx = await swapContract.setTokens(
          USDCContractAddress,
          DeployedTokenAddress
        );

        if (setTokenTx) {
          console.log(
            `Token Address configured as ${USDCContractAddress} and ${DeployedTokenAddress}`
          );
        }
      } catch (e) {
        console.error(`Error while setting token address : ${e}`);
        return;
      }
    }
  } catch (e) {
    console.error(`Error while setting router address and token address: ${e}`);
    return;
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
setToken().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
