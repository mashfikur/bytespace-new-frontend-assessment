import heroAvatar from "@/assets/images/hero-avatar.png";
import Image from "next/image";
import ProgressIndicator from "./ProgressIndicator";

import StudentReviewCount from "./StudentReviewCount";
import { RevealGroup, RevealItem } from "@/components/animations/Reveal";

export default function HeroAvatarSection() {
  return (
    <RevealGroup className="w-fit mx-auto relative" delay={1.2} stagger={0.2}>
      <RevealItem>
        <Image
          src={heroAvatar}
          alt="Hero Avatar"
          quality={100}
          className="w-[600px] h-[530px] object-cover drop-shadow-2xl"
        />
      </RevealItem>

      {/* info */}
      <RevealItem className="absolute top-[120px] -left-10">
        <div className="p-4 bg-white rounded-2xl flex flex-col gap-1">
          <p className="text-text-black font-medium font-satoshi text-base">
            UI/UX Design
          </p>
          <div className="flex items-center gap-2 text-sm text-[#82868E]">
            <p>200 Courses</p>
            <p>•</p>
            <p>1000+ Students</p>
          </div>
        </div>
      </RevealItem>

      <RevealItem className="absolute top-[140px] -right-20">
        <ProgressIndicator />
      </RevealItem>

      <RevealItem className="absolute -left-32 bottom-24">
        <StudentReviewCount />
      </RevealItem>
    </RevealGroup>
  );
}
