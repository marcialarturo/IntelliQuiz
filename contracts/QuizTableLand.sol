// // SPDX-License-Identifier: UNLICENSED
// pragma solidity ^0.8.9;

// import "@tableland/evm/contracts/utils/TablelandDeployments.sol";
// import "@tableland/evm/contracts/utils/SQLHelpers.sol";
// import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
// import "@openzeppelin/contracts/utils/Strings.sol";

// contract QuizTable is ERC721Holder {
//   uint256 public tableId;
//   string private constant _TABLE_PREFIX = "quiz";
//   uint256 public dataCount = 0;

//   constructor() {
//     tableId = TablelandDeployments.get().create(
//       address(this),
//       SQLHelpers.toCreateFromSchema(
//         "id integer primary key,"
//         "quiz_name text,"
//         "student text,"
//         "date_taken text,"
//         "quiz_id integer,"
//         "score integer",
//         _TABLE_PREFIX
//       )
//     );
//   }

//   function addProfile(
//     string memory quizName,
//     uint score,
//     uint quizID
//   ) public {
//     dataCount++;

//     TablelandDeployments.get().mutate(
//         address(this),
//         tableId,
//         SQLHelpers.toInsert(
//         _TABLE_PREFIX,
//         tableId,
//         "id,quiz_name,student,date_taken,quiz_id,score",
//         string.concat(
//             Strings.toString(dataCount),
//             ",",
//             SQLHelpers.quote(quizName),
//             ",",
//             SQLHelpers.quote(Strings.toHexString(msg.sender)),
//             ",",
//             SQLHelpers.quote(Strings.toString(block.timestamp)),
//             ",",
//             Strings.toString(quizID),
//             ",",
//             Strings.toString(score)
//           )
//         )
//     );
//   }

//   function getTableName() external view returns (string memory) {
//     return SQLHelpers.toNameFromId(_TABLE_PREFIX, tableId);
//   }
// }
