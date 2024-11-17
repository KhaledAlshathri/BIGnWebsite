import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

const CountUpStats = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-10 pt-20 md:py-24">
      <h2 className="mb-8 text-center text-base text-indigo-900 sm:text-2xl text-lg md:mb-16">
        إحصائيات نفخر بها في مبادرة
        <span className="text-[#FF3C10]"> BIG n</span>
      </h2>

      <div className="flex flex-col items-center justify-center sm:flex-row">
        <Stat
          num={1}
          decimals={1}
          suffix="K+"
          subheading="طالب"
        />
        <div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" />
        <Stat
          num={170}
          suffix="K+"
          subheading="مستفيد"
        />
        <div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" />
        <Stat
          num={15}
          suffix="+"
          subheading="تعاون مع جهات"
        />
      </div>
    </div>
  );
};

const Stat = ({ num, suffix, decimals = 0, subheading }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="flex w-72 flex-col items-center py-8 sm:py-0">
      <p className="mb-2 text-center md:text-6xl text-5xl font-semibold sm:text-6xl">
        <span ref={ref}></span>
        {suffix}
      </p>
      <p className="max-w-48 text-center text-neutral-600">{subheading}</p>
    </div>
  );
};

export default CountUpStats;