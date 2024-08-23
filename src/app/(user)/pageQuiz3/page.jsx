"use client";
import CardItem3 from "@/components/CardItem3";
import React from "react";

const pageQuiz3 = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <CardItem3
          judul={"Quiz Session Tree"}
          deskripsi={"IPS"}
          imageUrl={"/assets/QuizSessionTree.png"}
        />
      </div>
    </div>
  );
};

export default pageQuiz3;
