import { Agent } from "@/entities/Agent";
import { Button } from "./ui/button";
import avatar from "@/assets/agent-placeholder.jpg";
import AgentAvatar from "./AgentAvatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import { Link } from "react-router";

const TopAgent = () => {
  const agents: Agent[] = [
    { name: "Benny Chagur", avatar: avatar, position: "Top Agent" },
    { name: "Chynita Heree", avatar: avatar, position: "Top Agent" },
    { name: "David Yers", avatar: avatar, position: "Top Agent" },
    { name: "Hayder Jahid", avatar: avatar, position: "Top Agent" },
    { name: "Benny Chagur", avatar: avatar, position: "Top Agent" },
  ];

  return (
    <div className="relative bg-background rounded-2xl p-8">
      <Button variant="outline" asChild className="absolute top-7 right-8 ">
        <Link to="/agents">View All</Link>
      </Button>
      <h3 className="font-semibold text-lg mb-8">Top Agent</h3>
      <div className="flex flex-col gap-4">
        {agents.map((agent) => (
          <div className="flex justify-between">
            <AgentAvatar agent={agent} />
            <DropdownMenu>
              <DropdownMenuTrigger>
                <EllipsisVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-4">
                <DropdownMenuLabel>{agent.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopAgent;
