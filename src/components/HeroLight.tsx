"use client";
import Image from "next/image";
import Slider from "react-slick";
import React, { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";

export const HeroLight = () => {
  const projects = [
    {
      id: "1",
      image: "/herolight/image1.jpg",
      title: "App Development",
      p1: "User-Centric",
      p2: "Secure",
    },
    {
      id: "2",
      image: "/herolight/image2.jpg",
      title: "Web Development",
      p1: "User-Centric",
      p2: "Secure",
    },
    {
      id: "3",
      image: "/herolight/image3.jpg",
      title: "Ecommerce Development",
      p1: "SSL encryption",
      p2: "Payment integrations",
    },
    {
      id: "4",
      image: "/herolight/image1.jpg",
      title: "AMC",
      p1: "User-Centric",
      p2: "Secure",
    },
    {
      id: "5",
      image: "/herolight/image2.jpg",
      title: "ERP Development",
      p1: "User-Centric",
      p2: "Secure",
    },
    {
      id: "6",
      image: "/herolight/image3.jpg",
      title: "Digital Marketing",
      p1: "User-Centric",
      p2: "Secure",
    },
  ];
  const [activeSlide, setActiveSlide] = React.useState(1);
  const sliderRef = useRef<Slider>(null);
  console.log("activeSlide", activeSlide);

  const settings = {
    initialSlide: 1,
    // autoplay: true,
    // autoplaySpeed: 100,
    // pauseOnHover: true,
    // Infinity: true,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: "0",
    beforeChange: (_: number, next: number) => {
      console.log("Changing to slide index:", next);
      setActiveSlide(next);
    },
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
    <section className="pt-20 w-full  xl:w-10/12 mx-auto md:h-screen">
      <div className="w-full">
        <Slider ref={sliderRef} {...settings} className="z-10">
          {projects.map((item, index) => (
            <div
              key={item.id}
              className={`relative w-[500px] ${
                index === activeSlide
                  ? "h-[450px] md:h-[500px]"
                  : "h-[380px] md:h-[330px] 2xl:h-[380px] mt-[120px]"
              } rounded-[20px] shadow-md outline-none flex flex-col items-center justify-center cursor-pointer transition-all duration-500`}
            >
              <Image
                alt="projects"
                src={item.image}
                width={1000}
                height={1000}
                className={`absolute w-full h-full object-cover rounded-xl transition-opacity duration-700 ease-in-out group-hover:opacity-0`}
              />
              <div
                className={`bg-black/70 absolute inset-0 rounded-xl flex flex-col items-center justify-end gap-y-8 ${
                  index === activeSlide ? "pb-0" : "pb-10"
                } transition-all duration-500`}
              >
                <h2 className="text-2xl font-semibold xl:text-4xl pt-2 text-white line-clamp-2 w-2/3 text-center">
                  {item.title}
                </h2>
                <FiArrowUpRight
                  size={60}
                  className="rounded-full border-[1px] p-3 text-white"
                />
                <div
                  className={`${
                    index === activeSlide ? "opacity-0" : "opacity-100"
                  } flex  justify-center items-center gap-x-8 text-white text-sm transition-all duration-500`}
                >
                  <p className="px-3 py-1 rounded-3xl border-[1px]">
                    {item.p1}
                  </p>
                  <p className="px-3 py-1 rounded-3xl border-[1px]">
                    {item.p2}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
