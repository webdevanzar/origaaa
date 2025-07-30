import { services } from "@/lib";
import Image from "next/image";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const WhatweDo = () => {
  return (
    <section className="py-10 radial-bg">
      <h1 className="font-bold text-6xl text-center text-white pb-7 ">
        What We Do ?
      </h1>

      <div className="flex h-full justify-between items-start w-10/12 mx-auto rounded-3xl bg-white pl-3 py-16">
        <div className="w-[25%] flex flex-col justify-center items-center">
          <Image
            src="/logosmall.png"
            width={63}
            height={63}
            alt="logo small"
            className="opacity-20 flex justify-center items-center mb-2"
          />
          <ul className="w-full">
            {services.map((service) => (
              <li
                key={service.title}
                className="text-center text-black text-2xl font-medium py-5 px-10 cursor-pointer rounded-tl-xl rounded-bl-xl radial-bg-secondary"
              >
                {service.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative w-[75%] h-[535px] rounded-3xl radial-bg-secondary pl-7 py-16 flex justify-start gap-x-20 text-white">
          <div className="flex flex-col gap-y-3 w-1/2 h-full">
            <h3 className="text-2xl font-bold">
              Building Fast, Responsive Websites for Your Brand
            </h3>
            <p className="text-xl font-light">
              At Origa Networks, we build fast, responsive websites that look
              great on any device and offer seamless user experiences. Our
              solutions reflect your brand, are SEO-friendly, and designed to
              grow with your business.
            </p>

            <ul className="flex flex-col gap-y-3 mt-5">
              <li className="flex justify-start items-center gap-x-3">
                <MdOutlineKeyboardDoubleArrowRight size={20} />
                AMAN ENTERPRISES
              </li>
              <li className="flex justify-start items-center gap-x-3">
                <MdOutlineKeyboardDoubleArrowRight size={20} />
                AMAN ENTERPRISES
              </li>
              <li className="flex justify-start items-center gap-x-3">
                <MdOutlineKeyboardDoubleArrowRight size={20} />
                AMAN ENTERPRISES
              </li>
              <li className="flex justify-start items-center gap-x-3">
                <MdOutlineKeyboardDoubleArrowRight size={20} />
                AMAN ENTERPRISES
              </li>
            </ul>
          </div>
          <div className="flex justify-start items-end">
            <Image
              alt="image"
              src="/wedo/image3.png"
              width={200}
              height={190}
            />
          </div>
          <Image alt="image" src="/wedo/image1.png" width={210} height={200} className="absolute -top-10 right-32"/>
          <Image alt="image" src="/wedo/image2.png" width={200} height={170} className="absolute bottom-1/3 -right-20"/>
        </div>
      </div>
    </section>
  );
};

export default WhatweDo;
