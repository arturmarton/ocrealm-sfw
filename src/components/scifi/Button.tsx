"use client";
import Link from "next/link";
import type { FC, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode,
  variant?: "primary" | "outline";
  size?: "md" | "sm";
  href?: string;
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  type = "button",
  className = "",
  onClick,
}) => {
  const isSm = size === "sm";
  const clipAmount = isSm ? "10px" : "15px";
  const clipPath = `polygon(0 0, 100% 0, 100% calc(100% - ${clipAmount}), calc(100% - ${clipAmount}) 100%, 0 100%)`;

  const isPrimary = variant === "primary";
  const isOutline = variant === "outline";

  const baseClasses = `
    relative inline-flex items-center justify-center cursor-pointer rounded-sm overflow-hidden
    font-bold uppercase tracking-wider transition-transform duration-200 
    active:scale-95 hover:scale-105 focus:outline-none focus:ring-2 
    focus:ring-offset-2 focus:ring-primary touch-manipulation
    ${isSm ? "px-4 py-2 text-[12px]" : "px-6 py-3 text-sm"} 
    ${className}
  `;

  const combinedClasses = `${baseClasses} ${isPrimary ? "text-white" : "text-primary"}`;

  const ButtonContent: FC = () => (
    <>
      {isPrimary && (
        <div
          className="absolute inset-0 bg-primary pointer-events-none"
          style={{ clipPath }}
        />
      )}

      {isOutline && (
        <>
          <div
            className="absolute inset-0 bg-primary pointer-events-none"
            style={{ clipPath }}
          />
          <div
            className="absolute inset-px bg-background pointer-events-none"
            style={{ clipPath }}
          />
        </>
      )}

      <div className="relative z-10 flex items-center gap-2">
        {isSm && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        )}
        <span className={isSm ? "leading-none" : "text-xl"}>
          {children}
        </span>
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        <ButtonContent />
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick}>
      <ButtonContent />
    </button>
  );
};

export default Button;