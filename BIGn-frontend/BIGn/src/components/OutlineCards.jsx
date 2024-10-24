import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

const CURSOR_WIDTH = 32;
const HOVER_PADDING = 24;

const OutlineCards = () => {
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
    <section
      onMouseMove={handleMouseMove}
      className="overflow-hidden px-8 py-24"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 sm:flex-row">
        <Card
          title="Discover"
          href="#"
          bgUrl="https://images.unsplash.com/photo-1507208773393-40d9fc670acf?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          title="Learn"
          href="#"
          bgUrl="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          title="Grow"
          href="#"
          bgUrl="https://images.unsplash.com/photo-1521649415036-659258dc424f?q=80&w=2548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <Cursor cursorRef={cursorRef} />
    </section>
  );
};

const Card = ({ bgUrl, title, href }) => {
  return (
    <a
      href={href}
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundPosition: "center",
      }}
      className="outline-card flex aspect-square w-full flex-col justify-end overflow-hidden rounded-lg bg-neutral-400 bg-[size:100%] shadow-xl shadow-neutral-900/30 transition-[background-size] duration-500 hover:bg-[size:110%]"
    >
      <div className="pointer-events-none flex items-center justify-between bg-gradient-to-t from-black to-black/0 p-6 pt-8 text-xl font-medium text-white md:text-2xl">
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

export default OutlineCards;