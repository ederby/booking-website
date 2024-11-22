"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useState } from "react";

export default function FilterCabinList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const activeQuery = searchParams.get("capacity") ?? "all";

  function handleClick(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      <Button
        size={"all"}
        activeQuery={activeQuery}
        onClick={() => handleClick("all")}
      >
        All cabins
      </Button>
      <Button
        size={"small"}
        activeQuery={activeQuery}
        onClick={() => handleClick("small")}
      >
        1&mdash;3 guests
      </Button>

      <Button
        size={"medium"}
        activeQuery={activeQuery}
        onClick={() => handleClick("medium")}
      >
        4&mdash;7 guests
      </Button>

      <Button
        size={"large"}
        activeQuery={activeQuery}
        onClick={() => handleClick("large")}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

function Button({ onClick, size, activeQuery, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 hover:bg-primary-700 ${
        size === activeQuery && "bg-primary-700 text-primary-50"
      }`}
    >
      {children}
    </button>
  );
}
