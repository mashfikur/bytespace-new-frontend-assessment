import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
export default function LearningProgress({
  percentage = 55,
  className,
}: {
  percentage?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-[240px] rounded-[16px] p-4 bg-white text-black flex flex-col ",
        className,
      )}
    >
      <p className="font-satoshi text-sm font-medium">Learning Progress</p>
      <p className="font-poppins text-[48px] font-semibold">{percentage}%</p>

      <Progress
        value={percentage}
        className="[&_[data-slot=progress-track]]:bg-[#f6f6f6] [&_[data-slot=progress-indicator]]:bg-secondary-lime"
      />
    </div>
  );
}
