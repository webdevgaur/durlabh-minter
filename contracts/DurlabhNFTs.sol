// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Durlabhs is ERC721, Ownable {
    uint256 public mintPrice;
    uint256 public totalSupply;
    uint256 public maxSupply;
    uint256 public maxPerWallet;
    bool public isPublicMintEnabled;
    string internal baseTokenUri;
    address payable public withdrawWallet;
    mapping(address => uint256) public walletMints;

    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() payable ERC721("Durlabhs", "DRLBH") {
        mintPrice = 0.02 ether;
        totalSupply = 0;
        maxSupply = 25;
        maxPerWallet = 5;
        withdrawWallet = 0x5A01f5a6297200c0d9B38450C5C15Ba96557243A;
    }

    function setIsPublicMintEnabled(bool _isPublicMintEnabled) external onlyOwner {
        isPublicMintEnabled = _isPublicMintEnabled;
    }

    function setBaseTokenUri(string calldata _baseTokenUri) external onlyOwner {
        baseTokenUri = _baseTokenUri;
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://";
    }

    function mintMe(uint256 _quantity) public payable {
        require(isPublicMintEnabled, 'Minting is disabled as of this moment');
        require(msg.value == _quantity*mintPrice, 'Incorrect amount of token sent');
        require(totalSupply + _quantity <= maxSupply, 'Sorry, we are all sold out! :(');
        require(walletMints[msg.sender] + _quantity <= maxPerWallet, 'Maximum limit per wallet exceeded');

        for(uint256 i = 0; i < _quantity; i++) {
            uint256 newTokenId = totalSupply + 1;
            totalSupply++;
            _safeMint(msg.sender, newTokenId);
        }
    }

    // The following functions are overrides required by Solidity.


    function tokenURI(uint256 _tokenId)
        public
        view
        override
        returns (string memory)
    {
        require(_exists(_tokenId), 'This token ID does not exist.');
        return string(abi.encodePacked(baseTokenUri, Strings.toString(_tokenId), '.json'));
    }

    function withdraw() external onlyOwner {
        (bool success, ) = withdrawWallet.call{ value: address(this).balance }('');
        require(success, 'Withdrawal failed.');
    }
}