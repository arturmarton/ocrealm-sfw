"use client";
import { FC, useEffect, useMemo, useState } from "react";
import BinaryLine from "./BinaryLine";
import { usePathname, useRouter } from "next/navigation";
import Button from "./Button";
import Breadcrumb from "./Breadcrumb";
import { characters } from "@girls";

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();

    const isDeepView = pathname.includes("/scifi/") && pathname.split("/scifi/")[1].length > 0;
    const segments = pathname.split("/").filter(Boolean);
    const scifiIndex = segments.indexOf("scifi");
    const section = segments[scifiIndex + 1] || "home";
    const characterId = section === "characters" ? segments[scifiIndex + 2] : null;
    const activeCharacter = characters.find(c => c.id === characterId);

    return (
        <header className="mt-2 relative z-50">
            <BinaryLine
                align="right"
                binary="010111011011110110101011101110111"
                text="YIZHU INDUSTRIES"
            />

            <div className="px-4 md:px-8 py-2 lg:py-4">
                <div className="flex flex-col md:flex-row justify-between items-start gap-2">
                    <div className="flex flex-col items-start w-full">
                        {isDeepView && (
                            <div className="flex items-center gap-4 mb-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => router.back()}
                                >
                                    BACK
                                </Button>
                                <Breadcrumb pathname={pathname} />
                            </div>
                        )}

                        <div className="mt-1">
                            {section === "home" && (
                                <>
                                    <h1 className="text-5xl lg:text-6xl font-display font-bold leading-[0.9]">
                                        YIZHU
                                        <span className="text-secondary"> INDUSTRIES</span>
                                    </h1>
                                    <p className="text-[10px] lg:text-xs text-foreground/50 mt-2 tracking-[0.15em] uppercase">
                                        EXPLORATION • TRADE • SAFEGUARDING • CONFLICT RESOLUTION
                                    </p>
                                </>
                            )}

                            {section === "characters" && (
                                <h1 className="text-5xl lg:text-6xl font-display font-bold leading-[0.9] uppercase">
                                    {activeCharacter ? (
                                        <>
                                            <span className="text-secondary">OPERATOR: </span>
                                            {activeCharacter.identity.full_name}
                                        </>
                                    ) : (
                                        <>
                                            YIZHU
                                            <span className="text-secondary"> OPERATORS</span>
                                        </>
                                    )}
                                </h1>
                            )}

                            {section === "world" && <h1 className="text-5xl lg:text-6xl font-display font-bold leading-[0.9]">
                                YIZHU
                                <span className="text-secondary"> COLONY MAP</span>
                            </h1>}

                            {section === "company" && <>
                                <h1 className="text-5xl lg:text-6xl font-display font-bold leading-[0.9]">
                                    YIZHU
                                    <span className="text-secondary"> INDUSTRIES</span>
                                </h1>
                                <p className="text-[10px] lg:text-xs text-foreground/50 mt-2 tracking-[0.15em] uppercase">
                                    EXPLORATION • TRADE • SAFEGUARDING • CONFLICT RESOLUTION
                                </p>
                            </>}
                        </div>
                    </div>

                    {!isDeepView && (
                        <div className="hidden xl:block">
                            <YizhuMonitor />
                        </div>
                    )}
                </div>
            </div>

            {!isDeepView && (
                <BinaryLine
                    align="left"
                    binary="011101110111010101101111011011101"
                    text="LUMI_OS v3.7.2"
                />
            )}
        </header>
    );
}

const DATA_NODES = [
    { id: "A01", task: "CORE_FABRICATE", load: "72%" },
    { id: "B12", task: "DIP_RELAY_ACTIVE", load: "14%" },
    { id: "X99", task: "ORBIT_DROP_INIT", load: "100%" },
    { id: "S04", task: "SAFEGUARD_ON", load: "44%" },
    { id: "T88", task: "LOGISTICS_PROC", load: "29%" },
    { id: "R00", task: "RESOURCE_SYNC", load: "08%" },
    { id: "V07", task: "XENO_OUTREACH", load: "61%" },
    { id: "M09", task: "AUTO_MINE_LOAD", load: "92%" },
];

const YizhuMonitor: FC = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    const dotStates = useMemo(() =>
        [...Array(12)].map(() => Math.random() > 0.4), []
    );
    if (!mounted) return null;
    const stream = [...DATA_NODES, ...DATA_NODES, ...DATA_NODES];

    return (
        <div className="hidden xl:flex items-stretch gap-4 h-24 pl-6 border-l border-foreground/10">
            <div className="flex flex-col justify-between py-1 min-w-20">
                <div className="flex flex-col leading-none">
                    <span className="text-xs font-black text-secondary uppercase tracking-tighter">Lum_OS</span>
                    <span className="text-[9px] text-foreground/40 font-mono font-bold tracking-tight">V.4_STABLE</span>
                </div>
                <div className="grid grid-cols-4 gap-1">
                    {dotStates.map((isActive, i) => (
                        <div
                            key={i}
                            className={`w-2 h-2 rounded-sm transition-colors ${isActive ? 'bg-secondary/40' : 'bg-foreground/10'}`}
                        />
                    ))}
                </div>
            </div>
            <div className="relative w-64 bg-foreground/[0.02] border-x border-foreground/5 overflow-hidden mask-fade-compact">
                <div className="flex flex-col animate-log-stream">
                    {stream.map((node, i) => (
                        <div key={i} className="flex flex-col py-1 px-3 border-b border-foreground/5 group">
                            <div className="flex justify-between items-center leading-none">
                                <div className="flex items-center gap-1.5">
                                    <span className="text-[10px] font-mono text-foreground/30">#{node.id}</span>
                                    <span className="text-[10px] font-mono font-bold text-foreground tracking-tight truncate w-32">
                                        {node.task}
                                    </span>
                                </div>
                                <span className="text-[10px] font-mono font-black text-secondary tabular-nums">
                                    {node.load}
                                </span>
                            </div>
                            <div className="w-full h-px bg-foreground/5 mt-1.5">
                                <div className="h-full bg-secondary/50" style={{ width: node.load }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col justify-between py-1 text-right min-w-24">
                <div className="leading-none">
                    <div className="text-sm font-mono font-black text-foreground tabular-nums tracking-tighter">99.82%</div>
                    <div className="text-[8px] text-foreground/50 font-mono font-bold uppercase tracking-widest">Sync_Rate</div>
                </div>
                <div className="leading-none">
                    <div className="text-sm font-mono font-black text-secondary tracking-widest">LIVE</div>
                    <div className="text-[8px] text-foreground/50 font-mono font-bold uppercase tracking-widest">Ops_Status</div>
                </div>
            </div>
        </div>
    );
};