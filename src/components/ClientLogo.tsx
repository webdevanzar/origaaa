"use client";
import Image from "next/image";
import React from "react";
import GrowTogether from "./GrowTogether";
import { LogoScroller } from "./shared/LogoScroller";

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
    { src: "/clientlogos/ozmialogo.svg", alt: "Ozmia Logo" },
  ];

  const logos2 = [
    { src: "/clientlogos/arabnetlogo.jpg", alt: "arabnet Logo" },
    { src: "/clientlogos/dezertlogo.jpg", alt: "dezertlogo" },
    { src: "/clientlogos/mindralogo.png", alt: "mindralogo" },
    { src: "/clientlogos/yemslogo.jpeg", alt: "yemslogo" },
    { src: "/clientlogos/xdslogo.jpeg", alt: "xdslogo" },
    { src: "/clientlogos/pearllagoon.jpeg", alt: "pearllagoon Logo" },
  ];

  return (
    <div className="overflow-hidden text-white">
      <GrowTogether />

      <div className="mx-auto max-w-screen-2xl">
        <h2 className="md:mb-5 text-4xl lg:text-6xl font-bold text-center">
          Proudly Partner With
        </h2>

        <div className="relative flex flex-col gap-y-5 mt-8">
          {/* Gradient Overlays */}
          {/* <div className="absolute left-0 top-0 w-20 md:w-52 h-full bg-gradient-to-r from-white to-transparent z-10" /> */}
          {/* <div className="absolute right-0 top-0 w-20 md:w-52 h-full bg-gradient-to-l from-white to-transparent z-10" /> */}

          {/*first Slider */}
          <div className="relative flex items-center gap-x-14 overflow-hidden">
            <LogoScroller logos={logos} className="animate-infinite-scroll" />
            <LogoScroller logos={logos} className="animate-infinite-scroll" />
          </div>

          {/*second Slider */}
          <div className="relative flex items-center gap-x-14  overflow-hidden">
            <LogoScroller
              logos={logos}
              className="animate-infinite-scroll-right"
            />
            <LogoScroller
              logos={logos}
              className="animate-infinite-scroll-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogo;
