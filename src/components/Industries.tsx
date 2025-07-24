import { industries } from "@/lib";
import { nanoid } from "nanoid";
import Image from "next/image";
import React from "react";
import { MotiionDiv } from "./shared/MotionDiv";
import Robot from "./ui/Robot";
const serviceVarients = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const Industries = () => {
  return (
    <section
      id="industries"
      className="bg-white  relative  py-32 flex flex-col items-center justify-center "
    >
      {/* <div className="  absolute  hidden md:block md:-bottom-[1%] lg:-bottom-[11%]  xl:-bottom-[18%] 2xl:-bottom-[27%]">
        <Robot />
      </div> */}
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-5 lg:text-3xl px-6  md:px-12 xl:px-0">
        Technologies We Master
      </h2>
      {/* <p className="text-gray-600 max-w-screen-md text-center text-base md:text-[20px] leading-7 md:leading-9 font-light">
        From Web Design and Development to Digital Marketing, we'll boost your
        traffic by 50%, generate more leads, and increase sales.
      </p> */}
      <div className=" max-w-screen-xl my-10 mb-24 mx-auto grid grid-cols-1 px-5  md:grid-cols-3 lg:grid-cols-4 gap-6  bg-white w-full">
        {industries.map((item, index) => (
          <MotiionDiv
            variants={serviceVarients}
            initial="hidden"
            whileInView="visible"
            transition={{
              delay: 0.15 * index,
              ease: "easeInOut",
              duration: 0.25,
            }}
            viewport={{ once: true }}
            key={nanoid()}
            className="h-[100px] hover:-translate-y-2 transition-all duration-700 rounded-full bg-gradient-to-r from-gray-100 to-gray-50/50 p-3 text-black flex items-center justify-between"
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center ">
              <Image
                src={item.icon}
                alt={item.title}
                width={40}
                height={40}
                quality={100}
              />
            </div>
            <span className="flex items-center justify-start pl-5 font-semibold text-gray-900 flex-1">
              {item.title}
            </span>
          </MotiionDiv>
        ))}
      </div>
    </section>
  );
};

export default Industries;
