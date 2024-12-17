import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

const SearchInput = () => {
  return (
    <div className="grid mr-8 w-full md:max-w-md items-center gap-1.5 lg:w-1/2">
      <div className="relative">
        <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground">
          <SearchIcon className="h-4 w-4" />
        </div>
        <Input
          id="search"
          type="search"
          placeholder="Search..."
          className="w-full border-0 bg-secondary text-secondary-foreground pl-8"
        />
      </div>
    </div>
  );
};

export default SearchInput;
