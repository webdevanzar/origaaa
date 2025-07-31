"use client";
import Image from "next/image";
import Navbar from "./Navbar";
import { MotiionDiv } from "./shared/MotionDiv";
import TypingEffect from "./shared/TypingEffect";

const Hero = () => {
  return (
    <div className="relative bg-gray-100 overflow-y-hidden ">
      <Navbar />
      <div className="w-full">
        <div className="h-screen overflow-hidden relative  bg-gray-900  mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 opacity-30 left-0 w-full h-full object-cover"
          >
            <source src="/herovideo2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* shade */}
      <div className="absolute inset-x-0 -bottom-[50px] h-[100px] z-50 pointer-events-none overflow-hidden">
        <div className="w-full scale-x-150 backdrop-blur-sm bg-gradient-to-t from-white via-white to-transparent h-full" />
      </div>
    </div>
  );
};

export default Hero;
