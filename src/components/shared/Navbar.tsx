"use client";

import Image from "next/image";
import navLogo from "@/assets/images/nav-logo.png";
import Container from "@/components/common/Container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useState, useEffect } from "react";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 90);
    };

    const lenis = window.__lenis;
    if (lenis) {
      lenis.on("scroll", handleScroll);
    } else {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    handleScroll();

    return () => {
      if (lenis) {
        lenis.off("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <nav className="fixed inset-0 bg-transparent w-full z-100 h-fit py-9">
      <Container>
        <div
          className={`flex items-center justify-between duration-300 ease-in-out ${scrolled ? "nav_item_wrapper" : ""}`}
        >
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
