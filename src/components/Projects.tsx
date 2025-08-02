"use client";
import Image from "next/image";
import Slider from "react-slick";
import React, { useEffect, useRef, useState } from "react";

import "slick-carousel/slick/slick.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import storyblokClient from "@/utils/storyblock";
import { CustomCursor } from "./shared/CustomeCursor";
import Link from "next/link";

type ProjectType = {
  id: string;
  image: string;
  image2: string;
  title: string; //max 30 characters
  link: string;
};

export const Projects = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  const [activeSlide, setActiveSlide] = React.useState(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    // centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: "0",
    beforeChange: (_: number, next: number) => setActiveSlide(next),
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
          link: item.link,
        }));

        setProjects(formatted);
      } catch (err) {
        console.error("Failed to fetch Storyblok data:", err);
      }
    };

    fetchProjects();
  }, []);
  const isInactiveSlide = (index: number, active: number, total: number) => {
    return index === active || index === (active - 1 + total) % total;
  };

  const [cursorVisible, setCursorVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      {projects.length !== 0 && (
        <div className="relative py-8 flex flex-col items-center md:flex-row xl:py-20 w-[98%] m-auto">
          <div className="md:absolute w-full  md:w-1/2 lg:w-1/3 left-0 flex flex-col justify-center gap-y-5 md:gap-y-10 p-5 z-20">
            <h2 className="text-4xl xl:text-5xl font-bold text-white">
              Projects
            </h2>
            <p className="strok-text1  text-4xl xl:text-5xl font-bold text-transparent font-passionone tracking-widest">
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

          {/* slider */}
          <div
            className="project-slide w-full"
            ref={containerRef}
            onMouseEnter={() => setCursorVisible(true)}
            onMouseLeave={() => setCursorVisible(false)}
          >
            {/* Custom Cursor - only visible when hovering the component */}
            <CustomCursor parentRef={containerRef} show={cursorVisible} />
            <Slider ref={sliderRef} {...settings} className="z-10">
              {projects.map((item, index) => {
                const total = projects.length;
                const inactive = isInactiveSlide(index, activeSlide, total);
                return (
                  <div
                    key={item.id}
                    className={`group transition-all duration-700 ease-in-out transform ${
                      inactive
                        ? "md:opacity-0 md:scale-75"
                        : "opacity-100 scale-100"
                    } relative w-[500px] h-[300px] md:h-[300px] 2xl:h-[350px] rounded-xl shadow-md outline-none flex flex-col items-center justify-center`}
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
                    <Link href={item.link} target="_blank">
                      <h2 className="absolute -bottom-10 xl:-bottom-12 text-2xl font-semibold xl:text-4xl pt-2 text-white">
                        {item.title}
                      </h2>
                    </Link>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
};
