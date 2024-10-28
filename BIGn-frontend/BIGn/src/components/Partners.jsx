import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiAtlassian,
  SiDribbble,
  SiGrubhub,
  SiKaggle,
  SiSlack,
  SiNike,
} from "react-icons/si";

const Partners = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="bg-white py-24 px-4 lg:px-8 grid items-center grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 overflow-hidden">
      <div className="p-4">
        <h3 className="text-5xl font-semibold">شركاءنا</h3>
        <p className="text-slate-500 my-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
          commodi sint, similique cupiditate possimus suscipit delectus illum
          eos iure magnam!
        </p>
        <SelectBtns
          numTracks={testimonials.length}
          setSelected={setSelected}
          selected={selected}
        />
      </div>
      <Cards
        testimonials={testimonials}
        setSelected={setSelected}
        selected={selected}
      />
    </section>
  );
};

const SelectBtns = ({ numTracks, setSelected, selected }) => {
  return (
    <div className="flex gap-1 mt-8">
      {Array.from({ length: numTracks }).map((_, n) => {
        return (
          <button
            key={n}
            onClick={() => setSelected(n)}
            className="h-1.5 w-full bg-slate-300 relative"
          >
            {selected === n ? (
              <motion.span
                className="absolute top-0 right-0 bottom-0 bg-slate-950"
                initial={{
                  width: "0%",
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 5,
                }}
                onAnimationComplete={() => {
                  setSelected(selected === numTracks - 1 ? 0 : selected + 1);
                }}
                style={{
                  left: "auto",
                }}
              />
            ) : (
              <span
                className="absolute top-0 right-0 bottom-0 bg-slate-950"
                style={{
                  width: selected > n ? "100%" : "0%",
                  left: "auto",
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

const Cards = ({ testimonials, selected, setSelected }) => {
  return (
    <div className="p-4 relative h-[450px] lg:h-[500px] shadow-xl overflow-hidden">
      {testimonials.map((t, i) => {
        return (
          <Card
            {...t}
            key={i}
            position={i}
            selected={selected}
            setSelected={setSelected}
            totalCards={testimonials.length}
          />
        );
      })}
    </div>
  );
};

const Card = ({
  Icon,
  description,
  name,
  title,
  position,
  selected,
  setSelected,
  totalCards,
}) => {
  
  const cardWidth = 300; 
  const spacing = 30; 
  const offset = (position - selected) * (cardWidth + spacing);

  const scale = position === selected ? 1 : 0.9;

  const zIndex = totalCards - Math.abs(position - selected);

  const colors = ["#360E91", "#1AC3D0", "#5A5DD9", "#FF3C10"];

  const backgroundColor = colors[position % colors.length];
  const textColor = "white";

  return (
    <motion.div
      initial={false}
      style={{
        zIndex,
        backgroundColor,
        color: textColor,
        left: "50%",
        x: `-${cardWidth / 2}px`,
        width: `${cardWidth}px`,
      }}
      animate={{
        translateX: offset,
        scale,
      }}
      whileHover={{
        scale: position === selected ? 1.05 : 0.95,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      onClick={() => setSelected(position)}
      className="absolute top-0 h-full p-8 lg:p-12 cursor-pointer rounded-t-md flex flex-col justify-between shadow-lg"
    >
      <Icon className="text-7xl mx-auto" />
      <p className="text-lg lg:text-xl font-light italic my-8">
        "{description}"
      </p>
      <div>
        <span className="block font-semibold text-lg">{name}</span>
        <span className="block text-sm">{title}</span>
      </div>
    </motion.div>
  );
};

export default Partners;

const testimonials = [
  {
    Icon: SiNike,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita sequi cupiditate harum repellendus ipsum dignissimos? Officiis ipsam dolorum magnam assumenda.",
    name: "Jane Dodson",
    title: "Marketing Director, Nike",
  },
  {
    Icon: SiAtlassian,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita sequi cupiditate harum repellendus ipsum dignissimos? Officiis ipsam dolorum magnam assumenda.",
    name: "Johnathan Rodriguez",
    title: "UX Research, Atlassian",
  },
  {
    Icon: SiDribbble,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita sequi cupiditate harum repellendus ipsum dignissimos? Officiis ipsam dolorum magnam assumenda.",
    name: "Phil Heath",
    title: "Staff Engineer, Dribbble",
  },
  {
    Icon: SiGrubhub,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita sequi cupiditate harum repellendus ipsum dignissimos? Officiis ipsam dolorum magnam assumenda.",
    name: "Andrea Beck",
    title: "Marketing Manager, GrubHub",
  },
  {
    Icon: SiKaggle,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita sequi cupiditate harum repellendus ipsum dignissimos? Officiis ipsam dolorum magnam assumenda.",
    name: "Daniel Henderson",
    title: "Engineering Manager, Kaggle",
  },
  {
    Icon: SiSlack,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita sequi cupiditate harum repellendus ipsum dignissimos? Officiis ipsam dolorum magnam assumenda.",
    name: "Anderson Lima",
    title: "Product Manager, Slack",
  },
];
