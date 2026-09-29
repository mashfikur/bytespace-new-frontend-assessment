import {
  Avatar,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";

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
}: {
  count?: number | string;
  list?: string[];
  maxCount?: number;
  size?: "sm" | "lg" | "default" | undefined;
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
        <AvatarGroupCount className="bg-secondary-lime text-text-black font-semibold text-xs">
          +{count}
        </AvatarGroupCount>
      </AvatarGroup>
    </div>
  );
}
