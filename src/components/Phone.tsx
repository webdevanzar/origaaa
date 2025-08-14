"use client";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const ContactButtons = () => {
  const redirectToWhatsApp = () => {
    const phoneNumber = "+918129164869";
    const message = "Hello Origa!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.location.href = whatsappUrl;
  };

  const callPhone = () => {
    window.location.href = "tel:+918129164869";
  };

  return (
    <div className="fixed bottom-7 right-5 flex flex-col items-center gap-3 z-50">
      {/* Phone Button */}
      <div
        onClick={callPhone}
        className="cursor-pointer w-12 h-12 bg-green-700 hover:scale-110 rounded-full flex items-center justify-center shadow-xl transition-all duration-300"
      >
        <FaPhone size={26} className="text-white" />
      </div>

      {/* WhatsApp Button */}
      <div
        onClick={redirectToWhatsApp}
        className="cursor-pointer w-12 h-12 bg-green-500 hover:scale-110 rounded-full flex items-center justify-center shadow-xl transition-all duration-300"
      >
        <FaWhatsapp size={28} className="text-white" />
      </div>
    </div>
  );
};

export default ContactButtons;
