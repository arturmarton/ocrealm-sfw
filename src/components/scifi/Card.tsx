"use client";
import { FC } from "react";
import Link from "next/link";

interface CardProps {
    label: string;
    description: string;
    stats: string;
    href: string;
}

const Card: FC<CardProps> = ({
    label,
    description,
    stats,
    href
}) => {
    const hasLink = href.length > 0;
    const complexClip = "polygon(15px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 15px)";

    const Content = (
        <div
            className={`relative transition-all duration-300 ${hasLink ? 'transform group-hover:scale-[1.01]' : ''}`}
            style={{ clipPath: complexClip }}
        >
            <div
                className={`absolute inset-0 transition-colors duration-300 ${hasLink ? 'bg-[#ccc] group-hover:bg-secondary' : 'bg-[#ccc]'}`}
                style={{ clipPath: complexClip }}
            />

            <div
                className="absolute inset-[1.5px] bg-background"
                style={{ clipPath: complexClip }}
            />

            {hasLink && (
                <div
                    className="absolute top-0 left-0 w-6 h-6 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                />
            )}

            <div className="relative z-10 p-6 flex flex-col h-full min-h-40">
                <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-col">
                        <span className="text-[8px] font-mono text-primary/30 uppercase tracking-[0.3em]">System_Log</span>
                        <div className="h-0.5 w-6 bg-primary/10 mt-1" />
                    </div>
                    <span className="text-[9px] font-mono font-bold text-primary/40 tracking-[0.2em] px-2 py-0.5 border border-primary/10 bg-primary/2">
                        {stats}
                    </span>
                </div>

                <h2 className="text-xl font-black uppercase tracking-tighter transition-colors duration-300 text-secondary">
                    {label}
                </h2>

                <p className="text-xs text-primary/60 mt-2 font-medium leading-relaxed max-w-[90%]">
                    {description}
                </p>

                <div className="mt-auto pt-4 flex items-end justify-between">
                    <div className="flex flex-col gap-1">
                        <div className={`flex gap-1 transition-opacity ${hasLink ? 'opacity-20 group-hover:opacity-100' : 'opacity-20'}`}>
                            <div className="w-1 h-1 bg-secondary" />
                            <div className="w-1 h-1 bg-secondary" />
                            <div className="w-4 h-1 bg-secondary" />
                        </div>
                        <span className={`text-[10px] font-black tracking-widest transition-colors ${hasLink ? 'text-primary/40 group-hover:text-primary' : 'text-primary/40'}`}>
                            {hasLink ? 'OPEN_SECURE_PORT' : 'DATA_READOUT_ONLY'}
                        </span>
                    </div>

                    {hasLink && (
                        <div className="text-primary/20 group-hover:text-secondary transition-colors duration-300">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <path d="M7 17l9.2-9.2M17 17V7H7" />
                            </svg>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    if (!hasLink) {
        return <div className="block">{Content}</div>;
    }

    return (
        <Link href={href} className="block group">
            {Content}
        </Link>
    );
};

export default Card;