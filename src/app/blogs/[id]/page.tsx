"use client";
import type { Variants } from "framer-motion";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { IoSearch } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import { useParams, useRouter } from "next/navigation";
import ShimmerNewsUpdates from "@/components/shared/Shimmers";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { BlogType, fetchblogs } from "@/utils/fetchblogs";
import { formatDate } from "@/utils/formatdate";

// Define TypeScript interfaces for our data
interface PopularPost {
  id: string;
  title: string;
  date: string;
  image: string;
}

const BlogosDetailPage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [blogMain, setBlogMain] = useState<BlogType | null>(null);
  const [popularPosts, setPopularPosts] = useState<PopularPost[]>([]);
  const [allBlogs, setAllBlogs] = useState<BlogType[]>([]); // For search functionality
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<PopularPost[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const params = useParams();
  const router = useRouter();
  const postId = params?.id as string;

  useEffect(() => {
    const fetcBlogs = async () => {
      try {
        setLoading(true);
        const blogs = await fetchblogs();

        // Find the specific blog post by ID
        const MainBlog = blogs.find((blog: BlogType) => blog.id === postId);

        if (!MainBlog) {
          throw new Error("Blog post not found");
        }

        // Get latest 3 posts for popular section (excluding current post)
        const latestPosts = blogs.filter(
          (blog: BlogType) => blog.id !== postId
        );

        setBlogMain(MainBlog);
        setPopularPosts(latestPosts);
        setAllBlogs(blogs);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Failed to load news post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (postId) {
      fetcBlogs();
    }
  }, [postId]);

  // Handle search input changes
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const results = allBlogs.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  };

  // Handle search result click
  const handleResultClick = (id: string) => {
    router.push(`/blogs/${id}`);
    setSearchQuery("");
    setShowSearchResults(false);
  };

  // Animation variants
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2 + i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Render content based on loading state
  const renderContent = () => {
    if (loading) {
      return <ShimmerNewsUpdates />;
    }

    if (error) {
      return (
        <div className="w-full flex justify-center items-center py-10">
          <div className="text-red-500 text-center">
            <p>{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 bg-[#B542FA] text-white px-6 py-2 rounded-full text-sm"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    if (!blogMain) {
      return (
        <div className="w-full flex justify-center items-center py-10">
          <div className="text-red-500 text-center">
            <p>No blog post found</p>
          </div>
        </div>
      );
    }

    return (
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="w-full grid md:grid-cols-3 gap-3 lg:gap-7 mt-4 md:mt-10"
      >
        <div className="md:col-span-2 flex flex-col gap-y-10">
          <motion.div
            variants={fadeUp}
            custom={1}
            className="flex flex-col w-full"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full h-[300px] md:h-[350px] rounded-[20px] overflow-hidden"
            >
              <Image
                src={blogMain.image}
                alt={blogMain.title}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="flexStart my-5 gap-x-4">
              <div className="flex gap-x-2">
                <SlCalender />
                <span className="text-[#070027] text-[15px]">
                  {formatDate(blogMain.date)}
                </span>
              </div>
            </div>
            <h2 className="text-[#24a776] hidden md:block font-bold text-4xl tracking-wide">
              {blogMain.title}
            </h2>
            <h2 className="text-[#32295A] md:hidden font-bold text-2xl md:text-4xl tracking-wide">
              {blogMain.title}
            </h2>
            <p className="text-[#727272] my-5 text-[15px] leading-7 max-h-[250px] sm:max-h-[400px] md:max-h-[800px] p-2 overflow-y-auto scrollbar-hide">
              {blogMain.content}
            </p>
          </motion.div>
        </div>

        <div className="md:col-span-1 flex flex-col gap-y-3 lg:gap-y-6">
          {/* search */}
          <motion.div
            variants={fadeUp}
            custom={2}
            className="bg-[#FFFFFF] rounded-[20px] p-4 lg:p-7 flex flex-col relative shadow-inner"
          >
            <h4 className="font-bold text-[17px] text-[#5b542b]">
              Search Here
            </h4>
            <hr className="border border-[#E3DBD8]/60 mt-3" />
            <div className="relative w-full mt-6">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                className="border rounded-full text-sm w-full border-[#E3DBD8] py-[14px] px-5"
                placeholder="Search news..."
              />
              <IoSearch className="absolute top-4 text-[20px] text-[#41185A] right-4" />
            </div>
            {showSearchResults && (
              <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-[20px] mt-2 z-10 max-h-60 overflow-y-auto scrollbar-hide">
                {searchResults.length > 0 ? (
                  searchResults.map((result) => (
                    <div
                      key={result.id}
                      onClick={() => handleResultClick(result.id)}
                      className="p-3 hover:bg-gray-100 cursor-pointer border-b border-[#E3DBD8]/60"
                    >
                      <p className="text-[#41185A] font-medium">
                        {result.title}
                      </p>
                      <p className="text-xs text-[#727272]">
                        {formatDate(result.date)}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="p-3 text-[#727272] text-center">
                    No results found
                  </div>
                )}
              </div>
            )}
          </motion.div>

          {/* latest post */}
          <motion.div
            variants={fadeUp}
            custom={3}
            className="bg-[#FFFFFF] rounded-[20px] p-4 lg:p-7 flex flex-col h-[380px] overflow-y-auto scrollbar-hide shadow-inner"
          >
            <h4 className="font-bold text-[17px] text-[#5b542b]">
              Latest Posts
            </h4>
            <hr className="border border-[#E3DBD8]/60 mt-3" />
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="relative w-full mt-6 flex flex-col gap-y-5"
            >
              {popularPosts.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  custom={index + 4}
                  whileHover={{ x: 5 }}
                  className="flex gap-x-3 cursor-pointer"
                >
                  <div className="min-w-28 h-18 rounded-[20px] overflow-hidden flex justify-center items-center">
                    <Image
                      src={item.image}
                      alt="post"
                      width={80}
                      height={80}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-y-1 md:gap-y-0">
                    <div className="flex gap-x-2">
                      <SlCalender className="w-3 text-yellow-900" />
                      <span className="text-xs md:text-sm text-[#727272]">
                        {formatDate(item.date)}
                      </span>
                    </div>
                    <Link
                      href={`/blogs/${item.id}`}
                      className="text-[#24a776] hover:underline text-sm lg:w-[90%] font-semibold line-clamp-2"
                    >
                      {item.title}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* category */}
          <motion.div
            variants={fadeUp}
            custom={7}
            className="bg-[#FFFFFF] rounded-[20px] p-4 lg:p-7 flex flex-col"
          >
            <h4 className="font-bold text-[17px] text-[#5b542b]">Category</h4>
            <hr className="border border-[#E3DBD8]/60 mt-3 " />
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="relative w-full mt-6 flex flex-col gap-y-5"
            >
              {[
                "Product Updates",
                "Web Development",
                "UI/UX Design",
                "DevOps & Infrastructure",
                "Tech Industry News",
                "AI & Machine Learning",
                "Cybersecurity",
                "Career & Hiring Tips",
              ].map((item, index) => (
                <motion.span
                  key={index}
                  variants={fadeUp}
                  custom={index + 8}
                  whileHover={{ x: 8, color: "#22c55e" }}
                  className="text-[15px] flex gap-x-3 cursor-pointer"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* tags */}
          <motion.div
            variants={fadeUp}
            custom={14}
            className="bg-[#FFFFFF] rounded-[20px] p-4 lg:p-7 flex flex-col"
          >
            <h4 className="font-bold text-[17px] text-[#5b542b]">
              Popular Tags
            </h4>
            <hr className="border border-[#E3DBD8]/60 mt-3" />
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="relative gap-2 w-full mt-6 flex flex-wrap"
            >
              {[
                "Product Updates",
                "Web Development",
                "Mobile App Development",
                "Cloud Computing",
                "Cybersecurity",
                "AI & Machine Learning",
              ].map((item, index) => (
                <motion.span
                  key={index}
                  variants={fadeUp}
                  custom={index + 15}
                  whileHover={{ scale: 1.05, backgroundColor: "#F8F2FF" }}
                  className="text-[15px] py-1 text-[#727272] border
                  px-3 rounded-full border-[#E3DBD8] flexStart gap-x-3 cursor-pointer"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <section>
      <div className="w-full h-[30vh] md:h-[45vh] relative">
        <Image
          src={"/hero4.jpg"}
          alt="image"
          fill
          className="-z-10 object-cover bg-center rounded-b-xl"
        />
        <div className="absolute inset-0 bg-black/60 rounded-b-xl z-0" />
        <Navbar />
      </div>
      <div
        ref={sectionRef}
        className="max-w-7xl px-5 
       py-10 gap-x-16 w-full mx-auto flex flex-col"
      >
        <motion.h1
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
          className="text-[#5b542b] font-bold text-2xl md:text-5xl"
        >
          Blogs
        </motion.h1>

        {renderContent()}
      </div>
    </section>
  );
};

export default BlogosDetailPage;
