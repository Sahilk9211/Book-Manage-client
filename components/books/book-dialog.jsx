"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import BookForm from "./book-form";

import { createBook, updateBook } from "@/services/book.service";
import { toast } from "sonner";

export default function BookDialog({
  open,
  onOpenChange,
  mode = "create",
  book,
  fetchBooks,
}) {
  const isEdit = mode === "edit";

  const handleSubmit = async (data) => {
    try {
      const payload = {
        ...data,
        tags:
          typeof data.tags === "string"
            ? data.tags
                .split(",")
                .map((tag) => tag.trim())
                .filter(Boolean)
            : data.tags,
      };

      await createBook(payload);

      await fetchBooks();

      toast.success("Book added successfully");

      onOpenChange(false);
    } catch (error) {
      console.error(error);

      toast.error(error.response?.data?.message);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit Book" : "Add New Book"}</DialogTitle>

          <DialogDescription>
            {isEdit
              ? "Update your book details."
              : "Add a new book to your library."}
          </DialogDescription>
        </DialogHeader>

        <BookForm
          defaultValues={
            book || {
              title: "",
              author: "",
              tags: "",
              status: "Want to Read",
            }
          }
          submitLabel={isEdit ? "Update Book" : "Save Book"}
          onSubmit={handleSubmit}
        />
      </DialogContent>
    </Dialog>
  );
}
