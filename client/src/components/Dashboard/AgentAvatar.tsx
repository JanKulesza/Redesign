import { User } from "@/entities/User";
import placeholder from "@/assets/agent-placeholder.jpg";

interface Props {
  user: User;
}

const AgentAvatar = ({
  user: { avatar, firstName, lastName, position },
}: Props) => {
  return (
    <div className="flex text-foreground gap-3 items-center">
      <img
        src={avatar || placeholder}
        alt="avatar"
        className="w-12 h-12 rounded-2xl"
      />
      <div className="text-left">
        <h5 className="font-medium text-lg">
          {firstName} {lastName}
        </h5>
        <span className="text-secondary-foreground">{position}</span>
      </div>
    </div>
  );
};

export default AgentAvatar;
