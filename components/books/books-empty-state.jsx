import { BookOpen, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BooksEmptyState() {
  return (
    <div className="rounded-xl border border-dashed p-12">
      <div className="flex flex-col items-center text-center">
        <div className="rounded-full bg-primary/10 p-4">
          <BookOpen className="h-10 w-10 text-primary" />
        </div>

        <h2 className="mt-6 text-2xl font-semibold">No books yet</h2>

        <p className="mt-2 max-w-sm text-muted-foreground">
          Start building your personal library by adding your first book.
        </p>

        <Button className="mt-8">
          <Plus className="mr-2 h-4 w-4" />
          Add Book
        </Button>
      </div>
    </div>
  );
}
