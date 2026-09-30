import { Search } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import CommonButton from "@/components/common/CommonButton";
import { cn } from "@/lib/utils";

export default function SearchBar({
  placeholder = "Course, topic, creator",
  hasIcon = true,
  className,
  size,
  containerClassName,
}: {
  placeholder?: string;
  hasIcon?: boolean;
  size?: "normal" | "compact";
  className?: string;
  containerClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 justify-center",
        containerClassName,
      )}
    >
      <InputGroup
        className={cn(
          "max-w-115 bg-white rounded-[24px] px-3 py-6 has-[[data-slot=input-group-control]:focus-visible]:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-transparent",
          className,
        )}
      >
        <InputGroupInput
          placeholder={placeholder}
          className={cn(
            "text-black pl-3! ",
            size === "compact" ? "text-base!" : "text-lg!",
          )}
        />
        {hasIcon && (
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        )}
      </InputGroup>
      <CommonButton
        label="Search"
        className={size === "compact" ? "text-base" : "text-lg"}
      />
    </div>
  );
}
