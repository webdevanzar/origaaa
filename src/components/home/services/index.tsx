"use client";
import Image from "next/image";
import Slider from "react-slick";
import React, { useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { HiCodeBracket } from "react-icons/hi2";
import {
  FaBullhorn,
  FaChartLine,
  FaCloudflare,
  FaEnvelopeOpenText,
  FaHandshake,
  FaLock,
  FaPaypal,
  FaProjectDiagram,
  FaReact,
  FaServer,
  FaTools,
  FaUserCog,
} from "react-icons/fa";
import { IoShieldSharp } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import {
  MdOutlineSell,
  MdOutlineShoppingCart,
  MdSecurity,
} from "react-icons/md";
import { RiNextjsLine } from "react-icons/ri";
import Link from "next/link";
import { CustomCursor } from "@/components/shared/CustomeCursor";

export const Services = () => {
    
  const projects = [
    {
      id: "app",
      image: "/herolight/image1.webp",
      title: "App Development",
      p1: "User-Centric",
      p2: "Secure",
      icon1: IoShieldSharp,
      icon2: FaLock,
      icon3: CiGlobe,
    },
    {
      id: "web",
      image: "/herolight/image2.webp",
      title: "Web Development",
      p1: "User-Centric",
      p2: "Secure",
      icon1: HiCodeBracket,
      icon2: FaReact,
      icon3: RiNextjsLine,
    },
    {
      id: "ecommerce",
      image: "/herolight/image3.webp",
      title: "Ecommerce Development",
      p1: "SSL encryption",
      p2: "Payment integrations",
      icon1: MdOutlineShoppingCart,
      icon2: FaPaypal,
      icon3: MdOutlineSell,
    },
    {
      id: "amc",
      image: "/herolight/image1.webp",
      title: "AMC",
      p1: "User-Centric",
      p2: "Secure",
      icon1: FaTools,
      icon2: FaUserCog,
      icon3: FaServer,
    },
    {
      id: "erp",
      image: "/herolight/image2.webp",
      title: "ERP Development",
      p1: "User-Centric",
      p2: "Secure",
      icon1: FaProjectDiagram,
      icon2: FaChartLine,
      icon3: FaCloudflare,
    },
    {
      id: "marketing",
      image: "/herolight/image3.webp",
      title: "Digital Marketing",
      p1: "User-Centric",
      p2: "Secure",
      icon1: FaBullhorn,
      icon2: FaEnvelopeOpenText,
      icon3: FaHandshake,
    },
  ];

  const [activeSlide, setActiveSlide] = React.useState(1);
  const [cursorVisible, setCursorVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    Infinity: true,
    centerMode: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: "0",
    beforeChange: (_: number, next: number) => {
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
    <section className="w-full  xl:w-12/12 mx-auto">
      <div className="radial-bg w-[47.2vw] h-[55.5vh] rounded-full blur-[150px] opacity-50 absolute right-1/2 bottom-1/4 translate-x-1/2 translate-y-1/2 ">
        {/* shade */}
      </div>

      <div
        className="w-full"
        ref={containerRef}
        onMouseEnter={() => setCursorVisible(true)}
        onMouseLeave={() => setCursorVisible(false)}
      >
        <CustomCursor show={cursorVisible} parentRef={containerRef} />
        <Slider ref={sliderRef} {...settings} className="z-10">
          {projects.map((Item, index) => (
            <div
              key={Item.id}
              className={`relative w-[500px] ${
                index === activeSlide
                  ? "h-[450px] xl:h-[500px]"
                  : "h-[380px]  xl:h-[380px] mt-[70px] xl:mt-[120px]"
              } rounded-[20px] shadow-md outline-none flex flex-col items-center justify-center cursor-pointer transition-all duration-500`}
            >
              <Image
                alt="projects"
                src={Item.image}
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
                  {Item.title}
                </h2>
                <Link
                  href={`/services#${Item.id}`}
                  onMouseEnter={() => setCursorVisible(false)}
                  onMouseLeave={() => setCursorVisible(true)}
                >
                  <FiArrowUpRight
                    size={60}
                    className="rounded-full border-[1px] p-3 text-white"
                  />
                </Link>

                <div
                  className={`${
                    index === activeSlide ? "opacity-0" : "opacity-100"
                  } flex  justify-center items-center gap-x-8 text-white text-sm transition-all duration-500`}
                >
                  <p className="px-3 py-1 rounded-3xl border-[1px]">
                    {Item.p1}
                  </p>
                  <p className="px-3 py-1 rounded-3xl border-[1px]">
                    {Item.p2}
                  </p>
                </div>

                <div
                  className={`${
                    index === activeSlide ? "opacity-100" : "opacity-0"
                  } absolute top-10 right-10 flex gap-x-2 transition-all duration-500`}
                >
                  <div className="bg-white/20 p-3  rounded-full border-white border-2">
                    <Item.icon1 className="border-2 rounded-full p-1 font-bold  border-white shadow-inner bg-white text-green-700 text-4xl " />
                  </div>
                  <div className="bg-white/20 p-3  rounded-full border-white border-2">
                    <Item.icon2 className="border-2 rounded-full p-1 font-bold  border-white shadow-inner bg-white text-blue-700 text-4xl " />
                  </div>
                  <div className="bg-white/20 p-3  rounded-full border-white border-2">
                    <Item.icon3 className="border-2 rounded-full p-1 font-bold  border-white shadow-inner bg-white text-blue-700 text-4xl " />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
