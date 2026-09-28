import Container from "@/components/common/Container";
import SearchBar from "@/app/_components/SearchBar";

export default function Home() {
  return (
    <div className="min-h-screen relative z-10 text-white">
      {/* background */}
      <div
        className="absolute inset-0 z-0 w-full h-full"
        style={{
          background: "#003be2",
          backgroundImage: `
      linear-gradient(to right, rgba(245, 245, 246, 0.15) 2px, transparent 2px),
      linear-gradient(to bottom, rgba(245, 245, 246, 0.15) 2.5px, transparent 2.5px)
    `,
          backgroundSize: "120px 120px",
        }}
      ></div>

      <div className="relative z-30">
        <Container>
          <div className="mt-30 z-10 relative pb-10 pt-12 space-y-8">
            <h1 className="text-[72px] font-medium font-poppins text-center leading-24">
              Get Access to Hundreds <br /> Courses Available
            </h1>

            <p className="text-lg text-center">
              Unlock your creativity, gain valuable knowledge, and grow your
              business with our wide range of courses.
            </p>

            <SearchBar />
          </div>
        </Container>
      </div>
    </div>
  );
}
