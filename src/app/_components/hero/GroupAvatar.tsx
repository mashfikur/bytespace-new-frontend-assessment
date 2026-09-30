import {
  Avatar,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const defaultList = [
  "https://randomuser.me/api/portraits/men/29.jpg",
  "https://randomuser.me/api/portraits/men/30.jpg",
  "https://randomuser.me/api/portraits/men/31.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/men/33.jpg",
  "https://randomuser.me/api/portraits/men/35.jpg",
];

export default function GroupAvatar({
  count = 3,
  list = defaultList,
  maxCount,
  size = "lg",
  bgColor = "lime",
}: {
  count?: number | string;
  list?: string[];
  maxCount?: number;
  size?: "sm" | "lg" | "default" | undefined;
  bgColor?: "black" | "lime";
}) {
  return (
    <div>
      <AvatarGroup className="">
        {list?.slice(0, maxCount).map((item, idx) => {
          return (
            <Avatar key={idx} size={size} className={"border-0"}>
              <AvatarImage src={item} alt="@shadcn" />
            </Avatar>
          );
        })}
        <AvatarGroupCount
          className={cn(
            " font-semibold text-xs",
            bgColor === "black"
              ? "bg-text-black text-white"
              : "bg-secondary-lime text-text-black",
          )}
        >
          +{count}
        </AvatarGroupCount>
      </AvatarGroup>
    </div>
  );
}
