import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

const quizzesDummy = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1120&q=80",
    title: "The basics of Angular",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    title: "Introduction to JavaScript",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "HTML and CSS Fundamentals",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "Node.js for Beginners",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1609705024873-7add858e3036?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Python Crash Course",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    title: "Web Development with Vue.js",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "The Complete C# Developer",
  },
  {
    id: 8,
    image:
      "https://plus.unsplash.com/premium_photo-1675257062985-323b7ea418e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Mastering Data Science",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1605648916319-cf082f7524a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Android App Development",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=800",
    title: "Machine Learning Basics 3",
  },
  {
    id: 11,
    image:
      "https://plus.unsplash.com/premium_photo-1683580362892-fc31c2ff935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    title: "Machine Learning Basics",
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    title: "Machine Learning Basics",
  },
  {
    id: 13,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "Machine Learning Basics",
  },
];

function Intelliquiz() {
  const { data: totalQuizzes } = useScaffoldContractRead({
    contractName: "QuizNFT",
    functionName: "getAllQuizzes",
  });
  console.log("totalQuizzes:", totalQuizzes);

  useEffect(() => {
    getAllQuizzes();
  }, [totalQuizzes]);

  const getAllQuizzes = async () => {
    // try {
    //   const temp = [];
    //   for (let i = 0; i < totalQuizzes.length; i++) {
    //     const obj = {};
    //     // data from smart contract
    //     const organizer = totalQuizzes[i][4];
    //     const totalDonations = totalQuizzes[i]["totalDonations"].toString();
    //     const fundraiserId = totalQuizzes[i].id.toString();
    //     // fetchs data from nftStorage
    //     const nftStorageURL = totalQuizzes[i][1];
    //     if (!nftStorageURL) {
    //       continue;
    //     }
    //     let getNFTStorageData = await fetch(nftStorageURL);
    //     let fundraiserData = await getNFTStorageData.json();
    //     const data = JSON.parse(fundraiserData.description);
    //     console.log("🚀 ~ file: index.tsx:53 ~ getDatasetTokens ~ data:", data);
    //     // builds fundraiser data
    //     obj.fundraiserId = fundraiserId;
    //     obj.organizer = organizer;
    //     obj.totalDonations = totalDonations;
    //     obj.title = fundraiserData.name;
    //     obj.image = data.image;
    //     obj.description = data.description;
    //     obj.category = data.category;
    //     obj.targetAmmount = data.targetAmmount;
    //     obj.creationDate = data.creationDate;
    //     temp.push(obj);
    //   }
    //   setFundraisers(temp)();
    // } catch (error) {
    //   console.log({ error });
    // }
  };

  return (
    <div>
      <div className="pt-2">
        {/* header filter */}
        <div className="bg-[#6918c2] h-[80px] p-4 flex flex-wrap gap-4">
          <h3 className="text-white font-bold text-2xl  ">Explore content</h3>
          <div className="flex gap-4">
            <select name="subject" id="subject" className="h-[35px] p-[8px] rounded">
              <option value="Technology">Technology</option>
              <option value="Medical">Medical</option>
              <option value="Education">Education</option>
              <option value="Sports">Sports</option>
              <option value="Science">Science</option>
            </select>

            <select name="contentBy" id="contentBy" className="h-[35px] p-[8px] rounded">
              <option value="Professors">Professors</option>
              <option value="Students">Students</option>
              <option value="Anyone">Anyone</option>
            </select>

            <select name="grade" id="grade" className="h-[35px] p-[8px] rounded">
              <option value="All">All</option>
              <option value="Elementary">Elementary</option>
              <option value="Secondary">Secondary</option>
              <option value="University">University</option>
            </select>

            <select name="language" id="language" className="h-[35px] p-[8px] rounded">
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="Chinese">Chinese</option>
              <option value="Russian">Russian</option>
            </select>
          </div>
        </div>
        {/* cardList */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 py-8 px-4">
          {quizzesDummy.length > 0
            ? quizzesDummy.map(quizz => (
                <div key={quizz.id} className="border border-gray-300 pb-8 rounded-lg">
                  <Image
                    src={quizz.image}
                    alt="image rep"
                    className="w-full h-[200px] object-cover rounded-t-lg "
                    height={300}
                    width={220}
                  />
                  <h3 className="px-4 pt-2 font-bold text-xl truncate">{quizz.title}</h3>
                  <Link href={`/preview-quiz/${quizz.id}`} className="px-4 pt-0 text-blue-600 font-bold ">
                    See collection
                  </Link>
                </div>
              ))
            : "Loading"}
        </div>
      </div>
    </div>
  );
}

export default Intelliquiz;
