import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import { useState } from "react";
import { Outlet } from "react-router";

const Layout = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex h-screen bg-[#f4f4f4]">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ${
          open ? "w-64 sm:max-md:static" : "w-0"
        }`}
      >
        <SideBar open={open} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* NavBar */}
        <NavBar onMenuClick={() => setOpen(!open)} />

        {/* Page Content */}
        <div className="p-5 flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
