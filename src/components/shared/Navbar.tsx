"use client";

import Image from "next/image";
import navLogo from "@/assets/images/nav-logo.png";
import Container from "@/components/common/Container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineShoppingBag } from "react-icons/md";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Creators", href: "/creators" },
  ];
  const navLinks2 = [
    { name: "Sign In", href: "/login" },
    { name: "Join Us", href: "/sign-up" },
  ];

  const pathname = usePathname();

  return (
    <nav className="absolute inset-0 bg-transparent w-full z-100">
      <Container>
        <div className="py-9 flex items-center justify-between">
          <Link href={"/"}>
            <Image src={navLogo} alt="navbar-logo" className="w-42.5" />
          </Link>

          <div className="flex gap-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-white duration-300 ease-in-out ${isActive ? "font-medium" : "font-light"}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="flex gap-x-6 items-center">
            {navLinks2.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-white duration-300 ease-in-out ${isActive ? "font-medium" : "font-light"}`}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link href={"/"} className="w-fit h-fit">
              <MdOutlineShoppingBag size={24} color="#fff" />
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}
