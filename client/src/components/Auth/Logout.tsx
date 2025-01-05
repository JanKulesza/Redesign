import { useAuth } from "@/context/AuthProvider";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Logout = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    setToken(null);
    navigate("/");
  };

  useEffect(handleLogout, []);

  return <div>Logout</div>;
};

export default Logout;
