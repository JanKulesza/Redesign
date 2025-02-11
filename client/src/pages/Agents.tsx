import AgentCard from "@/components/Agents/AgentCard";
import { useUsers } from "@/hooks/useUsers";
import { Link } from "react-router";

const Agents = () => {
  const { users: agents, error } = useUsers();
  if (error) return <div>{error}</div>;
  return (
    <div className="bg-background min-h-[450px] md:min-h-[700px] rounded-xl mt-6 pt-4 md:m-2 lg:m-10 p-2 lg:p-6 ">
      {agents.length === 0 ? (
        <div className="text-center h-full mt-32">
          <h2 className="text-xl font-semibold mb-5">
            Oops! Looks like there are no agents to be shown
          </h2>
        </div>
      ) : (
        <div>
          {agents.map((agent) => (
            <Link to={`/app/agents/${agent._id}`} key={agent._id}>
              <AgentCard agent={agent} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Agents;
