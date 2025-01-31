import { Property } from "@/entities/Property";
import { useProperty } from "@/hooks/useProperty";
import PropertyCard from "../Properties/PropertyCard";
import { Link } from "react-router";
import { Button } from "../ui/button";

interface Props {
  allProperties: string[];
}

const AgentProperties = ({ allProperties }: Props) => {
  const properties: Property[] = [];
  let error: string | null = null;

  allProperties.forEach((id) => {
    const { property, error: err } = useProperty(id);
    if (err) {
      error = err;
      return;
    }
    properties.push(property);
  });

  return (
    <div className="w-full bg-background p-4 md:p-12 lg:p-4 xl:p-12 md:py-16 rounded-xl">
      <div className="mb-8 flex justify-between">
        <p className="text-3xl font-semibold">Active Listings</p>
        <Button variant="outline" asChild>
          <Link to={"/app/properties"}>View All</Link>
        </Button>
      </div>
      {!error ? (
        <div className="grid gap-8 xl:gap-3 xl:grid-cols-2">
          {properties.map((property) => (
            <Link to={`/app/properties/${property._id}`} key={property._id}>
              <PropertyCard property={property} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center h-full">
          <h2 className="text-xl font-semibold mb-5">
            Oops! We couldn't fetch this agent's listings
          </h2>
        </div>
      )}
    </div>
  );
};

export default AgentProperties;
