import {
  Building2,
  CircleUser,
  LayoutGrid,
  LucideIcon,
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
} from "../ui/sidebar";
import { Link, useLocation } from "react-router";
import { Button } from "../ui/button";
import logo from "@/assets/logo.svg";

interface NavBarItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

const SideBar = () => {
  const { pathname } = useLocation();

  const items: NavBarItem[] = [
    { title: "Dashboard", url: "/app", icon: LayoutGrid },
    { title: "Property", url: "/app/properties", icon: Building2 },
    { title: "Agent", url: "/app/agents", icon: Users },
    // { title: "Review", url: "/app/review", icon: Star },
    { title: "My profile", url: "/app/profile", icon: CircleUser },
  ];
  const { isMobile, setOpenMobile } = useSidebar();
  return (
    <Sidebar className="w-64 border-none">
      <SidebarHeader className="p-4 pb-8 sm:pr-2/5 bg-background">
        <Link to={"/app"} className="text-4xl w-fit flex gap-2 font-semibold">
          <img src={logo} alt="logo" />
          Redesign
        </Link>
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
      <SidebarContent className="px-3 md:py-0 bg-background">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                className={`p-5 py-6 rounded-xl text-secondary-foreground hover:bg-theme ${
                  item.url === pathname ? "bg-theme text-white" : ""
                } hover:text-white`}
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
    </Sidebar>
  );
};

export default SideBar;
