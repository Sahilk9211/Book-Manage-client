import { BookOpen, BookMarked, CheckCircle2, Clock3 } from "lucide-react";

export const dashboardStats = [
  {
    id: 1,
    title: "Total Books",
    value: 18,
    subtitle: "+2 this month",
    icon: BookMarked,
  },
  {
    id: 2,
    title: "Reading",
    value: 4,
    subtitle: "Active now",
    icon: BookOpen,
  },
  {
    id: 3,
    title: "Completed",
    value: 10,
    subtitle: "Finished",
    icon: CheckCircle2,
  },
  {
    id: 4,
    title: "Want to Read",
    value: 4,
    subtitle: "Next queue",
    icon: Clock3,
  },
];
