import { Link } from "react-router";
import PropertyCard from "./PropertyCard";
import { Property } from "@/entities/Property";
import CreatePropertyButton from "./CreatePropertyButton";
import { useProperties } from "@/hooks/useProperty";
import { useState, useEffect } from "react";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";
import { Hospital } from "lucide-react";

const PropertyList = () => {
  const { properties, isLoading, error } = useProperties();
  const [optimisticProperties, setProperties] =
    useState<Property[]>(properties);

  useEffect(() => {
    setProperties(properties);
  }, [properties]);

  const skeletons = [1, 2, 3, 4];

  if (isLoading)
    return (
      <div className="bg-background rounded-xl mt-10 md:m-2 lg:m-10 p-2 pt-8 lg:p-8 grid gap-8 xl:gap-3 xl:grid-cols-2">
        {skeletons.map((skeleton) => (
          <div key={skeleton} className="flex  flex-row space-x-3">
            <Skeleton className="w-1/2 rounded-xl h-[125px] sm:h-[200px] lg:h-[250px] object-cover" />
            <div className="flex flex-col justify-evenly w-1/2 ">
              <Skeleton className="h-4 w-1/3 bg-theme/30" />
              <div>
                <Skeleton className="h-4 w-2/3 mb-1" />
                <Skeleton className="h-4 w-1/2" />
              </div>
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        ))}
      </div>
    );

  if (error)
    return (
      <div className="h-[500px] rounded-xl text-center mt-10 md:m-2 lg:m-10 p-8 flex flex-col gap-6 items-center justify-center">
        <Hospital size={100} />
        <h2 className="text-xl font-semibold">
          Oops! We couldn't get properties
        </h2>
        <p>Try refreshing this page or return to home page</p>
        <Button asChild className="mt-3" variant="default">
          <Link to={"/app"}>Go to Home Page</Link>
        </Button>
      </div>
    );

  return (
    <div className="bg-background rounded-xl mt-10 md:m-2 lg:m-10 p-2 pt-8 lg:p-8 ">
      <div className="mb-5 flex">
        <CreatePropertyButton
          properties={optimisticProperties}
          onAddProperty={(properties: Property[]) => setProperties(properties)}
        />
      </div>
      <div className="grid gap-8 xl:gap-3 xl:grid-cols-2">
        {properties.map((property) => (
          <Link
            to={`/app/properties/${property._id}`}
            key={property?._id || property.name}
          >
            <PropertyCard property={property} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
