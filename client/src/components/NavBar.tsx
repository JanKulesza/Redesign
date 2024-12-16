import { Bell, ChevronDown, Menu } from "lucide-react";
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
import { useSidebar } from "./ui/sidebar";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const { isMobile, setOpenMobile } = useSidebar();

  return (
    <nav className="md:px-10 max-h-20 bg-[#fdfdfd] flex-1 flex p-4 justify-between">
      <Button
        className="h-[48px] text-zinc-900 md:hidden"
        variant="ghost"
        onClick={() => setOpenMobile(true)}
      >
        <Menu />
      </Button>
      {!isMobile && <SearchInput />}
      <div className="flex gap-5">
        <Bell className=" text-zinc-900 h-[100%]" />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex text-zinc-900 gap-2 align-items-center">
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
