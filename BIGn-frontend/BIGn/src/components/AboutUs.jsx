import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const AboutUs = () => {
  return (
    <div className="px-4 py-12 text-zinc-50">
      <Logo />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
      </motion.div>
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-[#360E91] p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <div className="flex items-center justify-center h-full">
      <h2 className="text-2xl sm:text-4xl font-medium leading-tight flex items-center">
           ماهي مبادرة
        <span className="mr-4 ">
          <img
          className="AboutUsLogo"
            src="./images/BIGn logo white.png"
            alt="avatar"
            style={{ height: '35px' }}
          />
        </span>
      </h2>
    </div>
  </Block>
);

const SocialsBlock = () => (
  <>
    {/* X (Twitter) */}
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 md:col-span-3 bg-[#1AC3D0]"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <XIcon />
      </a>
    </Block>
    {/* TikTok */}
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 md:col-span-3 bg-[#FF3C10]"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiTiktok />
      </a>
    </Block>
    {/* LinkedIn */}
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 md:col-span-3 bg-[#FFD900]"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <FaLinkedinIn />
      </a>
    </Block>
    {/* Instagram */}
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 md:col-span-3 bg-[#5A5DD9]"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <FaEnvelope />
      </a>
    </Block>
  </>
);

const XIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 72 72"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M61.3625 6.52832H49.8187L36.1888 29.6389L22.5589 6.52832H10.9258L30.9184 36.2094L9.96777 68.6111H21.5115L36.1888 44.7698L50.8662 68.6111H62.5L41.5494 36.2094L61.3625 6.52832Z" />
  </svg>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-xl md:text-3xl leading-snug">
    <p>
      My passion is building cool stuff.{" "}
      <span className="text-zinc-400">
        I build primarily with React, Tailwind CSS, and Framer Motion. I love
        this stack so much that I even built a website about it. I've made over
        a hundred videos on the subject across YouTube and TikTok.
      </span>
    </p>
  </Block>
);

const Logo = () => {
  return (
    <svg
      width="40"
      height="auto"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-12 fill-zinc-50"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};

export default AboutUs;
