## Swap Tokens 

### Setup

#### 1. Clone the repo, install the packages, and update the env file with rpc and private key
```shell
git clone https://github.com/manavjain2002/swapTokenWithFlashloan.git
cd swapTokenWithFlashloan
npm i
cp env.example .env
```

#### 2. Compile the contracts
```shell
npx hardhat compile
```

#### 3. Set the addresses value in constants

```js
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
const inputAmt = "10000000"; // 10 USDC

```

#### 4. Deploy Contract

##### This step will deploy the new swap contract and transfers the 50 USDC to SwapContractAddress.

```shell
npm run deploy
```

#### Remeber:  Add the swap contract address to the constants.js file. 

#### 5. Set Addresses 

##### This step will configure the router and token addresses on the SwapContractAddress.

```shell
npm run configure
```

#### 6. Start Swapping

##### This step will take the flashloan first and then swaps the USDC with deployed token address.

```shell
npm run swap
```


### Example Transactions

### Address of the token that will be swapped with the USDC.
```shell
Deployed Token Contract Address : 0x9E85Aea252237c08e31Ae4FC1b2dF5ea2F4C055d
```

### Transaction to deploy the token that will be used to swap with USDC.
```shell
Token Deployment Tx: https://sepolia.etherscan.io/tx/0xbefa9a2ccb103c61271376212ec8b188fdb4379d3210ab3d0f4bd3e96a6f3732
```

### USDC contract address on sepolia testnet
```shell
USDC Contract Address : 0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8
```


### Address of the contract that will swap USDC with other deployed token(Address of the contract that we will deploy using `npm run deploy`)
```shell
Deployed Swap Contract Address : 0x4adB26C1d41Bd5371633BC98dF9711AD4B896a43
```


### Transaction to deploy the swapper contract
```shell
Contract Deployment Tx : https://sepolia.etherscan.io/tx/0xfb485cfe72d7f71f507bda6b9f5e1214aa2a7bca38759880490a924c2e424c00
```

### Transaction to transfer USDC while deploying the swapper contract.
```shell
USDC Transfer Tx : https://sepolia.etherscan.io/tx/0xfb59c24c7e2136c3d87224535c03fd39d776c28e526a9036c8c85e8b2e11902e
```

### Transaction to configure the routers of uniswap and sushiswap in swapper contract
```shell
Set Routers Tx : https://sepolia.etherscan.io/tx/0x2db2818e8cc441c9c4abf71af6695d85dd200bd1678ce011dfb38ae355940188
```

### Transaction to configure the tokens of USDC and other DeployedTokenAddress in swapper contract
```shell
Set Tokens Tx : https://sepolia.etherscan.io/tx/0xc7af012b7609721729ec2d7746c7f4afc97771fd37fab55b93a396786d15e3e2
```

### Transaction that swaps the token A to token B on uniswap and then swaps token B to token A on sushiswap on Swapper Contract.
```shell
Swap Tx Hash : https://sepolia.etherscan.io/tx/0x441776e83a04ad436311e8db2ecf95716b0ab50047c480f72d98a6ae50b9c3ec
```
