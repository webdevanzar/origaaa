"use client";
import ContactPopup from "@/components/ContactPopup";
import { TiltCard } from "@/components/shared/TiltCard";
import { AllServices } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiMessageRoundedDots } from "react-icons/bi";

const servicesTitles = [
  {
    id: "app",
    title: "Mobile app",
  },
  {
    id: "web",
    title: "Websites",
  },
  {
    id: "ecommerce",
    title: "E-commerse",
  },
  {
    id: "amc",
    title: "AMC",
  },
  {
    id: "erp",
    title: "ERP development",
  },
  {
    id: "marketing",
    title: "Digital marketing",
  },
];

export const OurServices = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section>
      {isPopupOpen && (
        <ContactPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
        />
      )}

      <div className="bg-black/80 text-white">
        {/* our services */}
        <div className="relative z-10 mx-auto text-center px-4 py-20">
          <div className="">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-10">
              Our Services
            </h2>

            <p className="text-lg max-w-3xl mx-auto mb-8">
              <span className="font-semibold text-green-400"> Explore </span>
              our comprehensive range of professional services designed to
              empower businesses and inspire growth.
            </p>

            {/* Tags */}
            <div className="flex  md:w-11/12 lg:w-2/3 xl:w-1/2 mx-auto flex-wrap justify-center gap-2 md:gap-4">
              {servicesTitles.map((service) => (
                <Link
                  href={`#${service.id}`}
                  key={service.id}
                  className="px-2 transition-all bg-white/10 border liquid-glass-bg border-white hover:scale-110  hover:bg-green-800 hover:text-black md:px-6 py-1 sm:py-2 rounded-full text-base lg:text-lg font-medium duration-300 cursor-pointer"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        {AllServices.map((service, index) => (
          <div
            id={service.id}
            key={index}
            className={`py-10 md:py-20 px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center mx-auto border-b-[0.5px] border-white/20 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Left Side */}
            <div className="w-full">
              <h3 className="text-3xl md:text-4xl font-bold text-green-200 mb-4">
                {service.title}
              </h3>
              <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed break-words">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8 text-sm md:text-base">
                {service.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full shrink-0" />
                    <span className="break-words">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/services/${service.id}`}
                className="inline-block border-[1px] border-white/50 rounded-full px-6 py-2 text-sm md:text-base hover:border-green-400 transition-all duration-300"
              >
                Find More <span className="hover:animate-bounce"> ↗</span>
              </Link>
            </div>

            {/* Right Side */}
            <div className="w-full">
              <TiltCard>
                <div className="relative h-[280px] sm:h-[400px] xl:h-[450px]  rounded-2xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.projectTitle}
                    width={800}
                    height={500}
                    className="object-cover w-full h-full bg-center"
                  />
                  {/* <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/70 text-white rounded-full px-6 py-3 font-medium cursor-pointer hover:bg-green-400 hover:text-black transition">
                      View Project
                    </div>
                  </div> */}
                </div>
              </TiltCard>

              <div className="mt-6">
                <div className="flex flex-wrap gap-2 mb-2">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-xl md:text-2xl font-semibold">
                  {service.projectTitle}
                </h4>
                <p className="text-gray-400 text-sm md:text-base">
                  {service.projectDescription}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-black/80 text-white py-20 px-6 text-center">
        <h2 className="text-4xl md:text-7xl font-bold mb-4">
          Empower Your Brand with
          <span className="text-green-800"> Our Expertise</span>
        </h2>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8">
          <span className="font-semibold text-[#816C37]">Partner </span>
          with us to deliver bespoke solutions that drive growth and lasting
          impact.
        </p>

        <div onClick={() => setIsPopupOpen(true)}>
          <div className="p-[3px] rounded-[40px] bg-gradient-to-r from-[#FFC841] to-[#4CF8CD] w-fit h-fit mx-auto">
            <div className="bg-black backdrop-blur-sm p-1 rounded-[40px]">
              <button className="flex items-center gap-x-5 rounded-[40px] bg-gradient-to-r from-[#1B6153] to-[#816C37] hover:bg-gradient-to-l px-6 py-2 text-lg font-semibold text-white">
                Enquire Now
                <BiMessageRoundedDots size={30} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
