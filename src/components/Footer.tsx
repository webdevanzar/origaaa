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
    link: "/#ourprojects",
  },
  {
    id: "2",
    name: "Blog",
    link: "/blogs",
  },
  {
    id: "3",
    name: "What we do",
    link: "/#whatwedo",
  },
];

const Menu = [
  {
    id: "1",
    name: "Home",
    link: "/",
  },
  {
    id: "2",
    name: "About",
    link: "/about",
  },
  {
    id: "3",
    name: "Services",
    link: "/services",
  },
  {
    id: "4",
    name: "Works",
    link: "#works",
  },
  {
    id: "5",
    name: "Career",
    link: "#career",
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
    <footer className="relative radial-bg px-5 2xl:px-20 pt-5 md:pt-16 pb-5 text-white flex flex-col gap-y-5 md:gap-y-10">
      <Image
        src="/vectors/logovector.png"
        width={400}
        height={400}
        alt="logo small"
        className="absolute opacity-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />

      <div className="flex flex-col gap-y-5 lg:gap-y-0 lg:flex-row justify-between items-start">
        <div className="w-full lg:w-1/2 flex flex-col gap-y-5 md:gap-y-0 md:flex-row justify-start items-start gap-x-20 lg:gap-x-0 lg:justify-between">
          <div className="flex w-full sm:justify-center md:w-1/3">
            <Image src={"/origalogo.png"} alt="logo" width={150} height={150} />
          </div>

          <div className="flex w-auto flex-row-reverse md:flex-row  md:w-2/3 justify-end gap-x-20">
            <div>
              <h2 className="text-[23px] font-medium">Explore</h2>
              <ul className="flex flex-col gap-y-2 mt-3">
                {Explore.map((explore) => (
                  <li key={explore.id}>
                    <Link
                      href={explore.link}
                      className="sm:text-[19px] font-normal cursor-pointer"
                    >
                      {explore.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:pr-20">
              <h2 className="text-[23px] font-medium">Menu</h2>
              <ul className="flex flex-col gap-y-2 mt-3">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <Link
                      href={menu.link}
                      className="sm:text-[19px] font-normal cursor-pointer"
                    >
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
            <div className="flex items-start gap-x-3">
              <FaLocationDot className="text-[24px]" />
              <span className="sm:text-lg">
                Alis Tower, Melattur, Malappuram, Kerala 679326, India. <br />
                <span>+91 80781 54338</span>
              </span>
            </div>
            <div className="flex items-start gap-x-3 mt-2 sm:mt-4">
              <FaLocationDot className="text-[28px] lg:text-[32px]" />
              <span className="sm:text-lg">
                Global Business Centre, Shanmugham Road, Ernakulam, Kerala
                682031 India. <br />
                <span> +91 81291 64869</span>
              </span>
            </div>
          </div>
          <div className="md:w-[45%] flex justify-end gap-x-2 items-center pt-5 md:pt-12">
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

      <div className="flex justify-center md:justify-start gap-x-20 sm:gap-x-10 items-center text-xs sm:text-[19px] font-normal">
        <Link href="#terms">Terms</Link>
        <Link href="#Privacy">Privacy</Link>
        <Link href="#Cookies">Cookies</Link>
      </div>

      <p className="text-xs sm:text-base text-center">
        © 2025 Origanetworks All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
