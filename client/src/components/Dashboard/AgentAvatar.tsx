import { User } from "@/entities/User";
import placeholder from "@/assets/agent-placeholder.jpg";

interface Props {
  user: User;
}

const AgentAvatar = ({ user: { avatar, firstName, lastName } }: Props) => {
  return (
    <div className="flex text-foreground gap-3 items-center">
      <img
        src={`http://localhost:8080/api/v1/public/${avatar}` || placeholder}
        alt="avatar"
        className="w-12 h-12 rounded-2xl object-cover"
      />
      <div className="text-left">
        <h5 className="font-medium text-lg">
          {firstName} {lastName}
        </h5>
      </div>
    </div>
  );
};

export default AgentAvatar;
