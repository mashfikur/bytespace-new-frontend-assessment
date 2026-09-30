import navLogoDark from "@/assets/images/nav-logo-dark.png";
import Image from "next/image";
import Container from "../common/Container";
import Link from "next/link";
import SearchBar from "@/app/_components/SearchBar";

export default function Footer() {
  const footerLinks = [
    ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
    ["Development", "Marketing", "Photography", "Finance", "Sport"],
    ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
  ];
  const bottomLinks = ["Privacy Policy", "Terms of Service", "Contact Us"];

  return (
    <footer className="py-20 border-t-2 bg-white">
      <Container>
        <div className="flex  ustify-between gap-x-28 pb-30">
          <div className="min-w-[40%] max-w-[40%] flex flex-col gap-4">
            <Link href={"/"}>
              <Image src={navLogoDark} alt="Nav Logo Dark" className="w-42" />
            </Link>
            <p className="text-sm text-text-black font-normal">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <SearchBar
              hasIcon={false}
              placeholder="Enter your email"
              size="compact"
              className="has-[[data-slot=input-group-control]:focus-visible]:border-gray"
              containerClassName="pt-5"
            />
            <div>
              <p className="text-xs text-text-black">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>
          </div>

          <div className="flex items-start justify-between gap-4 w-full">
            {footerLinks.map((group, idx) => (
              <ul
                key={idx}
                className="text-sm font-normal text-text-black flex flex-col gap-y-4"
              >
                {group.map((link, id) => (
                  <li
                    key={id}
                    className="cursor-pointer relative after:w-0 after:h-0.5 after:rounded-lg after:bg-primary-blue after:absolute after:-bottom-1 after:left-0 after:duration-200 after:ease-in-out hover:after:w-full w-fit"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="pt-5.5 border-t-2 flex justify-between items-center text-sm text-text-black">
          <div>
            <p>@ 2023 ByteSpace. All rights reserved.</p>
          </div>

          <ul className="flex gap-x-6 ">
            {bottomLinks.map((item, idx) => (
              <li key={idx} className="cursor-pointer duration-300 ease-in-out">
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
