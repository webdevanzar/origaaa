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
      className="animate-bounce fixed bottom-7 md:bottom-5 cursor-pointer w-12 h-12 md:w-16 md:h-16 bg-green-500 group z-50 rounded-full right-5 flex items-center justify-center shadow-xl"
    >
      <FaWhatsapp
        size={32}
        className="group-hover:scale-125 transition-all duration-300 text-white"
      />
    </div>
  );
};

export default Whatsapp;
