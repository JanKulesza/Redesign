import { User } from "@/entities/User";
import { Building2, Mail, MapPin, Phone } from "lucide-react";

interface Props {
  agent: User;
}

const AgentCard = ({ agent }: Props) => {
  return (
    <div className="mb-16 w-full flex gap-3 sm:hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer rounded-xl">
      <img
        src={`http://localhost:8080/api/v1/public/${agent.avatar}`}
        alt={agent.firstName + " " + agent.lastName}
        className="rounded-xl h-[100px] sm:h-[160px] md:h-[185px] xl:h-[250px] w-[150px] sm:w-[200px] xl:w-[350px] object-cover"
      />
      <div className="sm:ml-5 flex flex-col justify-around w-full">
        <div>
          <p className="font-semibold text-xl lg:text-3xl">
            {agent.firstName + " " + agent.lastName}
          </p>
          <p className="text-secondary-foreground mb-3 lg:text-lg">
            Real-Estate Agent
          </p>
        </div>
        <div className="flex flex-col sm:flex-row md:flex-col gap-2 lg:flex-row max-md:text-xs ">
          <div className="flex flex-col gap-2 lg:gap-8 lg:w-1/2">
            <p className="flex gap-2 text-secondary-foreground items-center">
              <Mail className="min-w-4 min-h-4 w-4 h-4 lg:w-6 lg:h-6" />
              {agent.email}
            </p>
            <p className="flex gap-2 text-secondary-foreground items-center">
              <Phone className="min-w-4 min-h-4 w-4 h-4 lg:w-6 lg:h-6" />{" "}
              {agent.phone}
            </p>
          </div>
          <div className="flex flex-col gap-2 lg:gap-8 lg:w-1/2">
            <p className="flex gap-2 text-secondary-foreground items-center">
              <MapPin className="min-w-4 min-h-4 w-4 h-4 lg:w-6 lg:h-6" />
              {agent.address}
            </p>
            <p className="flex gap-2 text-secondary-foreground items-center">
              <Building2 className="min-w-4 min-h-4 w-4 h-4 lg:w-6 lg:h-6" />{" "}
              {agent.allProperties.length} properties
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
