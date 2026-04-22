"use client";

import { useEffect, useRef, useState } from "react";
import type { FC } from "react";

type MarqueeProps = {
  text: string;
  duration?: number;
  className?: string;
};

const Marquee: FC<MarqueeProps> = ({
  text,
  duration = 20,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLSpanElement | null>(null);
  const [repeatCount, setRepeatCount] = useState<number>(1);

  useEffect(() => {
    const calculateRepetitions = () => {
      if (!containerRef.current || !itemRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const itemWidth = itemRef.current.offsetWidth;

      if (itemWidth === 0) return;

      const count = Math.ceil((containerWidth * 1.5) / itemWidth) + 2;
      setRepeatCount(count);
    };

    const handleInit = () => {
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(calculateRepetitions);
      } else {
        setTimeout(calculateRepetitions, 100);
      }
    };

    handleInit();

    window.addEventListener("resize", calculateRepetitions);

    return () => {
      window.removeEventListener("resize", calculateRepetitions);
    };
  }, [text]);

  const itemClasses =
    "hidden md:block md:text-[24rem] font-bold uppercase text-primary/5 px-8 select-none leading-none tracking-tighter";

  return (
    <div
      ref={containerRef}
      className={`flex overflow-hidden whitespace-nowrap ${className}`}
    >
      <div
        className="flex shrink-0 animate-scroll"
        style={{ ["--scroll-duration" as any]: `${duration}s` }}
      >
        <div className="marquee-track flex shrink-0">
          {Array.from({ length: repeatCount }).map((_, i) => (
            <span
              key={`orig-${i}`}
              ref={i === 0 ? itemRef : null}
              className={itemClasses}
            >
              {text}
            </span>
          ))}
        </div>

        <div className="flex shrink-0">
          {Array.from({ length: repeatCount }).map((_, i) => (
            <span key={`clone-${i}`} className={itemClasses}>
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;