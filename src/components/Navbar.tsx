"use client";
import { navabar } from "@/lib";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiMessageRoundedDots } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const path = usePathname();
  const [loading, setLoading] = useState(true);

  //loader
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  });

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <Image
            src="logo.svg"
            alt="pearllagoon Logo"
            width={200}
            height={80}
            className="animate-pulse"
          />
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-4 border-[#136750] border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Main Navigation */}
      <nav className="w-full absolute top-0 z-40">
        <div className="mx-auto px-3 md:px-2 lg:px-10 flex items-center justify-between">
          <div
            className="flex items-center mt-1 md:mt-5"
            aria-label="Home"
            role="img"
          >
            <Image
              className="cursor-pointer w-28 md:w-32"
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
              } focus:outline-none  lg:hidden bg-white/10 p-3 rounded-lg`}
              aria-label="Toggle menu"
            >
              <div
                className={`w-6 flex flex-col ${show ? "gap-1" : "gap-1.5"} `}
              >
                <span
                  className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                    show ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                    show ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                    show ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>
            </button>

            {/** Mobile Menu */}
            <AnimatePresence>
              {show && (
                <motion.div
                  id="menu"
                  initial={{ y: "-100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className={`${
                    show ? "fixed" : "hidden"
                  } lg:hidden top-0 left-0 right-0 bottom-0 z-50`}
                >
                  <button
                    onClick={() => setShow(!show)}
                    className="text-white absolute top-10 right-10"
                  >
                    <RxCross1 className="text-4xl" />
                  </button>
                  <ul
                    className={`flex h-screen flex-col justify-center items-start
                 px-20 py-10 gap-4 text-base bg-black/90 transition-all duration-500`}
                  >
                    {navabar.map((item, index) => (
                      <motion.li
                        key={nanoid()}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.3,
                          duration: 0.4,
                          ease: "easeOut",
                        }}
                        onClick={() => setShow(false)}
                        className={`${
                          path === item.direction
                            ? "text-white"
                            : "text-gray-300"
                        } hover:text-white cursor-pointer text-2xl`}
                      >
                        <Link href={item.direction}>{item.title}</Link>
                      </motion.li>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: navabar.length * 0.3, // Appears after last item
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                    >
                      <Link href="#contLinkct" className="">
                        <div className="p-[2px] rounded-[40px] bg-gradient-to-r from-[#FFC841] to-[#4CF8CD] w-fit h-fit">
                          <div className="bg-violet-950 backdrop-blur-sm p-1 rounded-[40px]">
                            <button className="flex items-center gap-x-5 rounded-[40px] bg-gradient-to-r from-[#1B6153] to-[#816C37] px-4 py-1 text-base md:text-xl font-semibold text-white">
                              Let’s Talk
                              <BiMessageRoundedDots size={30} />
                            </button>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>

            {/** Desktop Menu */}
            <div className="hidden lg:flex items-center gap-x-10">
              {navabar.map((item) => (
                <li
                  key={nanoid()}
                  className={`${
                    path === item.direction ? "text-white" : "text-gray-300"
                  } hover:text-white cursor-pointer text-base list-none`}
                >
                  <Link href={item.direction}>{item.title}</Link>
                </li>
              ))}
            </div>
          </div>
          <Link href="#contLinkct" className="hidden lg:block">
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

      <div
        className={`${
          path !== "/" ? "hidden" : "flex"
        } z-20 w-10/12 text-white absolute flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
      >
        <div className="relative overflow-x-hidden px-8 border-[1px] border-white rounded-full liquid-glass-bg backdrop-blur-md overflow-y-auto">
          <motion.p
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              duration: 300,
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
