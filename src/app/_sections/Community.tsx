import CommonText from "@/components/common/CommonText";
import Container from "@/components/common/Container";
import HeaderTitle from "@/components/common/HeaderTitle";
import ReviewCarousel from "../_components/community/ReviewCarousel";

import limeCircleBg from "@/assets/images/lime-circle-gradient-big.svg";
import blueCircleBg from "@/assets/images/blue-circle-gradient-big.svg";
import Image from "next/image";

export default function Community() {
  return (
    <div className="py-20 relative overflow-hidden">
      <Container className="relative z-20">
        <div className="flex flex-col gap-y-20">
          <div className="flex items-center justify-between gap-14">
            <HeaderTitle classname="flex-1">
              {" "}
              Discover What Our Community Is Saying{" "}
            </HeaderTitle>
            <CommonText className="flex-1">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </CommonText>
          </div>
          <ReviewCarousel />
        </div>
      </Container>

      {/* illustrations */}
      <Image
        src={limeCircleBg}
        alt="lime-circle-bg"
        className="absolute top-[-55%] right-[15%] -z-1"
      />
      <Image
        src={limeCircleBg}
        alt="lime-circle-bg"
        className="absolute top-[-5%] right-[-30%] -z-1"
      />
      <Image
        src={blueCircleBg}
        alt="blue-circle-bg"
        className="absolute bottom-[-70%] left-[-20%] -z-1"
      />
    </div>
  );
}
