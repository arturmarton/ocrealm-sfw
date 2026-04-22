"use client";

import Card from '@components/scifi/Card';
import BinaryLine from '@components/scifi/BinaryLine';
import PersonnelPanel from '@components/scifi/PersonnelPanel';
import PersonnelPanelMobile from '@components/scifi/PersonnelPanelMobile';

const Page = () => {
    return (
        <div className="w-full px-6 py-4">
            <div className="flex gap-6 items-stretch mb-12">
                <div className="hidden xl:flex flex-col justify-between w-12 opacity-80">
                    <div className="h-1/3 w-full border-l-2 border-t-2 border-secondary animate-pulse" />
                    <div className="flex-1 flex flex-col items-center py-4 gap-2">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-secondary/40 rounded-full animate-ping" style={{ animationDelay: `${i * 0.2}s` }} />
                        ))}
                        <div className="[writing-mode:vertical-lr] text-[8px] font-mono text-secondary tracking-widest uppercase">Scanning_Sector</div>
                    </div>
                    <div className="h-1/3 w-full border-l-2 border-b-2 border-secondary" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                    <Card
                        label="Industrial Extraction"
                        description="Deep-core resource harvesting utilizing automated drone swarms and seismic refining protocols."
                        stats="8.4M T/YR"
                        href=""
                    />
                    <Card
                        label="Mass Production"
                        description="Specialized in modular starship assembly and high-density alloy fabrication for core system expansion."
                        stats="EFF: 99.8%"
                        href=""
                    />
                    <Card
                        label="Native Acquisition"
                        description="Ethical resource procurement through technological exchange contracts and infrastructure mediation."
                        stats="SECURED"
                        href=""
                    />
                    <Card
                        label="Military Reserve"
                        description="Private security initiatives providing strategic stability and protective operations."
                        stats="ALFA-01"
                        href=""
                    />
                </div>
                <div className="hidden xl:flex flex-col justify-between w-12 opacity-80 items-end">
                    <div className="h-1/4 w-full border-r-2 border-t-2 border-secondary/50" />
                    <div className="flex-1 w-full bg-gradient-to-b from-transparent via-secondary/10 to-transparent my-2 flex flex-col items-center overflow-hidden">
                        <div className="animate-bounce text-[8px] font-mono text-secondary py-2">0101</div>
                        <div className="animate-pulse text-[8px] font-mono text-secondary">1100</div>
                        <div className="animate-bounce text-[8px] font-mono text-secondary py-2">1011</div>
                    </div>
                    <div className="h-1/4 w-full border-r-2 border-b-2 border-secondary/50" />
                </div>
            </div>

            <BinaryLine text="COLONY_OPERATIONS_FULL_ACCESS" align="right" binary="10101111001010" />

            <div className="my-10 space-y-8">
                <div className="bg-white/[0.02] border border-white/10 md:p-8 relative overflow-hidden w-full">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 -mr-32 -mt-32 rotate-45 pointer-events-none" />

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                        <h3 className="text-3xl font-black italic tracking-tighter">STRATEGIC HUB DEPLOYMENT</h3>
                        <span className="px-3 py-1 bg-secondary/20 text-secondary text-[10px] font-mono tracking-[0.2em] border border-secondary/30">
                            OPERATIONAL_STATUS: OPTIMAL
                        </span>
                    </div>

                    <p className="text-base text-foreground/70 leading-relaxed w-full mb-8">
                        The K-2-Yizhu colony functions as the primary industrial anchor for the sector. Our infrastructure integrates directly
                        with the planet's lithosphere via the **Main Hub**, ensuring maximum output of rare-earth minerals. Through
                        advanced mediation and technological exchange, we maintain high resource yields while dedicating 40% of
                        local production to employee survival, base expansion, and native partnership development.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-6 border-t border-white/10">
                        <div className="flex flex-col border-l-2 border-secondary pl-4">
                            <span className="text-[10px] text-foreground/40 font-mono uppercase">System Yield</span>
                            <span className="text-2xl font-black">60% EXPORT</span>
                        </div>
                        <div className="flex flex-col border-l-2 border-secondary pl-4">
                            <span className="text-[10px] text-foreground/40 font-mono uppercase">Colony Retention</span>
                            <span className="text-2xl font-black">40% LOCAL</span>
                        </div>
                        <div className="flex flex-col border-l-2 border-secondary pl-4">
                            <span className="text-[10px] text-foreground/40 font-mono uppercase">Infrastructure</span>
                            <span className="text-2xl font-black">STABLE</span>
                        </div>
                        <div className="flex flex-col border-l-2 border-secondary pl-4">
                            <span className="text-[10px] text-foreground/40 font-mono uppercase">Power Grid</span>
                            <span className="text-2xl font-black">100.0%</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 border border-white/5 md:p-6 bg-white/[0.01]">
                        <span className="text-[10px] font-mono text-secondary mb-4 block tracking-widest uppercase">Facility Logistics & Deployment</span>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                            {[
                                "Main Hub", "Southwest Extraction", "Central Relay",
                                "Peak Observatory", "Logistics Node B", "Storage Facility",
                                "Logistics Node A", "Power Plant", "Eco Farm"
                            ].map((facility) => (
                                <div key={facility} className="text-[10px] py-2 px-3 border border-white/5 bg-white/5 font-mono flex justify-between">
                                    <span className="opacity-60">{facility}</span>
                                    <span className="text-secondary">ONLINE</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="border border-white/5 md:p-6 bg-white/[0.01]">
                        <span className="text-[10px] font-mono text-red-500 mb-4 block tracking-widest uppercase">Environmental Hazard Logs</span>
                        <div className="space-y-4">
                            <div className="p-3 bg-red-500/5 border border-red-500/20">
                                <div className="text-[10px] font-black text-red-500 uppercase">Seismic Activity</div>
                                <div className="text-[11px] opacity-70 mt-1 font-mono">Sub-crust vibrations in Sector 7.</div>
                            </div>
                            <div className="p-3 bg-orange-500/5 border border-orange-500/20">
                                <div className="text-[10px] font-black text-orange-500 uppercase">Apex Fauna Sighting</div>
                                <div className="text-[11px] opacity-70 mt-1 font-mono">Field Exec security protocols active.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BinaryLine text="CHAIN_OF_COMMAND" align="left" binary="111110000101" />

            <PersonnelPanel />
            <PersonnelPanelMobile />
        </div>
    );
};

export default Page;