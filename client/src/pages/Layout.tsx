import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="bg-[#f4f4f4]">
      <NavBar />
      <div className="flex relative">
        <SidebarProvider className="w-2/8">
          <SideBar />
        </SidebarProvider>
        <div className="p-5 w-6/8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
