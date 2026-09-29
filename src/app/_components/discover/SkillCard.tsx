import { SkillCardType } from "@/lib/types";
import Image from "next/image";
import { IoStar } from "react-icons/io5";
import { BsBarChartFill } from "react-icons/bs";
import GroupAvatar from "../hero/GroupAvatar";

export default function SkillCard({ data }: { data: SkillCardType }) {
  return (
    <div className="px-4 py-5 border border-[#CED0D3] rounded-[24px] flex flex-col gap-5">
      <Image
        src={data.image}
        alt={data.title}
        className="w-full h-50 rounded-[12px] object-cover"
        width={200}
        height={200}
      />

      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-8">
          <div className="flex flex-col">
            <p className="font-poppins text-xl font-semibold text-text-black">
              {data.title}
            </p>
            <p className="text-xs font-normal font-satoshi text-light-gray">
              by{" "}
              <span className="font-poppins font-regular text-primary-blue">
                {data.instructor}
              </span>
            </p>
          </div>

          <div className="flex items-center gap-1">
            <p className="text-light-gray text-lg font-normal">{data.rating}</p>
            <IoStar color="#CED0D3" size={18} />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-light-gray py-1.5 px-3  bg-[#F5F5F6] w-fit rounded-[24px]">
            <BsBarChartFill />
            <p className="text-xs font-medium font-satoshi">{data.level}</p>
          </div>

          <GroupAvatar maxCount={4} count={data.students} size="default" />
        </div>

        <div className="flex items-end gap-0.5">
          <p className="font-poppins text-xl font-semibold text-primary-blue leading-5">
            $ {data.price}{" "}
          </p>
          <p className="text-xs text-light-gray font-normal">
            {" "}
            /{data.priceType}
          </p>
        </div>
      </div>
    </div>
  );
}
