import type { NextPage } from "next";
import Image from "next/image";
import { BugAntIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">IntelliQuiz</span>
          </h1>
          <p className="text-center text-lg">
            It simplifies the process of learning and creating new learning materials.
          </p>
          <p className="text-center text-lg">Get ready to unlock your full potential.</p>
        </div>

        <div className="flex items-center bg-base-300 w-full mt-16 px-8 py-12 justify-center">
          <Image src="/assets/main.png" alt="main" width={600} height={500} />
        </div>

        <div className="flex-grow bg-base-300 w-full px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                IntelliQuiz simplifies the process of learning and creating new learning materials. Anyone can create
                quizzes in seconds, all powerred by AI technology.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <SparklesIcon className="h-8 w-8 fill-secondary" />
              <p>
                Once your quiz is ready, you will be prompted to put your knowledge to the test and embark on an
                exciting journey of discovery.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Share and compete against the clock, challenge your friends, and earn exciting rewards as you master
                each quiz. Top users will be appear on the leaderboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
