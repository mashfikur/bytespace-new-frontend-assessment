import BrandCarousel from "@/app/_sections/BrandCarousel";
import Discover from "@/app/_sections/Discover";
import Hero from "@/app/_sections/Hero";
import PlatformFeatures from "@/app/_sections/PlatformFeatures";
import Creator from "@/app/_sections/Creator";
import Community from "@/app/_sections/Community";
import SharedRoute from "@/components/shared/SharedRoute";

export default function Home() {
  return (
    <>
      <SharedRoute>
        <Hero />
        <BrandCarousel />
        <Discover />
        <PlatformFeatures />
        <Creator />
        <Community />
      </SharedRoute>
    </>
  );
}
