import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiLogIn } from "react-icons/fi";

const ActivityContent = () => {
  const cards = [
    {
      tag: "برنامج مُلم",
      text: (
        <>
          <strong>ودك تطبق مهاراتك في سوق العمل بس مو عارف كيف؟</strong> مُلم وفر
          هذي الفرصة ادخل وجرب مهاراتك
        </>
      ),
      examples: [
        "تبي تطبق مهاراتك؟",
        "تبي خبرة عملية؟",
        "تبي تعمل في فريق؟",
        "تبي تجربة جديدة؟",
      ],
      image: "/images/mulm-logo.png",
      logoBackground: "/images/Mulem.png",
      backgroundImage: "/images/dummy1.jpg",
      buttonText: "سجل الآن!",
      buttonColor: "orange-700",
    },
    {
      tag: "الملتقى التقني",
      text: (
        <>
          <strong>ودك تشوف تقاطعات التقنية مع باقي التخصصات؟</strong> الملتقى التقني
          راح يوفر لك هذا الشيء! سجل الآن واحضر وتثقف
        </>
      ),
      examples: [
        "انضم للملتقى التقني!",
        "تعرف على التقنية أكثر!",
        "وسع مداركك التقنية!",
        "شاركنا المعرفة!",
      ],
      image: "/images/tech-meeting-logo.png",
      logoBackground: "/images/Tech-meeting.png",
      backgroundImage: "/images/dummy2.jpg",
      buttonText: "سجل الآن!",
      buttonColor: "cyan-400",
    },
    {
      tag: "مسابقات الBIG O's",
      text: (
        <>
          <strong>جاهز تتعلم؟</strong> سجل معنا في تدريب الBig Os الآن وش تنتظر!
        </>
      ),
      examples: ["تبي تتعلم؟", "تبي تطور مهاراتك؟", "تبي تتدرب؟", "تبي تجرب؟"],
      image: "/images/big-o-logo.png",
      logoBackground: "/images/BIG-Os.png",
      backgroundImage: "/images/dummy3.jpg",
      buttonText: "سجل الآن!",
      buttonColor: "violet-600",
    },
  ];

  return (
    <div className="px-4 py-12 text-zinc-50">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.05,
          }}
          className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4 my-20 py-10"
        >
          {/* Title Block */}
          <Block className="col-span-12 p-5 flex items-center justify-center bg-zinc-800">
            <h2 className="text-2xl sm:text-3xl font-bold text-center">
              {card.tag}
            </h2>
          </Block>

          {/* Background Image Block */}
          <Block className="col-span-7 sm:col-span-8 bg-zinc-800 relative overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center absolute inset-0"
              style={{ backgroundImage: `url(${card.backgroundImage})` }}
            ></div>
          </Block>

          {/* Logo Block with Animation */}
          <Block
            className="col-span-5 sm:col-span-4 bg-zinc-800 aspect-square relative overflow-hidden"
            whileHover={{
              rotate: "-2.5deg",
              scale: 1.1,
            }}
          >
            <div
              className="w-full h-full bg-cover bg-center absolute inset-0"
              style={{ backgroundImage: `url(${card.logoBackground})` }}
            ></div>
          </Block>

          {/* Text with Typing Animation Block */}
          <Block className="col-span-12 bg-zinc-800 h-[250px] relative">
            <p className="text-base sm:text-lg leading-relaxed mb-4">
              {card.text}
            </p>
            <Typewrite examples={card.examples} />
            <div className="absolute bottom-4 right-4">
              <RoundedSlideButton
                buttonText={card.buttonText}
                buttonColor={card.buttonColor}
              />
            </div>
          </Block>
        </motion.div>
      ))}
    </div>
  );
};

const Block = ({ className, children, ...rest }) => {
  return (
    <motion.div
      {...rest}
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
        "rounded-lg border border-zinc-700 bg-zinc-800 p-4",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

const LETTER_DELAY = 0.05;
const SWAP_DELAY_IN_MS = 5500;

const Typewrite = ({ examples }) => {
  const [exampleIndex, setExampleIndex] = useState(0);
  const [visibleLength, setVisibleLength] = useState(0);

  useEffect(() => {
    const text = examples[exampleIndex];
    setVisibleLength(0);

    const interval = setInterval(() => {
      setVisibleLength((len) => {
        if (len >= text.length) {
          clearInterval(interval);
          return len;
        }
        return len + 1;
      });
    }, LETTER_DELAY * 1000);

    const timeout = setTimeout(() => {
      setExampleIndex((prevIndex) => (prevIndex + 1) % examples.length);
    }, SWAP_DELAY_IN_MS);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [exampleIndex, examples]);

  return (
    <p className="text-sm sm:text-base uppercase">
      <span className="inline-block w-2 h-2 bg-current ml-3"></span>
      <span style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
        {examples[exampleIndex].slice(0, visibleLength)}
      </span>
    </p>
  );
};

const RoundedSlideButton = ({ buttonText , buttonColor}) => {
  return (
    <button
      className={`
        relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
        border-${buttonColor} px-4 py-2 font-semibold
        uppercase text-${buttonColor} transition-all duration-500
        
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-${buttonColor}
        before:transition-transform before:duration-1000
        before:content-[""]

        hover:scale-105 hover:text-neutral-900
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95`}
    >
      <FiLogIn />
      <span>{buttonText}</span>
    </button>
  );
};



export default ActivityContent;
