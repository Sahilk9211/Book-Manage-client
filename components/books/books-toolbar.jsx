"use client";

import { Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { tagOptions, statusOptions, sortOptions } from "@/constants/filters";

export default function BooksToolbar() {
  return (
    <section className="mb-8 rounded-xl border p-5">
      <div className="flex flex-wrap items-center gap-5">
        {/* Search */}

        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <Input placeholder="Search books..." className="pl-10" />
        </div>

        {/* Tag */}

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="All Tags" />
          </SelectTrigger>

          <SelectContent>
            {tagOptions.map((tag) => (
              <SelectItem key={tag.value} value={tag.value}>
                {tag.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Status */}

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="All Status" />
          </SelectTrigger>

          <SelectContent>
            {statusOptions.map((status) => (
              <SelectItem key={status.value} value={status.value}>
                {status.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Sort */}

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Recently Added" />
          </SelectTrigger>

          <SelectContent>
            {sortOptions.map((sort) => (
              <SelectItem key={sort.value} value={sort.value}>
                {sort.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="">
          <Button variant="outline">
            <X className="mr-2 h-4 w-4" />
            Clear Filters
          </Button>
        </div>
      </div>
    </section>
  );
}
