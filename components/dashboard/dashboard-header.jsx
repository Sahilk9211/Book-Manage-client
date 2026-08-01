"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";

import BookDialog from "@/components/books/book-dialog";

export default function DashboardHeader({ fetchBooks, fetchDashboard }) {
  const [open, setOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <>
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Library</h1>

          <p className="mt-2 text-muted-foreground">
            Organize your reading journey.
          </p>
        </div>

        <Button onClick={() => setOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Book
        </Button>
      </div>

      <BookDialog
        open={open}
        onOpenChange={setOpen}
        fetchBooks={fetchBooks}
        fetchDashboard={fetchDashboard}
      />
    </>
  );
}
