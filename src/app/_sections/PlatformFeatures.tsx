import Container from "@/components/common/Container";
import HeaderIntro from "../_components/features/HeaderIntro";

import heroAvatar from "@/assets/images/hero-avatar.png";
import Image from "next/image";
import Stats from "../_components/features/Stats";

import limeCircleBg from "@/assets/images/lime-circle-gradient-big.svg";
import blueCircleBg from "@/assets/images/blue-circle-gradient-big.svg";
import LearningProgress from "../_components/hero/LearningProgress";
import SkillCard from "../_components/discover/SkillCard";
import { SkillCardType } from "@/lib/types";

import artWork1 from "@/assets/images/hero-artwork/art-1.svg";

const cardInfo: SkillCardType = {
  id: 1,
  title: "Learn Figma from Basic",
  instructor: "purepearl studio",
  image:
    "https://images.unsplash.com/photo-1587355760421-b9de3226a046?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: 4.5,
  level: "Beginner",
  lessons: 17,
  duration: "2 hours 10 mins",
  comments: 59,
  price: 25,
  priceType: "lifetime",
  students: 26,
  categories: ["Featured", "UI/UX Design", "Graphic Design"],
};

export default function PlatformFeatures() {
  return (
    <div className="py-33 bg-[#FAFAFA] relative overflow-hidden">
      <Container className="z-10 relative">
        <div>
          {/* first section */}
          <div className="flex items-center gap-16">
            <div className="space-y-10">
              <HeaderIntro
                title="Your Path to Professional Growth Starts Here!"
                description="Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need."
              />

              <Stats />
            </div>
            <div className="relative">
              <div className="w-[370px] absolute -top-10 left-0 z-2">
                <SkillCard data={cardInfo} />
              </div>
              <Image
                src={heroAvatar}
                alt="hero"
                className="min-w-[570px] max-w-[570px] h-[540px] object-contain relative z-5 drop-shadow-2xl"
              />

              <LearningProgress className="absolute top-50 -right-8 z-10" />

              <Image
                src={artWork1}
                alt="art work"
                className="absolute top-10 -right-5 size-[180px] object-contain z-15 -rotate-60 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </Container>

      <Image
        src={limeCircleBg}
        alt="lime circle bg"
        className="absolute -top-90 left-40 size-[1140px] rounded-full z-0"
      />
      <Image
        src={blueCircleBg}
        alt="blue circle bg"
        className="absolute -top-90 right-[-20%] size-[1140px] rounded-full z-0"
      />
    </div>
  );
}
