import Link from "next/link";
import { BookOpen } from "lucide-react";
import { APP_NAME } from "@/constants/app";

export default function Logo() {
  return (
    <Link href="/dashboard" className="flex items-center gap-2">
      <BookOpen className="h-6 w-6 text-primary" />

      <span className="text-lg font-bold">{APP_NAME}</span>
    </Link>
  );
}
