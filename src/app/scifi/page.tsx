import BinaryLine from "@components/scifi/BinaryLine";
import Card from "@components/scifi/Card";
import { characters } from "@girls";

export default function Dashboard() {
  const navItems = [
    {
      id: "characters",
      label: "PERSONNEL DATABASE",
      description: "Access crew profiles, specialists, and field operatives within the Yizhu network.",
      href: "/scifi/characters",
      stats: `${characters.length} ACTIVE_NODES`,
    },
    {
      id: "worlds",
      label: "COLONIZED WORLDS",
      description: "Planetary data, resource yield reports, and orbital settlement information.",
      href: "/scifi/world",
      stats: `1 SECTORS`,
    },
    {
      id: "company",
      label: "CORPORATE DIVISION",
      description: "Internal structure, division hierarchy, and cross-sector operation protocols.",
      href: "/scifi/company",
      stats: "EST. 2157",
    },
  ];

  const headerStats = [
    {
      label: "Active Fleet",
      val: "1,248",
      id: "stat-1"
    },
    {
      label: "Energy Output",
      val: "4.2 YW",
      id: "stat-2"
    },
    {
      label: "Touchdown to Full-Operative",
      val: "7.2 Days",
      id: "stat-3"
    },
    {
      label: "Days from last incident",
      val: "394 Days",
      id: "stat-4"
    }
  ];

  return (
    <main className="flex-1 p-4 md:p-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {navItems.map((item) => (
          <Card
            key={item.id}
            {...item}
          />
        ))}
      </div>

      <div className="mt-16 group">
        <BinaryLine align="left" binary="011011010110101101" text="CORPORATE_MISSION" />
        <div className="nav-panel p-10 mt-6">
          <p className="text-sm md:text-2xl leading-relaxed italic">
            "The <span className="text-secondary">stars</span> are cold, but our intentions are not. We turn distant planets into <span className="text-secondary">homes</span> and strangers into <span className="text-secondary">partners</span>. Trading resources, mediation, and infrastructure; because a rising tide lifts <span className="text-secondary">all civilizations</span>."
          </p>
        </div>
      </div>

      <div className="mt-16">
        <BinaryLine align="right" binary="0101010101101011110111" text="COLONIAL_STATUS_REPORT" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          {headerStats.map((stat) => (
            <Card
              key={stat.id}
              label={"" + stat.val}
              description={stat.label}
              stats="CORE_METRIC"
              href=""
            />
          ))}
        </div>
      </div>
    </main>
  );
}