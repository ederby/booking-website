"use client";
import { useState } from "react";

export default function TextExpander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, 40).join(" ") + "...";

  return (
    <span>
      {displayText}{" "}
      <button
        onClick={() => setIsExpanded((e) => !e)}
        className="text-accent-700 border-b border-accent-700 leading-3 pb-1"
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </span>
  );
}
