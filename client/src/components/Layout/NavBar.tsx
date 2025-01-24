import { Bell, Menu } from "lucide-react";
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
import { ModeToggle } from "./ModeToggle";
import { Link } from "react-router";
import UserAvatar from "./UserAvatar";

const NavBar = () => {
  const { setOpenMobile } = useSidebar();

  return (
    <nav className="md:px-10 max-h-20 flex-1 flex p-4 justify-end bg-background">
      <Button
        className="h-[48px] text-foreground md:hidden"
        variant="ghost"
        onClick={() => setOpenMobile(true)}
      >
        <Menu />
      </Button>
      <div className="flex gap-5">
        <Button variant="ghost" size="icon" className="h-[48px] w-[48px]">
          <Bell className=" text-foreground h-[100%]" />
        </Button>
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <UserAvatar />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-4">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Button variant="destructive" asChild className="w-full">
                <Link to="/logout">Logout</Link>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default NavBar;
