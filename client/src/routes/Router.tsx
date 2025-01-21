import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "@/pages/Layout";
import Dashboard from "@/pages/Dashboard";
import Error from "@/pages/Error";
import Properties from "@/pages/Properties";
import Register from "@/components/Auth/Register";
import Login from "@/components/Auth/Login";
import { useAuth } from "@/context/AuthProvider";
import ProtectedRoute from "./ProtectedRoute";
import Logout from "@/components/Auth/Logout";
import PropertyDetails from "@/pages/PropertyDetails";

const Router = () => {
  const { token } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        {!token ? (
          <>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </>
        ) : null}
        {/* Protected */}
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="logout" element={<Logout />} />
          <Route path="app" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="properties" element={<Properties />} />
            <Route path="properties/:id" element={<PropertyDetails />} />
          </Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
