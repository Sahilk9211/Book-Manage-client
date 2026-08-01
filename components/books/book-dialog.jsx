"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import BookForm from "./book-form";

export default function BookDialog({
  open,
  onOpenChange,
  mode = "create",
  book,
}) {
  const isEdit = mode === "edit";

  const handleSubmit = (data) => {
    console.log(data);

    onOpenChange(false);
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
              status: "Want To Read",
            }
          }
          submitLabel={isEdit ? "Update Book" : "Save Book"}
          onSubmit={handleSubmit}
        />
      </DialogContent>
    </Dialog>
  );
}
