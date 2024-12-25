import { Agent } from "@/entities/Agent";

interface Props {
  agent: Agent;
}

const AgentAvatar = ({ agent: { avatar, name, position } }: Props) => {
  return (
    <div className="flex text-foreground gap-3 items-center">
      <img src={avatar} alt="avatar" className="w-12 h-12 rounded-2xl" />
      <div className="text-left">
        <h5>{name}</h5>
        <span className="text-secondary-foreground">{position}</span>
      </div>
    </div>
  );
};

export default AgentAvatar;
