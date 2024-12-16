import {
  Building2,
  CircleUser,
  LayoutGrid,
  LucideIcon,
  MessageCircleMore,
  Star,
  Users,
  X,
} from "lucide-react";
import {
  SidebarHeader,
  SidebarContent,
  Sidebar,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
  SidebarFooter,
} from "./ui/sidebar";
import { Link } from "react-router";
import { Button } from "./ui/button";
import SearchInput from "./SearchInput";
import logo from "../assets/logo.svg";

type NavBarItem = {
  title: string;
  url: string;
  icon: LucideIcon;
};

const SideBar = () => {
  const items: NavBarItem[] = [
    { title: "Dashboard", url: "/dashboard", icon: LayoutGrid },
    { title: "Property", url: "/property", icon: Building2 },
    { title: "Agent", url: "/agent", icon: Users },
    { title: "Review", url: "/review", icon: Star },
    { title: "Message", url: "/message", icon: MessageCircleMore },
    { title: "My profile", url: "/profile", icon: CircleUser },
  ];
  const { isMobile, setOpenMobile } = useSidebar();
  return (
    <Sidebar className="w-64 border-none">
      <SidebarHeader className="p-4 pb-8 bg-[#fdfdfd] sm:pr-2/5">
        <h2 className="text-4xl w-fit flex gap-2 font-semibold text-zinc-900 ">
          <img src={logo} alt="logo" />
          Redesign
        </h2>
        {isMobile && (
          <Button
            variant="ghost"
            className="absolute right-2 top-3"
            onClick={() => setOpenMobile(false)}
          >
            <X />
          </Button>
        )}
      </SidebarHeader>
      <SidebarContent className="px-3 md:py-0 bg-[#fdfdfd]">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                className="p-5 py-6 rounded-xl hover:bg-[#485cec] focus:bg-[#485cec] focus:text-white hover:text-white"
              >
                <Link to={item.url}>
                  <item.icon className="mr-2" />
                  <span className="text-xl">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      {isMobile && (
        <SidebarFooter className="py-8 md:py-0 px-3 w-full border-top-0 bg-[#fdfdfd]">
          <SearchInput />
        </SidebarFooter>
      )}
    </Sidebar>
  );
};

export default SideBar;
