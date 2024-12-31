import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
