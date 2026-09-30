import CommonButton from "@/components/common/CommonButton";
import CommonText from "@/components/common/CommonText";
import Container from "@/components/common/Container";
import HeaderTitle from "@/components/common/HeaderTitle";
import PatternBg from "@/components/common/PatternBg";

export default function Creator() {
  return (
    <div className="py-21 relative">
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

          <CommonButton label="Join as a creator"/>
        </div>
      </Container>
    </div>
  );
}
