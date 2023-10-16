import React, { useState, useEffect } from "react";
// import Image from "next/image";
import { Database } from "@tableland/sdk";

export default function Leadeboard() {
  const db = new Database();
  const tableName = "quiz_80001_7648";
  const [nfts, setNfts] = useState([]);
  console.log("🚀 ~ file: profile.tsx:8 ~ Profile ~ nfts:", nfts);

  useEffect(() => {
    const getUsersNFTs = async () => {
      try {
        const { results } = await db.prepare(`SELECT * FROM ${tableName};`).all();
        console.log(results);
        console.log("🚀 ~ file: profile.tsx:10 ~ getUsersNFTs ~ results:", results);
        setNfts(results);
      } catch (error) {
        console.error(error);
        return [];
      }
    };
    getUsersNFTs();
  }, [nfts, db]);
  return (
    <div className="w-[100%] h-[100%]">
      <img src="/assets/leaderboard.png" className="w-full h-full object-cover" alt="assets" />
    </div>
  );
}
