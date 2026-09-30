import { cn } from "@/lib/utils";
import { IoStar } from "react-icons/io5";
import GroupAvatar from "./GroupAvatar";

export default function StudentReviewCount({
  className,
  maxCount,
  count = "2K",
  bgColor = "white",
  countBgColor = "lime",
}: {
  className?: string;
  maxCount?: number;
  count?: string;
  bgColor?: "white" | "lime";
  countBgColor?: "lime" | "black";
}) {
  return (
    <div
      className={cn(
        " p-4 rounded-2xl flex flex-col  gap-4 ",
        className,
        bgColor === "white" ? "bg-white" : "bg-secondary-lime",
      )}
    >
      <div className="flex flex-col gap-1">
        <p className="text-text-black text-base font-medium">Happy Students</p>
        <div className="flex items-center gap-1.5">
          <p className="text-text-black text-sm">
            4.5 <span className="text-[#82868E]">(240)</span>
          </p>
          <IoStar
            color={bgColor === "white" ? "#d4fb20" : "#003be2"}
            size={20}
          />
        </div>
      </div>
      <GroupAvatar count={count} maxCount={maxCount} bgColor={countBgColor} />
    </div>
  );
}
