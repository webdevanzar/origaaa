"use client";
import Image from "next/image";
import React from "react";
import GrowTogether from "./GrowTogether";

const ClientLogo = () => {
  const logos = [
    { src: "/clientlogos/delta.png", alt: "Delta Logo" },
    { src: "/clientlogos/CapitalMarket.svg", alt: "Capital Market Logo" },
    { src: "/clientlogos/zyrus.png", alt: "Zyrus Logo" },
    { src: "/clientlogos/farwish.jpg", alt: "Farwish Logo" },
    { src: "/clientlogos/flora.png", alt: "Flora Logo" },
    { src: "/clientlogos/Valluvanad.png", alt: "Valluvanad Logo" },      
    { src: "/clientlogos/30india.jpg", alt: "Farwish Logo" },
    { src: "/clientlogos/tot.png", alt: "Farwish Logo" },
    { src: "/clientlogos/amanlogo.png", alt: "Aman Enerprises Logo" },
    { src: "/clientlogos/outfyndlogo.svg", alt: "Outfynd Logo" },
    { src: "/clientlogos/virtuelogo.png", alt: "virtue Logo" },
    { src: "/clientlogos/malhar.jpg", alt: "malhar Logo" },
    { src: "/clientlogos/ozmialogo.svg", alt: "Ozmia Logo" },
  ];

  return (
    <div className="overflow-hidden text-white">
      <GrowTogether />

      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="md:mb-5 text-4xl lg:text-6xl font-bold text-center">
          Proudly Partner With
        </h2>

        <div className="relative mt-8">
          {/* Gradient Overlays */}
          {/* <div className="absolute left-0 top-0 w-20 md:w-52 h-full bg-gradient-to-r from-white to-transparent z-10" /> */}
          {/* <div className="absolute right-0 top-0 w-20 md:w-52 h-full bg-gradient-to-l from-white to-transparent z-10" /> */}

          {/* Slider Container */}
          <div className="relative flex items-center  overflow-hidden">
            {/* First Slider - Original */}
            <div className="flex items-center gap-x-10 animate-infinite-scroll">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center min-w-[150px] h-28 px-8"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={400}
                    height={400}
                    className="w-auto h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Second Slider - Clone */}
            <div className="flex items-center gap-x-10 animate-infinite-scroll">
              {logos.map((logo, index) => (
                <div
                  key={`clone-${index}`}
                  className="flex justify-center items-center min-w-[150px] h-28 px-8"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={400}
                    height={400}
                    className="w-auto h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center overflow-hidden">
            {/* First Slider - Original */}
            <div className="flex items-center gap-x-10 animate-infinite-scroll-right">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center min-w-[150px] h-28 px-8"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={400}
                    height={400}
                    className="w-auto h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Second Slider - Clone */}
            <div className="flex items-center gap-x-10 animate-infinite-scroll-right">
              {logos.map((logo, index) => (
                <div
                  key={`clone-${index}`}
                  className="flex justify-center items-center min-w-[150px] h-28 px-8"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={400}
                    height={400}
                    className="w-auto h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogo;
