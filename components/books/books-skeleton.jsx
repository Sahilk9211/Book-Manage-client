import { Skeleton } from "@/components/ui/skeleton";

export default function BooksSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="rounded-xl border p-5">
          <Skeleton className="h-6 w-52" />

          <Skeleton className="mt-4 h-4 w-40" />

          <Skeleton className="mt-5 h-8 w-24" />
        </div>
      ))}
    </div>
  );
}
