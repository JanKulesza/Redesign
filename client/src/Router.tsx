import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Properties from "./pages/Properties";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="properties" element={<Properties />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
