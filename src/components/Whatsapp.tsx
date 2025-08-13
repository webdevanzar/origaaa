"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

const Whatsapp = () => {
  const redirectToWhatsApp = () => {
    const phoneNumber = "+918129164869";
    const message = "Hello Origa!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.location.href = whatsappUrl;
  };
  return (
    <div
      onClick={redirectToWhatsApp}
      className="fixed bottom-7 md:bottom-5 cursor-pointer w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-all duration-300 bg-green-500 group z-50 rounded-full right-5 flex items-center justify-center shadow-xl"
    >
      <FaWhatsapp
        size={28}
        className="text-white"
      />
    </div>
  );
};

export default Whatsapp;
