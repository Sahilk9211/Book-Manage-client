"use client";

import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import TagInput from "./tag-input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { BOOK_STATUS } from "@/constants/book-status";

export default function BookForm({
  defaultValues,
  onSubmit,
  submitLabel = "Save Book",
}) {
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues,
  });

  const status = watch("status");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Title */}

      <div className="space-y-2">
        <Label>Title</Label>

        <Input placeholder="Atomic Habits" {...register("title")} />
      </div>

      {/* Author */}

      <div className="space-y-2">
        <Label>Author</Label>

        <Input placeholder="James Clear" {...register("author")} />
      </div>

      {/* Tags */}

      <div className="space-y-2">
        <Label>Tags</Label>

        <Input placeholder="Programming, Productivity" {...register("tags")} />
      </div>

      {/* Status */}

      <div className="space-y-2">
        <Label>Status</Label>

        <Select
          value={status}
          onValueChange={(value) => setValue("status", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>

          <SelectContent>
            {BOOK_STATUS.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button className="w-full" type="submit">
        {submitLabel}
      </Button>
    </form>
  );
}
