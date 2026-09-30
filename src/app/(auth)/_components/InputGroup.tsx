import React, { InputHTMLAttributes } from "react";

export default function InputGroup({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: InputHTMLAttributes<HTMLInputElement>["type"];
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-regular text-text-black text-sm" htmlFor="">
        {label}
      </label>
      <input
        type={type}
        className="text-base text-black  border  px-6 py-3 rounded-[12px]"
        placeholder={placeholder}
      />
    </div>
  );
}
