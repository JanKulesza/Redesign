import { Property } from "@/entities/Property";
import { BedDouble, House, MapPin } from "lucide-react";

interface Props {
  property: Property;
}

const PropertyCard = ({ property }: Props) => {
  return (
    <div className="flex gap-3 py-2 overflow-hidden">
      <div className="w-1/2 h-fit">
        <img
          className="rounded-xl w-full h-full object-cover"
          src={
            property.photo instanceof File
              ? URL.createObjectURL(property.photo)
              : `http://localhost:8080/api/v1/public/${property.photo}`
          }
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
            {property.propertyType}
          </p>
          <p className="flex gap-2 items-center">
            <BedDouble size={20} /> {property.beds} Beds
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
