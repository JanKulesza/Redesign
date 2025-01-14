import CreatePropertyButton from "@/components/Properties/CreatePropertyButton";
import PropertyList from "@/components/Properties/PropertyList";
import { Property } from "@/entities/Property";
import { useProperties } from "@/hooks/useProperty";
import { useEffect, useState } from "react";

const Properties = () => {
  const fetchedProperties = useProperties();
  const [properties, setProperties] = useState<Property[]>(fetchedProperties);

  useEffect(() => {
    setProperties(fetchedProperties);
  }, [fetchedProperties]);

  return (
    <div>
      <div className="flex justify-between items-center lg:m-10 mb-4 p-4 md:p-0">
        <h1 className="text-foreground md:max-lg:m-6 text-xl md:text-4xl font-semibold">
          Property List
        </h1>
        <CreatePropertyButton
          properties={properties}
          onAddProperty={(properties: Property[]) => setProperties(properties)}
        />
      </div>
      <PropertyList properties={properties} />
    </div>
  );
};

export default Properties;
