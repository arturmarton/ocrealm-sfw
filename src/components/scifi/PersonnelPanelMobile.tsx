"use client";

const PersonnelPanelMobile = () => {
    const core = { role: "Chief Executive Officer", name: "CHEN XUEROU" };

    const planets = [
        { role: "Exec Secretary", name: "SONG QINGLIN" },
        { role: "HR Leader", name: "CHEN YUXIN" },
        { role: "Intel Analyst", name: "LU WENYI" },
        { role: "Lead Tech", name: "TADA EMI" },
        { role: "Security Guard", name: "SAEYEON" },
        { role: "Nursery", name: "HYEONAH" },
        { role: "???", name: "IRIS THORNE" },
    ];

    const umbraNode = {
        role: "Field Operations Coordinator",
        name: "UMBRA WILCZAK",
        fieldTeam: [
            { role: "Field Exec", name: "ASTRID BJORK" },
            { role: "Diplomat", name: "ZHANG RUOXI" },
            { role: "Field Ops", name: "CATERINA" },
        ]
    };

    return (
        <div className=" lg:hidden w-full min-h-screen px-4 py-12 font-sans overflow-x-hidden">
            <div className="flex flex-col items-center space-y-12">
                <div className="flex flex-col items-center relative">
                    <div className="absolute top-full h-12 w-[2px] bg-gradient-to-b from-primary/40 to-primary/10" />

                    <div className="w-64 h-64 bg-primary rounded-full flex flex-col items-center justify-center text-white border-[8px] border-primary shadow-2xl">
                        <span className="text-[8px] font-mono text-secondary tracking-[0.3em] uppercase mb-1">{core.role}</span>
                        <div className="w-12 h-[1px] bg-secondary/30 mb-4" />
                        <h4 className="text-3xl font-black italic tracking-tighter text-center px-4 leading-tight">{core.name}</h4>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 w-full max-w-sm">
                    {planets.map((p, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="w-36 h-36 bg-primary rounded-full border-4 border-primary flex flex-col items-center justify-center text-white shadow-lg">
                                <span className="text-[7px] font-mono text-secondary tracking-widest uppercase mb-1">{p.role}</span>
                                <div className="w-6 h-[1px] bg-secondary/20 mb-2" />
                                <h5 className="text-[11px] font-black italic text-center px-2 leading-none uppercase">{p.name}</h5>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full flex flex-col items-center space-y-8 pt-8 border-t border-primary/10">
                    <div className="w-52 h-52 bg-primary rounded-full border-[6px] border-primary flex flex-col items-center justify-center text-white shadow-xl relative">
                        <div className="absolute top-full h-8 w-[2px] bg-primary/20" />
                        <span className="text-[7px] font-mono text-secondary tracking-widest uppercase mb-1">{umbraNode.role}</span>
                        <div className="w-8 h-[1px] bg-secondary/30 mb-3" />
                        <h5 className="text-lg font-black italic text-center px-4 leading-tight uppercase">{umbraNode.name}</h5>
                    </div>
                    <div className="flex justify-center gap-3 w-full">
                        {umbraNode.fieldTeam.map((s, i) => (
                            <div key={i} className="w-28 h-28 bg-primary rounded-full border-[3px] border-primary flex flex-col items-center justify-center text-white shadow-md">
                                <span className="text-[6px] font-mono text-secondary uppercase mb-1 text-center px-1">{s.role}</span>
                                <div className="w-4 h-[1px] bg-secondary/20 mb-1.5" />
                                <h6 className="text-[9px] font-black italic text-center px-2 leading-tight uppercase">{s.name}</h6>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PersonnelPanelMobile;