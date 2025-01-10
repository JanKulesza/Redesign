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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router";
import { useAuth } from "@/context/AuthProvider";
import { useAuthUserId, useUser } from "@/hooks/useUsers";
import { User } from "@/entities/User";

const NavBar = () => {
  const { isMobile, setOpenMobile } = useSidebar();
  const { token } = useAuth();
  const user = token ? useUser(useAuthUserId(token)) : ({} as User);

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
                <AvatarImage
                  src={`http://localhost:8080/api/v1/public/${user.avatar}`}
                  className="rounded-3xl"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="text-left hidden lg:flex lg:flex-col justify-center">
                <h5>{user.firstName + " " + user.lastName}</h5>
                {user.position && (
                  <span className="text-secondary-foreground">
                    {user.position}
                  </span>
                )}
              </div>
              <ChevronDown className="h-[48px]" />
            </div>
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
