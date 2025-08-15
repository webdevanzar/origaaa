"use client";
import { services } from "@/lib";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import { RiArrowLeftWideFill } from "react-icons/ri";

export const WhatweDo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeService = services[currentIndex];
  const [isMobile, setIsMobile] = useState(false);
  // const touchStartX = useRef(0);
  // const touchEndX = useRef(0);

  // const handleTouchStart = (e: React.TouchEvent) => {
  //   touchStartX.current = e.touches[0].clientX;
  // };
  // const handleTouchMove = (e: React.TouchEvent) => {
  //   touchEndX.current = e.touches[0].clientX;
  // };
  // const handleTouchEnd = () => {
  //   const delta = touchStartX.current - touchEndX.current;

  //   if (Math.abs(delta) > 50) {
  //     if (delta > 0 && currentIndex < services.length - 1) {
  //       // swipe left
  //       setCurrentIndex(currentIndex + 1);
  //     } else if (delta < 0 && currentIndex > 0) {
  //       // swipe right
  //       setCurrentIndex(currentIndex - 1);
  //     }
  //   }
  // };

  const handleArrowClick = (direction: "left" | "right") => {
    if (direction === "left" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    if (direction === "right" && currentIndex < services.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2, // delay between each child
      },
    },
  };

  const fadeRightVariant = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-10 relative" id="whatwedo">
      <div className="absolute -right-10 -top-5 md:-top-20 -left-10 z-50 border-none h-[45px] md:h-[90px] blur-sm bg-gradient-to-t from-white to-white">
        {/* shade */}
      </div>

      <h1 className="font-bold text-4xl lg:text-6xl text-center text-white pb-3 lg:pb-10 ">
        What We Do ?
      </h1>

      <div className="flex h-full justify-between border-2 md:border-none border-white items-start w-11/12 2xl:w-10/12 mx-auto rounded-3xl bg-white md:pl-3 md:py-16">
        <div className="w-[25%] hidden md:flex flex-col justify-center items-center">
          <Image
            src="/logosmall.png"
            width={90}
            height={90}
            alt="logo small"
            className="opacity-20 flex justify-center items-center mb-2"
          />
          <ul className="w-full">
            {services.map((service, index) => (
              <li
                key={service.title}
                onClick={() => {
                  setCurrentIndex(index);
                }}
                className={`text-center shadow-sm  text-xl xl:text-2xl font-medium py-4 lg:px-5 xl:px-7 cursor-pointer rounded-tl-xl rounded-bl-xl ${
                  activeService.id === service.id
                    ? "radial-bg-secondary text-white"
                    : "text-black"
                }`}
              >
                {service.title}
              </li>
            ))}
          </ul>
        </div>
        <motion.div
          // onTouchStart={handleTouchStart}
          // onTouchMove={handleTouchMove}
          // onTouchEnd={handleTouchEnd}
          className="relative -z-0 shadow-xl w-full md:w-[75%] h-[600px] lg:h-[535px] rounded-3xl radial-bg-secondary pl-10 xl:pl-14 py-5 md:py-10 lg:py-16 lg:pr-0 pr-10 flex flex-col lg:flex-row justify-start gap-x-0 text-white"
        >
          {/* Mobile Arrows */}
          {isMobile && currentIndex > 0 && (
            <button
              onClick={() => handleArrowClick("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-50  hover:scale-110 transition-all duration-500"
            >
              <RiArrowLeftWideFill size={36} />
            </button>
          )}

          {isMobile && currentIndex < services.length - 1 && (
            <button
              onClick={() => handleArrowClick("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-50 hover:scale-110 transition-all duration-500"
            >
              <RiArrowLeftWideFill className="rotate-180" size={36} />
            </button>
          )}

          <motion.div
            key={activeService.id}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-y-3 lg:w-1/2 h-full"
          >
            <motion.h3
              variants={fadeRightVariant}
              className="text-xl xl:text-2xl font-bold"
            >
              {activeService.title2}
            </motion.h3>
            <motion.p
              variants={fadeRightVariant}
              className="text-lg xl:text-xl font-light"
            >
              {activeService.content}
            </motion.p>

            <motion.ul
              variants={fadeRightVariant}
              className="flex flex-col gap-y-2 md:gap-y-3 mt-2 md:mt-5"
            >
              {activeService.subData.map((data, index) => (
                <li
                  key={index}
                  className="flex justify-start items-center gap-x-3"
                >
                  <MdOutlineKeyboardDoubleArrowRight
                    size={20}
                    className="text-[#28CDA0]"
                  />
                  {data.title}
                </li>
              ))}
            </motion.ul>
          </motion.div>
          <div className="flex gap-x-5 pt-5">
            <motion.div
              key={activeService.id + "-img3"}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="flex justify-start items-end"
            >
              <Image
                alt="image"
                src={activeService.image3}
                width={200}
                height={190}
              />
            </motion.div>
            <motion.div
              key={activeService.id + "-img1"}
              initial={{ opacity: 0, x: 70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className=" lg:absolute -top-10 right-32"
            >
              <Image
                alt="image"
                src={activeService.image1}
                width={210}
                height={200}
              />
            </motion.div>

            <motion.div
              key={activeService.id + "-img2"}
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className=" lg:absolute bottom-1/3 -right-12 xl:-right-20"
            >
              <Image
                alt="image"
                src={activeService.image2}
                width={200}
                height={170}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

