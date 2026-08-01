"use client";

import DashboardHeader from "@/components/dashboard/dashboard-header";
import StatsGrid from "@/components/dashboard/stats-grid";

import BooksToolbar from "@/components/books/books-toolbar";
import BooksSection from "@/components/books/books-section";

import useBooks from "@/hooks/useBooks";

const page = () => {
  const {
    books,
    dashboard,
    loading,

    search,
    setSearch,

    filters,
    setFilters,

    tagOptions,

    fetchBooks,
    fetchDashboard,
  } = useBooks();
  return (
    <>
      <BooksToolbar
        search={search}
        setSearch={setSearch}
        filters={filters}
        setFilters={setFilters}
        tagOptions={tagOptions}
      />

      <BooksSection
        books={books}
        loading={loading}
        fetchBooks={fetchBooks}
        fetchDashboard={fetchDashboard}
      />
    </>
  );
};

export default page;
