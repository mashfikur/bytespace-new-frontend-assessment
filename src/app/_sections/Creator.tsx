import CommonButton from "@/components/common/CommonButton";
import CommonText from "@/components/common/CommonText";
import Container from "@/components/common/Container";
import HeaderTitle from "@/components/common/HeaderTitle";
import PatternBg from "@/components/common/PatternBg";

// illustrations
import art1 from "@/assets/images/hero-artwork/art-1.svg";
import art3 from "@/assets/images/hero-artwork/art-3.svg";
import art4 from "@/assets/images/hero-artwork/art-4.svg";
import art7 from "@/assets/images/hero-artwork/art-7.svg";
import art6 from "@/assets/images/hero-artwork/art-6.svg";
import Image from "next/image";

export default function Creator() {
  return (
    <div className="py-21 relative overflow-hidden">
      {/* background */}
      <PatternBg />

      <Container>
        <div className="flex flex-col items-center gap-10">
          <HeaderTitle classname="text-white text-center">
            Unlock Your Potential as a <br /> Creator with ByteSpace
          </HeaderTitle>

          <CommonText className="text-white text-center max-w-4/5 font-light">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </CommonText>

          <CommonButton label="Join as a creator" />
        </div>
      </Container>

      {/* illustrations */}
      <Image
        src={art1}
        alt="artwork-1"
        className="absolute bottom-[35%] translate-y-[-35%] left-0 -z-1"
      />
      <Image
        src={art4}
        alt="artwork-1"
        className="absolute top-[1%] left-[10%] -z-1  scale-75"
      />
      <Image
        src={art6}
        alt="artwork-2"
        className="absolute bottom-[35%] -translate-y-[35% right-0 -z-1 scale-75"
      />
      <Image
        src={art7}
        alt="artwork-2"
        className="absolute top-[10%] right-[15%] -z-1 scale-70"
      />
      <Image
        src={art3}
        alt="artwork-3"
        className="absolute -bottom-1/5 left-0 -z-1"
      />
      <Image
        src={art1}
        alt="artwork-4"
        className="absolute  bottom-[-20%] right-0 -z-1 -rotate-60"
      />
    </div>
  );
}
