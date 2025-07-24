import { blogs } from "@/lib";
import { nanoid } from "nanoid";
import Image from "next/image";
import React from "react";
import { MotiionDiv } from "./shared/MotionDiv";

const Varients = {
  hidden: { opacity: 0, x: -300 },
  visible: { opacity: 1, x: 0 },
};
const Blogs = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Blog
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
          Welcome to our blog, where we share the latest trends in technology, web development, and digital transformation. Discover insights on mobile app development, website design, digital marketing, and more. Stay updated with expert advice and tips to help your business thrive.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {blogs.map((blog, index) => (
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
              key={nanoid()}
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
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
