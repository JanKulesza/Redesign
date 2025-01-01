import { Bell, ChevronDown, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { useSidebar } from "../ui/sidebar";
import SearchInput from "./SearchInput";
import { ModeToggle } from "./ModeToggle";
import avatar from "@/assets/avatar.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NavBar = () => {
  const { isMobile, setOpenMobile } = useSidebar();

  return (
    <nav className="md:px-10 max-h-20 flex-1 flex p-4 justify-between bg-background">
      <Button
        className="h-[48px] text-foreground md:hidden"
        variant="ghost"
        onClick={() => setOpenMobile(true)}
      >
        <Menu />
      </Button>
      {!isMobile && <SearchInput />}
      <div className="flex gap-5">
        <Button variant="ghost" size="icon" className="h-[48px] w-[48px]">
          <Bell className=" text-foreground h-[100%]" />
        </Button>
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex text-foreground gap-2 align-items-center">
              <Avatar className="max-h-[48px] h-[48px] max-w-[48px] w-[48px]">
                <AvatarImage src={avatar} className="rounded-3xl" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="text-left hidden lg:block">
                <h5>Adam Smith</h5>
                <span className="text-secondary-foreground">
                  Company Manager
                </span>
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
