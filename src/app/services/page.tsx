import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const services = [
  "UX/UI design",
  "Development",
  "Mobile app",
  "Branding",
  "Video editing",
  "Product design",
  "Motion design",
];

const ServicesPage = () => {
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

      {/* our services */}
      <div className="relative bg-black text-white z-10 mx-auto text-center px-4 py-16">
        <div className="">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            <span className="text-green-300">Our</span> Services
          </h2>

          {/* Tags */}
          <div className="flex w-1/2 mx-auto flex-wrap justify-center gap-4">
            {services.map((service, index) => (
              <span
                key={index}
                className="px-6 py-2 bg-black/70 border border-gray-700 rounded-full text-lg font-medium hover:bg-green-400 hover:text-black transition-colors duration-300 cursor-pointer"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
