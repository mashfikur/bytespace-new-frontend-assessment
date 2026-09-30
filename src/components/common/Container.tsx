import { cn } from "@/lib/utils";
import React from "react";

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("max-w-300 mx-auto", className)}>{children}</div>;
}

export default Container;
