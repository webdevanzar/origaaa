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
            {/* <div className="absolute bottm-0 left-0 z-50 h-[50px] border-none md:h-[150px]  bg-gradient-to-t from-black to-black"></div> */}
          </video>
           {/* Black Gradient Overlay (Positioned Above Video) */}
          <div className="absolute -bottom-20 left-0 w-full h-[150px] z-50 bg-gradient-to-b backdrop-blur-sm blur-[30px] from-black via-transparent to-transparent"></div>
        </div>
      </div>
      {/* backdrop-blur-[75px] filter */}
    </div>
  );
};

export default Hero;
