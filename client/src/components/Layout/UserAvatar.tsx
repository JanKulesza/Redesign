import { useAuth } from "@/context/AuthProvider";
import { useUser, useAuthUserId } from "@/hooks/useUsers";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Navigate } from "react-router";
import { Skeleton } from "../ui/skeleton";

const UserAvatar = () => {
  const { token } = useAuth();
  if (!token) return <Navigate to={"/login"} />;
  const { user, isLoading } = useUser(useAuthUserId(token));

  if (isLoading)
    return (
      <div className="flex items-center space-x-4 ">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
    );

  if (!user) return <Navigate to={"/error"} />;

  return (
    <div className="flex text-foreground gap-2 align-items-center">
      <Avatar className="max-h-[48px] h-[48px] max-w-[48px] w-[48px]">
        <AvatarImage
          src={`http://localhost:8080/api/v1/public/${user.avatar}`}
          className="rounded-3xl object-cover"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="text-left hidden lg:flex lg:flex-col justify-center">
        <h5>{user.firstName + " " + user.lastName}</h5>
      </div>
    </div>
  );
};

export default UserAvatar;
