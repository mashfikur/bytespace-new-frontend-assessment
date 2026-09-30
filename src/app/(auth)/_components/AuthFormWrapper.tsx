import CommonText from "@/components/common/CommonText";
import HeaderTitle from "@/components/common/HeaderTitle";
import React from "react";

export default function AuthFormWrapper({
  title,
  children,
  subtitle,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-15 bg-white rounded-[24px] w-full">
      <div className="mb-8">
        <CommonText className="text-primary-blue">{subtitle}</CommonText>
        <HeaderTitle>{title}</HeaderTitle>
      </div>

      <div>{children}</div>
    </div>
  );
}
