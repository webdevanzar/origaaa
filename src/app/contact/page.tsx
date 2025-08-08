import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const ContactPage = () => {
  return (
    <section className="overflow-x-hidden">
      <div className="w-full h-[30vh] md:h-[45vh] relative bg-black">
        <Image
          src={"/hero.jpg"}
          alt="image"
          fill
          className="object-cover bg-cover rounded-b-xl"
        />
        <div className="absolute inset-0 bg-black/40 rounded-b-xl z-0" />
        <Navbar />
      </div>
      <Contact />
    </section>
  );
};

export default ContactPage;
