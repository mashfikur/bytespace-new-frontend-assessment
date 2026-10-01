import Container from "@/components/common/Container";
import HeaderIntro from "../_components/features/HeaderIntro";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import heroAvatar from "@/assets/images/hero-avatar.png";
import heroAvatar2 from "@/assets/images/hero-avatar-2.png";
import Image from "next/image";
import Stats from "../_components/features/Stats";

import limeCircleBg from "@/assets/images/lime-circle-gradient-big.svg";
import blueCircleBg from "@/assets/images/blue-circle-gradient-big.svg";
import ProgressIndicator from "../_components/hero/ProgressIndicator";
import SkillCard from "../_components/discover/SkillCard";
import { SkillCardType } from "@/lib/types";

import artWork1 from "@/assets/images/hero-artwork/art-1.svg";
import StudentReviewCount from "../_components/hero/StudentReviewCount";
import { cn } from "@/lib/utils";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/components/animations/Reveal";

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
  const sectionStyle = `flex items-center gap-16`;

  const heroImageStyle = `min-w-[570px] max-w-[570px] h-[540px] object-contain relative z-5 drop-shadow-2xl`;

  const gradientStyle = `absolute rounded-full z-0 pointer-none`;

  const benefits = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
  ];

  return (
    <div className="py-33 bg-[#FAFAFA] relative overflow-hidden">
      <Container className="z-10 relative">
        <div className="flex flex-col gap-18">
          {/* first section */}
          <div className={sectionStyle}>
            <RevealGroup className="space-y-10" inView>
              <HeaderIntro
                title="Your Path to Professional Growth Starts Here!"
                description="Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need."
              />

              <RevealItem blur={false}>
                <Stats />
              </RevealItem>
            </RevealGroup>
            <Reveal className="relative" inView>
              <div className="w-[370px] absolute -top-10 left-0 z-2">
                <SkillCard data={cardInfo} />
              </div>
              <Image src={heroAvatar} alt="hero" className={heroImageStyle} />

              <ProgressIndicator className="absolute top-50 -right-8 z-10" />

              <Image
                src={artWork1}
                alt="art work"
                className="absolute top-10 -right-5 size-[180px] object-contain z-15 -rotate-60 drop-shadow-2xl"
              />
            </Reveal>
          </div>

          {/* second section */}
          <div className={sectionStyle + " flex-row-reverse"}>
            <RevealGroup className="space-y-10" inView>
              <HeaderIntro title="Create & Manage Courses Easily.">
                <span className="font-bold text-text-black">ByteSpace</span>{" "}
                supports individuals or entities in the creation, publication,
                and administration of educational courses.{" "}
              </HeaderIntro>

              <div className="flex flex-col gap-4">
                {benefits.map((benefit, index) => (
                  <RevealItem
                    key={index}
                    className="flex items-center gap-2"
                    blur={false}
                  >
                    <span className="text-primary-blue text-xl">
                      <IoCheckmarkCircleSharp />
                    </span>
                    <p className="text-text-black text-lg font-medium">
                      {benefit}
                    </p>
                  </RevealItem>
                ))}
              </div>
            </RevealGroup>
            <Reveal className="relative" inView>
              <Image src={heroAvatar2} alt="hero2" className={heroImageStyle} />

              <ProgressIndicator
                className="absolute top-20 left-10 z-1"
                bgColor="blue"
                title="Total Revenue"
                percentage={55}
                heroText="$120.29"
                heroTextVersion="sm"
                subtitle="July 1-28"
                hasSpace
                width="compact"
              />
              <ProgressIndicator
                className="absolute bottom-40 left-5 z-1"
                bgColor="blue"
                title="Year to Date"
                showProgress={false}
                heroText="$1,200.38"
                heroTextVersion="sm"
                subtitle="2023"
                hasSpace
                buttonText="+12$"
                width="fit"
              />

              <Image
                src={artWork1}
                alt="art work"
                className="absolute top-30 right-5 size-[180px] object-contain z-15 drop-shadow-2xl"
              />

              <StudentReviewCount
                className="absolute right-0 bottom-12 z-20 drop-shadow-2xl"
                maxCount={6}
              />
            </Reveal>
          </div>
        </div>
      </Container>

      {/* gradient bg */}
      <Image
        src={limeCircleBg}
        alt="lime circle bg"
        className={cn(gradientStyle, "-top-90 left-30 size-[1140px]")}
      />
      <Image
        src={blueCircleBg}
        alt="blue circle bg"
        className={cn(gradientStyle, "-top-90 -right-90 size-[1140px]")}
      />
      <Image
        src={limeCircleBg}
        alt="lime circle bg"
        className={cn(gradientStyle, "bottom-0 -left-50 size-[670px]")}
      />
      <Image
        src={blueCircleBg}
        alt="blue circle bg"
        className={cn(gradientStyle, "-bottom-60 -right-100 size-[1140px]")}
      />
    </div>
  );
}
