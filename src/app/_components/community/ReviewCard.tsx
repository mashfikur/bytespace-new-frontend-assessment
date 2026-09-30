import CommonText from "@/components/common/CommonText";
import { Review } from "@/lib/types";
import Image from "next/image";

export default function ReviewCard({ data }: { data: Review }) {
  return (
    <div className="p-6 bg-white rounded-[24px] flex flex-col gap-y-6 grow border-2 drop-shadow-md">
      <Image
        src={data.avatarUrl}
        alt={data.name}
        width={50}
        height={50}
        className="rounded-full object-cover"
      />

      <div className="flex flex-col">
        <p className="font-semibold font-poppins text-lg text-text-black">
          {" "}
          {data.name}{" "}
        </p>
        <p className="text-lg font-light text-primary-blue"> {data.role} </p>
      </div>

      <CommonText className="font-light">&ldquo;{data.quote}&rdquo;</CommonText>
    </div>
  );
}
