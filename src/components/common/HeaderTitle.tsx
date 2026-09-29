import { cn } from "@/lib/utils";
import React from "react";

export default function HeaderTitle({
  children,
  classname,
  size = "lg",
}: {
  children: React.ReactNode;
  classname?: string;
  size?: "sm" | "lg";
}) {
  return (
    <div
      className={cn(
        "font-poppins font-semibold text-text-black tracking-[-1px]",
        size === "lg" ? "text-[44px]" : "text-[36px]",
        classname,
      )}
    >
      {children}
    </div>
  );
}
