import React from "react";
import { twMerge } from "tailwind-merge";
import { MotionConfig, motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="bg-white px-8 py-24">
      <div className="mx-auto w-3/4">
        <Card
          title="من نحن "
          subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem doloremque vitae minima."
        />
      </div>
    </section>
  );
};

const Card = ({ title, subtitle, className }) => {
  return (
    <MotionConfig
      transition={{
        type: "spring",
        bounce: 0.5,
      }}
    >
      <motion.div
        whileHover="hovered"
        className={twMerge(
          "group w-full border-2 border-black bg-[#360E91]",
          className
        )}
      >
        <motion.div
          initial={{ x: 0, y: 0 }}
          variants={{
            hovered: { x: -8, y: -8 },
          }}
          className={twMerge(
            "-m-0.5 border-2 border-black bg-[#360E91]",
            className
          )}
        >
          <motion.div
            initial={{ x: 0, y: 0 }}
            variants={{
              hovered: { x: -8, y: -8 },
            }}
            className={twMerge(
              "relative -m-0.5 flex h-72 flex-col justify-between overflow-hidden border-2 border-black bg-[#360E91] p-8",
              className
            )}
          >
            <p className="flex items-center text-2xl font-medium uppercase text-white">
              <span className="-ml-8 mr-2 text-white opacity-0 transition-all duration-300 ease-in-out group-hover:ml-0 group-hover:opacity-100">
                •
              </span>
              {title}
            </p>
            <div className="flex-1 flex items-center">
              <p className="text-white text-lg">
                {subtitle}
              </p>
            </div>

            <motion.svg
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
              style={{
                top: "0",
                right: "0",
                x: "50%",
                y: "-50%",
                scale: 0.75,
              }}
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
                  className="fill-white text-2xl font-black uppercase opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
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
