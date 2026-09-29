import logo1 from "@/assets/icons/logo/logo-1.png";
import logo2 from "@/assets/icons/logo/logo-2.png";
import logo3 from "@/assets/icons/logo/logo-3.png";
import logo4 from "@/assets/icons/logo/logo-4.png";
import Image from "next/image";

import Marquee from "react-fast-marquee";

export default function BrandCarousel() {
  const list = [logo1, logo2, logo3, logo4];
  return (
    <div className="py-20 bg-[#f5f5f6]">
      <Marquee autoFill>
        {list.map((item, index) => (
          <Image
            key={index}
            src={item}
            alt="logo"
            className="mx-20 w-[180px]"
          />
        ))}
      </Marquee>
    </div>
  );
}
