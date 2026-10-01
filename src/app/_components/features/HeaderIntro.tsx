import CommonText from "@/components/common/CommonText";
import HeaderTitle from "@/components/common/HeaderTitle";
import { cn } from "@/lib/utils";
import { RevealItem } from "@/components/animations/Reveal";

export default function HeaderIntro({
  title,
  description,
  className,
  children,
}: {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-10", className)}>
      <RevealItem blur={false}>
        <HeaderTitle>{title}</HeaderTitle>
      </RevealItem>
      <RevealItem blur={false}>
        <CommonText>{children || description}</CommonText>
      </RevealItem>
    </div>
  );
}
