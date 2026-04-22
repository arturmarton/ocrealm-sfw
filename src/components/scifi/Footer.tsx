"use client"

import { usePathname } from "next/navigation";
import BinaryLine from "./BinaryLine";

export default function Footer({ }) {
    const pathname = usePathname();
    if (pathname === "/scifi/characters") {
        return null
    }
    return (
        <footer className="border-t border-foreground/20 py-4 px-4 md:px-8">
            <BinaryLine align="left" binary="011110110110111101110101011111011" text="© YIZHU INDUSTRIES - ALL RIGHTS RESERVED" />
            <div className="text-center text-xs text-foreground/40 font-mono mt-2">
                AUTHORIZED ACCESS ONLY • MONITORED SYSTEM • REPORT ANOMALIES TO SECURITY DIVISION
            </div>
        </footer>
    );
}