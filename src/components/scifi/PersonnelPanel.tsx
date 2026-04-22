"use client";

const PersonnelPanel = () => {
    const core = { role: "Chief Executive Officer", name: "CHEN XUEROU" };
    const planets = [
        { role: "Exec Secretary", name: "SONG QINGLIN", x: -300, y: -200, size: "w-48 h-48" },
        { role: "HR Leader", name: "CHEN YUXIN", x: 300, y: -200, size: "w-48 h-48" },
        { role: "Nursery", name: "HYEONAH", x: 0, y: 320, size: "w-32 h-32" },
        { role: "Security Guard", name: "SAEYEON", x: 160, y: 280, size: "w-32 h-32" },
        { role: "Intel Analyst", name: "LU WENYI", x: 320, y: 0, size: "w-32 h-32" },
        { role: "Lead Tech", name: "TADA EMI", x: 280, y: 160, size: "w-32 h-32" },
        { role: "???", name: "IRIS THORNE", x: -160, y: 280, size: "w-32 h-32" },
    ];
    const umbraCenter = { x: -380, y: 60 };
    const umbraNode = { role: "Field Operations Coordinator", name: "UMBRA WILCZAK", size: "w-60 h-60" };
    const umbraSatellites = [
        { role: "Field Exec", name: "ASTRID BJORK", x: -150, y: -160, size: "w-32 h-32" },
        { role: "Diplomat", name: "ZHANG RUOXI", x: -220, y: 0, size: "w-32 h-32" },
        { role: "Field Ops", name: "CATERINA", x: -140, y: 160, size: "w-32 h-32" },
    ];

    return (
        <div className="hidden lg:flex w-full h-[80vh] p-8 overflow-hidden">
            <div className="max-w-[1600px] mx-auto min-h-[60vh] relative flex items-center justify-center">
                <div className="relative z-30 flex flex-col items-center">
                    <div className="absolute inset-0 -m-8 border border-dashed border-secondary/20 rounded-full" />
                    <div className="w-[420px] h-[420px] bg-primary rounded-full flex flex-col items-center justify-center text-white border-[12px] border-primary shadow-2xl relative">
                        <span className="text-[10px] text-secondary tracking-[0.4em] uppercase mb-2">{core.role}</span>
                        <div className="w-16 h-[1px] bg-secondary/40 mb-6" />
                        <h4 className="text-5xl font-bold italic tracking-tighter leading-tight text-center px-6">{core.name}</h4>
                    </div>
                </div>
                {planets.map((p, i) => (
                    <div
                        key={i}
                        className="absolute flex flex-col items-center"
                        style={{ transform: `translate(${p.x}px, ${p.y}px)` }}
                    >
                        <div className={`${p.size} bg-primary rounded-full border-4 border-primary flex flex-col items-center justify-center text-white shadow-lg`}>
                            <span className="text-[10px] text-secondary tracking-widest uppercase mb-1">{p.role}</span>
                            <div className="w-6 h-[1px] bg-secondary/20 mb-2" />
                            <h5 className="text-[13px] font-bold italic text-center px-3 leading-tight">{p.name}</h5>
                        </div>
                    </div>
                ))}
                <div
                    className="absolute flex items-center justify-center"
                    style={{ transform: `translate(${umbraCenter.x}px, ${umbraCenter.y}px)` }}
                >
                    <div className={`${umbraNode.size} bg-primary rounded-full border-8 border-primary flex flex-col items-center justify-center text-white shadow-2xl z-10`}>
                        <span className="text-[10px] text-secondary text-center uppercase mb-1">{umbraNode.role}</span>
                        <div className="w-10 h-[1px] bg-secondary/30 mb-3" />
                        <h5 className="text-xl font-bold italic text-center px-4 leading-tight">{umbraNode.name}</h5>
                    </div>
                    {umbraSatellites.map((s, i) => (
                        <div
                            key={i}
                            className="absolute flex flex-col items-center"
                            style={{ transform: `translate(${s.x}px, ${s.y}px)` }}
                        >
                            <div className="absolute top-1/2 left-1/2 w-[1px] bg-primary/10 -z-10 origin-top-left"
                                style={{
                                    height: `${Math.sqrt(s.x * s.x + s.y * s.y)}px`,
                                    transform: `rotate(${Math.atan2(-s.x, -s.y) * (180 / Math.PI)}deg)`
                                }}
                            />

                            <div className={`${s.size} bg-primary rounded-full border-4 border-primary flex flex-col items-center justify-center text-white shadow-md`}>
                                <span className="text-[10px] text-secondary uppercase mb-1">{s.role}</span>
                                <div className="w-6 h-[1px] bg-secondary/20 mb-2" />
                                <h6 className="text-[11px] font-bold italic text-center px-2 leading-tight">{s.name}</h6>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default PersonnelPanel;