"use client";

import { useEffect, useMemo, useState } from "react";

import { getBooks } from "@/services/book.service";
import { getDashboard } from "@/services/dashboard.service";

export default function useBooks() {
  const [books, setBooks] = useState([]);
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [filters, setFilters] = useState({
    search: "",
    tag: "",
    status: "",
    sort: "-createdAt",
  });

  // Search Debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setFilters((prev) => ({
        ...prev,
        search,
      }));
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // Dynamic Tag Options
  const tagOptions = useMemo(() => {
    const uniqueTags = [...new Set(books.flatMap((book) => book.tags || []))];

    return [
      {
        label: "All Tags",
        value: "all",
      },
      ...uniqueTags.map((tag) => ({
        label: tag,
        value: tag,
      })),
    ];
  }, [books]);

  const fetchBooks = async () => {
    try {
      setLoading(true);

      const response = await getBooks(filters);

      setBooks(response.books);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchDashboard = async () => {
    try {
      const response = await getDashboard();

      setDashboard(response.summary);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBooks();
    fetchDashboard();
  }, []);

  useEffect(() => {
    fetchBooks();
  }, [filters]);

  return {
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
  };
}
