"use client";
import CardItem from "@/components/CardItem";
import React from "react";

const pageQuiz1 = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <CardItem
          judul={"Quiz Session One"}
          deskripsi={"Matematika"}
          imageUrl={"/assets/QuizSessionOne.png"}
        />
      </div>
    </div>
  );
};

export default pageQuiz1;
