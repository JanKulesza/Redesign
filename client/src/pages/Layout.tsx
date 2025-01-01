import NavBar from "@/components/Layout/NavBar";
import SideBar from "@/components/Layout/SideBar";
import { ThemeProvider } from "@/components/Layout/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <ThemeProvider>
      <SidebarProvider className="flex h-screen w-full">
        <SideBar />

        <div className="flex flex-col flex-1">
          <NavBar />
          <div className="md:p-10 flex-1 bg-main">
            <Outlet />
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default Layout;
