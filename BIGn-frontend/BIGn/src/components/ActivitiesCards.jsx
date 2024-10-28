import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

import melmImage from "/images/Mulem.png";
import meltaqaImage from "/images/Tech-meeting.png";
import bigOImage from "/images/BIG-Os.png";

const CURSOR_WIDTH = 32;
const HOVER_PADDING = 24;

const ActivitiesCards = () => {
  const cursorRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = e.target;
    const cursorEl = cursorRef.current;

    const isCardHover = el.classList.contains("outline-card");

    if (isCardHover) {
      const { width, height, top, left } = el.getBoundingClientRect();

      cursorEl.style.transition = "0.25s all";

      cursorEl.style.width = `${width + HOVER_PADDING}px`;
      cursorEl.style.height = `${height + HOVER_PADDING}px`;
      cursorEl.style.borderRadius = `${HOVER_PADDING / 2}px`;
      cursorEl.style.top = `${top + window.scrollY + height / 2}px`;
      cursorEl.style.left = `${left + width / 2}px`;
    } else {
      cursorEl.style.transition = "0s all";

      cursorEl.style.width = `${CURSOR_WIDTH}px`;
      cursorEl.style.height = `${CURSOR_WIDTH}px`;
      cursorEl.style.borderRadius = `${CURSOR_WIDTH}px`;
      cursorEl.style.top = `${e.clientY + window.scrollY}px`;
      cursorEl.style.left = `${e.clientX}px`;
    }
  };

  return (
    <section onMouseMove={handleMouseMove} className="overflow-hidden px-8 py-24">
      <div className="w-full px-8 py-12 md:py-20 flex flex-col items-center">
        <h3 className="text-center text-5xl md:text-5xl max-w-xl font-semibold">أنشطتنا</h3>
      </div>
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 sm:flex-row">
        <Card title="برنامج مُلم" href="/activities" bg={melmImage} />
        <Card title="الملتقى التقني" href="/activities" bg={meltaqaImage} />
        <Card title="مسابقات الBIG O" href="/activities" bg={bigOImage} />
      </div>
      <Cursor cursorRef={cursorRef} />
    </section>
  );
};

const Card = ({ bg, title, href }) => {
  return (
    <a
      href={href}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="outline-card flex w-[300px] h-[300px] flex-col justify-end overflow-hidden rounded-lg bg-neutral-400 bg-cover shadow-xl transition-transform duration-500 hover:scale-105 sm:w-full sm:h-auto sm:aspect-square"
    >
      <div className="pointer-events-none flex items-center justify-between bg-gradient-to-t from-black to-transparent p-4 pt-8 text-lg font-medium text-white sm:p-6 sm:text-xl">
        <h3>{title}</h3>
        <FiArrowRight />
      </div>
    </a>
  );
};

const Cursor = ({ cursorRef }) => {
  return (
    <div
      ref={cursorRef}
      style={{
        width: 0,
        height: 0,
        borderRadius: CURSOR_WIDTH,
        top: 0,
        left: 0,
      }}
      className="hover-cursor pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 border border-neutral-900"
    />
  );
};

export default ActivitiesCards;
