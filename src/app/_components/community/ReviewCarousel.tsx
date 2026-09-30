const ReviewData = [
  {
    id: "testimonial-1",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatarUrl: "https://randomuser.me/api/portraits/women/17.jpg",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    id: "testimonial-2",
    name: "James L.",
    role: "Lifelong Learner",
    avatarUrl: "https://randomuser.me/api/portraits/men/36.jpg",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    id: "testimonial-3",
    name: "Alex B.",
    role: "Inspired Creator",
    avatarUrl: "https://randomuser.me/api/portraits/men/64.jpg",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
  {
    id: "testimonial-4",
    name: "Mark T.",
    role: "Enthusiastic Learner",
    avatarUrl: "https://randomuser.me/api/portraits/men/38.jpg",
    quote:
      "ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
];

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ReviewCard from "./ReviewCard";

export default function ReviewCarousel() {
  return (
    <div>
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="pb-5 -ml-10">
          {ReviewData.map((data) => {
            return (
              <CarouselItem key={data.id} className="basis-[33%] flex pl-10">
                <ReviewCard data={data} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
