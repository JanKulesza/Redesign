import {
  Building2,
  CircleUser,
  IconNode,
  LayoutGrid,
  LucideIcon,
  LucideProps,
  MessageCircleMore,
  Star,
  Users,
} from "lucide-react";
import {
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarFooter,
  Sidebar,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "./ui/sidebar";
import { Link } from "react-router";

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

  return (
    <Sidebar className="p-3 absolute border-none bg-[#fdfdfd]">
      <SidebarHeader />
      <SidebarContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                className="p-5 py-6 rounded-xl hover:bg-[#485cec] hover:text-white"
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
      <SidebarFooter />
    </Sidebar>
  );
};

export default SideBar;
