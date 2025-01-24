import { Property } from "@/entities/Property";
import APIClient from "@/services/api-client";
import { useEffect, useState } from "react";

const { create, get, getAll } = new APIClient<Property>("/properties");

export const createProperty = (property: Property) => {
  const data = create(property, {
    headers: { "Content-Type": "multipart/form-data" },
  }).catch((error) => console.error(error));

  return data;
};

export const useProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAll()
      .then((data) => {
        setProperties(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return { properties, isLoading, error };
};

export const useProperty = (id: string) => {
  const [property, setProperty] = useState<Property>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    get(id)
      .then((data) => {
        setProperty(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [id]);

  return { property, isLoading };
};
