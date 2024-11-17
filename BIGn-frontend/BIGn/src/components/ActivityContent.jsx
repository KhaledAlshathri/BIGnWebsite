import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiLogIn, FiAlertCircle } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

const ActivityContent = () => {
  const [activeModal, setActiveModal] = useState(null); // Track which modal is open
  const navigate = useNavigate(); 

  const cards = [
    {
      id: 1,
      tag: "ملتقى BIG n التقني ",
      text: (
        <>
          <strong>ماهو ملتقى Big n التقني؟</strong> تشكل التقنية عنصرًا أساسيًا في تطور التخصصات والأعمال، حيث نتيح لكم فرصة التعرف على أهم التقنيات الحديثة التي تسهم في تسريع عجلة التنمية والتطور في المجالات البيئية، العملية، والشخصية.
        </>
      ),
      examples: [
        "انضم للملتقى التقني!",
        "تعرف على التقنية أكثر!",
        "وسع مداركك التقنية!",
        "شاركنا المعرفة!",
      ],
      logoBackground: "/videos/Multaqa-logo.mp4",
      backgroundImage: "/images/Multaqa-pic.png",
      buttonText: "سجل الآن!",
      buttonColor: "cyan-400",
      message:
        "خلك قريب وتابعنا على مواقع التواصل الاجتماعي لتعرف عن أكثر الملتقى التقني!",
      activityOpen: true, // Activity is open
      activityLink: "/Multaqa", // Links to Multaqa Page when the activity is open
    },
    {
      id: 2,
      tag: "برنامج مُلم",
      text: (
        <>
          <strong>برنامج مُلم</strong> هو برنامج يهدف إلى تأهيل الطالب لسوق العمل وسد الفجوات المهنية بين خريجي الجامعات والواقع المهني عبر خلق شراكات استراتيجية تمكنهم من المتطلبات المهنية والشخصية والتقنية.
        </>
      ),
      examples: [
        "تبي تطبق مهاراتك؟",
        "تبي خبرة عملية؟",
        "تبي تعمل في فريق؟",
        "تبي تجربة جديدة؟",
      ],
      logoBackground: "/videos/Mulem-logo.mp4",
      backgroundImage: "/images/Mulem-pic.png",
      buttonText: "سجل الآن!",
      buttonColor: "orange-700",
      message:
        "خلك قريب وتابعنا على مواقع التواصل الاجتماعي لتعرف أكثر عن برنامج مُلم!",
      activityOpen: false, // Activity is closed
      activityLink: "/Mulm", // Links to Mulem Page when the activity is open
    },
    {
      id: 3,
      tag: "مسابقات BIG O's",
      text: (
        <>
          <strong>تعتمد مسابقة الBIG O's</strong> بشكل أساسي على مهارة حل المشكلات، حيث يواجه المتسابق فيها عدة مسائل متفاوتة الصعوبة ومتعددة المجالات (هندسية، رياضية...) قابلة للحل بأي لغة برمجية.  </>
      ),
      examples: ["تبي تتعلم؟", "تبي تطور مهاراتك؟", "تبي تتدرب؟", "تبي تجرب؟"],
      logoBackground: "/videos/BigO-logo.mp4",
      backgroundImage: "/images/BigO-pic.jpg",
      buttonText: "سجل الآن!",
      buttonColor: "violet-600",
      message:
        "خلك قريب وتابعنا على مواقع التواصل الاجتماعي لتعرف أكثر عن تدريب الBIG O's!",
      activityOpen: false, // Activity is closed
      activityLink: "/BigOs", // Links to BigOs Page when the activity is open
    },
  ];

  const handleButtonClick = (card) => {
    if (card.activityOpen) {
      navigate(card.activityLink); // Navigate to the activity page
    } else {
      setActiveModal(card.id); // Show the modal message
    }
  };

  return (
    <div className="px-4 py-12 text-zinc-50">
      {cards.map((card) => (
        <motion.div
          key={card.id}
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.05,
          }}
          className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4 my-20 py-10"
        >
          <Block className="col-span-12 p-5 flex items-center justify-center bg-[#360E91]">
            <h2 className="text-2xl sm:text-3xl font-bold text-center">
              {card.tag}
            </h2>
          </Block>

          <Block className="col-span-7 sm:col-span-8 bg-zinc-800 relative overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center absolute inset-0"
              style={{ backgroundImage: `url(${card.backgroundImage})` }}
            ></div>
          </Block>

          <Block
            className="col-span-5 sm:col-span-4 aspect-square relative overflow-hidden"
            whileHover={{
              rotate: "-2.5deg",
              scale: 1.1,
            }}
          >
            <video
              className="w-full h-full object-cover absolute inset-0"
              src={card.logoBackground}
              autoPlay
              muted
              playsInline
              onEnded={(e) => e.currentTarget.pause()} 
            />
          </Block>

          <Block className="col-span-12 bg-[#360E91] h-auto relative">
            <p className="text-base sm:text-lg leading-relaxed mb-4 mt-2">
              {card.text}
            </p>
            <Typewrite examples={card.examples} />
            <div className="pt-5">
              <RoundedSlideButton
                buttonText={card.buttonText}
                buttonColor={card.buttonColor}
                onClick={() => handleButtonClick(card)}
              />
            </div>
          </Block>
        </motion.div>
      ))}

      {cards.map((card) => (
        <DontHaveActivityNow
          key={card.id}
          isOpen={activeModal === card.id}
          setIsOpen={() => setActiveModal(null)}
          message={card.message}
        />
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

const RoundedSlideButton = ({ buttonText, buttonColor, onClick }) => {
  const colorClassMap = {
    "orange-700": "text-white border-white before:bg-white",
    "cyan-400": "text-white border-white before:bg-white",
    "violet-600": "text-white border-white before:bg-white",
  };

  const colorClasses = colorClassMap[buttonColor] || "";
  const inlineStyle = !colorClassMap[buttonColor]
    ? { color: buttonColor, borderColor: buttonColor }
    : {};

  return (
    <button
      onClick={onClick}
      className={`
        ${colorClasses}
        relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border px-4 py-2 font-semibold
        uppercase transition-all duration-500

        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%]
        before:transition-transform before:duration-1000
        before:content-[""]

        hover:scale-105 hover:text-neutral-900
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95
      `}
      style={inlineStyle}
    >
      <FiLogIn />
      <span>{buttonText}</span>
    </button>
  );
};

const DontHaveActivityNow = ({ isOpen, setIsOpen, message }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={setIsOpen}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                <FiAlertCircle />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                للأسف, الفعالية مابدأت
              </h3>
              <p className="text-center mb-6">{message}</p>
              <div className="flex gap-2">
                <button
                  onClick={setIsOpen}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  حسنًا
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ActivityContent;
