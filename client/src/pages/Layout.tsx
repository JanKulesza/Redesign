import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <SidebarProvider className="flex h-screen w-full bg-[#f4f4f4]">
      <SideBar />

      <div className="flex flex-col flex-1">
        <NavBar />
        <div className="p-4 md:p-10 flex-1">
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
