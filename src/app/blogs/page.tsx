import { Blogs } from "@/components/home/blogs";
import Navbar from "@/components/Navbar";
import { fetchblogs } from "@/utils/fetchblogs";
import Image from "next/image";
import React from "react";

const BlogsPage = async () => {
  const blogs = await fetchblogs();
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
      <Blogs blogs={blogs} />
    </section>
  );
};

export default BlogsPage;
