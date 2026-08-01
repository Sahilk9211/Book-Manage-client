import BookCard from "./book-card";

export default function BooksMobileList({ books, fetchBooks, fetchDashboard }) {
  return (
    <div className="space-y-4">
      {books.map((book) => (
        <BookCard key={book._id} book={book} fetchBooks={fetchBooks} />
      ))}
    </div>
  );
}
