import { Property } from "@/entities/Property";

interface Props {
  property: Property;
}

const PropertyAvatar = ({ property: { photo, name, location } }: Props) => {
  return (
    <div className="flex text-foreground gap-3 items-center">
      <img
        src={typeof photo === "string" ? photo : undefined}
        alt="avatar"
        className="w-16 h-16 rounded-xl"
      />
      <div className="text-left">
        <h5 className="font-semibold text-xl">{name}</h5>
        <span className="text-secondary-foreground">{location}</span>
      </div>
    </div>
  );
};

export default PropertyAvatar;
