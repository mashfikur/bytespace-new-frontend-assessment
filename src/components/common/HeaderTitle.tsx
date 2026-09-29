import { cn } from "@/lib/utils";
import React from "react";

export default function HeaderTitle({
  children,
  classname,
}: {
  children: React.ReactNode;
  classname?: string;
}) {
  return <div className={cn("", classname)}>{children}</div>;
}
