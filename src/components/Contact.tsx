"use client";
import React, { useRef, useState } from "react";
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
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

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
          toast.success("Email sent");
          form.current?.reset();
        },
        (error) => {
          setLoading(false);
          console.log("FAILED...", error.text);
          toast.warning("Failed to send");
          form.current?.reset();
        }
      );
  };
  return (
    <section id="contact" className="relative pb-20 md:pb-40 pt-10 text-white bg-black mx-auto z-0">
      {/* bubbles */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          x: [0, 300, 0],
          y: [0, -100, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="bubblebg w-32 h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-full absolute top-40 lg:top-1/4 left-10 lg:left-56 blur-[0px] -z-10"
      />
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          x: [0, -200, 0],
          y: [0, 100, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="bubblebg w-40 h-40 xl:w-80 xl:h-80 rounded-full absolute top-1/4 right-10"
      />
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          x: [0, 150, 0],
          y: [0, -100, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="bubblebg w-40 h-40 lg:w-48 lg:h-48 xl:w-80 xl:h-80 rounded-full absolute bottom-1/3 md:bottom-1/2 lg:bottom-20 left-10"
      />
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          x: [0, 150, 0],
          y: [0, 100, 0],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="bubblebg w-20 h-20 lg:w-32 lg:h-32 rounded-full absolute bottom-1/4 left-1/2"
      />
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          x: [0, 100, 0],
          y: [0, 150, 0],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="bubblebg w-10 h-10 lg:w-16 lg:h-16 rounded-full absolute bottom-52 right-32"
      />

      {/* actual content */}
      <div className="">
        <h1 className="text-center text-[30px] md:text-[50px] lg:text-[80px] xl:text-[150px] font-semibold">
          Contact Us
        </h1>
        <p className="text-[18px] md:text-[25px] xl:text-[37px] text-center px-5">
          Got a question about web, design, or marketing? Let’s talk!
        </p>
      </div>

      <div className="backdrop-blur-[10px] bg-white/15 flex flex-col-reverse lg:flex-row justify-between w-11/12 lg::w-10/12 mx-auto mt-10 rounded-[20px] md:rounded-[40px] border-2 p-2">
        <div className="backdrop-blur-0 flex flex-col gap-y-14 xl:gap-y-[70px] items-start w-full lg:w-1/2 xl:w-2/5 px-5 lg:px-10 py-10 md:py-20 rounded-[15px] md:rounded-[30px]">
          <div className="flex gap-x-3 items-center">
            <MdEmail size={28} />
            <span className="text-lg">info@origanetworks.com</span>
          </div>

          <div className="flex items-start gap-x-3">
            <FaLocationDot size={40} />
            <span className="text-lg">
              Global Buisness Centre, Swapnil Enclave, Shanmugham Road
              Ernakulam, Kerala 682031 India
            </span>
          </div>

          <div className="flex items-start gap-x-3">
            <FaLocationDot size={28} />
            <span className="text-lg">
             Alis Tower,Melattur, Malappuram, Kerala 679326 India
            </span>
          </div>

          <div className="flex items-start gap-x-3">
            <LuPhone size={28} />
            <div className="flex flex-col gap-y-2">
              <Link
                href="tel:+918129164869"
                className="text-lg hover:translate-x-0.5 duration-200"
                target="_blank"
              >
                +91 8129164869
              </Link>
              <Link
                href="tel:+918078154338"
                className="text-lg hover:translate-x-0.5 duration-200"
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
                  size={40}
                  className="p-2 backdrop-blur-[50px] bg-white/20 rounded-lg border-[1px]"
                />
              </Link>
            ))}
          </div>
        </div>
        <form
          className="flex flex-col gap-y-5 lg:gap-y-9 w-full lg:w-1/2 xl:w-3/5 px-2 md:px-5 lg:px-10 xl:px-20 py-10"
          action=""
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex gap-x-10 w-full">
            <motion.div
              className="flex flex-col gap-y-2 w-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <label htmlFor="firstname" className="font-medium text-base">
                First Name
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
              className="flex flex-col gap-y-2 w-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <label htmlFor="lastname" className="font-medium text-base">
                Last Name
              </label>
              <input
                id="lastname"
                name="lastname"
                type="text"
                className="bg-transparent font-thin outline-none border-b-[1px] p-1 w-full"
              />
            </motion.div>
          </div>

          <div className="flex gap-x-10 w-full">
            <motion.div
              className="flex flex-col gap-y-2 w-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <label htmlFor="email" className="font-medium text-base">
                Email
              </label>
              <input
                required
                name="email"
                id="email"
                type="email"
                className="bg-transparent font-thin outline-none border-b-[1px] p-1 w-full"
              />
            </motion.div>
            <motion.div
              className="flex flex-col gap-y-2 w-full"
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
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-base">Select Subject?</h4>
            <div className="pt-5 flex flex-col md:flex-row gap-x-8">
              <div className="flex flex-col xl:flex-row gap-y-2 gap-x-8">
                <div className="flex items-center gap-x-2">
                  <input
                    required
                    type="radio"
                    name="subject"
                    id="general"
                    className="w-4 h-4"
                  />
                  <label htmlFor="general" className="text-[15px]">
                    General Enquiry
                  </label>
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    type="radio"
                    name="subject"
                    id="web-development"
                    className="w-4 h-4"
                  />
                  <label htmlFor="web-development" className="text-[15px]">
                    web development
                  </label>
                </div>
              </div>
              <div className="flex flex-col xl:flex-row gap-y-2 gap-x-8">
                <div className="flex items-center gap-x-2">
                  <input
                    type="radio"
                    name="subject"
                    id="ui/ux"
                    className="w-4 h-4"
                  />
                  <label htmlFor="ui/ux" className="text-[15px]">
                    UI/UX
                  </label>
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    type="radio"
                    name="subject"
                    id="digital-marketing"
                    className="w-4 h-4"
                  />
                  <label htmlFor="digital-marketing" className="text-[15px]">
                    Digital Marketing
                  </label>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <label htmlFor="message" className="font-medium text-base">
              Message
            </label>
            <textarea
              id="message"
              rows={3}
              name="message"
              required
              placeholder="Write your message here..."
              className="bg-transparent font-thin outline-none border-b-[1px] p-1 w-full resize-none"
            />
          </motion.div>

          <div className="flex items-center justify-center md:justify-end md:pr-10">
            <button
              disabled={loading}
              type="submit"
              className="p-[1px] rounded-[40px] bg-gradient-to-r from-[#FFC841] to-[#4CF8CD] w-fit h-fit"
            >
              <span className="flex items-center gap-x-5 border-[5px] border-[#0C3535]   rounded-[40px] bg-gradient-to-r from-[#1B6153] to-[#816C37] px-3 md:px-6 py-2 md:py-3 text-base md:text-xl font-semibold text-white">
                {loading ? "Sending..." : "Send"}
                <LuSend size={30} />
              </span>
            </button>
          </div>
        </form>

        <Image
          alt="sendletter"
          src="/sendletter1.png"
          width={260}
          height={130}
          className="hidden lg:block absolute bottom-1/2 lg:-bottom-10 right-56 -z-10"
        />
      </div>
    </section>
  );
};

export default Contact;
