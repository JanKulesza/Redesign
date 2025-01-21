import { Mail, MapPinHouse } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";
import { useUser } from "@/hooks/useUsers";
import { Navigate } from "react-router";

interface Props {
  creatorId: string;
}

const AgentInfo = ({ creatorId }: Props) => {
  const { user: agent, isLoading } = useUser(creatorId);
  if (isLoading) return <div>Loading...</div>;
  if (!agent) return <Navigate to="/error" />;

  return (
    <Card className="bg-background xl:h-[500px] lg:col-span-2 py-2 flex w-full flex-col gap-5 justify-end">
      <CardHeader className=" mx-auto ">
        <img
          src={
            agent.avatar
              ? `http://localhost:8080/api/v1/public/${agent.avatar}`
              : "https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
          }
          className="rounded-full w-28 "
        />
      </CardHeader>
      <CardTitle className="text-center text-xl mb-5">
        {agent.firstName + " " + agent.lastName}
      </CardTitle>
      <CardDescription className="mb-10">
        <div className="flex flex-col items-center gap-2 text-base">
          <p>{agent.position}</p>

          <p className="flex gap-2">
            <Mail />
            {agent.email}
          </p>
          <p className=" flex gap-2">
            <MapPinHouse /> {agent.propertiesSold} properties sold
          </p>
        </div>
      </CardDescription>
      <CardFooter className=" gap-3">
        <Button variant="secondary" className="w-1/2">
          View
        </Button>
        <Button variant="default" className="w-1/2">
          Message
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AgentInfo;
