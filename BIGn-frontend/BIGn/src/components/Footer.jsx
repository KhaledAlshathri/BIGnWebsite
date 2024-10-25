import React from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
  return (
    <footer dir="rtl" className="bg-zinc-800 text-white py-8 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Social Media Icons */}
        <div className="flex space-x-4 space-x-reverse mb-4 md:mb-0">
          <a href="#" aria-label="X" className="hover:text-gray-400">
            <XIcon size={20} />
          </a>
          <a href="#" aria-label="تيك توك" className="hover:text-gray-400">
            <SiTiktok size={20} />
          </a>
          <a href="#" aria-label="إنستغرام" className="hover:text-gray-400">
            <FaInstagram size={20} />
          </a>
          <a href="#" aria-label="لينكدإن" className="hover:text-gray-400">
            <FaLinkedinIn size={20} />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row md:space-x-6 md:space-x-reverse text-center md:text-right mb-4 md:mb-0">
          <a href="/about" className="hover:text-gray-400 md:mr-6">
            من نحن
          </a>
          <a href="/services" className="hover:text-gray-400 md:mr-6">
            خدماتنا
          </a>
          <a href="/contact" className="hover:text-gray-400 md:mr-6">
            اتصل بنا
          </a>
          <a href="/privacy" className="hover:text-gray-400">
            سياسة الخصوصية
          </a>
        </div>

        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">
            <img
              src="./images/BIGn logo white.png"
              alt="Big n logo"
              style={{ height: "35px" }}
            />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8"></div>

      <div className="container mx-auto px-4 pt-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} جميع الحقوق محفوظة لBig n.
        </p>
      </div>
    </footer>
  );
};

const XIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 72 72"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M61.3625 6.52832H49.8187L36.1888 29.6389L22.5589 6.52832H10.9258L30.9184 36.2094L9.96777 68.6111H21.5115L36.1888 44.7698L50.8662 68.6111H62.5L41.5494 36.2094L61.3625 6.52832Z" />
  </svg>
);

export default Footer;
