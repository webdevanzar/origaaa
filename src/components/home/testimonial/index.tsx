"use client";
import { TestimonialType } from "@/utils/fetchtestimonials";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";


export const Testimonial = ({ Testimonials }: { Testimonials: TestimonialType[] }) => {
  const settings = {
    centerMode: true,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="relative py-10 lg:py-20 text-white w-11/12 sm:w-full lg:w-11/12 xl:w-10/12 mx-auto">
      <h2 className="text-4xl lg:text-6xl font-bold text-center pb-5">
        Voices of Trust
      </h2>

      <Slider
        {...settings}
        className="testimonial-slide custom-dots z-10 cursor-pointer"
      >
        {Testimonials.map((item) => (
          <div
            key={item.id}
            className="relative p-4 lg:p-8 pb-14 rounded-3xl border-[3px] backdrop-blur-lg bg-white/10 border-white bg-cover  w-[540px] h-[500px] flex flex-col justify-end items-end gap-y-10"
          >
            <Image
              src={item.image}
              alt="testimonial"
              width={152}
              height={152}
              className="rounded-full w object-cover absolute -top-[75px] left-10"
            />
            <Image
              src="/vectors/quotes.png"
              alt="testimonial"
              width={185}
              height={155}
              className="absolute bottom-3 left-3"
            />
            <div className="h-3/4 flex flex-col gap-y-10 pt-20 xl:pt-28">
              <p className="text-base md:text-xl font-medium italic">
                {item.content}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg md:text-2xl uppercase">{item.name}</h3>
                  <p className="text-xs uppercase"> {item.role} </p>
                </div>
                <div className="relative w-36 h-36">
                  <Image
                    src={item.logo}
                    alt="logo"
                    fill
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

