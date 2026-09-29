import { Search } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import CommonButton from "@/components/common/CommonButton";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-4 justify-center pt-8">
      <InputGroup className="max-w-115 bg-white rounded-[24px] px-3 py-6 has-[[data-slot=input-group-control]:focus-visible]:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-transparent">
        <InputGroupInput
          placeholder="Course, topic, creator"
          className="text-black text-lg! pl-3! "
        />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
      <CommonButton label="Search" />
    </div>
  );
}
