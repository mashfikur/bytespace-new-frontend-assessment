import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

export default function ProgressIndicator({
  percentage = 55,
  className,
  title = "Learning Progress",
  bgColor = "white",
  heroText,
  heroTextVersion,
  subtitle,
  hasSpace,
  width = "large",
  showProgress = true,
  buttonText,
}: {
  percentage?: number;
  className?: string;
  title?: string;
  bgColor?: "white" | "blue";
  heroText?: string;
  heroTextVersion?: "sm" | "lg";
  subtitle?: string;
  hasSpace?: boolean;
  width?: "large" | "compact"|"fit";
  showProgress?: boolean;
  buttonText?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[16px] p-4  flex flex-col",
        hasSpace && "gap-2",
        width === "large" && "w-60",
        width === "compact" && "w-50",
        width === "fit" && "w-fit",
        bgColor === "white" && "bg-white text-text-black",
        bgColor === "blue" && "bg-primary-blue text-white",
        className,
      )}
    >
      <div>
        <p className="font-satoshi text-sm font-medium">{title}</p>
        {subtitle && (
          <p className="font-satoshi text-xs font-light">{subtitle}</p>
        )}
      </div>
      <p
        className={cn(
          "font-poppins  font-semibold",
          heroTextVersion === "sm" && "text-[24px]",
          !heroTextVersion && "text-[48px]",
        )}
      >
        {" "}
        {heroText ? `${heroText}` : `${percentage}%`}
      </p>

      {showProgress && (
        <Progress
          value={percentage}
          className="[&_[data-slot=progress-track]]:bg-[#f6f6f6] [&_[data-slot=progress-indicator]]:bg-secondary-lime"
        />
      )}

      {buttonText && (
        <button className="bg-secondary-lime text-text-black font-medium text-xs font-satoshi w-fit px-2.5 py-1.5 rounded-2xl">
          {buttonText}
        </button>
      )}
    </div>
  );
}
