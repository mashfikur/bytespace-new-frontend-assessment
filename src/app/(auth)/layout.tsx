import Container from "@/components/common/Container";
import PatternBg from "@/components/common/PatternBg";

import logo from "@/assets/images/top-bar-logo.svg";
import Link from "next/link";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen relative auth_layout pb-10">
      <PatternBg />

      {/* content */}
      <div className="relative z-10">
        <Container>
          {/* top bar */}
          <div className="py-11">
            <Link href={"/"}>
              <Image src={logo} alt="logo" />
            </Link>
          </div>

          {children}
        </Container>
      </div>

      <Toaster position="top-center" />
    </div>
  );
}
