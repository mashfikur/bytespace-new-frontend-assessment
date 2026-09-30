import SkillCard from "@/app/_components/discover/SkillCard";
import StudentReviewCount from "@/app/_components/hero/StudentReviewCount";
import { SkillCardType } from "@/lib/types";

import art1 from "@/assets/images/hero-artwork/art-1.svg";
import art7 from "@/assets/images/hero-artwork/art-7.svg";
import Image from "next/image";

export default function AuthBanner() {
  const cardData: SkillCardType = {
    id: 2,
    title: "Build Digital Asset",
    instructor: "purepearl studio",
    image:
      "https://images.unsplash.com/photo-1506729623306-b5a934d88b53?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    priceType: "lifetime",
    students: 26,
    categories: ["Featured", "Web Development", "Graphic Design"],
  };
  const cardData2: SkillCardType = {
    id: 3,
    title: "The Power of Big Data",
    instructor: "purepearl studio",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    priceType: "lifetime",
    students: 26,
    categories: ["Featured", "Data Science"],
  };
  return (
    <div className="relative ">
      <SkillCard data={cardData} className="max-w-90" />
      <SkillCard
        data={cardData2}
        className="max-w-90 w-90 absolute -top-25 right-0 drop-shadow-2xl"
      />

      <StudentReviewCount
        className="max-w-65 absolute -bottom-24 right-0"
        bgColor="lime"
        countBgColor="black"
      />

      <Image
        src={art1}
        alt="art-1"
        className="absolute -left-30 -top-30 scale-60"
      />
      <Image src={art7} alt="art-7" className="absolute -bottom-20" />
    </div>
  );
}
