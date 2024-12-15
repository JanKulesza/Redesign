import {
  Building2,
  CircleUser,
  LayoutGrid,
  LucideIcon,
  MessageCircleMore,
  Star,
  Users,
} from "lucide-react";
import {
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  Sidebar,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "./ui/sidebar";
import { Link } from "react-router";

type NavBarItem = {
  title: string;
  url: string;
  icon: LucideIcon;
};

interface Props {
  open: boolean;
}

const SideBar = ({ open }: Props) => {
  const items: NavBarItem[] = [
    { title: "Dashboard", url: "/dashboard", icon: LayoutGrid },
    { title: "Property", url: "/property", icon: Building2 },
    { title: "Agent", url: "/agent", icon: Users },
    { title: "Review", url: "/review", icon: Star },
    { title: "Message", url: "/message", icon: MessageCircleMore },
    { title: "My profile", url: "/profile", icon: CircleUser },
  ];

  return (
    <SidebarProvider open={open} className="w-2/8">
      <Sidebar className="p-3 w-64 border-none bg-[#fdfdfd] sm:block">
        <SidebarHeader>
          <h2 className="text-3xl w-1/5 text-zinc-900 mb-10">Redesign</h2>
        </SidebarHeader>
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
    </SidebarProvider>
  );
};

export default SideBar;
