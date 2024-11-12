import React from "react";

const CARD_WIDTH = 350;
const CARD_HEIGHT = 350;

const Principles = () => {
  const displayItems = items.slice(0, 3);

  return (
    <section className=" p-4 pb-44">
      <div className="mx-auto max-w-6xl ">
        <p className="mb-10 mt-16 text-4xl sm:text-5xl text-center font-semibold">
          أهدافنا
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

const Card = ({ url, img, description }) => {
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
       <div className="absolute inset-0 z-20 flex flex-col items-center justify-start rounded-2xl bg-gradient-to-b from-black/90 via-black/60 to-black/0 px-6 pt-16 text-white transition-[backdrop-filter] hover:backdrop-blur-sm">
        <img src={img} style={{ height: 100 }} alt="Goal Icon" />
        <p className="mt-4 text-lg text-center text-slate-300">{description}</p>
      </div>
    </div>
  );
};

export default Principles;

const items = [
  {
    id: 1,
    url: "/images/Principle1.jpg",
    img: "/images/goal1.png",
    description:
      "بناء مجتمع واعٍ تقنياً مُتمكن من الأدوات التقنية المتاحة.",
  },
  {
    id: 2,
    url: "/images/Principle2.jpg",
    img: "/images/goal2.png",
    description:
      "تقديم برامج تدريبية وتطويرية لتعزيز ثقافة البرمجة التنافسية في المجتمع الطلابي.",
  },
  {
    id: 3,
    url: "/images/Principle3.jpg",
    img: "/images/goal3.png",
    description:
      "سد الفجوات بين الواقع المهني والأكاديمي في المجال التقني.",
  },
];
