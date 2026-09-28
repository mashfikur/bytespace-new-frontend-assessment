import Image from "next/image";
import navLogo from "@/assets/images/nav-logo.png";
import Container from "@/components/common/Container";

export default function Navbar() {
  return (
    <nav className="absolute inset-0 bg-transparent w-full">
      <Container>
        <div>
          <Image src={navLogo} alt="navbar-logo" className="w-[170px]" />
        </div>

        <div></div>
      </Container>
    </nav>
  );
}
