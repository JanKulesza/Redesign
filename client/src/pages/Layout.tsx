import NavBar from "@/components/NavBar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-row">
        <div className="bg-zinc-300 p-2 hidden md:block">Sidebar</div>
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
