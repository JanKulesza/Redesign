import { Property } from "@/entities/Property";
import APIClient from "@/services/api-client";

const { create } = new APIClient<Property>("/properties");

export const createProperty = (property: Property) => {
  console.log(property);

  return create(property, {
    headers: { "Content-Type": "multipart/form-data" },
  }).catch((error) => console.error(error));
};
