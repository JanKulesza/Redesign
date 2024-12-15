import { Bell, ChevronDown, Menu, SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import avatar from "../assets/avatar.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

interface Props {
  onMenuClick: () => void;
}

const NavBar = ({ onMenuClick }: Props) => {
  return (
    <nav className="md:px-10 max-h-20 bg-[#fdfdfd] flex-1 flex p-4 justify-between">
      <Button
        className="h-[48px] text-black"
        variant="ghost"
        onClick={onMenuClick}
      >
        <Menu />
      </Button>
      <div className="grid mr-8 max-w-md items-center gap-1.5 lg:w-1/2">
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
      <div className="flex gap-5">
        <Bell className=" text-zinc-900 h-[100%]" />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex text-black gap-2 align-items-center">
              <Avatar className="max-h-[48px] h-[48px] max-w-[48px] w-[48px]">
                <AvatarImage src={avatar} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="text-left hidden lg:block">
                <h5>Adam Smith</h5>
                <span>Company Manager</span>
              </div>
              <ChevronDown className="h-[48px]" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-4">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default NavBar;
