// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract QuizNFT is ERC721Enumerable, Ownable {
    using Strings for uint256;

    struct Quiz {
        string url;
        address owner;
    }

    uint quizCount;
    mapping(uint256 => Quiz) public quizzes;
    mapping(address => uint256[]) public quizzesCreatedByWallet;

    uint256 private _tokenIdCounter;

    constructor() ERC721("Quiz NFT", "QNFT") {
        _tokenIdCounter = 1;
    }

    function generateQuiz(string memory _url) external {
        require(bytes(_url).length > 0, "URL cannot be empty");

        quizzes[quizCount] = Quiz({
            url: _url,
            owner: msg.sender
        });

        quizzesCreatedByWallet[msg.sender].push(quizCount);
        quizCount++;
    }

    function mintNTFQuiz() external {
        uint256 tokenId = _tokenIdCounter;
        _mint(msg.sender, tokenId);
        _tokenIdCounter++;
        // string dynamicNFT = buildURI(tokenId);
    }

    // function buildURI(uint256 id) internal view returns (string memory) {
    //     address tokenMinter = s_tokenIdToTokenMinter[id];
    //     uint256 mintedBlockNumber = s_tokenIdToBlockNumber[id];
    //     uint256 donatedAmount = s_tokenIdToDonation[id];

    //     Theme currentTheme = s_tokenIdToTheme[id];
    //     string memory backgroundColor = (currentTheme == Theme.DARK) ? "#2A3655" : "#F5F5F5";
    //     string memory textColor = (currentTheme == Theme.DARK) ? "#F5F5F5" : "#2A3655";

    //     bytes memory image = abi.encodePacked(
    //         "data:image/svg+xml;base64,",
    //         Base64.encode(
    //             bytes(
    //                 abi.encodePacked(
    //                     '<?xml version="1.0" encoding="UTF-8"?>',
    //                     '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">',
    //                     '<style type="text/css"><![CDATA[text {font-family: monospace; font-size: 21px; fill: ',
    //                     textColor,
    //                     ";} .h1 {font-size: 40px; font-weight: 600; fill: ",
    //                     textColor,
    //                     ";}]]></style>",
    //                     '<rect width="400" height="400" fill="',
    //                     backgroundColor,
    //                     '" />',
    //                     '<text x="20" y="30">On block #',
    //                     LibString.toString(mintedBlockNumber),
    //                     "</text>",
    //                     '<text x="20" y="90" style="font-size:14px;">0x',
    //                     addressToString(tokenMinter),
    //                     "</text>",
    //                     '<text x="20" y="130">found wisdom in</text>',
    //                     '<text class="h1" x="20" y="175">0 to BuidlGuidl</text>',
    //                     unicode'<text x="20" y="210">and donated Ξ ',
    //                     weiToEtherString(donatedAmount),

    //                     unicode'<text x="20" y="380">and good luck on your way!</text>',
    //                     "</svg>"
    //                 )
    //             )
    //         )
    //     );

    //     return string(
    //         abi.encodePacked(
    //             "data:application/json;base64,",
    //             Base64.encode(
    //                 bytes(
    //                     abi.encodePacked(
    //                         '{"name":"',
    //                         name(),
    //                         '", "image":"',
    //                         image,
    //                         unicode'", "description": "Consider this NFT as an eternal thank you note for your donation. Hope to see you building with us in the future! <3"}'
    //                     )
    //                 )
    //             )
    //         )
    //     );
    // }

    function getAllQuizzes() external view returns (Quiz[] memory) {
        Quiz[] memory result = new Quiz[](quizCount);
        for (uint256 i = 0; i < quizCount; i++) {
            result[i] = quizzes[i];
        }
        return result;
    }

    function getAllNFTs() external view returns (uint256[] memory) {
        uint256 totalSupply = totalSupply();
        uint256[] memory result = new uint256[](totalSupply);
        for (uint256 i = 0; i < totalSupply; i++) {
            result[i] = tokenByIndex(i);
        }
        return result;
    }

    function getAllQuizzesCreatedByMe() external view returns (uint256[] memory) {
        return quizzesCreatedByWallet[msg.sender];
    }
}
