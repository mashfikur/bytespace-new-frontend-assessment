import Container from "@/components/common/Container";
import SearchBar from "@/app/_components/SearchBar";
import HeroAvatarSection from "@/app/_components/hero/HeroAvatarSection";

export default function Hero() {
  return (
    <div className="min-h-screen relative z-10 text-white">
      {/* background */}
      <div
        className="absolute inset-0 z-0 w-full h-full"
        style={{
          background: "#003be2",
          backgroundImage: `
      linear-gradient(to right, rgba(245, 245, 246, 0.15) 2.5px, transparent 2.5px),
      linear-gradient(to bottom, rgba(245, 245, 246, 0.15) 2.5px, transparent 2.5px)
    `,
          backgroundSize: "120px 120px",
        }}
      ></div>

      <div className="relative z-30">
        <Container>
          <div className="relative overflow-hidden">
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
            <div className="relative ">
              <HeroAvatarSection />
            </div>

            {/* circle */}
            <div className="absolute -bottom-[70%] left-0 -z-10  bg-[#CBFC01] rounded-full w-full aspect-square half_circle"></div>
          </div>
        </Container>
      </div>
    </div>
  );
}
