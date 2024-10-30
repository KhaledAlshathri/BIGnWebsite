import React from "react";

const CARD_WIDTH = 350;
const CARD_HEIGHT = 350;

const Principles = () => {
  const displayItems = items.slice(0, 3);

  return (
    <section className=" p-4">
      <div className="mx-auto max-w-6xl ">
        <p className="mb-10 mt-16 text-4xl sm:text-5xl text-center font-semibold">
          قيمنا
        </p>
        <div className="flex flex-wrap place-content-center gap-8">
          {displayItems.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ url, title, description }) => {
  return (
    <div
      className="relative shrink-0 cursor-pointer rounded-2xl bg-white shadow-md place-content-center transition-all hover:scale-[1.015] hover:shadow-xl"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-b from-black/90 via-black/60 to-black/0 p-6 text-white transition-[backdrop-filter] hover:backdrop-blur-sm">
       
        <p className="mb-3 mt-8 text-3xl text-center font-bold">{title}</p>
        <p className="text-lg  text-center text-slate-300">{description}</p>
      </div>
    </div>
  );
};

export default Principles;

const items = [
  {
    id: 1,
    url: "/images/Principle1.jpg",
    title: "Just feels right",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 2,
    url: "/images/Principle2.jpg",
    title: "Type in style",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 3,
    url: "/images/Principle3.jpg",
    title: "Looks like a win",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
];
