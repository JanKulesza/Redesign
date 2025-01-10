import { Property } from "@/entities/Property";
import APIClient from "@/services/api-client";
import { useEffect, useState } from "react";

const { create, getAll } = new APIClient<Property>("/properties");

export const createProperty = (property: Property) => {
  console.log(property);

  return create(property, {
    headers: { "Content-Type": "multipart/form-data" },
  }).catch((error) => console.error(error));
};

export const useProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    getAll()
      .then((data) => setProperties(data))
      .catch((error) => console.error(error));
  }, []);

  return properties;
};
