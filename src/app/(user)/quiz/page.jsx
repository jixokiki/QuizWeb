// "use client";
// // Quiz.jsx
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';

// const Quiz = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState([]);
//   const router = useRouter();

//   const questions = [
//     {
//       question: "Apa warna langit pada siang hari?",
//       options: ["Biru", "Merah"],
//       correctAnswer: "Biru",
//     },
//     {
//       question: "Apa warna laut pada siang hari?",
//       options: ["Biru", "Merah"],
//       correctAnswer: "Biru",
//     },
//     {
//       question: "Apa warna rumput?",
//       options: ["Hijau", "Kuning"],
//       correctAnswer: "Hijau",
//     },
//   ];

//   const handleAnswer = (answer) => {
//     const newAnswers = [...answers];
//     newAnswers[currentQuestion] = answer;
//     setAnswers(newAnswers);
//   };

//   const handleNext = () => {
//     if (currentQuestion === questions.length - 1) {
//       // Pengguna telah mencapai pertanyaan terakhir
//       // Hitung skor total
//       let totalScore = 0;
//       answers.forEach((userAnswer, index) => {
//         if (userAnswer === questions[index].correctAnswer) {
//           totalScore += 1;
//         }
//       });
//       // Redirect ke halaman skor dengan menyertakan nilai totalScore dalam query parameter
//       router.push(`/score?totalScore=${totalScore}`);
//     } else {
//       // Jika bukan pertanyaan terakhir, pindahkan ke pertanyaan berikutnya
//       setCurrentQuestion(currentQuestion + 1);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto my-8 p-4 bg-gray-100 border border-gray-300 rounded-md shadow-md">
//       <h2 className="text-lg font-semibold mb-4">
//         {questions[currentQuestion].question}
//       </h2>
//       <div className="grid grid-cols-2 gap-4">
//         {questions[currentQuestion].options.map((option, index) => (
//           <button
//             key={index}
//             className={`py-2 px-4 rounded-md shadow-md focus:outline-none ${
//               answers[currentQuestion] === option
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//             onClick={() => handleAnswer(option)}
//           >
//             {option}
//           </button>
//         ))}
//       </div>
//       <div className="mt-4 flex justify-between">
//         <button
//           className="py-2 px-4 bg-blue-500 text-white rounded-md shadow-md focus:outline-none"
//           onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
//           disabled={currentQuestion === 0}
//         >
//           Back Question
//         </button>
//         <button
//           className="py-2 px-4 bg-blue-500 text-white rounded-md shadow-md focus:outline-none"
//           onClick={handleNext}
//           disabled={
//             (currentQuestion === questions.length - 1 && !answers[currentQuestion]) ||
//             currentQuestion > questions.length - 1
//           }
//         >
//           {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Quiz;

// // Quiz.jsx
// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";

// const Quiz = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState([]);
//   const router = useRouter();

//   const questions = [
//     {
//       question: "Apa warna langit pada siang hari?",
//       options: ["Biru", "Merah"],
//       correctAnswer: "Biru",
//     },
//     {
//       question: "Apa warna laut pada siang hari?",
//       options: ["Biru", "Merah"],
//       correctAnswer: "Biru",
//     },
//     {
//       question: "Apa warna rumput?",
//       options: ["Hijau", "Kuning"],
//       correctAnswer: "Hijau",
//     },
//   ];

//   const handleAnswer = (answer) => {
//     const newAnswers = [...answers];
//     newAnswers[currentQuestion] = answer;
//     setAnswers(newAnswers);
//   };

//   const handleNext = () => {
//     if (currentQuestion === questions.length - 1) {
//       // Pengguna telah mencapai pertanyaan terakhir
//       // Hitung skor total
//       let totalScore = 0;
//       answers.forEach((userAnswer, index) => {
//         if (userAnswer === questions[index].correctAnswer) {
//           totalScore += 1;
//         }
//       });
//       console.log("Total Score:", totalScore); // Tambahkan ini untuk memeriksa total skor
//       console.log(router.query);
//       console.log("Redirect URL:", `/score?totalScore=${totalScore}`);

//       // Redirect ke halaman skor dengan menyertakan nilai totalScore dalam query parameter
//       router.push(`/score?totalScore=${totalScore}`);
//       // // Redirect ke halaman skor dengan menyertakan nilai totalScore dalam query parameter
//       // router.push("/score");
//     } else {
//       // Jika bukan pertanyaan terakhir, pindahkan ke pertanyaan berikutnya
//       setCurrentQuestion(currentQuestion + 1);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto my-8 p-4 bg-gray-100 border border-gray-300 rounded-md shadow-md">
//       <h2 className="text-lg font-semibold mb-4">
//         {questions[currentQuestion].question}
//       </h2>
//       <div className="grid grid-cols-2 gap-4">
//         {questions[currentQuestion].options.map((option, index) => (
//           <button
//             key={index}
//             className={`py-2 px-4 rounded-md shadow-md focus:outline-none ${
//               answers[currentQuestion] === option
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//             onClick={() => handleAnswer(option)}
//           >
//             {option}
//           </button>
//         ))}
//       </div>
//       <div className="mt-4 flex justify-between">
//         <button
//           className="py-2 px-4 bg-blue-500 text-white rounded-md shadow-md focus:outline-none"
//           onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
//           disabled={currentQuestion === 0}
//         >
//           Back Question
//         </button>
//         <button
//           className="py-2 px-4 bg-blue-500 text-white rounded-md shadow-md focus:outline-none"
//           onClick={handleNext}
//           disabled={
//             currentQuestion === questions.length - 1 &&
//             !answers[currentQuestion]
//           }
//         >
//           {currentQuestion === questions.length - 1
//             ? "Finish Quiz"
//             : "Next Question"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Quiz;

// Quiz.jsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [totalScore, setTotalScore] = useState(null);
  const router = useRouter();

  const questions = [
    {
      question: "Apa warna langit pada siang hari?",
      options: ["Biru", "Merah"],
      correctAnswer: "Biru",
    },
    {
      question: "Apa warna laut pada siang hari?",
      options: ["Biru", "Merah"],
      correctAnswer: "Biru",
    },
    {
      question: "Apa warna rumput?",
      options: ["Hijau", "Kuning"],
      correctAnswer: "Hijau",
    },
  ];

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion === questions.length - 1) {
      let totalScore = 0;
      answers.forEach((userAnswer, index) => {
        if (userAnswer === questions[index].correctAnswer) {
          totalScore += 10;
        }
      });
      setTotalScore(totalScore);

      if (totalScore === 30) {
        router.push("/pageQuiz2");
      }
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleTryAgain = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setTotalScore(null);
  };

  return (
    <>
      <div className="relative">
        <Image
          src={"/assets/QuizSessionOne.png"}
          width={1410 / 2}
          height={675 / 2}
          priority
          sizes="(max-width: 768px) 600px, 1410px"
          alt="Contact page"
          className="relative h-[600px] md:h-[560px] object-cover object-center mx-auto w-full"
        />
        {/* <div className="absolute top-[250px] left-1/2 -translate-x-1/2 text-center flex flex-col gap-3">
          <h1 className="text-5xl font-extrabold text-zinc-900">Contact</h1>
        </div> */}
      </div>
      <div className="max-w-md mx-auto my-8 p-4 bg-gray-100 border border-gray-300 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-4">
          {questions[currentQuestion].question}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className={`py-2 px-4 rounded-md shadow-md focus:outline-none ${
                answers[currentQuestion] === option
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="mt-4 flex justify-between">
          <button
            className="py-2 px-4 bg-blue-500 text-white rounded-md shadow-md focus:outline-none"
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
          >
            Back Question
          </button>
          {totalScore !== null && totalScore !== 30 && (
            <button
              className="py-2 px-4 bg-blue-500 text-white rounded-md shadow-md focus:outline-none"
              onClick={handleTryAgain}
            >
              Try Again
            </button>
          )}
          <button
            className="py-2 px-4 bg-blue-500 text-white rounded-md shadow-md focus:outline-none"
            onClick={handleNext}
            disabled={
              currentQuestion === questions.length - 1 &&
              !answers[currentQuestion]
            }
          >
            {currentQuestion === questions.length - 1
              ? "Finish Quiz"
              : "Next Question"}
          </button>
        </div>
        {totalScore !== null && (
          <div className="mt-4 text-lg font-semibold">
            Total Score: {totalScore}
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;
