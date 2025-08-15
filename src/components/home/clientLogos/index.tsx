"use client";
import React from "react";
import { GrowTogether } from "../growTogether";
import { ClientLogoType } from "@/utils/fetchclientlogos";
import { LogoScroller } from "@/components/shared/LogoScroller";

interface ClientLogoProps {
  clientLogos1: ClientLogoType[];
  clientLogos2: ClientLogoType[];
}

export const ClientLogo = ({ clientLogos1, clientLogos2 }: ClientLogoProps) => {

  return (
    <div className="overflow-hidden text-white">
      <GrowTogether />

      <div className="mx-auto max-w-screen-2xl">
        <h2 className="md:mb-5 text-4xl lg:text-6xl font-bold text-center">
          Proudly Partner With
        </h2>

        <div className="relative flex flex-col gap-y-5 mt-8">

          {/*first Slider */}
          <div className="relative flex items-center gap-x-14 overflow-hidden">
            <LogoScroller logos={clientLogos1} className="animate-infinite-scroll" />
            <LogoScroller logos={clientLogos1} className="animate-infinite-scroll" />
          </div>

          {/*second Slider */}
          <div className="relative flex items-center gap-x-14  overflow-hidden">
            <LogoScroller
              logos={clientLogos2}
              className="animate-infinite-scroll-right"
            />
            <LogoScroller
              logos={clientLogos2}
              className="animate-infinite-scroll-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

