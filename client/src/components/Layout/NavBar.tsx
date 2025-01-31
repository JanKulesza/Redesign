import { Bell, Menu } from "lucide-react";

import { Button } from "../ui/button";
import { useSidebar } from "../ui/sidebar";
import { ModeToggle } from "./ModeToggle";
import UserAvatar from "./UserAvatar";

const NavBar = () => {
  const { setOpenMobile } = useSidebar();

  return (
    <nav className="md:px-10 max-h-20 flex-1 flex p-4 justify-between md:justify-end bg-background">
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

        <UserAvatar />
      </div>
    </nav>
  );
};

export default NavBar;
