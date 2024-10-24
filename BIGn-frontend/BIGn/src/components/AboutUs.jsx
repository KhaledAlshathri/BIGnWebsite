import React from "react";
import { twMerge } from "tailwind-merge";
import { MotionConfig, motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="bg-white px-10 py-12 md:px-8 md:py-24">
      <div className="mx-auto w-full max-w-5xl flex justify-center">
        <Card
          title="من نحن"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem doloremque vitae minima."
        />
      </div>
    </section>
  );
};

const Card = ({ title, subtitle, className }) => {
  return (
    <MotionConfig transition={{ type: "spring", bounce: 0.5 }}>
      <motion.div
        whileHover="hovered"
        className={twMerge(
          "group w-[300px] h-[300px] sm:w-full sm:h-[200px] border-2 border-black bg-[#1AC3D0]",
          className
        )}
      >
        <motion.div
          initial={{ x: 0, y: 0 }}
          variants={{ hovered: { x: -8, y: -8 } }}
          className={twMerge(
            "-m-0.5 border-2 w-[300px] h-[300px] sm:w-full sm:h-[200px] border-black bg-[#1AC3D0] h-full",
            className
          )}
        >
          <motion.div
            initial={{ x: 0, y: 0 }}
            variants={{ hovered: { x: -8, y: -8 } }}
            className={twMerge(
              "relative -m-0.5  w-[300px] h-[300px] sm:w-full sm:h-[200px] flex flex-col justify-between overflow-hidden border-2 border-black bg-[#1AC3D0] p-4 sm:p-8 h-full",
              className
            )}
          >
            <p className="flex items-center text-xl pr-3 sm:pr-0 sm:text-2xl font-medium uppercase text-white">
              <span className="-ml-8 mr-2 text-white opacity-0 transition-all duration-300 ease-in-out group-hover:ml-0 group-hover:opacity-100">
                •
              </span>
              {title}
            </p>
            <div className="flex flex-1 items-center">
              <p className="text-base sm:text-lg text-white">{subtitle}</p>
            </div>

            <motion.svg
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ top: "0", right: "0", x: "50%", y: "-50%", scale: 0.75 }}
              width="200"
              height="200"
              className="pointer-events-none absolute z-10 rounded-full"
            >
              <path
                id="circlePath"
                d="M100,100 m-100,0 a100,100 0 1,0 200,0 a100,100 0 1,0 -200,0"
                fill="none"
              />
              <text>
                <textPath
                  href="#circlePath"
                  fill="white"
                  className="fill-white text-base sm:text-2xl font-black uppercase opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                >
                  LEARN MORE • LEARN MORE • LEARN MORE • LEARN MORE •
                </textPath>
              </text>
            </motion.svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
};

export default AboutUs;
