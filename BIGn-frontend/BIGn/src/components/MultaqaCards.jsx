import React from "react";
import { FiLogIn } from "react-icons/fi";

const MultaqaCards = () => {
  const displayItems = items.slice(0, 3);

  return (
    <section className="p-4 px-10 py-44">
      <div className="mx-auto ">
        <p className="mb-16 text-3xl sm:text-5xl text-center font-semibold">
          احجز تذكرتك واستمتع بالمعرض التقني!
        </p>
        <div className="flex flex-wrap justify-center gap-20">
          {displayItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center w-full max-w-xl"
            >
              <p className="mb-3 mt-8 sm:text-3xl text-2xl text-center font-bold">
                {item.title}
              </p>
              <Card url={item.url} />
              <div className="mt-4 flex justify-center">
                <a
                  href={item.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RoundedSlideButton />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ url }) => {
  return (
    <div
      className="relative rounded-2xl bg-white transition-all hover:scale-[1.030] hover:shadow-xl overflow-hidden w-full"
    >
      <div
        className="w-full aspect-square bg-cover bg-center"
        style={{
          backgroundImage: `url(${url})`,
        }}
      ></div>
    </div>
  );
};

const RoundedSlideButton = () => {
  return (
    <button
      className={`
        relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px]
        border-[#360E91] px-4 py-2 font-semibold uppercase text-[#360E91] transition-all duration-500
        before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5]
        before:rounded-full before:bg-[#360E91] before:transition-transform before:duration-1000 before:content-[""]
        hover:scale-105 hover:text-white hover:before:translate-x-0 hover:before:translate-y-0 active:scale-95`}
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
    url: "/images/multaqa-ticket.png",
    title: "تذكرة حضور الملتقى يوم الثلاثاء",
    buttonLink: "https://forms.gle/TDt9GhxdVHwdEA7W7",
  },
  {
    id: 2,
    url: "/images/workshop1-ticket.png",
    title: "تذكرة حضور ورشة العمل",
    buttonLink: "https://forms.gle/i9Xap2tHKECx7f8h8",
  },
  {
    id: 3,
    url: "/images/bigO-ticket.png",
    title: "سجل في مسابقة Big O's المصغرة",
    buttonLink: "https://forms.gle/wh3AfedTqje7y4JHA",
  },
];
