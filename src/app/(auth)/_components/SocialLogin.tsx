import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa6";

export default function SocialLogin() {
  const buttonStyle = `p-2 border rounded-[16px] flex items-center justify-center text-2xl cursor-pointer`;
  return (
    <div className="py-18">
      <div className="flex items-center gap-x-4">
        <hr className="w-full border border-[#CED0D3]" />
        <p className="text-center text-light-gray font-normal">or</p>
        <hr className="w-full border border-[#CED0D3]" />
      </div>

      <div className="flex items-center justify-center gap-3 pt-10">
        <button className={buttonStyle}>
          <FaFacebook />
        </button>
        <button className={buttonStyle}>
          <FaGoogle />
        </button>
      </div>
    </div>
  );
}
