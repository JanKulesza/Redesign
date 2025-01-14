import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import axios, { AxiosError } from "axios";

interface Props {
  children: ReactNode;
}

interface authContextType {
  token: string | null;
  setToken: (newToken: string | null) => void;
}

const AuthContext = createContext({} as authContextType);

const AuthProvider = ({ children }: Props) => {
  const [token, setToken_] = useState<string | null>(
    localStorage.getItem("token")
  );

  const setToken = (newToken: string | null) => {
    setToken_(newToken);
  };

  useEffect(() => {
    if (token) {
      axios
        .post("http://localhost:8080/api/v1/auth", { token })
        .then(({ data }) => {
          console.log(data);

          axios.defaults.headers.common.Authorization = `Bearer ${token}`;
          localStorage.setItem("token", token);
        })
        .catch((err) => {
          if (err instanceof AxiosError) {
            console.log(err);
            if (err.status === 403) {
              delete axios.defaults.headers.common.Authorization;
              localStorage.removeItem("token");
              setToken(null);
            }
          }
        });
    } else {
      delete axios.defaults.headers.common.Authorization;
      localStorage.removeItem("token");
    }
  }, [token]);

  const contextValue = useMemo(() => ({ token, setToken }), [token]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
