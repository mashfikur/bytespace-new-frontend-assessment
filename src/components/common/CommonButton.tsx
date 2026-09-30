import { cn } from "@/lib/utils";

export default function CommonButton({
  label,
  onClick,
  className,
}: {
  label: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full cursor-pointer text-text-black bg-secondary-lime px-6 py-3 text-lg font-medium font-satoshi",
        className,
      )}
    >
      {label}
    </button>
  );
}
