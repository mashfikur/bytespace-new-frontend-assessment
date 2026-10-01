import CommonText from "@/components/common/CommonText";
import Container from "@/components/common/Container";
import HeaderTitle from "@/components/common/HeaderTitle";
import { RevealGroup, RevealItem } from "@/components/animations/Reveal";

// logo

import icon1 from "@/assets/icons/features/feat-1.svg";
import icon2 from "@/assets/icons/features/feat-2.svg";
import icon3 from "@/assets/icons/features/feat-3.svg";
import icon4 from "@/assets/icons/features/feat-4.svg";
import icon5 from "@/assets/icons/features/feat-5.svg";
import icon6 from "@/assets/icons/features/feat-6.svg";
import Image from "next/image";

export default function Features() {
  const list = [
    { id: 1, icon: icon1, title: "Design" },
    { id: 2, icon: icon2, title: "Development" },
    { id: 3, icon: icon3, title: "IT & Software" },
    { id: 4, icon: icon4, title: "Business" },
    { id: 5, icon: icon5, title: "Marketing" },
    { id: 6, icon: icon6, title: "Photography" },
  ];

  return (
    <div className="py-20">
      <Container>
        <div className="space-y-18 w-full">
          <RevealGroup
            className="text-center max-w-4/5 mx-auto space-y-4"
            inView
          >
            <RevealItem blur={false}>
              <HeaderTitle size="sm">
                Explore Diverse Learning Paths at Bytespace
              </HeaderTitle>
            </RevealItem>
            <RevealItem blur={false}>
              <CommonText version="light">
                At Bytespace, we believe in empowering individuals through
                knowledge. Our diverse range of courses spans various fields,
                ensuring there&apos;s something for everyone. Unleash your
                potential and explore our carefully curated categories.
              </CommonText>
            </RevealItem>
          </RevealGroup>

          <RevealGroup
            className="flex items-center justify-between gap-8 w-full"
            stagger={0.1}
            inView
          >
            {list.map((item) => {
              return (
                <RevealItem key={item.id} className="w-full" blur={false}>
                  <div className="border border-[#CED0D3] px-6 py-9 rounded-[24px] w-full flex flex-col items-center gap-y-3">
                    <div className="size-14.5 flex items-center justify-center bg-secondary-lime rounded-full p-4">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        className="size-full"
                      />
                    </div>
                    <p className="text-xl font-medium text-text-black whitespace-nowrap">
                      {item.title}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </Container>
    </div>
  );
}
