import { blogs } from "@/lib";
import { nanoid } from "nanoid";
import Image from "next/image";
import React from "react";
import { MotiionDiv } from "./shared/MotionDiv";
import { TiltCard } from "./shared/TiltCard";

const Varients = {
  hidden: { opacity: 0, x: -300 },
  visible: { opacity: 1, x: 0 },
};
const Blogs = () => {
  return (
    <div className="bg-white py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-20">
          <h2 className="text-center text-[40px] lg:text-[70px] xl:text-[120px] font-bold text-gray-800 md:mb-10 lg:text-3xl">
            Blogs
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {blogs.map((blog, index) => (
            <TiltCard  key={nanoid()} sensitivity={30} className="cursor-pointer">
              <MotiionDiv
                variants={Varients}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                  delay: 0.15 * index,
                  ease: "easeInOut",
                  duration: 0.25,
                }}
               
                // href="#"
                className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
              >
                <Image
                  src={blog.image}
                  width={400}
                  quality={100}
                  height={400}
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

                <div className="relative mt-auto p-4">
                  {/* <span className="block text-sm text-gray-200">
                  July 19, 2021
                </span> */}
                  <h2 className="mb-2 text-lg  text-white/80 transition duration-100">
                    {blog.title}
                  </h2>

                  <span className="font-semibold text-btn">Read more</span>
                </div>
              </MotiionDiv>
            </TiltCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
