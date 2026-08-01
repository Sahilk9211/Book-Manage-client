import { Library, BookOpen, CheckCircle2, Clock3 } from "lucide-react";

import StatCard from "./stat-card";

export default function StatsGrid({ stats }) {
  const dashboardStats = [
    {
      id: 1,
      title: "Total Books",
      value: stats?.totalBooks ?? 0,
      subtitle: "Books in your library",
      icon: Library,
    },
    {
      id: 2,
      title: "Reading",
      value: stats?.reading ?? 0,
      subtitle: "Currently reading",
      icon: BookOpen,
    },
    {
      id: 3,
      title: "Completed",
      value: stats?.completed ?? 0,
      subtitle: "Finished books",
      icon: CheckCircle2,
    },
    {
      id: 4,
      title: "Want to Read",
      value: stats?.wantToRead ?? 0,
      subtitle: "Reading queue",
      icon: Clock3,
    },
  ];

  return (
    <section className="mb-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {dashboardStats.map((stat) => (
        <StatCard key={stat.id} {...stat} />
      ))}
    </section>
  );
}
