import React from "react";

export default function Intro({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="space-y-4 text-white max-w-118">
      <h1 className="text-xl font-poppins font-medium ">{title}</h1>

      <p className="text-lg text-white ">{subtitle}</p>
    </div>
  );
}
