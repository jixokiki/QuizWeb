"use client";
import CardItem from "@/components/CardItem";
import DivisionItem from "@/components/DivisionItem";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import useAuth from "../hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CardItem2 from "@/components/CardItem2";
import Quiz from "./quiz/page";
// import { useRouter } from 'next/dist/client/router'; // Perbarui impor dari 'next/router'


export default function Home() {
  const { user, userProfile } = useAuth();
  const router = useRouter();
  const [userName, setUserName] = useState(""); // Inisialisasi state userName dengan nilai awal kosong
  useEffect(() => {
    if (user && userProfile.role === "admin") { //user
      router.push("/admin");// /
    }else if (user && userProfile.role === "user") { //admin
      // Jika user adalah admin, kita dapat menampilkan alert selamat datang
      // dan menampilkan nama admin dari userProfile
      alert("Selamat datang, " + userProfile.name);
      setUserName(userProfile.name);
    }
  }, [user, userProfile, router]);

  const handleAddToQuiz = () => {
    router.push("/pageQuiz1"); // Ganti "/navbar-product" dengan rute yang sesuai
  };

  return (
    <div>
      <Navbar />
      <div className="relative">
        <Image
          src={"/assets/logo.png"}
          width={3000 / 3}
          height={2000 / 3}
          className="relative w-full h-screen object-cover"
          alt="Home Page"
          priority
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-center flex flex-col gap-3 w-3/4 md:w-fit">
          <h1 className="text-5xl font-extrabold text-yellow-650">
            Quiz Web
          </h1>
          <p className="text-xl">Create Your Best Score</p>
          <button className="bg-orange-500 p-4 rounded-lg font-bold text-l" onClick={handleAddToQuiz}>
            Quiz Web
          </button>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}