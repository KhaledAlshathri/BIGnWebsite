import { motion } from "framer-motion";
import React from "react";
import imageOne from "/images/Vision.png"; // Update with the path to your first image
import imageTwo from "/images/Message.png"; // Update with the path to your second image

const VisionAndMessage = () => {
  return (
    <div className="px-4 py-52 grid md:grid-cols-2 gap-8 mx-[15%]">
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
    <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-[#E8E7EB] p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-[#E8E7EB]/50">
      <div className="relative z-10 overflow-hidden rounded-[7px] bg-[#E8E7EB] p-8 transition-colors duration-500 group-hover:bg-[#E8E7EB]">
        <img
          src={imgSrc}
          alt="Card Icon"
          className=" z-10 top-5 right-5 h-14 w-14 "
        />

        <h4 className="mt-5 relative z-10 mb-4 w-full text-3xl font-bold text-slate-900">
          {title}
        </h4>
        <p className="relative z-10 text-slate-700">{text}</p>
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
