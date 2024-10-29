import { motion } from "framer-motion";
import React from "react";
import imageOne from "/images/Vision.png"; 
import imageTwo from "/images/Message.png"; 

const VisionAndMessage = () => {
  return (
    <div className="mx-auto grid max-w-4xl py-24 grid md:grid-cols-2 gap-x-28 gap-y-14 ">
      <ShimmerBorderCard
        imgSrc={imageOne}
        title="الرؤية"
        text="لهعسع ستارس اسلااتلاص هعسيلا سلا اسلاللاسىى تسلاي تتسل"
        borderColor="orange"
      />
      <ShimmerBorderCard
        imgSrc={imageTwo}
        title="الرسالة"
        text="لهعسع ستارس اسلااتلاص هعسيلا سلا اسلاللاسىى تسلاي تتسل"
        borderColor="purple"
      />
    </div>
  );
};

const ShimmerBorderCard = ({ imgSrc, title, text, borderColor }) => {
  const gradientColor =
    borderColor === "orange"
      ? "from-orange-600 via-orange-600/0 to-orange-600"
      : "from-purple-600 via-purple-600/0 to-purple-600";

  return (
    <div className="group shadow-xl border border-gray-300 relative mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-zinc-800 p-0.5 transition-all duration-500 hover:scale-[1.01]">
      <div className="relative z-10 overflow-hidden rounded-[7px] bg-zinc-800 p-8">
        <img
          src={imgSrc}
          alt="Card Icon"
          className="z-10 top-5 right-5 h-14 w-14"
        />
        <h4 className="mt-5 relative z-10 mb-4 w-full text-3xl font-bold text-white">
          {title}
        </h4>
        <p className="relative z-10 text-white">{text}</p>
      </div>

      <motion.div
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "360deg" }}
        style={{ scale: 1.75 }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "linear",
        }}
        className={`absolute inset-0 z-0 bg-gradient-to-br ${gradientColor} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />
    </div>
  );
};

export default VisionAndMessage;
