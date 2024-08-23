"use client";
import CardItem2 from "@/components/CardItem2";
import React from "react";

const pageQuiz2 = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <CardItem2
          judul={"Quiz Session Two"}
          deskripsi={"IPA"}
          imageUrl={"/assets/QuizSessionTwo.png"}
        />
      </div>
    </div>
  );
};

export default pageQuiz2;
