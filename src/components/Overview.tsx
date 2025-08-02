"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const Overview = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  return (
    <div className="py-5 max-w-[1600px] mx-auto md:mb-10 overflow-hidden relative text-[#24a776] bg-white">
      <section
        ref={sectionRef}
        className="max-w-6xl px-3 md:px-10 lg:px-5 relative z-10 w-full mx-auto py-0 md:py-16 flex flex-col items-center"
      >
        <div className="flex gap-x-3">
          <Image
            src="/whychoosus.svg"
            alt="Why Choose Us"
            width={20}
            height={20}
            className=" fill-[#24a776]"
          />

          <span className="uppercase text-xs md:text-sm font-bold">
            Process Overview
          </span>
        </div>
        <h2
          className=" mt-3 capitalize text-center md:text-start
          font-bold text-2xl md:text-4xl tracking-wide"
        >
          Communicate with us
        </h2>
        <div className=" w-full grid md:grid-cols-3 gap-4 md:gap-7 mt-10 md:mt-20 mb-10 md:mb-36">
          <motion.div
            className="bg-[#F5F3FF] shadow-md rounded-[20px] py-7 px-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-bold text-5xl text-transparent relative">
              <span
                className="absolute inset-0"
                style={{
                  WebkitTextStroke: "1px #24a776",
                  color: "transparent",
                }}
              >
                01
              </span>
              <span className="invisible">01</span>
            </h2>
            <h4 className="font-bold my-[10px] text-lg">Enquiry</h4>
            <p className=" text-[15px] mt-2">Connect with Multiple Ways</p>
          </motion.div>

          <motion.div
            className="bg-[#F5F3FF] transform translate-y-8 shadow-md rounded-[20px] py-7 px-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="font-bold text-5xl text-transparent relative">
              <span
                className="absolute inset-0"
                style={{
                  WebkitTextStroke: "1px #24a776",
                  color: "transparent",
                }}
              >
                02
              </span>
              <span className="invisible">02</span>
            </h2>
            <h4 className="font-bold my-[10px] text-lg">Enquiry</h4>
            <p className="text-[15px] mt-2">Connect with Multiple Ways</p>
          </motion.div>

          <motion.div
            className="bg-[#F5F3FF] shadow-md rounded-[20px] py-7 px-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="font-bold text-5xl text-transparent relative">
              <span
                className="absolute inset-0"
                style={{
                  WebkitTextStroke: "1px #24a776",
                  color: "transparent",
                }}
              >
                03
              </span>
              <span className="invisible">03</span>
            </h2>
            <h4 className="font-bold my-[10px] text-lg">Enquiry</h4>
            <p className="text-[15px] mt-2">Connect with Multiple Ways</p>
          </motion.div>
        </div>
      </section>
      <motion.div
        className="absolute z-0 top-0 px-10 opacity-25 left-0 right-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Image
          src="/vector2.svg"
          alt="vector"
          width={1200}
          height={1200}
          className="w-full h-full opacity-30"
        />

      </motion.div>
    </div>
  );
};

export default Overview;
