import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const ROTATION_RANGE = 35;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;
const PERSPECTIVE = "1500px";

const cardContents = [
  {
    id: 1,
    imageUrl: "/images/Publication1.png",
  },
  {
    id: 2,
    imageUrl: "/images/Publication2.png",
  },
  {
    id: 3,
    imageUrl: "/images/Publication3.png",
  },
];

const TechContentCards = () => {
  return (
    <div
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%23d4d4d4'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      }}
      className="relative h-full min-h-screen bg-neutral-100 px-20 pt-32"
    >
      <h1 className="mb-16 text-center text-4xl md:text-5xl font-bold text-gray-800">
        المنشورات التقنية
      </h1>

      <div className="flex flex-wrap place-content-center gap-32">
        {cardContents.map((content) => (
          <TiltShineCard key={content.id} imageUrl={content.imageUrl} />
        ))}
      </div>
      <div className="pb-44"></div>
    </div>
  );
};

const TiltShineCard = ({ imageUrl }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const sheenOpacity = useTransform(
    ySpring,
    [-HALF_ROTATION_RANGE, 0, HALF_ROTATION_RANGE],
    [0.5, 0, 0.5]
  );

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      style={{
        perspective: PERSPECTIVE,
      }}
      className="flex justify-center  h-[510px]"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform,
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
        }}
        className="relative aspect-[9/13] w-80 max-w-xs overflow-hidden rounded-lg bg-zinc-950 shadow-2xl shadow-zinc-950 transition-transform"
      >
        <motion.div
          style={{
            opacity: sheenOpacity,
          }}
          className="absolute inset-0 bg-gradient-to-br from-zinc-300/50 via-zinc-300 to-zinc-300/50"
        />
      </motion.div>
    </div>
  );
};

export default TechContentCards;
