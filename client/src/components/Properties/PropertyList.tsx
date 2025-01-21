import { Link } from "react-router";
import PropertyCard from "./PropertyCard";
import { Property } from "@/entities/Property";

interface Props {
  properties: Property[];
}

const PropertyList = ({ properties }: Props) => {
  return (
    <div className="bg-background rounded-xl md:m-2 lg:m-10 p-2 lg:p-8 grid gap-8 xl:gap-3 xl:grid-cols-2">
      {properties.map((property) => (
        <Link
          to={`/app/properties/${property._id}`}
          key={property?._id || property.name}
        >
          <PropertyCard property={property} />
        </Link>
      ))}
    </div>
  );
};

export default PropertyList;
