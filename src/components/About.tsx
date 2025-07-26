import Image from "next/image";
import React from "react";
import { MotiionDiv } from "./shared/MotionDiv";
import Aurora from "./ui/Aurora";
import { BiMessageRoundedDots } from "react-icons/bi";

const aboutVarients = {
  hidden: { opacity: 0, x: -200 },
  visible: { opacity: 1, x: 0 },
};
const aboutVarientsright = {
  hidden: { opacity: 0, x: 200 },
  visible: { opacity: 1, x: 0 },
};
const About = () => {
  return (
    <section
      id="about"
      className="relative"
      // style={{
      //   background:
      //     "radial-gradient(50% 104.51% at 50% 50%, #0C3535 0%, #453115 100%)",
      // }}
    >
      <div className="top-0 left-0 h-[50px] border-none md:h-[150px] backdrop-blur-[75px] filter bg-gradient-to-t from-transparent to-white"></div>

      <div className="text-white w-11/12 mx-auto pt-20 pb-20">
        <h5 className="text-base md:text-lg text-center">Who We Are</h5>
        <h2 className="text-2xl pt-4 capitalize  sm:leading-[42px] font-semibold sm:text-3xl text-center">
          Origa Networks: Simplifying Digital Success, Amplifying Your Business
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 pt-8 md:pt-16">
          <div className="flex items-center justify-center">
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
              className="relative"
            >
              <Image
                width={1200}
                height={1000}
                // quality={100}
                alt="about image"
                src="/about/about.jpg"
                className="h-full w-full object-cover rounded-xl"
              />
            </MotiionDiv>
          </div>

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
            className=" flex items-center"
          >
            {/* <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span> */}

            <div className="">
              <p className="mt-4 leading-7">
                We make your digital success simple. With expert solutions just
                for your needs, we craft impactful websites, data-driven
                marketing strategies, and seamless IT solutions to help you
                stand out. Whether you need a compelling brand identity,
                high-performance digital tools, or a strategic marketing
                approach, we ensure every aspect of your online presence is
                designed for growth.
              </p>
              <p className="mt-4 leading-7">
                We listen. We strategize. We build. Our team of skilled
                professionals is dedicated to delivering results that matter.
                From understanding your unique goals to executing solutions that
                drive impact, we make the digital journey effortless and
                effective
              </p>
              <a href="#contact">
                <div className="p-[1px] mt-8 rounded-[40px] bg-gradient-to-r from-[#FFC841] to-[#4CF8CD] w-fit h-fit">
                  <button className="flex items-center gap-x-5 border-[5px] border-[#0C3535] rounded-[40px] bg-gradient-to-r from-[#1B6153] to-[#816C37] px-3 md:px-6 py-2 md:py-3 text-base md:text-xl font-semibold text-white">
                    Get in Touch
                    <BiMessageRoundedDots size={30} />
                  </button>
                </div>
              </a>
            </div>
          </MotiionDiv>
        </div>
      </div>
    </section>
  );
};

export default About;
