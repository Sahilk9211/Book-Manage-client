import { Card, CardContent } from "@/components/ui/card";

export default function StatCard({ title, value, subtitle, icon: Icon }) {
  return (
    <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="rounded-lg bg-primary/10 p-3">
            <Icon className="h-6 w-6 text-primary" />
          </div>

          <h2 className="text-3xl font-bold">{value}</h2>
        </div>

        <div className="mt-6">
          <h3 className="font-medium">{title}</h3>

          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </CardContent>
    </Card>
  );
}
