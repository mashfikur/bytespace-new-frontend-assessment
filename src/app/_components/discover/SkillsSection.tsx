import { SkillCardType } from "@/lib/types";
import React, { useEffect, useState } from "react";
import SkillCard from "./SkillCard";
import { Spinner } from "@/components/ui/spinner";

export default function SkillsSection({
  selectedCategory,
}: {
  selectedCategory: string;
}) {
  const [courses, setCourses] = useState<SkillCardType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const filteredSkills =
    selectedCategory === "Featured"
      ? courses
      : courses.filter((course) =>
          course.categories.includes(selectedCategory),
        );

  useEffect(() => {
    fetch("/data/skills.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch JSON: ${res.status}`);
        }
        return res.json();
      })
      .then((jsonData) => {
        setCourses(jsonData ?? []);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [selectedCategory]);

  if (loading)
    return (
      <div className="flex items-center justify-center py-20">
        <Spinner className="text-primary-blue" />
      </div>
    );

  return (
    <div className="py-20">
      {filteredSkills?.length > 0 ? (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredSkills.map((course: SkillCardType) => (
            <SkillCard key={course.id} data={course} />
          ))}
        </div>
      ) : (
        <p className="text-center text-3xl font-satoshi font-medium text-text-black/30">
          No courses found for this category
        </p>
      )}
    </div>
  );
}
