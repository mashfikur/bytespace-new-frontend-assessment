import Container from "@/components/common/Container";
import HeaderIntro from "../_components/features/HeaderIntro";

import heroAvatar from "@/assets/images/hero-avatar.png";
import Image from "next/image";
import Stats from "../_components/features/Stats";

export default function PlatformFeatures() {
  return (
    <div className="py-33 bg-[#FAFAFA] relative">
      <Container>
        <div>
          {/* first section */}
          <div className="flex items-center gap-16">
            <div className="space-y-10">
              <HeaderIntro
                title="Your Path to Professional Growth Starts Here!"
                description="Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need."
              />

              <Stats />
            </div>
            <div>
              <Image
                src={heroAvatar}
                alt="hero"
                className="min-w-[570px] max-w-[570px] h-[540px] object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
