"use client";
import { navabar } from "@/lib";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiMessageRoundedDots } from "react-icons/bi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Main Navigation */}
      <nav className="w-full absolute top-0 z-30">
        <div className="mx-auto px-5 md:px-2 lg:px-10 flex items-center justify-between">
          <div className="flex items-center mt-7" aria-label="Home" role="img">
            <Image
              className="cursor-pointer w-32"
              src="/origalogo.png"
              alt="logo"
              width={400}
              height={400}
            />
          </div>
          <div>
            <button
              onClick={() => setShow(!show)}
              className={`${
                show ? "hidden" : "block"
              } sm:block bg-white/10 p-3 rounded-lg md:hidden lg:hidden text-gray-500 flex items-center justify-center hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500`}
            >
              <Image
                className="h-8 w-8"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg4.svg"
                alt="show"
                width={60}
                height={60}
              />
            </button>
            <div
              id="menu"
              className={`md:block lg:block ${show ? "" : "hidden"} pr-10`}
            >
              <button
                onClick={() => setShow(!show)}
                className="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-3"
              >
                <Image
                  className="h-8 w-8"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg5.svg"
                  alt="hide"
                  width={60}
                  height={60}
                />
              </button>
              <ul className="transition-all duration-500 flex text-base pr-10 md:pr-0 justify-start items-end md:items-center py-10 md:py-3 md:flex flex-col md:flex-row md:justify-center gap-x-10 fixed md:relative top-0 bottom-0 left-0 right-0 bg-black/30 md:bg-transparent z-20">
                {navabar.map((item) => (
                  <li
                    key={nanoid()}
                    onClick={() => setShow(!show)}
                    className="text-gray-300 hover:text-white cursor-pointer pt-5 md:pt-0"
                  >
                    <Link href={item.direction}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link href="#contLinkct" className="hidden md:block">
            <div className="p-[2px] mt-8 rounded-[40px] bg-gradient-to-r from-[#FFC841] to-[#4CF8CD] w-fit h-fit">
              <div className="bg-violet-950 backdrop-blur-sm p-1 rounded-[40px]">
                <button className="flex items-center gap-x-5 rounded-[40px] bg-gradient-to-r from-[#1B6153] to-[#816C37] px-3 lg:px-6 py-2 lg:py-3 text-base md:text-xl font-semibold text-white">
                  Let’s Talk
                  <BiMessageRoundedDots size={30} />
                </button>
              </div>
            </div>
          </Link>
        </div>
      </nav>

      <div className="z-20 w-10/12 text-white absolute flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative overflow-x-hidden px-8 border-[1px] border-white rounded-full liquid-glass-bg backdrop-blur-md overflow-y-auto">
          <motion.p
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              duration:300,
              ease: "linear",
              repeat: Infinity,
            }}
            className=" text-[40px] md:text-[60px] lg:text-[80px] xl:text-[100px] whitespace-nowrap inline-block uppercase font-semibold cursor-pointer"
          >
            Innovative Web, App, and Marketing Solutions Tailored for Your
            Business Growth . Innovative Web, App, and Marketing Solutions
            Tailored for Your Business Growth . Innovative Web, App, and
            Marketing Solutions Tailored for Your Business Growth . Innovative
            Web, App, and Marketing Solutions Tailored for Your Business Growth
            . Innovative Web, App, and Marketing Solutions Tailored for Your
            Business Growth .
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
