export type SkillCardType = {
  id: number;
  title: string;
  instructor: string;
  image: string;
  rating: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  lessons: number;
  duration: string;
  comments: number;
  price: number;
  priceType: "lifetime";
  students: number;
  categories: string[];
};
