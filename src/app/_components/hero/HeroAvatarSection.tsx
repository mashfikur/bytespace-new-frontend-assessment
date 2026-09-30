import heroAvatar from "@/assets/images/hero-avatar.png";
import Image from "next/image";
import ProgressIndicator from "./ProgressIndicator";

import StudentReviewCount from "./StudentReviewCount";

export default function HeroAvatarSection() {
  return (
    <div className="w-fit mx-auto relative">
      <Image
        src={heroAvatar}
        alt="Hero Avatar"
        quality={100}
        className="w-[600px] h-[530px] object-cover drop-shadow-2xl"
      />

      <ProgressIndicator className="absolute top-[140px] -right-20" />

      {/* info */}
      <div className="p-4 bg-white rounded-2xl flex flex-col gap-1 absolute top-[120px] -left-10">
        <p className="text-text-black font-medium font-satoshi text-base">
          UI/UX Design
        </p>
        <div className="flex items-center gap-2 text-sm text-[#82868E]">
          <p>200 Courses</p>
          <p>•</p>
          <p>1000+ Students</p>
        </div>
      </div>

      <StudentReviewCount className="absolute -left-32 bottom-24" />
    </div>
  );
}
