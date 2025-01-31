import AgentChart from "@/components/AgentDetails/AgentChart";
import AgentDetailsCard from "@/components/AgentDetails/AgentDetailsCard";
import AgentProperties from "@/components/AgentDetails/AgentProperties";
import { useUser } from "@/hooks/useUsers";
import { ChevronLeft } from "lucide-react";
import { Link, Navigate, useParams } from "react-router";

const AgentDetails = () => {
  const { id } = useParams();
  if (!id) return <Navigate to={"/app/agents"} />;

  const { user: agent, isLoading, error } = useUser(id);

  if (isLoading) return;
  if (error) return <Navigate to={"/error"} />;
  return (
    <div className="md:p-10">
      <Link
        to={"/app/agents"}
        className="flex items-center font-semibold w-fit text-2xl mb-8"
      >
        <ChevronLeft size={30} /> Agent Details
      </Link>
      <div className="lg:grid lg:grid-cols-5 lg:gap-8">
        <AgentDetailsCard agent={agent} />
        <AgentChart listingsCount={agent.allProperties.length} />
      </div>
      <AgentProperties allProperties={agent.allProperties} />
    </div>
  );
};

export default AgentDetails;
