"use client";
import { FC } from "react";

interface BreadcrumbProps {
    pathname: string;
}

const Breadcrumb: FC<BreadcrumbProps> = ({ pathname }) => {
    const segments = pathname.split("/").filter(Boolean);
    const getLabel = (segment: string, index: number) => {
        const s = segment.toLowerCase();
        if (index === 0) {
            if (s === "scifi") return "CORE_SYSTEM";
            return s;
        }
        if (index === 1) {
            switch (s) {
                case "characters": return "OPERATOR_ARCHIVE";
                case "world": return "SECTOR_INTEL";
                case "company": return "YIZHU_CORP";
                default: return s.toUpperCase();
            }
        }
        if (index === 2) {
            return `UNIT_${s.toUpperCase()}`;
        }

        return s.toUpperCase();
    };

    const breadcrumbString = segments
        .map((seg, i) => getLabel(seg, i))
        .join(" // ");
    return (
        <span className="text-[10px] font-mono text-foreground/30 tracking-[0.3em] uppercase hidden md:inline">
            {breadcrumbString || "ROOT_DIRECTORY"}
        </span>
    );
};

export default Breadcrumb;