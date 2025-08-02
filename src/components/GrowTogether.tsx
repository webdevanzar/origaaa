import Image from "next/image";
import React from "react";
import { FaPlus } from "react-icons/fa6";

const GrowTogether = () => {
  return (
    <div className="pb-10 bg-[linear-gradient(to_bottom,white_55%,transparent_45%)] text-white">
      <h1 className="w-11/12 mx-auto strok-text2 text-transparent text-center text-[50px] md:text-[80px] lg:text-[100px] xl:text-[124px] text-clip font-passionone animate-infinite-scroll whitespace-nowrap">
        The Numbers Speak for Themselves The Numbers Speak for Themselves The
        Numbers Speak for Themselves
      </h1>

      <div className="relative  radial-bg w-11/12 xl:w-10/12 mx-auto rounded-[15px] px-10 xl:px-14 py-7 md:py-11 flex flex-col gap-y-5 lg:gap-y-0 lg:flex-row justify-between gap-x-20 items-center mb-10">
        <Image
          src="/curvedline.png"
          alt="image"
          width={643}
          height={244}
          className="absolute right-0 bottom-2 md:bottom-0"
        />
        <div className="w-full lg:w-[40%] flex flex-col gap-y-6">
          <h2 className="text-[28px] lg:text-[34px] xl:text-[44px] font-semibold">
            Let's grow together!
          </h2>
          <p className="text-sm lg:text-base">
            When you choose to work with us, you're not just hiring an agency,
            you're partnering with a team of experts who are invested in your
            success. We believe in building long-term relationships with our
            clients, and that's why we're committed to helping you grow your
            business every step of the way.
          </p>
        </div>

        <div className=" w-full lg:w-[60%] flex flex-col sm:flex-row gap-x-16 xl:gap-x-20 lg:items-center">
          <div className="flex flex-col sm:gap-y-5 lg:gap-y-10 z-20">
            <div className="flex justify-start items-center gap-x-3">
              <p className="text-[38px] lg:text-[50px] font-bold">40</p>
              <div>
                <FaPlus className="text-[#24A776]" />
                <p className="text-xs lg:text-base">Global Happy Clients</p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-x-3">
              <p className="text-[38px] lg:text-[50px] font-bold">12</p>
              <div>
                <FaPlus className="text-[#24A776]" />
                <p className="text-xs lg:text-base">Team Members</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:gap-y-5 lg:gap-y-10 z-20">
            <div className="flex justify-start items-center gap-x-3">
              <p className="text-[38px] lg:text-[50px] font-bold">30</p>
              <div>
                <FaPlus className="text-[#24A776]" />
                <p className="text-xs lg:text-base">Project Completed</p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-x-3">
              <p className="text-[38px] lg:text-[50px] font-bold">12</p>
              <div>
                <FaPlus className="text-[#24A776]" />
                <p className="text-xs lg:text-base">Glorious Months</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowTogether;
