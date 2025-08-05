import About from "@/components/About";
import ClientLogo from "@/components/ClientLogo";
import GrowTogether from "@/components/GrowTogether";
import Navbar from "@/components/Navbar";
import AnimatedBlobBackground from "@/components/shared/AnimatedBlobBackground";
import Image from "next/image";
import React from "react";
import { FaPlus } from "react-icons/fa6";

const blobPositions = [
  { x: 10, y: 10 }, // Top-left
  { x: 90, y: 10 }, // Top-right
  { x: 10, y: 90 }, // Bottom-left
  { x: 90, y: 90 }, // Bottom-right
];

const AboutPage = () => {
  return (
    <section className="overflow-x-hidden">
      <div className="w-full h-[30vh] md:h-[45vh] relative">
        <Image
          src={"/hero3.jpg"}
          alt="image"
          fill
          className="-z-10 object-cover bg-cover rounded-b-xl"
        />
         <div className="absolute inset-0 bg-black/40 rounded-b-xl z-0" />
        <Navbar />
      </div>
      <About />
      {/* <AnimatedBlobBackground
        uniqueId="my-blobs"
        blobCount={25}
        blobPositions={blobPositions}
        animationDuration={2000} // Slower animation (3 seconds)
        blurAmount={30} // More blur for smoother effect
        minScale={2} // Minimum size
        maxScale={4} // Maximum size
        minOpacity={0.5}
        maxOpacity={0.9}
      > */}
       <GrowTogether/>
      {/* </AnimatedBlobBackground> */}
    </section>
  );
};

export default AboutPage;
