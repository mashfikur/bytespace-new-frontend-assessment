"use client";
import CountUp from "react-countup";

function SingleStats({
  value,
  subtitle,
  suffix,
}: {
  value: number;
  subtitle: string;
  suffix?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <CountUp
        end={value}
        className="text-[36px] text-primary-blue font-poppins font-semibold"
        suffix={suffix}
        enableScrollSpy
        duration={3}
        scrollSpyOnce
      />
      <p className="text-lg text-light-gray ">{subtitle}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <div className="flex items-center gap-14">
      <SingleStats value={12} subtitle="Students" suffix="K" />
      <SingleStats value={70} subtitle="Courses" suffix="+" />
      <SingleStats value={16} subtitle="Creators" />
    </div>
  );
}
