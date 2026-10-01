"use client";

import { useEffect, useState } from "react";
import { RevealGroup, RevealItem } from "@/components/animations/Reveal";

export default function Categories({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}) {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/data/categories.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch JSON: ${res.status}`);
        }
        return res.json();
      })
      .then((jsonData) => {
        setCategories(jsonData);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <RevealGroup
      className="p-11 flex items-center gap-x-4 gap-y-5 flex-wrap justify-center"
      stagger={0.04}
      inView
    >
      {categories.map((category: string, index: number) => (
        <RevealItem key={index} blur={false}>
          <button
            onClick={() => setSelectedCategory(category)}
            className={`py-3 px-4 text-base font-medium duration-300 ease-in-out rounded-[24px] cursor-pointer ${selectedCategory === category ? "bg-secondary-lime text-text-black" : "bg-[#F5F5F6] text-light-gray"}`}
          >
            {category}
          </button>
        </RevealItem>
      ))}

      <RevealItem blur={false}>
        <p className="text-primary-blue text-base font-medium"> + More </p>
      </RevealItem>
    </RevealGroup>
  );
}
