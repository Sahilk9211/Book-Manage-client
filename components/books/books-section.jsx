"use client";

import BooksTable from "./books-table";
import BooksMobileList from "./books-mobile-list";
import BooksEmptyState from "./books-empty-state";
import BooksSkeleton from "./books-skeleton";

export default function BooksSection({
  books,
  loading = true,
  fetchBooks,
  fetchDashboard,
}) {
  if (loading) {
    return <BooksSkeleton />;
  }

  if (!books.length) {
    return <BooksEmptyState />;
  }

  return (
    <>
      <div className="hidden md:block">
        <BooksTable
          books={books}
          fetchBooks={fetchBooks}
          fetchDashboard={fetchDashboard}
        />
      </div>

      <div className="md:hidden">
        <BooksMobileList
          books={books}
          fetchBooks={fetchBooks}
          fetchDashboard={fetchDashboard}
        />
      </div>
    </>
  );
}
