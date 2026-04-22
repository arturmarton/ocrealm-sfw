"use client";

import { usePathname } from "next/navigation";
import Marquee from "@components/scifi/Marquee";

export default function Background() {
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);
    const isCharacterPage = segments[0] === "characters" && segments[1];
    const displayLabel = isCharacterPage ? segments[1].toUpperCase() : "YIZHU INDUSTRIES";
    const gridPattern = `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23c1c4c9' stroke-width='2'%3E%3Cpath d='M0 40h80M40 0v80'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

    return (
        <>
            <div className="fixed inset-0 z-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: gridPattern }} />
            <div className="fixed top-0 h-screen inset-0 z-0 flex flex-col justify-evenly overflow-hidden pointer-events-none select-none ">
                <Marquee text={displayLabel} duration={40} />
                <Marquee text={displayLabel} duration={80} />
                <Marquee text={displayLabel} duration={60} />
            </div>
        </>
    );
}