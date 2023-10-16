import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { File, NFTStorage } from "nft.storage";

function ModalPopup({ isOpen, closePopup }) {
  const [isSuccess, setIsSuccess] = useState(true);
  useEffect(() => {
    const delayInMilliseconds = 3000;
    const timeoutId = setTimeout(() => {
      setIsSuccess(false);
    }, delayInMilliseconds);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-60">
      {/* OVERLAY: ONClick will close the modal*/}
      {isOpen && <div className="fixed inset-0 bg-black opacity-60" onClick={closePopup}></div>}

      {/* POPUP */}
      {isOpen && (
        <div className="bg-white p-4 rounded-xl shadow-xl z-50 text-black  py-8 px-4">
          {isSuccess && (
            <div className="justify-center text-center">
              <h2 className=" my-5 text-lg font-semibold ">Generaring your quiz...</h2>
              <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
              </div>
            </div>
          )}
          {!isSuccess && (
            <>
              <h2 className="text-lg font-semibold mb-4">Congratulations</h2>
              <p>Your Quiz was successfully created!</p>
              <Link href="/preview-quiz/1">
                <button className="mt-4 p-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={closePopup}>
                  Preview Quiz
                </button>
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default function CreateQuiz() {
  const [url, setUrl] = useState(
    "https://sepolia-blockscout.scroll.io/address/0x9221bde96f1EdD09716253380C8ba15C2F7d00a2",
  );
  const [isOpen, setIsOpen] = useState(false);
  const [questions, setQuestions] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const getDay = async () => {
    let d = new Date();
    let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    return `${mo}-${da}-${ye}`;
  };

  const saveToNFTStorage = async () => {
    try {
      const creationDate = await getDay();
      const obj = [
        {
          id: 1,
          creationDate,
          image:
            "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1120&q=80",
          title: "The basics of ReactJS",
          description: "Practice the basics of ReactJS and master it",
          author: "Joe Doe",
          questions: [
            {
              id: 1,
              question: "What is Reactjs?",
              options: {
                a: "It's a dummy data",
                b: "It's a brand new object",
                c: "It's a famous coffee",
                d: "It's a frontend framework for Javascript",
              },
              correct_answer: "d",
            },
            {
              id: 2,
              question: "How do you use Reactjs?",
              options: {
                a: "You use React to create frontend interfaces",
                b: "It's a brand new object",
                c: "It's a famous coffee",
                d: "It's a frontend framework for Javascript",
              },
              correct_answer: "a",
            },
          ],
          subject: "Technology",
          author_profession: "Student",
          grade: "University",
          language: "English",
        },
      ];

      const client = new NFTStorage({ token: process.env.NEXT_PUBLIC_APIKEY });

      const metadata = await client.store({
        name: "Quiz",
        description: JSON.stringify(obj),
        image: new File(["image"], "imageName", { type: "image/*" }),
      });
      console.log("metadata", metadata, questions);

      if (metadata) {
        console.log("metadata URL", metadata?.url);
        const url = metadata?.url.substring(7);
        const fullUrl = `https://cloudflare-ipfs.com/ipfs/${url}`;
        console.log("fullUrl", fullUrl);
        setUrl(fullUrl);
        writeAsync();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // generateQuiz
  const { writeAsync } = useScaffoldContractWrite({
    contractName: "QuizNFT",
    functionName: "generateQuiz",
    args: [url],
    blockConfirmations: 1,
    onBlockConfirmation: txnReceipt => {
      console.log("Transaction blockHash", txnReceipt.blockHash);
    },
  });

  const generateQuiz = async () => {
    saveToNFTStorage();
    openPopup();
  };

  const chatGPT = async () => {
    try {
      const response = await fetch("/api/generateQuiz/", {
        method: "POST",
      });
      const data = await response.json();
      console.log("____data:", data);
      setQuestions(data.quizQuestion);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="py-24 px-10 bg-gray-700 text-white h-screen w-screen flex  justify-center">
      {/* DISPALYS POPUP */}
      {isOpen && <ModalPopup isOpen={isOpen} closePopup={closePopup} />}

      {/* FORM */}
      <div className="w-[80%]">
        <h2 className="text-2xl py-3">Feed the AI with information about your quiz</h2>
        <textarea
          name="prompt"
          id="prompt"
          placeholder="Create a quiz about the basics of
React of 20 questions"
          rows={10}
          className="text-black w-full h-auto rounded-[20px] py-8 px-6"
        />
        <button
          className={`mt-8 btn btn-xl bg-green-500   hover:bg-green-600 font-normal text-lg w-[200px]`}
          onClick={generateQuiz}
        >
          Generate Quiz
        </button>
      </div>
    </div>
  );
}
