import { User } from "@/entities/User";
import { Button } from "../ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";

interface Props {
  agent: User;
}

const AgentDetailsCard = ({ agent }: Props) => {
  return (
    <div className="w-full lg:grid-cols-subgrid max-md:mt-2 lg:col-span-2 bg-background mb-8 p-4 md:p-12 lg:p-4 xl:p-12 md:py-16 rounded-xl">
      <div className="flex gap-5 items-center mb-10">
        <img
          src={
            agent.avatar
              ? `http://localhost:8080/api/v1/public/${agent.avatar}`
              : "https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
          }
          className="rounded-full w-24 h-24 xl:w-36 xl:h-36 object-cover"
        />
        <div>
          <p className="text-2xl font-semibold">
            {agent.firstName + " " + agent.lastName}
          </p>
          <p className="text-lg text-secondary-foreground">Real-Estate Agent</p>
        </div>
      </div>
      <table className="w-full mb-10">
        <tbody>
          <tr className="h-12">
            <td className="text-secondary-foreground">Address:</td>
            <td>{agent.address}</td>
          </tr>
          <tr className="h-12">
            <td className="text-secondary-foreground">Email:</td>
            <td>{agent.email}</td>
          </tr>
          <tr className="h-12">
            <td className="text-secondary-foreground">Phone Number:</td>
            <td>{agent.phone}</td>
          </tr>
          <tr className="h-12">
            <td className="text-secondary-foreground">Properties:</td>
            <td>{agent.allProperties.length}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-center gap-6">
        <Button size="icon">
          <Facebook />
        </Button>
        <Button size="icon" className="bg-pink-500 hover:bg-pink-400">
          <Instagram />
        </Button>
        <Button size="icon" className="bg-cyan-500 hover:bg-cyan-400">
          <Twitter />
        </Button>
      </div>
    </div>
  );
};

export default AgentDetailsCard;
