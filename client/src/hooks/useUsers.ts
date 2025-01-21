import { User } from "@/entities/User";
import APIClient from "@/services/api-client";
import { AxiosError } from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

const { getAll, get } = new APIClient<User>("/users");

export const useUsers = () => {
  const [data, setData] = useState<{ users: User[]; error: string | null }>({
    users: [],
    error: null,
  });

  useEffect(() => {
    getAll()
      .then((data) => {
        setData({ users: data, error: null });
      })
      .catch((error) => {
        console.error(error);
        if (error instanceof AxiosError)
          setData({
            users: [] as User[],
            error: error.response?.data?.message || error.message,
          });
        setData({ users: [] as User[], error: "An unknown error occurred." });
      });
  }, []);

  return data;
};

export const useUser = (userId: string | null) => {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (userId)
      get(userId)
        .then((data) => {
          setUser(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
  }, [userId]);

  return { user, isLoading };
};

export const useAuthUserId = (token: string) => {
  const { userId } = jwtDecode<{ userId: number }>(token);

  return userId.toString();
};
