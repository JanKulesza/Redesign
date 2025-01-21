export interface Property {
  _id?: string;
  name: string;
  description: string;
  propertyType: string;
  location: string;
  price: number;
  photo: File | string;
  creator: string;
  beds: number;
  area: number;
  privateKitchen: boolean;
  privateBath: boolean;
  balcony: boolean;
  wifi: boolean;
  smoking: boolean;
  parking: boolean;
  rating?: number;
}
