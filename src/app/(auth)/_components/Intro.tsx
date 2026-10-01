import React from "react";
import { RevealGroup, RevealItem } from "@/components/animations/Reveal";

export default function Intro({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <RevealGroup className="space-y-4 text-white max-w-118">
      <RevealItem blur={false}>
        <h1 className="text-xl font-poppins font-medium ">{title}</h1>
      </RevealItem>

      <RevealItem blur={false}>
        <p className="text-lg text-white ">{subtitle}</p>
      </RevealItem>
    </RevealGroup>
  );
}
