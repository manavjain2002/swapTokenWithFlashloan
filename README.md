# Sample Hardhat Project

## Swap Tokens 

### Setup

#### 1. Compile the contracts
```shell
npx hardhat compile
```

#### 2. Set the addresses value in constants

```js
/* FlashloanProvider address for testnet */
const FlashloanAddressProvider = "0x4CeDCB57Af02293231BAA9D39354D6BFDFD251e0"

/* Input token address: USDC Contract Address */
const USDCContractAddress = "0x52D800ca262522580CeBAD275395ca6e7598C014"

/* Amount to transfer USDC to SwapContractAddress while deployment */
const usdcTransferAmount = "50000000" // 50 USDC

/* Contract Address that swaps the tokens */
const SwapContractAddress = "0x28e22216b95D1D72Da58A78a37198f10F8139a8c"

/* Uniswap Router Address */
const Router1Address = "0x8954AfA98594b838bda56FE4C12a09D7739D179b"

/* Sushiswap Router Address */
const Router2Address = "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506"

/* Another deployed token address */
const DeployedTokenAddress = "0xd7E9Db4186fb1DedD82CD2324421293FECd722b1"

/* USDC Input amount to swap the token */
const inputAmt = "500000000" // 500 USDC
```

#### 3. Deploy Contract

##### This step will deploy the new swap contract and transfers the 50 USDC to SwapContractAddress.

```shell
npm run deploy
```

#### Remeber:  Add the swap contract address to the constants.js file. 

#### 4. Set Addresses 

##### This step will configure the router and token addresses on the SwapContractAddress.

```shell
npm run configure
```

#### 5. Start Swapping

##### This step will take the flashloan first and then swaps the USDC with deployed token address.

```shell
npm run swap
```

### Example Transactions

##### Deployed Token Contract Address : 0xD065601A439512223E4555914DAce902f9fCF736

##### USDC Contract Address : 0x52D800ca262522580CeBAD275395ca6e7598C014

##### Deployed Swap Contract Address : 0x30a0b263c30Be6fC3de57d5F57f773bce16C8DA1

##### Contract Deployment Tx : https://mumbai.polygonscan.com/tx/0x254a041da6879d6b98d38694e0eddac778b31f68f30d930859d0db26c84db010

##### USDC Transfer Tx : https://mumbai.polygonscan.com/tx/0x200c583d8ce9a1eee114724f121ca6c1469d55d2341cb504879ac92acf38672f

##### Set Routers Tx : https://mumbai.polygonscan.com/tx/0xa526f7a62c6792b0add68e745157be578635759a4f08e77c04c81ff6e0e21940

##### Set Tokens Tx : https://mumbai.polygonscan.com/tx/0xe3912b1ad6549509975577c6aa3d600d08fbe25dfa80839675017fa644b5ff83

##### Swap Tx Hash : https://mumbai.polygonscan.com/tx/0xc3254aebe4dd90c2acdc56d8ea15104cd90433a29b3ae09a974ab003aedbe74c