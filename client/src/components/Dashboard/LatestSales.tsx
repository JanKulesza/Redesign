import { Link } from "react-router";
import { Button } from "../ui/button";
import PropertyAvatar from "./PropertyAvatar";
import { Property } from "@/entities/Property";

const LatestSales = () => {
  const properties: Property[] = [];

  return (
    <div className="relative bg-background rounded-2xl p-8">
      <Button variant="outline" asChild className="absolute top-7 right-8 ">
        <Link to="/app/properties">View All</Link>
      </Button>
      <h3 className="font-semibold text-lg mb-8">Latest Sales</h3>
      <div className="flex flex-col gap-6">
        {properties?.map((property) => (
          <div
            key={property.name}
            className="flex justify-between items-center"
          >
            <PropertyAvatar property={property} />
            <span className="text-theme text-xl font-semibold">
              +${property.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestSales;
