import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  name: string;
  price: string;
  description: string;
  icon?: LucideIcon;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface LocationInfo {
  id: string;
  name: string;
  address: string;
  mapLink: string;
  phone: string;
  image: string;
}

export interface OperatingHours {
  day: string;
  hours: string;
}