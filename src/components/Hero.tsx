"use client";
import Navbar from "./Navbar";
import { useSidebar } from "@/context/SidebarContext";

const Hero = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <div className="relative bg-gray-100 overflow-hidden ">
      <Navbar />
      <div className="w-full">
        <div
          className={`${
            isSidebarOpen ? "h-[100dvh]" : " h-[60dvh]"
          } md:h-[110dvh] overflow-hidden relative  bg-gray-900  mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64`}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/fallbackimg.png"
            preload="metadata"
            className="absolute top-0 opacity-30 left-0 w-full h-full object-cover"
          >
            <source src="/herovideo2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* shade */}
      <div className="absolute -left-[1px] -right-[1px] inset-x-0 -bottom-[50px] h-[100px] md:h-[150px] blur-sm pointer-events-none">
        <div className="w-full scale-x-150 backdrop-blur-[1px] bg-gradient-to-t from-white via-white to-transparent h-full" />
      </div>
    </div>
  );
};

export default Hero;
