import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
} from "react-icons/fa6";

const Explore = [
  {
    id: "1",
    name: "Our projects",
    link: "#projects",
  },
  {
    id: "2",
    name: "Blog",
    link: "#blog",
  },
  {
    id: "3",
    name: "What we do",
    link: "#partners",
  },
];

const Menu = [
  {
    id: "1",
    name: "Home",
    link: "#home",
  },
  {
    id: "2",
    name: "About",
    link: "#about",
  },
  {
    id: "3",
    name: "Services",
    link: "#services",
  },
  {
    id: "4",
    name: "Expertise",
    link: "#expertise",
  },
  {
    id: "5",
    name: "Works",
    link: "#works",
  },
];

const Icons = [
  {
    id: "facebook",
    link: "https://www.facebook.com/profile.php?id=61561199776447#",
    src: FaFacebookF,
  },
  {
    id: "linkedin",
    link: "https://www.linkedin.com/company/origa-networks/",
    src: FaLinkedin,
  },
  {
    id: "instagram",
    link: "https://www.instagram.com/origanetworks/",
    src: FaInstagram,
  },
];

const Footer = () => {
  return (
    <footer className="relative radial-bg px-5 2xl:px-20 pt-5 md:pt-16 pb-5 text-white flex flex-col gap-y-10">
      <Image
        src="/vectors/logovector.png"
        width={400}
        height={400}
        alt="logo small"
        className="absolute opacity-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <div className="flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row justify-between items-start">
        <div className="w-full lg:w-1/2 flex flex-col gap-y-5 md:gap-y-0 md:flex-row justify-start items-start gap-x-20 lg:gap-x-0 lg:justify-between">
          <div className="flex w-auto md:w-1/3">
            <Image src={"/origalogo.png"} alt="logo" width={150} height={150} />
          </div>

          <div className="flex w-auto flex-row-reverse md:flex-row  md:w-2/3 justify-end gap-x-20">
            <div>
              <h2 className="text-[23px] font-medium">Explore</h2>
              <ul className="flex flex-col gap-y-3 mt-5">
                {Explore.map((explore) => (
                  <li key={explore.id}>
                    <Link
                      href={explore.link}
                      className="text-[19px] font-normal"
                    >
                      {explore.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:pr-20 ">
              <h2 className="text-[23px] font-medium">Menu</h2>
              <ul className="flex flex-col gap-y-3 mt-5">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <Link href={menu.link} className="text-[19px] font-normal">
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col md:flex-row justify-between items-start">
          <div className="md:w-[55%] flex flex-col gap-y-3">
            <h2 className="text-[23px] font-medium">OFFICE LOCATION</h2>
            <div className="flex items-start gap-x-3 mt-4">
              <FaLocationDot size={28} />
              <span className="text-lg">
                Global Buisness Centre, Swapnil Enclave, Shanmugham Road
                Ernakulam, Kerala 682031 India
              </span>
            </div>
            <div className="flex items-start gap-x-3">
              <FaLocationDot size={28} />
              <span className="text-lg">
                Global Buisness Centre, Swapnil Enclave, Shanmugham Road
                Ernakulam, Kerala 682031 India
              </span>
            </div>
          </div>
          <div className="md:w-[45%] flex justify-end gap-x-2 items-center pt-12">
            {Icons.map((Icon) => (
              <Link
                key={Icon.id}
                href={Icon.link}
                target="_blank"
                className="cursor-pointer hover:-translate-y-0.5 transition-all duration-200 p-3"
              >
                <Icon.src size={44} className="border-[1px] rounded-full p-3" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-start gap-x-10 items-center text-[19px] font-normal">
        <Link href="#terms">Terms</Link>
        <Link href="#Privacy">Privacy</Link>
        <Link href="#Cookies">Cookies</Link>
      </div>

      <p className="text-base font-normal text-center">
        © 2025 Origanetworks All Rights Reserved.{" "}
      </p>
    </footer>
  );
};

export default Footer;
