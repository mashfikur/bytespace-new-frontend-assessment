import { Search } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";

export default function SearchBar() {
  return (
    <div>
      <div className="flex items-center gap-8">
        <InputGroup className="max-w-105 mx-auto bg-white rounded-3xl px-6 py-3">
          <InputGroupInput
            placeholder="Course, topic, creator"
            className="text-black"
          />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
        <Button variant="default" className="rounded-full">
          Browse Categories
        </Button>
      </div>
    </div>
  );
}
