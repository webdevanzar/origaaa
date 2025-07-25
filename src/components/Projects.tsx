"use client";
import Image from "next/image";
import Slider from "react-slick";
import React, { useEffect, useRef, useState } from "react";

import "slick-carousel/slick/slick.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Aurora from "./ui/Aurora";
import storyblokClient from "@/utils/storyblock";

type ProjectType = {
  id: string;
  image: string;
  image2: string;
  title: string; //max 30 characters
};

export const Projects = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  const [activeSlide, setActiveSlide] = React.useState(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: "0",
    beforeChange: (_: number, next: number) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
  console.log(projects);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await storyblokClient.get("cdn/stories/projects", {
          version: "published",
        });

        const raw = data.story.content.contents;
        const formatted: ProjectType[] = raw.map((item: any, idx: number) => ({
          id: item._uid || idx.toString(),
          image: item.image1.filename,
          image2: item.image2.filename,
          title: item.title,
        }));

        setProjects(formatted);
      } catch (err) {
        console.error("Failed to fetch Storyblok data:", err);
      }
    };

    fetchProjects();
  }, []);
  console.log(projects);

  return (
    <div className="relative py-5 xl:py-10 mt-20 mix-blend-hue">
      {/* Aurora Background */}
      <div className="absolute inset-0 -z-10 bg-gray-800">
        <Aurora
          colorStops={["#25ab79", "#9c7a3d"]}
          blend={0.8}
          amplitude={5.0}
          speed={0.4}
        />
      </div>
      <div className="relative py-8 flex flex-col md:flex-row xl:py-20 w-[98%] m-auto">
        <div className="flex flex-col gap-y-5 md:gap-y-10 w-full md:w-1/2 lg:w-[35%] 2xl:w-1/3 p-5">
          <h2 className="text-4xl xl:text-5xl font-bold text-white">
            Projects
          </h2>
          <p className="text-4xl xl:text-5xl  font-bold text-blue-600">
            Taking digital experiences to <br /> new heights
          </p>

          {/* Custom Arrows */}
          <div className="flex gap-5 mt-5">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="w-12 h-12 rounded-md bg-transparent border-[1px] text-white flex items-center justify-center transition"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="w-12 h-12 rounded-md bg-transparent border-[1px] text-white flex items-center justify-center transition"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-[65%] 2xl:w-2/3">
          <Slider ref={sliderRef} {...settings} className="z-10">
            {projects.map((item, index) => (
              <div
                key={item.id}
                className={`group relative w-[500px] h-[350px] md:h-[300px] 2xl:h-[350px] rounded-xl shadow-md outline-none flex flex-col items-center justify-center cursor-pointer `}
              >
                <Image
                  alt="projects"
                  src={item.image}
                  width={1000}
                  height={1000}
                  className={`absolute w-full h-full object-cover rounded-xl transition-opacity duration-700 ease-in-out group-hover:opacity-0`}
                />
                <Image
                  alt="hover-projects"
                  src={item.image2}
                  width={1000}
                  height={1000}
                  className={`absolute w-full h-full object-cover opacity-0 rounded-xl group-hover:opacity-100 transition-opacity duration-700 ease-in-out `}
                />
                <h2 className="absolute -bottom-10 xl:-bottom-12 text-2xl font-semibold xl:text-4xl pt-2 text-white">
                  {item.title}
                </h2>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
