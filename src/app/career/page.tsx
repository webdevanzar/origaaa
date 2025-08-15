"use client";
import Navbar from "@/components/Navbar";
import AnimatedBlobBackground from "@/components/shared/AnimatedBlobBackground";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiMessageRoundedDots, BiMinus, BiPlus } from "react-icons/bi";

const jobs = [
  {
    id: 1,
    title: "Project Coordinator Intern",
    location: "Kochi",
    description:
      "Assist in project coordination, communicate with teams, and manage schedules. Ideal for fresh graduates eager to learn project management skills.",
    applyEmail: "info@origanetworks.com",
  },
  {
    id: 2,
    title: "Junior React Developer",
    location: "Kochi",
    description:
      "Work on Angular applications, collaborate with designers, and optimize performance. Requires basic Angular and TypeScript knowledge.",
    applyEmail: "info@origanetworks.com",
  },
  {
    id: 3,
    title: "QA Tester Intern",
    location: "Kochi",
    description:
      "Assist in building dynamic and responsive web applications using React.js. Work with senior developers to implement new features, maintain existing code, and optimize performance. Basic knowledge of JavaScript, React, and modern frontend workflows is required.",
    applyEmail: "info@origanetworks.com",
  },
  {
    id: 4,
    title: "Ui/Ux Designer",
    location: "Melattur",
    description:
      "Design intuitive and visually appealing user interfaces while ensuring a seamless user experience across web and mobile platforms. Collaborate closely with developers and product managers to translate requirements into engaging designs. Proficiency in Figma, Adobe XD, or similar tools is required.",
    applyEmail: "info@origanetworks.com",
  },
];

const CareerPage = () => {
  const [openJob, setOpenJob] = useState<number | null>(null);

  const toggleJob = (id: number) => {
    setOpenJob(openJob === id ? null : id);
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

      <div className="py-10 w-10/12 mx-auto flex flex-col items-center gap-y-6 lg:text-left text-center">
        <h1 className="text-[30px] md:text-[50px] lg:text-[80px] text-center  font-semibold leading-tight text-green-900">
          Work Together <br />
          <span className="font-bold text-black">For Success</span>
        </h1>
        <p className="text-black">
          Together, we can tackle challenges, celebrate achievements, and create
          a thriving environment where
          <span className="font-bold text-[#5b542b]">
            {" "}
            Everyone Can Grow And Succeed.
          </span>
        </p>

        <Link
          href="mailto:info@origanetworks.com"
          className="flex justify-center lg:justify-start"
          target="_blank"
        >
          <div className="p-[3px] rounded-[40px] bg-gradient-to-r from-[#FFC841] to-[#4CF8CD] w-fit h-fit">
            <div className="bg-white backdrop-blur-sm p-1 rounded-[40px]">
              <button className="flex items-center gap-x-5 rounded-[40px] bg-gradient-to-r from-[#1B6153] to-[#816C37] hover:bg-gradient-to-l px-4 py-2 text-base md:text-xl font-semibold text-white">
                SEND CV
              </button>
            </div>
          </div>
        </Link>
      </div>

      <AnimatedBlobBackground
        uniqueId="career"
        blobCount={20}
        animationDuration={1000} // Slower animation (3 seconds)
        blurAmount={40} // More blur for smoother effect
        minOpacity={0.5}
        maxOpacity={0.9}
      >
        {/* Open Positions */}
        <div className="mx-auto py-10 md:py-20 bg-black/80">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-14 sm:mb-20 text-white">
            Open Positions
          </h2>
          <div className="grid md:grid-cols-2 gap-6 w-11/12 sm:w-10/12 mx-auto">
            {jobs.map((job) => (
              <div key={job.id} className="border-b border-gray-400 pb-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleJob(job.id)}
                >
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {job.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{job.location}</p>
                  </div>
                  {openJob === job.id ? (
                    <BiMinus className="text-white" size={20} />
                  ) : (
                    <BiPlus className="text-white" size={20} />
                  )}
                </div>

                {openJob === job.id && (
                  <div className="mt-3 text-gray-200">
                    <p>{job.description}</p>
                    <Link
                      href={`mailto:${job.applyEmail}?subject=Application for ${job.title}`}
                      target="_blank"
                    >
                      <button className="mt-4 px-4 py-2 bg-gradient-to-r from-[#1B6153] to-[#816C37] text-white rounded-lg font-semibold hover:opacity-90 transition">
                        Apply Now
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black/80 text-white py-20 px-6 text-center">
          <h2 className="text-4xl md:text-7xl font-bold mb-4">
            Build Your Career with
            <span className="text-green-800"> Origa Networks</span>
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8">
            <span className="font-semibold text-[#816C37]">Join </span>
            our talented team and work on exciting projects that inspire growth,
            innovation, and success.
          </p>

          <div>
            <div className="p-[3px] rounded-[40px] bg-gradient-to-r from-[#FFC841] to-[#4CF8CD] w-fit h-fit mx-auto">
              <div className="bg-black backdrop-blur-sm p-1 rounded-[40px]">
                <button
                  className="flex items-center gap-x-5 rounded-[40px] bg-gradient-to-r from-[#1B6153] to-[#816C37] hover:bg-gradient-to-l px-6 py-2 text-lg font-semibold text-white"
                  onClick={() =>
                    (window.location.href = "mailto:info@origanetworks.com")
                  }
                >
                  Apply Now
                  <BiMessageRoundedDots size={30} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </AnimatedBlobBackground>
    </section>
  );
};

export default CareerPage;
