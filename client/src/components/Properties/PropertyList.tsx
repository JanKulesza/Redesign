import { useProperties } from "@/hooks/useProperty";
import PropertyCard from "./PropertyCard";

const PropertyList = () => {
  const properties = useProperties();
  return (
    <div className="bg-background rounded-xl md:m-2 lg:m-10 p-2 lg:p-8 grid gap-8 xl:gap-3 xl:grid-cols-2">
      {properties.map((property) => (
        <PropertyCard property={property} key={property._id} />
      ))}
    </div>
  );
};

export default PropertyList;
