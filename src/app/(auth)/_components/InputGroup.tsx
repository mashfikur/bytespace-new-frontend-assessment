import React, { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export default function InputGroup({
  label,
  type,
  placeholder,
  register,
  error,
}: {
  label: string;
  type: InputHTMLAttributes<HTMLInputElement>["type"];
  placeholder?: string;
  register?: UseFormRegisterReturn;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-regular text-text-black text-sm" htmlFor={register?.name}>
        {label}
      </label>
      <input
        id={register?.name}
        type={type}
        className="text-base text-black  border  px-6 py-3 rounded-[12px]"
        placeholder={placeholder}
        {...register}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
