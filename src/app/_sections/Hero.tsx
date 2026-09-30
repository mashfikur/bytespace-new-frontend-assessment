import Container from "@/components/common/Container";
import SearchBar from "@/app/_components/SearchBar";
import HeroAvatarSection from "@/app/_components/hero/HeroAvatarSection";

// illustrations
import art1 from "@/assets/images/hero-artwork/art-1.svg";
import art2 from "@/assets/images/hero-artwork/art-2.svg";
import art3 from "@/assets/images/hero-artwork/art-3.svg";
import art4 from "@/assets/images/hero-artwork/art-4.svg";
import art5 from "@/assets/images/hero-artwork/art-5.svg";
import Image from "next/image";
import PatternBg from "@/components/common/PatternBg";

export default function Hero() {
  return (
    <div className=" z-10 text-white relative overflow-hidden">
      {/* background */}
      <PatternBg />

      <div className="relative z-30">
        <Container>
          <div className="relative">
            <div className="mt-30 z-10 relative pb-10 pt-12 space-y-8">
              <h1 className="text-[72px] font-semibold font-poppins text-center leading-24">
                Get Access to Hundreds <br /> Courses Available
              </h1>

              <p className="text-lg text-center">
                Unlock your creativity, gain valuable knowledge, and grow your
                business with our wide range of courses.
              </p>

              <SearchBar />
            </div>

            {/* hero avatar and banner */}
            <HeroAvatarSection />

            {/* circle */}
            <div className="absolute bottom-[-70%] left-0 -z-10  bg-[#CBFC01] rounded-full w-full aspect-square half_circle"></div>

            {/* art illustrations */}
            <Image
              src={art4}
              alt="artwork-3"
              className="absolute top-1/2 -translate-y-1/2 left-0 w-[175px]"
            />
            <Image
              src={art5}
              alt="artwork-3"
              className="absolute top-1/2 -translate-y-1/2 right-0"
            />
            <Image
              src={art3}
              alt="artwork-3"
              className="absolute bottom-[4%] -left-32"
            />
            <Image
              src={art4}
              alt="artwork-4"
              className="absolute bottom-[4%] -right-40"
            />
          </div>
        </Container>
      </div>

      {/* art illustrations */}
      <Image
        src={art1}
        alt="artwork-1"
        className="absolute top-[25%] -left-20 -z-1"
        quality={100}
      />
      <Image
        src={art2}
        alt="artwork-2"
        className="absolute top-[25%] -right-32"
      />
    </div>
  );
}
