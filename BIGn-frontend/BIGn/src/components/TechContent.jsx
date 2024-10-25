import { motion } from "framer-motion";

const TechContent = () => {
  return (
    <section className="px-4 py-12">
      <div className="w-full px-8 py-12 md:py-20 flex flex-col items-center">
        <h3 className="text-center text-5xl md:text-5xl max-w-xl font-semibold">
          النشرات التقنية
        </h3>
      </div>
      <div className="mx-auto flex w-fit flex-wrap justify-center gap-4">
        <Card
          Title="الذكاء الاصطناعي"
          description="For individuals who want to understand why their landing pages aren't working"
          cta="المزيد"
          background="bg-[#5A5DD9]"
          BGComponent={BackgroundA}
        />
        <Card
          Title="علم البيانات"
          description="For mid-sized companies who are serious about boosting their revenue by 30%"
          cta="المزيد"
          background="bg-[#FF3C10]"
          BGComponent={BackgroundB}
        />
        <Card
          Title="التكنولوجيا المالية"
          description="For large enterprises looking to outsource their conversion rate optimization"
          cta="المزيد"
          background="bg-[#1AC3D0]"
          BGComponent={BackgroundC}
        />
      </div>
    </section>
  );
};

const Card = ({
  Title,
  description,
  cta,
  background,
  BGComponent,
}) => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className={`relative h-96 w-80 shrink-0 overflow-hidden rounded-xl p-8 ${background}`}
    >
      <div className="relative z-10 text-white">
        
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-2 block origin-top-left font-semibold text-2xl font-black leading-[1.2]"
        >
          {Title}
          
        </motion.span>
        <p className="text-lg">{description}</p>
      </div>
      <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-semibold font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
        {cta}
      </button>
      <BGComponent />
    </motion.div>
  );
};

const BackgroundA = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      className="absolute inset-0 z-0"
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="#262626"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="#262626"
      />
    </motion.svg>
  );
};

const BackgroundB = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      className="absolute inset-0 z-0"
    >
      <motion.rect
        x="14"
        width="153"
        height="153"
        rx="15"
        fill="#262626"
        variants={{
          hover: {
            y: 219,
            rotate: "90deg",
            scaleX: 2,
          },
        }}
        style={{ y: 12 }}
        transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
      />
      <motion.rect
        x="155"
        width="153"
        height="153"
        rx="15"
        fill="#262626"
        variants={{
          hover: {
            y: 12,
            rotate: "90deg",
            scaleX: 2,
          },
        }}
        style={{ y: 219 }}
        transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
      />
    </motion.svg>
  );
};

const BackgroundC = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={{
        hover: {
          scale: 1.25,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      className="absolute inset-0 z-0"
    >
      <motion.path
        variants={{
          hover: {
            y: -50,
          },
        }}
        transition={{ delay: 0.3, duration: 1, ease: "backInOut" }}
        d="M148.893 157.531C154.751 151.673 164.249 151.673 170.107 157.531L267.393 254.818C273.251 260.676 273.251 270.173 267.393 276.031L218.75 324.674C186.027 357.397 132.973 357.397 100.25 324.674L51.6068 276.031C45.7489 270.173 45.7489 260.676 51.6068 254.818L148.893 157.531Z"
        fill="#262626"
      />
      <motion.path
        variants={{
          hover: {
            y: -50,
          },
        }}
        transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
        d="M148.893 99.069C154.751 93.2111 164.249 93.2111 170.107 99.069L267.393 196.356C273.251 202.213 273.251 211.711 267.393 217.569L218.75 266.212C186.027 298.935 132.973 298.935 100.25 266.212L51.6068 217.569C45.7489 211.711 45.7489 202.213 51.6068 196.356L148.893 99.069Z"
        fill="#262626"
      />
      <motion.path
        variants={{
          hover: {
            y: -50,
          },
        }}
        transition={{ delay: 0.1, duration: 1, ease: "backInOut" }}
        d="M148.893 40.6066C154.751 34.7487 164.249 34.7487 170.107 40.6066L267.393 137.893C273.251 143.751 273.251 153.249 267.393 159.106L218.75 207.75C186.027 240.473 132.973 240.473 100.25 207.75L51.6068 159.106C45.7489 153.249 45.7489 143.751 51.6068 137.893L148.893 40.6066Z"
        fill="#262626"
      />
    </motion.svg>
  );
};

export default TechContent;
