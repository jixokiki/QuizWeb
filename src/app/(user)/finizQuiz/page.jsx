"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const pageFinish = () => {
  const router = useRouter();
  const handleAddToFinish = () => {
    router.push("/"); // Ganti "/navbar-product" dengan rute yang sesuai
  };
  return (
    <div className="my-8 p-4 bg-gray-100 border border-gray-300 rounded-md shadow-md border-wide border-tall">
      <Image
        src={"/assets/bg2.jpg"}
        width={1410 / 2}
        height={675 / 2}
        priority
        sizes="(max-width: 768px) 600px, 1410px"
        alt="Contact page"
        className="relative h-[900px] md:h-[660px] object-cover object-center mx-auto w-full"
        style={{ margin: 'auto' }} // Tetapkan properti margin: auto di sini
      />
      <div className="absolute top-[250px] left-1/2 -translate-x-1/2 text-center flex flex-col gap-3">
        <h1 className="text-3xl font-extrabold text-zinc-900">FINISH TEST</h1>
      </div>
      <div className="absolute top-[350px] left-1/2 -translate-x-1/2 text-center flex flex-col gap-3">
        <h1 className="text-5xl font-extrabold text-zinc-900">CONGRATULATION</h1>
      </div>
      <div className="flex justify-center items-center mt-4">
        <button
          className="bg-gray-200 hover:bg-teal-500 text-gray-900 hover:text-white font-bold py-2 px-4 rounded"
          onClick={handleAddToFinish}
        >
          Finish Test
        </button>
      </div>
    </div>
  );
};

export default pageFinish;
