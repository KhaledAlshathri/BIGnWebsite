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
        href="https://x.com/bign_spp?s=21"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <img
        width="27"
        viewBox="0 0 72 72"
        fill="currentColor"
        src="../images/X logo.png"
        >
        </img>
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
        href="https://www.tiktok.com/@bign__spp?_t=8rBcnuxHtJq&_r=1"
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
        href="https://www.linkedin.com/company/bign-spp/"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <FaLinkedinIn />
      </a>
    </Block>
    {/* Email */}
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 md:col-span-3 bg-[#5A5DD9]"
    >
      <a
        href="mailto:Bign.ksu.spp@gmail.com"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <FaEnvelope />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-xl md:text-3xl leading-snug">
    <p>
      مبادرة Big n{" "}
      <span className="text-zinc-400">
      هي مبادرة طلابية تهدف الى تنمية وتطوير المهارات التقنية وتوسيع آفاق الطلاب عبر اقامة ،برامج تدريبية،ملتقيات تقنية ،مسابقات برميجة، لصناعة مجتمع تقني واعد.
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
