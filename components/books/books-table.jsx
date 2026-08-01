import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import StatusBadge from "./status-badge";
import BookRowActions from "./book-row-actions";

export default function BooksTable({ books, fetchBooks, fetchDashboard }) {
  return (
    <div className="overflow-hidden rounded-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>

            <TableHead>Author</TableHead>

            <TableHead>Tags</TableHead>

            <TableHead>Status</TableHead>

            <TableHead className="w-16" />
          </TableRow>
        </TableHeader>

        <TableBody>
          {books.map((book) => (
            <TableRow key={book._id}>
              <TableCell className="font-medium">{book.title}</TableCell>

              <TableCell>{book.author}</TableCell>

              <TableCell>{book.tags.join(", ")}</TableCell>

              <TableCell>
                <StatusBadge status={book.status} />
              </TableCell>

              <TableCell>
                <BookRowActions
                  book={book}
                  fetchBooks={fetchBooks}
                  fetchDashboard={fetchDashboard}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
