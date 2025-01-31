import { Button } from "../ui/button";
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
import { useUsers } from "@/hooks/useUsers";

const TopAgent = () => {
  const { users } = useUsers();
  users.sort(
    ({ allProperties: a }, { allProperties: b }) => b.length - a.length
  );

  return (
    <div className="relative bg-background rounded-2xl p-8">
      <Button variant="outline" asChild className="absolute top-7 right-8 ">
        <Link to="/app/agents">View All</Link>
      </Button>
      <h3 className="font-semibold text-lg mb-8">Top Agent</h3>
      <div className="flex flex-col gap-5">
        {users.slice(0, 5).map((user) => (
          <div key={user._id} className="flex justify-between">
            <AgentAvatar user={user} />
            <DropdownMenu>
              <DropdownMenuTrigger>
                <EllipsisVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-4">
                <DropdownMenuLabel>
                  {user.firstName} {user.lastName}
                </DropdownMenuLabel>
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
