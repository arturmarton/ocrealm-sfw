import { characters } from "@girls";
import { notFound } from "next/navigation";
import Image from "next/image";
import CopyButton from "@components/scifi/CopyButton";

interface Props {
    params: Promise<{ id: string }>;
}

export default async function CharacterPage({ params }: Props) {
    const { id } = await params;
    const character = characters.find((c) => c.id === id);

    if (!character) notFound();

    const { identity, appearance, versions } = character;
    const scifi = versions.scifi;
    const levels = { astrid: 4, caterina: 4, emi: 4, hyeonah: 4, iris: 4, qinglin: 3, ruoxi: 4, saeyeon: 4, umbra: 3, wenyi: 4, xuerou: 2, yuxin: 3 }

    return (
        <main className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mx-auto">
                <div className="lg:col-span-4 space-y-8">
                    <div className="relative border-2 border-primary bg-white shadow-[8px_8px_0px_#ec4899]">
                        <Image
                            src={`/girls/${id}/anime_profile.png`}
                            alt={identity.full_name}
                            width={800}
                            height={1000}
                            className="w-full h-auto"
                            priority
                        />
                        <div className="absolute bottom-4 left-4 flex gap-2">
                            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                            <span className="text-[8px] text-primary font-bold">BIO_SCAN_ACTIVE</span>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-8 space-y-12">
                    <section className="space-y-6">
                        <div className="flex items-center gap-4">
                            <h2 className="text-sm font-bold text-secondary tracking-[0.4em] uppercase">Identity_Metrics</h2>
                            <div className="flex-1 h-px bg-linear-to-r from-primary/20 to-transparent" />
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                            <MetricBox label="Legal Designation" value={identity.original_name} />
                            <MetricBox label="Age" value={"" + identity.age} />
                            <MetricBox label="Birth Cycle" value={identity.birthday} />
                            <MetricBox label="Phys. Frame" value={appearance.body} />
                            <CopyButton id={id} />
                        </div>
                    </section>
                    <section className="space-y-6">
                        <div className="flex items-center gap-4">
                            <h2 className="text-sm font-bold text-secondary tracking-[0.4em] uppercase">Colonial_Status</h2>
                            <div className="flex-1 h-px bg-linear-to-r from-primary/20 to-transparent" />
                        </div>
                        <div className="md:p-8 relative overflow-hidden">
                            <div className="relative z-10 space-y-6">
                                <div>
                                    <p className="text-xs text-secondary mb-3">Assignment_Profile</p>
                                    <p className="text-xl">
                                        {scifi.identity}
                                    </p>
                                </div>
                                <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                                    <div>
                                        <p className="text-xs text-secondary mb-1">Operational Role</p>
                                        <p className="text-xl">{scifi.role}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs opacity-40 uppercase">Auth_Level</p>
                                        <p className="text-sm font-bold text-secondary">SEC_LEVEL_0{levels[id as keyof typeof levels]}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4">
                                    <span className="text-xs font-bold flex-1">Spectral_Colors</span>
                                    {appearance.colors.map((color, i) => (
                                        <div
                                            key={i}
                                            className="w-12 h-8 border border-primary/20"
                                            style={{ backgroundColor: color }}
                                        />
                                    ))}
                                </div>
                                <div>
                                    <p className="text-xs text-secondary mb-3">Background</p>
                                    <p className="text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum mi, iaculis ac consectetur eu, pharetra faucibus magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus maximus lacus vel sapien scelerisque, vitae ultrices libero dignissim. Proin faucibus, neque eleifend semper interdum, ligula orci interdum neque, in consectetur metus metus vitae elit. Pellentesque vel purus diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ac nulla ipsum.

                                        Nullam vitae urna consectetur, sagittis justo in, imperdiet mauris. Proin iaculis consequat lacus eget condimentum. Nulla non laoreet felis, quis aliquet augue. Duis dapibus tortor vel nisl porta, eu sagittis elit aliquam. Aliquam porta justo ex, ac volutpat elit rhoncus eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse interdum nibh velit, sit amet volutpat purus ullamcorper vel. Etiam condimentum ex sed mi vehicula, ut consequat urna condimentum. In ultrices mi a ipsum vehicula, vel tincidunt risus viverra. Vivamus malesuada felis vitae purus commodo, in elementum nisi sollicitudin. Phasellus eu lectus massa. Ut egestas augue at odio interdum, nec finibus lorem posuere. Fusce interdum tristique scelerisque. Etiam sit amet volutpat eros. Nunc rutrum laoreet gravida. Aliquam tristique elit dui, vel iaculis nibh finibus id.

                                        Aliquam ut ultrices elit, non pulvinar justo. Aliquam eu faucibus tortor. Fusce feugiat erat lacus, ac volutpat lectus porta eget. Duis ultrices neque mauris, vitae congue tellus molestie quis. Vivamus pulvinar augue vel orci ornare gravida. Sed a auctor nibh. In hac habitasse platea dictumst. Ut volutpat ornare viverra. Suspendisse sed mauris felis. In nunc tellus, placerat in pharetra id, accumsan ut tortor. Curabitur scelerisque neque nibh. Mauris ut interdum lacus, quis iaculis dui. Ut malesuada vel tortor eu aliquam.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div >
        </main >
    );
}

function MetricBox({ label, value, className = "" }: { label: string; value: string; className?: string }) {
    return (
        <div className={className}>
            <p className="text-[9px] text-secondary font-bold tracking-widest uppercase mb-2">{label}</p>
            <div className="border-l-2 border-primary pl-4">
                <p className="text-lg font-bold tracking-tight uppercase leading-none">{value}</p>
            </div>
        </div>
    );
}