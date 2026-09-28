import Container from "@/components/common/Container";

export default function Home() {
  return (
    <div className="min-h-screen relative z-10">
      {/* background */}
      <div
        className="absolute inset-0 z-0 w-full h-full "
        style={{
          background: "#003be2",
          backgroundImage: `
      linear-gradient(to right, rgba(245, 245, 246, 0.15) 2px, transparent 2px),
      linear-gradient(to bottom, rgba(245, 245, 246, 0.15) 2.5px, transparent 2.5px)
    `,
          backgroundSize: "120px 120px",
        }}
      ></div>

      <Container>
        <div className="pt-30 text-white z-10 relative">
          Get Access to Hundreds Courses Available
        </div>
      </Container>
    </div>
  );
}
