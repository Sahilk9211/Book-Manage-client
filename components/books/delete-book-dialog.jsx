"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { deleteBook } from "@/services/book.service";
import { toast } from "sonner";

export default function DeleteBookDialog({
  open,
  onOpenChange,
  book,
  fetchBooks,
  fetchDashboard,
}) {
  const handleDelete = async () => {
    try {
      await deleteBook(book._id);

      await Promise.all([fetchBooks(), fetchDashboard()]);

      toast.success("Book deleted successfully");

      onOpenChange(false);
    } catch (error) {
      console.error(error);

      toast.error(error.response?.data?.message || "Failed to delete book");
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Book</AlertDialogTitle>

          <AlertDialogDescription>
            Are you sure you want to delete <strong>{book?.title}</strong>?
            <br />
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>

          <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
