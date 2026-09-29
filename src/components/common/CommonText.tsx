import { cn } from "@/lib/utils";
import React from "react";

export default function CommonText({
  children,
  className,
  version = "gray",
}: {
  children: React.ReactNode;
  className?: string;
  version?: "light" | "gray";
}) {
  return (
    <p
      className={cn(
        "text-lg font-satoshi ",
        version === "light" ? "text-[#82868E]" : "text-light-gray",
        className,
      )}
    >
      {children}
    </p>
  );
}
