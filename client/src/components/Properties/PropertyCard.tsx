import { Property } from "@/entities/Property";
import { useUser } from "@/hooks/useUsers";
import { House, MapPin, UserRoundPen } from "lucide-react";

interface Props {
  property: Property;
}

const PropertyCard = ({ property }: Props) => {
  const { firstName, lastName } = useUser(property.creator);

  return (
    <div className="flex gap-3 py-2">
      <div className="w-1/2 h-fit">
        <img
          className="rounded w-full h-full object-cover"
          src={`http://localhost:8080/api/v1/public/${property.photo}`}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between w-1/2">
        <div className="text-theme bg-theme/20 p-2 w-fit max-sm:text-xs rounded-xl font-semibold">
          ${property.price}
        </div>
        <div className="mb-2">
          <h3 className=" sm:text-xl font-semibold mb-3">{property.name}</h3>
          <p className="flex max-sm:text-xs gap-2 text-secondary-foreground items-center">
            <MapPin size={20} /> {property.location}
          </p>
        </div>
        <div className="flex gap-2 md:gap-6 max-sm:text-xs">
          <p className="flex gap-2 items-center">
            <House size={20} />
            {property.propertyType.charAt(0).toUpperCase() +
              property.propertyType.slice(1)}
          </p>
          <p className="flex gap-2 items-center">
            <UserRoundPen size={20} /> {firstName + " " + lastName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
