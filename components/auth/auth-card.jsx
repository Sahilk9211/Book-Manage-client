import { Card, CardContent } from "@/components/ui/card";

export default function AuthCard({ children }) {
  return (
    <Card className="w-full max-w-md border shadow-sm">
      <CardContent className="space-y-8 p-8">{children}</CardContent>
    </Card>
  );
}
