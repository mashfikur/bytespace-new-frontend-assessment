import heroAvatar from "@/assets/images/hero-avatar.png";
import Image from "next/image";
import LearningProgress from "./LearningProgress";
import GroupAvatar from "./GroupAvatar";
import { IoStar } from "react-icons/io5";

export default function HeroAvatarSection() {
  return (
    <div>
      <div className="w-fit mx-auto relative">
        <Image
          src={heroAvatar}
          alt="Hero Avatar"
          quality={100}
          className="w-[600px] h-[530px] object-cover drop-shadow-2xl"
        />

        <LearningProgress className="absolute top-[140px] -right-20" />

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

        <div className="bg-white p-4 rounded-2xl flex flex-col  gap-4 absolute -left-32 bottom-24">
          <div className="flex flex-col gap-1">
            <p className="text-text-black text-base font-medium">
              Happy Students
            </p>
            <div className="flex items-center gap-1.5">
              <p className="text-text-black text-sm">
                4.5 <span className="text-[#82868E]">(240)</span>
              </p>
              <IoStar color="#d4fb20" size={20} />
            </div>
          </div>
          <GroupAvatar count={"2K"} />
        </div>
      </div>
    </div>
  );
}
