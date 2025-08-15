import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export const CareerBanner = () => {
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
    </>
  );
};

