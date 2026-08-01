import { Card, CardContent } from "@/components/ui/card";
import StatusBadge from "./status-badge";
import BookRowActions from "./book-row-actions";

export default function BookCard({ book, fetchBooks }) {
  return (
    <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="space-y-4 p-5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-lg">{book.title}</h3>

            <p className="text-sm text-muted-foreground">{book.author}</p>
          </div>

          <BookRowActions book={book} fetchBooks={fetchBooks} />
        </div>

        <div className="flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-muted px-3 py-1 text-xs">
              {tag}
            </span>
          ))}
        </div>

        <StatusBadge status={book.status} />
      </CardContent>
    </Card>
  );
}
