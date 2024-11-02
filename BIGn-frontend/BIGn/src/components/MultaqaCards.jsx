import React from "react";
import { FiLogIn } from "react-icons/fi";

const MultaqaCards = () => {
  const displayItems = items.slice(0, 3);

  return (
    <section className="p-4 py-44">
      <div className="mx-auto max-w-6xl">
        <p className="mb-10  text-4xl sm:text-5xl text-center font-semibold">
          الملتقى والجلسات الحوارية
        </p>
        <div className="grid grid-cols-1 gap-20">
          {displayItems.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ url, title, description, buttonLink }) => {
  return (
    <div
      className="relative rounded-2xl bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl overflow-hidden"
      style={{ height: '350px' }}
    >
      <div
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${url})`,
        }}
      ></div>
      <div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-b from-black/90 via-black/60 to-black/0 p-6 text-white transition-[backdrop-filter] hover:backdrop-blur-sm flex flex-col justify-between">
        <div>
          <p className="mb-3 mt-8 text-3xl text-center font-bold">{title}</p>
          <p className="text-lg text-center text-slate-300">{description}</p>
        </div>
        <div className="absolute bottom-4 right-4">
          <a href={buttonLink} target="_blank" rel="noopener noreferrer">
            <RoundedSlideButton />
          </a>
        </div>
      </div>
    </div>
  );
};

const RoundedSlideButton = () => {
  return (
    <button
      className={`
        relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
        border-white px-4 py-2 font-semibold
        uppercase text-white transition-all duration-500
        
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-white
        before:transition-transform before:duration-1000
        before:content-[""]

        hover:scale-105 hover:text-neutral-900
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95`}
    >
      <FiLogIn />
      <span>سجل الآن</span>
    </button>
  );
};

export default MultaqaCards;

const items = [
  {
    id: 1,
    url: "/images/Principle1.jpg",
    title: "Just feels right",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
    buttonLink: "https://forms.gle/link1",
  },
  {
    id: 2,
    url: "/images/Principle2.jpg",
    title: "Type in style",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
    buttonLink: "https://forms.gle/link2",
  },
  {
    id: 3,
    url: "/images/Principle3.jpg",
    title: "Looks like a win",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
    buttonLink: "https://forms.gle/link3",
  },
];
