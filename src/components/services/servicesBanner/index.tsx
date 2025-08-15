import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export const ServicesBanner = () => {
  return (
    <>
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

      <div className="bg-white text-black py-16 px-6 text-center">
        <h2 className="text-4xl md:text-7xl font-bold mb-4">
          <span className="text-green-800">Our </span> Solutions
        </h2>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8">
          <span className="font-semibold text-[#816C37]">Experience </span>a
          distinguished suite of solutions — from bespoke web and mobile apps to
          strategic marketing, branding, and enterprise systems.
        </p>

        <Link href="/services">
          <div className="p-[3px] rounded-[40px] bg-gradient-to-r from-[#FFC841] to-[#4CF8CD] w-fit h-fit mx-auto">
            <div className="bg-white backdrop-blur-sm p-1 rounded-[40px]">
              <button className="flex items-center gap-x-5 rounded-[40px] bg-gradient-to-r from-[#1B6153] to-[#816C37] hover:bg-gradient-to-l px-6 py-2 text-lg font-semibold text-white">
                Discover Our Services
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
