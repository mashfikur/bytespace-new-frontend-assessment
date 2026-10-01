"use client";

import CommonText from "@/components/common/CommonText";
import Container from "@/components/common/Container";
import HeaderTitle from "@/components/common/HeaderTitle";

import Categories from "../_components/discover/Categories";
import { useState } from "react";
import SkillsSection from "../_components/discover/SkillsSection";
import Features from "../_components/discover/Features";
import { RevealGroup, RevealItem } from "@/components/animations/Reveal";

export default function Discover() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Featured");

  return (
    <div className="py-20">
      <Container>
        <div className="">
          <RevealGroup
            className="flex flex-col gap-4  w-full max-w-4/5 mx-auto"
            inView
          >
            <RevealItem blur={false}>
              <HeaderTitle size="lg" classname="text-center">
                Discover Your Passion, <br /> Build Your Skills
              </HeaderTitle>
            </RevealItem>
            <RevealItem blur={false}>
              <CommonText className="text-center" version="light">
                At Bytespace Courses, we bring you closer to life-changing
                knowledge. Explore a variety of courses across different fields,
                from technology to the arts, and make a difference in your
                career and life.
              </CommonText>
            </RevealItem>
          </RevealGroup>

          {/* category tabs */}
          <Categories
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <SkillsSection selectedCategory={selectedCategory} />

          <Features />
        </div>
      </Container>
    </div>
  );
}
