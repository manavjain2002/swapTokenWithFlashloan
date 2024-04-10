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
/* FlashloanProvider address for testnet */
const FlashloanAddressProvider = "0x4CeDCB57Af02293231BAA9D39354D6BFDFD251e0"

/* Input token address: USDC Contract Address */
const USDCContractAddress = "0x52D800ca262522580CeBAD275395ca6e7598C014"

/* Amount to transfer USDC to SwapContractAddress while deployment */
const usdcTransferAmount = "50000000" // 50 USDC

/* Contract Address that swaps the tokens */
const SwapContractAddress = "0x30a0b263c30Be6fC3de57d5F57f773bce16C8DA1"

/* Uniswap Router Address */
const Router1Address = "0x8954AfA98594b838bda56FE4C12a09D7739D179b"

/* Sushiswap Router Address */
const Router2Address = "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506"

/* Another deployed token address  which will be used for swapping */
const DeployedTokenAddress = "0xD065601A439512223E4555914DAce902f9fCF736"

/* USDC Input amount to swap the token */
const inputAmt = "500000000" // 500 USDC
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
Deployed Token Contract Address : 0xc6F53B8b782b35C207B452d2FC19A15b45B46a70
```

### Transaction to deploy the token that will be used to swap with USDC.
```shell
Token Deployment Tx: https://mumbai.polygonscan.com/tx/0xefcd93f59d326ba14f5079199d0a190beeb91379e3472b6312d14f04704e7a88
```

### USDC contract address on mumbai testnet
```shell
USDC Contract Address : 0x52D800ca262522580CeBAD275395ca6e7598C014
```


### Address of the contract that will swap USDC with other deployed token(Address of the contract that we will deploy using `npm run deploy`)
```shell
Deployed Swap Contract Address : 0x7C4ae7aF94DF0894fF6309E7729cE9ce949f8A4B
```


### Transaction to deploy the swapper contract
```shell
Contract Deployment Tx : (https://mumbai.polygonscan.com/tx/0xfb6b13314da8f3880a38916ee75dac707926595cd67fe051c04d3ca83a9f941c)
```

### Transaction to transfer USDC while deploying the swapper contract.
```shell
USDC Transfer Tx : https://mumbai.polygonscan.com/tx/0xd2c52381b1cbbd21714bc3542b3a1f84815b4b22b9131c44a8791d95c6188165
```

### Transaction to configure the routers of uniswap and sushiswap in swapper contract
```shell
Set Routers Tx : https://mumbai.polygonscan.com/tx/0x2e6b76e1fee9d491b4be9d0cf366c2e1f50a152f6e7a83f962cad896380e5f4c
```

### Transaction to configure the tokens of USDC and other DeployedTokenAddress in swapper contract
```shell
Set Tokens Tx : https://mumbai.polygonscan.com/tx/0x0f54bed6b47e19ffde1f25d93a452ba8290db95465a4e5dc7ba05f2b9fbe9b0f
```

### Transaction that swaps the token A to token B on uniswap and then swaps token B to token A on sushiswap on Swapper Contract.
```shell
Swap Tx Hash : https://mumbai.polygonscan.com/tx/0x217b548dd7ee7fd50145a305125ad1c26639ba9f04ecfdbb0ca6598eed8966ad
```
