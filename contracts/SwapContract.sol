//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@aave/core-v3/contracts/flashloan/base/FlashLoanSimpleReceiverBase.sol";
import "@aave/core-v3/contracts/interfaces/IPoolAddressesProvider.sol";

interface IERC20 {
    function balanceOf(address account) external view returns (uint);
    function transfer(address recipient, uint amount) external returns (bool);
    function approve(address spender, uint amount) external returns (bool);
}

interface IUniswapV2Router {
    function swapExactTokensForTokens(
        uint256 amountIn,
        uint256 amountOutMin,
        address[] calldata path,
        address to,
        uint256 deadlinea
    ) external returns (uint256[] memory amounts);
}

contract SwapContract is Ownable, FlashLoanSimpleReceiverBase {
    address private _router1;
    address private _router2;
    address private _token1;
    address private _token2;

    constructor(address _addressProvider) Ownable(msg.sender) FlashLoanSimpleReceiverBase(IPoolAddressesProvider(_addressProvider)) {}

    function setRouters(address router1, address router2) external onlyOwner {
        _router1 = router1;
        _router2 = router2;
    }

    function setTokens(address token1, address token2) external onlyOwner {
        _token1 = token1;
        _token2 = token2;
    }

    function swapTokenAtoB(uint256 _amount) private {
        IERC20(_token1).approve(_router1, _amount);
        address[] memory path;
        path = new address[](2);
        path[0] = _token1;
        path[1] = _token2;
        uint deadline = block.timestamp;
        IUniswapV2Router(_router1).swapExactTokensForTokens(_amount, 0, path, address(this), deadline);
    }

    function swapTokenBtoA(uint256 _amount) private {
        IERC20(_token2).approve(_router2, _amount);
        address[] memory path;
        path = new address[](2);
        path[0] = _token2;
        path[1] = _token1;
        uint deadline = block.timestamp;
        IUniswapV2Router(_router2).swapExactTokensForTokens(_amount, 0, path, address(this), deadline);
    }

    function startSwapping(uint256 _amount) internal {
        uint token2InitialBalance = IERC20(_token2).balanceOf(address(this));
        swapTokenAtoB(_amount);
        uint token2Balance = IERC20(_token2).balanceOf(address(this));
        uint tradeableAmount = token2Balance - token2InitialBalance;
        swapTokenBtoA(tradeableAmount);
    }

    function withdrawETH() external onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

    function withdrawETH(uint256 _value) external onlyOwner {
        payable(msg.sender).transfer(_value);
    }

    function withdrawTokens(address tokenAddress) external onlyOwner {
        IERC20(tokenAddress).transfer(msg.sender, IERC20(tokenAddress).balanceOf(address(this)));
    }

    function withdrawTokens(address tokenAddress, uint256 _amount) external onlyOwner {
        IERC20(tokenAddress).transfer(msg.sender, _amount);
    }

    function tradeTokens(
        address _asset,
        uint256 _amount,
        bytes calldata _params
    ) external onlyOwner {
        POOL.flashLoanSimple(address(this), _asset, _amount, _params, 0);
    }

    /**
        This function is called after your contract has received the flash loaned amount
     */
    function executeOperation(
        address asset,
        uint256 amount,
        uint256 premium,
        address ,
        bytes calldata
    ) external override returns (bool) {
        //
        // This contract now has the funds requested.
        // Your logic goes here.
        startSwapping(amount);

        // At the end of your logic above, this contract owes
        // the flashloaned amount + premiums.
        // Therefore ensure your contract has enough to repay
        // these amounts.

        // Approve the Pool contract allowance to *pull* the owed amount
        uint256 totalAmount = amount + premium;
        IERC20(asset).approve(address(POOL), totalAmount);

        return true;
    }

    receive() external payable {}

    fallback() external payable {}
}