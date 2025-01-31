export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  allProperties: string[];
  address: string;
  phone: string;
  avatar?: string;
}
