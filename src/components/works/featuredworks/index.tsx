"use client";
import ContactPopup from "@/components/ContactPopup";
import AnimatedBlobBackground from "@/components/shared/AnimatedBlobBackground";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiMessageRoundedDots } from "react-icons/bi";
import { FaRegCalendarDays } from "react-icons/fa6";

// Project type
interface ProjectType {
  id: string;
  title: string;
  description: string;
  category:
    | "Web Development"
    | "App Development"
    | "Digital Marketing"
    | "Branding";
  year: number;
  image: string;
}

// All projects array
const allProjects: ProjectType[] = [
  // Web Development
  {
    id: "web-1",
    title: "E-Commerce Platform Redesign",
    description:
      "Complete overhaul of a multi-vendor e-commerce platform with modern UI/UX, improved performance, and mobile responsiveness.",
    category: "Web Development",
    year: 2024,
    image: "/blogs/blog.jpg",
  },
  {
    id: "web-2",
    title: "Corporate Website Development",
    description:
      "Professional corporate website with CMS integration, SEO optimization, and responsive design for a Fortune 500 company.",
    category: "Web Development",
    year: 2024,
    image: "/blogs/blog1.jpg",
  },
  {
    id: "web-3",
    title: "SaaS Dashboard Application",
    description:
      "Complex dashboard application with real-time analytics, user management, and advanced reporting capabilities.",
    category: "Web Development",
    year: 2023,
    image: "/blogs/blog2.jpg",
  },

  // App Development
  {
    id: "app-1",
    title: "Food Delivery Mobile App",
    description:
      "Cross-platform mobile app for ordering food with live order tracking, payment integration, and loyalty rewards.",
    category: "App Development",
    year: 2024,
    image: "/blogs/blog3.jpg",
  },
  {
    id: "app-2",
    title: "Fitness Tracking App",
    description:
      "Mobile app for tracking workouts, nutrition, and progress with AI-based recommendations.",
    category: "App Development",
    year: 2023,
    image: "/blogs/blog.jpg",
  },
  {
    id: "app-3",
    title: "E-Learning Platform App",
    description:
      "Interactive learning mobile app with quizzes, progress tracking, and video lessons.",
    category: "App Development",
    year: 2023,
    image: "/blogs/blog1.jpg",
  },

  // Digital Marketing
  {
    id: "dm-1",
    title: "SEO & Content Marketing Campaign",
    description:
      "Boosted organic traffic by 300% through targeted SEO and high-quality content creation.",
    category: "Digital Marketing",
    year: 2024,
    image: "/blogs/blog2.jpg",
  },
  {
    id: "dm-2",
    title: "Social Media Growth Strategy",
    description:
      "Increased brand engagement by 250% using tailored social media campaigns.",
    category: "Digital Marketing",
    year: 2023,
    image: "/blogs/blog3.jpg",
  },
  {
    id: "dm-3",
    title: "PPC Advertising Campaign",
    description:
      "Generated high-quality leads with optimized Google Ads and Facebook Ads campaigns.",
    category: "Digital Marketing",
    year: 2023,
    image: "/blogs/blog.jpg",
  },

  // Branding
  {
    id: "brand-1",
    title: "Brand Identity Design",
    description:
      "Complete branding package with logo, typography, color scheme, and brand guidelines.",
    category: "Branding",
    year: 2024,
    image: "/blogs/blog1.jpg",
  },
  {
    id: "brand-2",
    title: "Product Packaging Design",
    description:
      "Creative packaging design that increased product sales by 40%.",
    category: "Branding",
    year: 2023,
    image: "/blogs/blog2.jpg",
  },
  {
    id: "brand-3",
    title: "Rebranding Campaign",
    description:
      "Modernized a legacy brand with a fresh visual identity and marketing materials.",
    category: "Branding",
    year: 2023,
    image: "/blogs/blog3.jpg",
  },
];

export const FeaturedWorks = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const categories = [
    "All",
    "Web Development",
    "App Development",
    "Digital Marketing",
    "Branding",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === activeCategory);
  return (
    <>
      {isPopupOpen && (
        <ContactPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
        />
      )}
      <div
        id="featured-work"
        className="bg-black/80 py-16 px-6 text-center text-white"
      >
        <h2 className="text-4xl md:text-7xl font-bold mb-4">Featured Work</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          <span className="font-semibold text-green-400"> Explore </span> our
          diverse portfolio of successful projects across multiple industries
          and technologies
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition duration-300 ${
                activeCategory === cat
                  ? "bg-green-800 text-black border"
                  : "bg-white/10 border liquid-glass-bg border-white hover:scale-110  hover:bg-green-800 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-transparent border  rounded-xl shadow hover:shadow-lg transition overflow-hidden text-left"
            >
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover  transition-transform duration-500 hover:scale-125"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-transparent shadow-xl border text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <span className="text-sm flex justify-start items-center gap-x-1">
                    <FaRegCalendarDays /> {project.year}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black/80 text-white py-20 px-6 text-center">
        <h2 className="text-4xl md:text-7xl font-bold mb-4">
          Ready to Start Your
          <span className="text-green-800"> Project?</span>
        </h2>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8">
          <span className="font-semibold text-[#816C37]"> Let's </span>
          discuss how we can bring your vision to life with our expertise
        </p>

        <div onClick={() => setIsPopupOpen(true)}>
          <div className="p-[3px] rounded-[40px] bg-gradient-to-r from-[#FFC841] to-[#4CF8CD] w-fit h-fit mx-auto">
            <div className="bg-black backdrop-blur-sm p-1 rounded-[40px]">
              <button className="flex items-center gap-x-5 rounded-[40px] bg-gradient-to-r from-[#1B6153] to-[#816C37] hover:bg-gradient-to-l px-6 py-2 text-lg font-semibold text-white">
                Get in Touch
                <BiMessageRoundedDots size={30} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
