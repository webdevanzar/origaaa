import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <section className="overflow-x-hidden">
      <div className="w-full h-[30vh] md:h-[45vh] relative">
        <Image
          src={"/hero.jpg"}
          alt="image"
          fill
          className="object-cover bg-cover rounded-b-xl"
        />
        <div className="absolute inset-0 bg-black/40 rounded-b-xl z-0" />
        <Navbar />
      </div>

        <div className="py-10 w-10/12 mx-auto flex flex-col items-center gap-y-6 lg:text-left text-center">
          <h1 className="text-[30px] md:text-[50px] lg:text-[80px] text-center  font-semibold leading-tight text-green-900">
            Let's Connect <br />
            <span className="font-bold text-black">We're Here To Help</span>
          </h1>
          <p className="text-black">
            Have Questions Or Need Assistance? Reach Out To Our Team,And We'll
            Be
            <span className="font-bold text-[#5b542b]"> Happy To Guide You</span>
          </p>

          <Link href="mailto:info@origanetworks.com" className="flex justify-center lg:justify-start" target="_blank">
            <div className="p-[3px] rounded-[40px] bg-gradient-to-r from-[#FFC841] to-[#4CF8CD] w-fit h-fit">
              <div className="bg-white backdrop-blur-sm p-1 rounded-[40px]">
                <button className="flex items-center gap-x-5 rounded-[40px] bg-gradient-to-r from-[#1B6153] to-[#816C37] hover:bg-gradient-to-l px-4 py-2 text-base md:text-xl font-semibold text-white">
                  SEND AS AN EMAIL
                </button>
              </div>
            </div>
          </Link>
        </div>

      <Contact />
    </section>
  );
};

export default ContactPage;
