"use client";

import { useState } from "react";
import { X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function TagInput({ value = [], onChange }) {
  const [input, setInput] = useState("");

  const addTag = () => {
    const tag = input.trim();

    if (!tag) return;

    if (value.includes(tag)) {
      setInput("");
      return;
    }

    onChange([...value, tag]);

    setInput("");
  };

  const removeTag = (tag) => {
    onChange(value.filter((item) => item !== tag));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag();
    }

    if (e.key === "Backspace" && !input && value.length) {
      removeTag(value[value.length - 1]);
    }
  };

  return (
    <div className="rounded-md border p-3">
      <div className="mb-3 flex flex-wrap gap-2">
        {value.map((tag) => (
          <Badge key={tag} variant="secondary" className="gap-1">
            {tag}

            <button type="button" onClick={() => removeTag(tag)}>
              <X className="h-3 w-3" />
            </button>
          </Badge>
        ))}
      </div>

      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type and press Enter..."
        className="border-0 p-0 shadow-none focus-visible:ring-0"
      />
    </div>
  );
}
