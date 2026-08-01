"use client";

import { useEffect, useState } from "react";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import StatsGrid from "@/components/dashboard/stats-grid";
import BooksToolbar from "@/components/books/books-toolbar";

import { dummyBooks } from "@/constants/dummy-books";
import BooksSection from "@/components/books/books-section";

import { getBooks } from "@/services/book.service";

export default function DashboardPage() {
  const [books, setBooks] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    try {
      setLoading(true);

      const response = await getBooks();

      setBooks(response.books);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <>
      <DashboardHeader fetchBooks={fetchBooks} />

      <StatsGrid />

      <BooksToolbar />

      <BooksSection books={books} loading={loading} />
    </>
  );
}
