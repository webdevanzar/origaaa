"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MotiionDiv } from "./shared/MotionDiv";
import { BiMessageRoundedDots } from "react-icons/bi";
import { motion } from "framer-motion";
import ContactPopup from "./ContactPopup";

const aboutVarients = {
  hidden: { opacity: 0, x: -200 },
  visible: { opacity: 1, x: 0 },
};
const aboutVarientsright = {
  hidden: { opacity: 0, x: 200 },
  visible: { opacity: 1, x: 0 },
};

const statVarients = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};
const About = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section id="about" className="relative py-10 md:py-20">
      {isPopupOpen && (
        <ContactPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
        />
      )}
      <div className="w-11/12 xl:w-10/12 mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-y-7 md:gap-y-0 gap-x-5">
          <MotiionDiv
            variants={aboutVarients}
            initial="hidden"
            whileInView="visible"
            transition={{
              type: "spring",
              damping: 10,
              stiffness: 100,
              delay: 0.15,
              ease: "easeInOut",
              duration: 0.25,
            }}
            viewport={{ once: true }}
            className="relative flex w-full md:w-1/2 lg:w-3/5 items-center justify-center lg:p-16"
          >
            <Image
              width={1000}
              height={1000}
              alt="about image"
              src="/about/about.png"
              className="h-auto w-full object-cover"
            />

            <motion.div
              variants={statVarients}
              initial="hidden"
              whileInView="visible"
              transition={{
                delay: 0.8,
                ease: "easeInOut",
                duration: 0.75,
              }}
              viewport={{ once: true }}
              className="absolute top-10 lg:top-36 -right-5 lg:right-10 py-3 md:py-5 px-1 flex flex-col justify-center items-center rounded-xl shadow-xl bg-white"
            >
              <h3 className="text-xs text-center w-full">
                Active Projects Worldwide
              </h3>
              <p className="text-[34px] font-bold text-center">50+</p>
            </motion.div>

            <motion.div
              variants={statVarients}
              initial="hidden"
              whileInView="visible"
              transition={{
                delay: 0.8,
                ease: "easeInOut",
                duration: 0.75,
              }}
              viewport={{ once: true }}
              className="absolute -bottom-5 lg:bottom-10 left-20 lg:left-44 py-3 md:py-5 px-1 flex flex-col justify-center items-center rounded-xl shadow-xl bg-white"
            >
              <h3 className="text-xs text-center w-full">
                Clients Return for More
              </h3>
              <p className="text-[34px] font-bold text-center">70%</p>
            </motion.div>
          </MotiionDiv>

          <MotiionDiv
            variants={aboutVarientsright}
            initial="hidden"
            whileInView="visible"
            transition={{
              type: "spring",
              damping: 10,
              stiffness: 100,
              delay: 0.15,
              ease: "easeInOut",
              duration: 0.25,
            }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 lg:w-2/5 flex "
          >
            {/* <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span> */}

            <div className="text-black flex flex-col justify-center gap-y-4 xl:gap-y-7">
              <h5 className="text-xl md:text-[30px] font-bold text-green-800">
                About Us
              </h5>

              <h2 className="text-xl xl:text-3xl pt-2 xl:pt-5">
                Simplifying Digital Success. Empowering Business Growth.
              </h2>

              <p className="text-sm xl:text-base lg:leading-7">
                We make your digital success simple. With expert solutions just
                for your needs, we craft impactful websites, data-driven
                marketing strategies, and seamless IT solutions to help you
                stand out. Whether you need a compelling brand identity,
                high-performance digital tools, or a strategic marketing
                approach, we ensure every aspect of your online presence is
                designed for growth.
              </p>
              <p className="text-sm xl:text-base lg:leading-7">
                We listen. We strategize. We build. Our team of skilled
                professionals is dedicated to delivering results that matter.
                From understanding your unique goals to executing solutions that
                drive impact, we make the digital journey effortless and
                effective
              </p>
              <div
                onClick={() => setIsPopupOpen(true)}
                className="ml-60 md:ml-0 p-[2px] mt-3 lg:mt-5 xl:mt-8 rounded-[40px] bg-gradient-to-r from-[#FFC841] to-[#4CF8CD] w-fit h-fit"
              >
                <button className=" flex items-center gap-x-5 border-[5px] border-white rounded-[40px] bg-gradient-to-r from-[#1B6153] to-[#816C37] px-3 lg:px-6 py-2 lg:py-3 text-base md:text-xl font-semibold text-white">
                  Get in Touch
                  <BiMessageRoundedDots size={30} />
                </button>
              </div>
            </div>
          </MotiionDiv>
        </div>
      </div>
    </section>
  );
};

export default About;
