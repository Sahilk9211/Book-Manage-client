import { dashboardStats } from "@/constants/dashboard";
import StatCard from "./stat-card";

export default function StatsGrid() {
  return (
    <section className="mb-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {dashboardStats.map((stat) => (
        <StatCard
          key={stat.id}
          title={stat.title}
          value={stat.value}
          subtitle={stat.subtitle}
          icon={stat.icon}
        />
      ))}
    </section>
  );
}
