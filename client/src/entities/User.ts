export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  position: string;
  email: string;
  propertiesSold: number;
  avatar?: string;
}
