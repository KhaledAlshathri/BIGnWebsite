import React from "react";
import { FiArrowRight } from "react-icons/fi";

const ActivitiesCards = () => {
  return (
    <section className="overflow-hidden px-8 py-24">
      <div className="w-full px-8 py-12 md:py-20 flex flex-col items-center">
        <h3 className="text-center text-4xl md:text-5xl max-w-xl font-semibold">
          أنشطتنا
        </h3>
      </div>
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 sm:flex-row">
        <Card
          title="مسابقات الBIG O"
          href="/activities"
          bg={"/videos/BigO-card-logo.mp4"}
        />
        <Card
          title="الملتقى التقني"
          href="/activities"
          bg={"/videos/Multaqa-card-logo.mp4"}
        />
        <Card
          title="برنامج مُلم"
          href="/activities"
          bg={"/videos/Mulem-card-logo.mp4"}
        />
      </div>
    </section>
  );
};

const Card = ({ bg, title, href }) => {
  return (
    <a
      href={href}
      className="outline-card relative flex w-[300px] h-[300px] flex-col justify-end overflow-hidden rounded-lg bg-neutral-400 shadow-xl transition-transform duration-500 hover:scale-105 sm:w-full sm:h-auto sm:aspect-square"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={bg}
        autoPlay
        muted
        playsInline
        loop={false}
        onEnded={(e) => e.currentTarget.pause()}
      />
      <div className="pointer-events-none relative flex items-center justify-between bg-gradient-to-t from-black to-transparent p-4 pt-8 text-lg font-medium text-white sm:p-6 sm:text-xl">
        <h3>{title}</h3>
        <FiArrowRight />
      </div>
    </a>
  );
};

export default ActivitiesCards;
