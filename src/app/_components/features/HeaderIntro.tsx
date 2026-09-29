import CommonText from "@/components/common/CommonText";
import HeaderTitle from "@/components/common/HeaderTitle";
import { cn } from "@/lib/utils";

export default function HeaderIntro({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-10", className)}>
      <HeaderTitle>{title}</HeaderTitle>
      <CommonText>{description}</CommonText>
    </div>
  );
}
