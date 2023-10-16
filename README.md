# Github:
https://github.com/marcialarturo/IntelliQuiz

## Video
https://youtu.be/vm05B1Yfwf0

# IntelliQuiz
IntelliQuiz simplifies the process of learning and creating new learning materials. With IntelliQuiz anyone can create quizzes in seconds, all powerred by AI technology, the application produces stimulating and personalized quizzes that cater to the unique interests of every user.

Once your quiz is ready, you'll be prompted to put your knowledge to the test and embark on an exciting journey of discovery. Share and compete against the clock, challenge your friends, and earn exciting rewards as you master each quiz. Top users will be appear on the leaderboard.

Say goodbye to mundane quizzes, and say hello to IntelliQuiz, where learning becomes an addictive and rewarding adventure! Get ready to unlock the full potential of your intellect with the ultimate quiz companion.

## How is made

###  Gnosis chain
- Contract created on Gnosis: https://gnosis-chiado.blockscout.com/tx/0xcf7f05fcb899b13dd0f706e6a39de38d1f2aababbf97628731a8b150aedca81a
- Contract Address: 0xAc3b6f4e096c9Fe337f1F5A48b3F45df871b2411
- Twitter Link: https://twitter.com/byBetoNY/status/1713957764815310904

### The Graph
- We utilized the Graph to index news posts, bounties, and contributions, enabling faster sorting and retrieval of data.

### Web3 tech stack
- This application makes use of tableland to store users' quiz scores. This allows to query all scores, top 10 scores, and highest scores to display a leader board so this is a community-driven app.Tableland stores users' NFTs info and scores: - function to store all metadata for an NFT(tx hash, quiz name, quiz id, user wallet, date) - function to store users' scores - function that returns a user scores - function that returns top 10 user scores

- Mumbai Polygon Network: We deployed our dApp on the Polygon Mumbai Network with contract address 0xe1fc2d6bd2e43ea944172ce9469a18193eeb40734c387fed3e519498ebd65d1e for secure, fastest, and unexpensive transactions. We are using this contract to keep track of the user's posted quizzes, successfully answered quizzes, NFT awards, user profiles, and rating systems.

- This application is used to store metadata for NFTs rewards and metadata quiz information such as quiz description, title, category, level, language, image, author, questions, and options.

- ENS: Our application uses ENS to lookup ENS and fetches ENS Avatar and displays an address ENS with a Blockie image and option to copy the address.
- We used Solidity for the smart contract.

- We used OpenZeppelin ERC721 we use the ERC721 template for faster development of our smart contract.

- Hardhat for local blockchain development.

- We used Tailwind, MUI, Nextjs, and ReactJS for the frontend, and Ethersjs to connect to the blockchain.

- Mantle Testnet: The application has been deployed on the Mantle network, renowned for its secure, swift, and cost-effective transactions. We utilize this contract to meticulously record user-generated quizzes, completed quizzes, NFT awards, user profiles, and the accompanying rating systems.


## Contract Require functions
- generateQuiz function takes ipfs_url, wallet,
- mintNTFQuiz function create dynamic NFT with quiz title, my score, date, mintBlock number
- getAllNFTs return all NFTs
- getAllQuizzesCtreatedByMe return all quizzes
- getAllQuizzesCtreatedByAnyone return all quizzes
- getAnswered Quizes
- Minf NFTs
- Future:
   - top quizzesz results
   - Popular quizzes


