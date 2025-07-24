import Image from "next/image";
import React from "react";
import { MotiionDiv } from "./shared/MotionDiv";
import Aurora from "./ui/Aurora";

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
      className="text-black lg:mb-[22%]  overflow-hidden xl:mb-[10%] 2xl:mb-0"
    >
   
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
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
              className="relative h-64 sm:h-80 lg:h-full"
            >
              <Image
                width={1200}
                height={1200}
                quality={100}
                alt="about image"
                src="/about.jpg"
                className="absolute inset-0 h-full w-full object-cover rounded-r-lg"
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
            className="relative flex items-center bg-gray-100"
          >
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h5 className="my-4 text-base md:text-lg text-gray-600 ">
                About Us
              </h5>
              <h2 className="text-2xl capitalize  sm:leading-[42px] font-semibold sm:text-3xl">
                Origa Networks: Simplifying Digital Success, Amplifying Your
                Business
              </h2>

              <p className="mt-4 text-gray-600 leading-7">
                We make your digital success simple. With expert solutions just
                for your needs, we craft impactful websites, data-driven
                marketing strategies, and seamless IT solutions to help you
                stand out. Whether you need a compelling brand identity,
                high-performance digital tools, or a strategic marketing
                approach, we ensure every aspect of your online presence is
                designed for growth.
              </p>
              <p className="mt-4 text-gray-600 leading-7">
                We listen. We strategize. We build. Our team of skilled
                professionals is dedicated to delivering results that matter.
                From understanding your unique goals to executing solutions that
                drive impact, we make the digital journey effortless and
                effective..
              </p>
              <a
                href="#contact"
                className="mt-8 inline-block rounded border  btn px-12 py-3 text-sm font-medium text-white  focus:outline-none focus:ring active:text-indigo-500"
              >
                Get in Touch
              </a>
            </div>
          </MotiionDiv>
        </div>
      </div>
    </section>
  );
};

export default About;
