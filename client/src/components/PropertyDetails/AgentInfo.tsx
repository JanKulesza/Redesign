import { Building2, Mail } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";
import { useUser } from "@/hooks/useUsers";
import { Link, Navigate } from "react-router";
import { Skeleton } from "../ui/skeleton";

interface Props {
  creatorId: string;
}

const AgentInfo = ({ creatorId }: Props) => {
  const { user: agent, isLoading } = useUser(creatorId);
  if (isLoading)
    return (
      <Card className="bg-background xl:h-[500px] lg:col-span-2 py-2 flex w-full flex-col gap-5 justify-center">
        <CardHeader className="mx-auto">
          <Skeleton className="h-28 w-28 rounded-full" />
        </CardHeader>
        <CardTitle className="text-xl mb-5">
          <Skeleton className="h-4 w-1/2 mx-auto" />
        </CardTitle>
        <CardDescription className="mb-10">
          <Skeleton className="h-4 w-2/3 mb-2 mx-auto" />
          <Skeleton className="h-4 w-1/2 mx-auto" />
        </CardDescription>
      </Card>
    );
  if (!agent) return <Navigate to="/error" />;

  return (
    <Card className="bg-background xl:h-[500px] lg:col-span-2 py-2 flex w-full flex-col gap-5 justify-center">
      <CardHeader className=" mx-auto ">
        <img
          src={
            agent.avatar
              ? `http://localhost:8080/api/v1/public/${agent.avatar}`
              : "https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
          }
          className="rounded-full w-28 h-28 object-cover"
        />
      </CardHeader>
      <CardTitle className="text-center text-xl mb-5">
        {agent.firstName + " " + agent.lastName}
      </CardTitle>
      <CardDescription className="mb-10">
        <div className="flex flex-col items-center gap-2 text-base">
          <p className="flex gap-2">
            <Mail />
            {agent.email}
          </p>
          <p className=" flex gap-2">
            <Building2 /> {agent.allProperties.length} properties
          </p>
        </div>
      </CardDescription>
      <CardFooter className=" gap-3">
        <Button variant="secondary" asChild className="w-1/2">
          <Link to={`/app/agents/${agent._id}`}>View</Link>
        </Button>
        <Button variant="default" className="w-1/2">
          Message
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AgentInfo;
