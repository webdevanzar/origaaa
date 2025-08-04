"use client";
import { blogs } from "@/lib";
import Image from "next/image";
import React, { useRef } from "react";
import { FaArrowRight, FaRegCalendarDays } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { TiltCard } from "./shared/TiltCard";

const Blogs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // Format date from "2025-04-15 10:48" to "15 Apr, 2025"
  const formatDate = (dateString: string) => {
    if (!dateString) return "";

    try {
      const [datePart] = dateString.split(" ");
      const date = new Date(datePart);

      const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "short",
        year: "numeric",
      };

      return date.toLocaleDateString("en-US", options).replace(",", "");
    } catch (error) {
      return dateString;
    }
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="max-w-7xl md:px-10 lg:px-5 relative z-10 flex flex-col items-center md:items-start px-3 w-full mx-auto py-10"
    >
      <motion.div
        className="flex gap-x-3"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={headerVariants}
      >
        <Image
          src="/vectors/overview.svg"
          alt="Why Choose Us"
          width={20}
          height={20}
          className="fill-[#24a776]"
        />
        <span className="uppercase text-xs md:text-sm font-bold text-gray-800">
          BLOGS and UPDATES
        </span>
      </motion.div>
      <div className="mt-3 flex justify-between w-full">
        <motion.h2
          className="text-gray-900 hidden md:block capitalize leading-10 font-bold text-4xl tracking-wide"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
        >
          Why You Should Be <br /> Excited About the Update
        </motion.h2>
        <motion.h2
          className="text-gray-900 md:hidden capitalize leading-8 md:leading-10 font-bold text-center md:text-start text-2xl md:text-4xl tracking-wide"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
        >
          Why You Should Be Excited About the Update
        </motion.h2>
        <div className="hidden md:flex justify-end gap-x-4">
          <motion.button
            // onClick={prevPage}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 rounded-full cursor-pointer flex hover:bg-[#24a776] hover:text-white items-center justify-center bg-gray-200 text-[#24a776] transition-all"
            // disabled={loading || blogPosts.length <= postsPerPage}
          >
            <FaArrowRight className="-rotate-180" />
          </motion.button>
          <motion.button
            // onClick={nextPage}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 rounded-full cursor-pointer flex items-center hover:bg-[#24a776] text-[#24a776] bg-gray-200 hover:text-white justify-center transition-all"
            // disabled={loading || blogPosts.length <= postsPerPage}
          >
            <FaArrowRight className="" />
          </motion.button>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-6">
        {blogs.map((blog, index) => (
          <TiltCard key={blog.id} sensitivity={20}>
            <motion.div
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              className="flex flex-col border border-[#E3DBD8] rounded-[20px] overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <motion.div
                className="w-full h-[250px] flexCenter rounded-t-[20px] overflow-hidden"
                variants={imageVariants}
              >
                <Image
                  src={blog.image}
                  alt="image"
                  width={280}
                  height={300}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </motion.div>
              <div className="px-7 pt-5 pb-8">
                <motion.div className="flexBetween" variants={textVariants}>
                  <div className="flex items-center gap-x-2">
                    <FaRegCalendarDays />
                    <span className="text-[#727272] text-[15px]">
                      {formatDate(blog.date)}
                    </span>
                  </div>
                </motion.div>
                <motion.h3
                  className="text-[#24a776] font-bold text-lg mt-4 line-clamp-2"
                  variants={textVariants}
                >
                  {blog.title}
                </motion.h3>
                <motion.p
                  className="text-[15px] text-[#727272] leading-6 mt-2 line-clamp-3"
                  variants={textVariants}
                >
                  {blog.description}
                </motion.p>
                <Link
                  href={`/#`}
                  className="flex justify-center items-center w-full cursor-pointer gap-x-3 mt-5 group"
                >
                  <span className="text-sm font-semibold text-[#32295A] group-hover:text-[#24a776] transition-colors">
                    Read More
                  </span>
                  <FaArrowRight className="w-[12px] group-hover:text-[#24a776] transition-colors" />
                </Link>
              </div>
            </motion.div>
          </TiltCard>
        ))}
      </div>

      {/* Mobile pagination */}
      {/* {!loading && blogposts.length > postsPerPage && (
        <div className="flex md:hidden justify-center gap-x-4 w-full mt-4">
          <motion.button
            onClick={prevPage}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full cursor-pointer flex hover:bg-[#B542FA] hover:text-white items-center justify-center bg-gray-200 text-[#32295A] transition-all"
          >
            <FaArrowRight className="-rotate-180" />
          </motion.button>
          <motion.button
            onClick={nextPage}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full cursor-pointer flex items-center hover:bg-[#B542FA] text-[#32295A] bg-gray-200 hover:text-white justify-center transition-all"
          >
            <FaArrowRight className="" />
          </motion.button>
        </div>
      )} */}
    </section>
  );
};

export default Blogs;

// const Blogs = () => {
//   return (
//     <div className="bg-white py-8 lg:py-12">
//       <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
//         <div className="mb-10 md:mb-20">
//           <h2 className="text-center text-[40px] lg:text-[70px] xl:text-[120px] font-bold text-gray-800 md:mb-10 lg:text-3xl">
//             Blogs
//           </h2>
//         </div>

//         <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
//           {blogs.map((blog, index) => (
//             <TiltCard  key={nanoid()} sensitivity={30} className="cursor-pointer">
//               <MotiionDiv
//                 variants={Varients}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 transition={{
//                   type: "spring",
//                   damping: 10,
//                   stiffness: 100,
//                   delay: 0.15 * index,
//                   ease: "easeInOut",
//                   duration: 0.25,
//                 }}

//                 // href="#"
//                 className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
//               >
//                 <Image
//                   src={blog.image}
//                   width={400}
//                   quality={100}
//                   height={400}
//                   loading="lazy"
//                   alt="Photo by Minh Pham"
//                   className="absolute inset-0 h-full w-full object-cover object-center transition duration-200"
//                 />

//                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

//                 <div className="relative mt-auto p-4">
//                   {/* <span className="block text-sm text-gray-200">
//                   July 19, 2021
//                 </span> */}
//                   <h2 className="mb-2 text-lg  text-white/80 transition duration-100">
//                     {blog.title}
//                   </h2>

//                   <span className="font-semibold text-btn">Read more</span>
//                 </div>
//               </MotiionDiv>
//             </TiltCard>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blogs;
