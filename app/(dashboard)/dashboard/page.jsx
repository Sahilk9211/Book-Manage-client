"use client";

import { useEffect, useState } from "react";

import DashboardHeader from "@/components/dashboard/dashboard-header";
import StatsGrid from "@/components/dashboard/stats-grid";
import BooksToolbar from "@/components/books/books-toolbar";
import BooksSection from "@/components/books/books-section";

import { getBooks } from "@/services/book.service";
import { getDashboard } from "@/services/dashboard.service";

export default function DashboardPage() {
  const [books, setBooks] = useState([]);

  const [dashboard, setDashboard] = useState(null);

  const [loading, setLoading] = useState(true);

  const fetchDashboard = async () => {
    try {
      const data = await getDashboard();

      console.log("Data:", data.summary);
      setDashboard(data.summary);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBooks = async () => {
    try {
      setLoading(true);

      const response = await getBooks();

      setBooks(response.books);

      await fetchDashboard();
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

      <StatsGrid stats={dashboard} />

      <BooksToolbar />

      <BooksSection books={books} loading={loading} fetchBooks={fetchBooks} />
    </>
  );
}
