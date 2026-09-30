import { cn } from "@/lib/utils";

export default function PatternBg({ classNames }: { classNames?: string }) {
  return (
    <div
      className={cn("absolute inset-0 -z-10 w-full h-full", classNames)}
      style={{
        background: "#003be2",
        backgroundImage: `
      linear-gradient(to right, rgba(245, 245, 246, 0.15) 2.5px, transparent 2.5px),
      linear-gradient(to bottom, rgba(245, 245, 246, 0.15) 2.5px, transparent 2.5px)
    `,
        backgroundSize: "120px 120px",
      }}
    ></div>
  );
}
