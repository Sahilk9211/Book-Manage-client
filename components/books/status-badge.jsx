import { Badge } from "@/components/ui/badge";

const styles = {
  Completed:
    "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",

  Reading:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",

  "Want To Read":
    "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
};

export default function StatusBadge({ status }) {
  return (
    <Badge className={styles[status]} variant="secondary">
      {status}
    </Badge>
  );
}
