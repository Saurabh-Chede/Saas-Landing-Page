"use client"
import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";
import { motion } from "motion/react"

export const ProductShowcase = () => {
  return (
    <div className="bg-black bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] ">
      <div className="container">
        <h2 className="text-4xl sm:text-6xl font-bold text-center text-white">
          Intuitive interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl mt-6 tracking-tighter text-center text-white text-opacity-70">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>
        <div>
          <Image src={appScreen} alt="appScreen" className="mt-14 mx-auto"/>
        </div>
      </div>
    </div>
  );
};
