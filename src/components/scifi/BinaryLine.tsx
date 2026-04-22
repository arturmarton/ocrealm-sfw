"use client";

import { FC } from "react";

type BinaryLineProps = {
  text?: string;
  align?: "left" | "right";
  binary?: string;
};

const BinaryLine: FC<BinaryLineProps> = ({
  text = "",
  align = "right",
  binary = "",
}) => {
  const isRight = align === "right";

  return (
    <div className="w-full flex items-end" key={align}>
      {!isRight && (
        <div className="flex items-end w-full overflow-hidden" key="left-side">
          <div className="shrink-0 border-t border-primary/60">
            <span className="text-[10px] lg:text-sm tracking-tighter text-primary/60 whitespace-nowrap px-2 pt-1 block">
              {text}
            </span>
          </div>
          <div className="relative w-7 h-4 shrink-0 -translate-x-2">
            <div className="absolute bottom-0 left-0 w-7 h-px bg-primary/60 origin-right rotate-45" />
          </div>
          {binary && (
            <div className="self-start flex flex-nowrap gap-1 lg:gap-1.5 pl-2 mt-2 border-b border-primary/60 pb-1 -translate-x-2 overflow-hidden shrink-0">
              {binary.split("").map((bit, index) => (
                <div key={`bit-left-${index}`} className="w-1 h-3 lg:w-2 lg:h-4 shrink-0">
                  {bit === "1" && (
                    <div className="w-full h-full bg-primary/40 skew-x-45 origin-bottom-right" />
                  )}
                </div>
              ))}
            </div>
          )}
          <div className="flex-1 h-px -translate-x-2 bg-primary/60 min-w-2.5" />
        </div>
      )}

      {isRight && (
        <div className="flex items-end w-full overflow-hidden" key="right-side">
          <div className="flex-1 h-px bg-primary/60 min-w-2.5" />
          {binary && (
            <div className="self-start flex flex-nowrap gap-1 lg:gap-1.5 pr-2 mt-2 border-b border-primary/60 pb-1 overflow-hidden shrink-0">
              {binary.split("").map((bit, index) => (
                <div key={`bit-right-${index}`} className="w-1 h-3 lg:w-2 lg:h-4 shrink-0">
                  {bit === "1" && (
                    <div className="w-full h-full bg-primary/40 -skew-x-45 origin-bottom-left" />
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="relative w-5 h-4 shrink-0">
            <div className="absolute bottom-0 left-0 w-7 h-px bg-primary/60 origin-left -rotate-45" />
          </div>

          <div className="shrink-0 border-t border-primary/60">
            <span className="text-[10px] lg:text-sm tracking-tighter text-primary/60 whitespace-nowrap px-2 pt-1 block">
              {text}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BinaryLine;