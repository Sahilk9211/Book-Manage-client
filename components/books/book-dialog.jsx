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

      if (mode === "edit") {
        await updateBook(book._id, payload);

        toast.success("Book updated successfully");
      } else {
        await createBook(payload);

        toast.success("Book added successfully");
      }

      await fetchBooks();

      onOpenChange(false);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
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
            book
              ? {
                  ...book,
                  tags: book.tags.join(", "),
                }
              : {
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
