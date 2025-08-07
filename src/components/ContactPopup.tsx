"use client";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaLocationDot } from "react-icons/fa6";
import { LuPhone, LuSend } from "react-icons/lu";
import { FaFacebookSquare } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Icons = [
  {
    id: "instagram",
    link: "https://www.instagram.com/origanetworks/",
    src: FaInstagram,
  },
  {
    id: "linkedin",
    link: "https://www.linkedin.com/company/origa-networks/",
    src: RxLinkedinLogo,
  },
  {
    id: "facebook",
    link: "https://www.facebook.com/profile.php?id=61561199776447#",
    src: FaFacebookSquare,
  },
];
const ContactPopup = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
  const hasSeen = localStorage.getItem("hasSeenPopup");
  if (!hasSeen) {
    const timer = setTimeout(() => {
      setShow(true);
      localStorage.setItem("hasSeenPopup", "true");
    }, 10000); // 10 seconds

    return () => clearTimeout(timer); // Cleanup
  }
}, []);

  if (!show) return null;

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (!form.current) return;
    setLoading(true);

    emailjs
      .sendForm("service_hmgrh09", "template_ss2ir6t", form.current, {
        publicKey: "wwPCgmsKl7Pk5zZDz",
      })
      .then(
        () => {
          setLoading(false);
          console.log("SUCCESS!");
          toast.success("Will contact you soon");
          form.current?.reset();
          setShow(false);
        },
        (error) => {
          setLoading(false);
          console.log("FAILED...", error.text);
          toast.warning("Failed to connect");
          form.current?.reset();
        }
      );
  };

  return (
    <section className="h-screen fixed md:inset-0 flex justify-center items-center bg-black/80 text-white mx-auto z-50">
      <div className="relative backdrop-blur-[10px] bg-white/15 flex flex-col-reverse md:flex-row justify-between w-11/12 md:w-4/5 lg:w-2/3 xl:w-1/2 mx-auto rounded-[20px]  border-2 p-2">
        <button
          className="absolute top-3 right-3 md:-top-7 md:-right-7 text-2xl font-bold text-white"
          onClick={() => setShow(false)}
        >
          ✕
        </button>

        <div className="backdrop-blur-0 flex flex-col gap-y-2 md:gap-y-5 items-start md:w-1/2 px-5 py-2 md:py-10 rounded-[10px]">
          <div className="flex gap-x-3 items-center">
            <MdEmail size={28} />
            <span className="sm:text-lg">info@origanetworks.com</span>
          </div>

          <div className="flex items-start gap-x-3">
            <FaLocationDot size={48} />
            <span className="sm:text-lg">
              Global Buisness Centre, Swapnil Enclave, Shanmugham Road
              Ernakulam, Kerala 682031 India
            </span>
          </div>

          <div className="flex items-start gap-x-3">
            <FaLocationDot size={28} />
            <span className="sm:text-lg">
              Alis Tower,Melattur, Malappuram, Kerala 679326 India
            </span>
          </div>

          <div className="flex items-start gap-x-3">
            <LuPhone size={28} />
            <div className="flex flex-col gap-y-2">
              <Link
                href="tel:+918129164869"
                className="sm:text-lg hover:translate-x-0.5 duration-200"
                target="_blank"
              >
                +91 8129164869
              </Link>
              <Link
                href="tel:+918078154338"
                className="sm:text-lg hover:translate-x-0.5 duration-200"
                target="_blank"
              >
                +91 8078154338
              </Link>
            </div>
          </div>

          <div className="flex gap-x-3 items-center pl-10">
            {Icons.map((Icon) => (
              <Link
                key={Icon.id}
                href={Icon.link}
                target="_blank"
                className="cursor-pointer hover:-translate-y-0.5 transition-all duration-200"
              >
                <Icon.src
                  className="p-1 sm:p-2 backdrop-blur-[50px] bg-white/20  text-[36px] sm:text-[40px] rounded-lg border-[1px]"
                />
              </Link>
            ))}
          </div>
        </div>

        <form
          className="flex flex-col gap-y-4 md:gap-y-5 md:w-1/2 px-2 md:px-5 lg:px-10 xl:px-5 py-2 md:py-10"
          action=""
          ref={form}
          onSubmit={sendEmail}
        >
          <motion.div
            className="flex flex-col gap-y-1 sm:gap-y-2 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <label htmlFor="firstname" className="font-medium text-base">
              Full Name
            </label>
            <input
              id="firstname"
              name="firstname"
              required
              type="text"
              className="bg-transparent  font-thin outline-none border-b-[1px] p-1 w-full"
            />
          </motion.div>

          <motion.div
            className="flex flex-col gap-y-1 sm:gap-y-2 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <label htmlFor="number" className="font-medium text-base">
              Phone Number
            </label>
            <input
              name="number"
              required
              id="number"
              type="number"
              className="bg-transparent font-thin outline-none border-b-[1px] p-1 w-full"
            />
          </motion.div>

          <motion.div
            className="flex flex-col gap-y-1 sm:gap-y-2 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <label htmlFor="service" className="font-medium text-base">
              Select Service
            </label>
            <select
              id="service"
              name="service"
              required
              className="bg-white/5 font-thin outline-none border-b-[1px] p-1 w-full text-white  rounded-md"
              defaultValue=""
            >
              <option
                value=""
                disabled
                hidden
                className="text-gray-400 bg-black"
              >
                Enquiry on
              </option>
              <option value="Website Development"  className="text-black">Web Development</option>
              <option value="App Development"  className="text-black">App Development</option>
              <option
                value="Digital Marketing"
                className="text-black"
              >
                Digital Marketing
              </option>
              <option value="Branding"  className="text-black">Branding</option>
              <option value="E-commerce"  className="text-black">E-commerce</option>
              <option value="Other"  className="text-black">Other</option>
            </select>
          </motion.div>

          <div className="flex items-end justify-end mt-2 sm:mt-5 md:mt-10">
            <button
              disabled={loading}
              type="submit"
              className="p-[1px] rounded-[40px] bg-gradient-to-r from-[#FFC841] to-[#4CF8CD] w-fit h-fit"
            >
              <span className="flex items-center gap-x-5 border-[5px] border-[#0C3535]   rounded-[40px] bg-gradient-to-r from-[#1B6153] to-[#816C37] px-4 md:px-6 py-1 sm:py-2 md:py-3 text-base md:text-xl font-semibold text-white">
                {loading ? "Connecting..." : "Connect"}
                <LuSend className="text-[20px] sm:text-[30px]" />
              </span>
            </button>
          </div>
        </form>

        <Image
          alt="sendletter"
          src="/vectors/sendletter1.png"
          width={260}
          height={130}
          className="hidden lg:block absolute bottom-1/2 lg:-bottom-10 right-56 -z-10"
        />
      </div>
    </section>
  );
};

export default ContactPopup;
