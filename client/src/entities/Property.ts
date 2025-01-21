export interface Property {
  _id?: string;
  name: string;
  description: string;
  propertyType: string;
  location: string;
  price: number;
  photo: File | string;
  creator: string;
  rating?: number;
}
