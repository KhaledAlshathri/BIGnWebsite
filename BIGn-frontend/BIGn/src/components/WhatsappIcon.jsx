import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappIcon = () => {
  return (
    <a
      href="https://wa.me/+966557233087" 
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Call Center"
      className="fixed right-4 bottom-4 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
    >
      <FaWhatsapp className="text-white h-auto sm:w-[30px] w-[24px]" />
    </a>
  );
};

export default WhatsappIcon;
