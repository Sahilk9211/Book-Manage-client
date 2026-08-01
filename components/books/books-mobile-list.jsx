import BookCard from "./book-card";

export default function BooksMobileList({ books }) {
  return (
    <div className="space-y-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
