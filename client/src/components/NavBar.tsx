import { Bell, SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

const NavBar = () => {
  return (
    <nav className="md:px-10 bg-[#fdfdfd] flex p-4 justify-between">
      <h2 className="text-3xl w-1/5 text-zinc-900">Redesign</h2>
      <div className="grid max-w-1/2 xl:mr-[400px] lg:w-4/5 max-w-lg items-center gap-1.5">
        <div className="relative">
          <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground">
            <SearchIcon className="h-4 w-4" />
          </div>
          <Input
            id="search"
            type="search"
            placeholder="Search..."
            className="w-full border-0 bg-[#f4f4f4] pl-8"
          />
        </div>
      </div>
      <div>
        <Bell className="h-8 w-8 text-zinc-900" />
      </div>
    </nav>
  );
};

export default NavBar;
