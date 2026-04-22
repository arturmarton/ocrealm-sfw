"use client";

import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

type ImageFrameProps = {
  id: string;
  image: string;
  alt?: string;
  name?: string;
  selected?: boolean;
  icon?: string;
  onClick?: (id: string) => void;
};

const ImageFrame: FC<ImageFrameProps> = ({
  id,
  image,
  alt = "",
  name = "",
  selected = false,
  icon,
  onClick,
}) => {
  const clipPath =
    "polygon(25% 0%, 95% 0, 100% 5%, 100% 75%, 63% 100%, 0 100%, 0 100%, 0 18%)";
  const outerClipPath =
    "polygon(0 0, 95% 0, 100% 5%, 100% 100%, 0 100%)";

  const content = (
    <div className="card-3d rounded-lg overflow-hidden">
      <div
        className="card-content relative w-full aspect-2/3 bg-primary border border-foreground/10"
        style={{ clipPath: outerClipPath }}
      >
        <div className="absolute inset-0 bg-primary" style={{ clipPath }} />
        <div
          className={`relative w-full h-full p-px lg:p-1 ${selected ? "md:bg-secondary bg-white" : "bg-white"
            }`}
          style={{ clipPath }}
        >
          <div className="relative w-full h-full overflow-hidden bg-white" style={{ clipPath }}>
            <Image
              src={image}
              alt={alt}
              width={768}
              height={1152}
              priority={selected}
              sizes="(max-width: 768px) 100vw, 300px"
              className="w-full h-full object-cover object-top scale-110"
            />
            <div className="absolute inset-0 shadow-[inset_0_20px_30px_-10px_rgba(0,0,0,0.7)]" />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-2 left-3 text-white text-md lg:text-xl font-bold tracking-wide uppercase font-display">
              {name}
            </div>

            <div className="shine" />
          </div>
        </div>
        {icon && (
          <div className="absolute bottom-1 right-1 w-7 lg:w-9 h-7 lg:h-9 drop-shadow-lg">
            <Image src={icon} alt={`${name} icon`} fill className="object-contain" />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      <Link href={`/scifi/characters/${id}`} className="block w-full md:hidden">
        {content}
      </Link>
      <div
        onClick={() => onClick?.(id)}
        className="hidden md:block w-full max-w-xs cursor-pointer relative"
      >
        {content}
      </div>
    </>
  );
};

export default ImageFrame;