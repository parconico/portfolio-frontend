export interface Profile {
  id: string;
  name: string;
  specialty: string;
  phone: string;
  email: string;
  birthDay: string;
  location: string;
  createdAt?: Date;
  updatedAt?: Date;
}
