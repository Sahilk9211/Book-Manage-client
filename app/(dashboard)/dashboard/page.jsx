import DashboardHeader from "@/components/dashboard/dashboard-header";
import StatsGrid from "@/components/dashboard/stats-grid";
import BooksToolbar from "@/components/books/books-toolbar";
import BooksTable from "@/components/books/books-table";

import { dummyBooks } from "@/constants/dummy-books";
import BooksMobileList from "@/components/books/books-mobile-list";
import BooksSection from "@/components/books/books-section";

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader />

      <StatsGrid />

      <BooksToolbar />

      <BooksSection books={dummyBooks} loading={false} />

      {/* <div className="hidden md:block">
        <BooksTable books={dummyBooks} />
      </div>

      <div className="md:hidden">
        <BooksMobileList books={dummyBooks} />
      </div> */}

      {/* <div className="rounded-xl border border-dashed py-24 text-center">
        <p className="text-muted-foreground">Books Table Coming Next...</p>
      </div> */}
    </>
  );
}
