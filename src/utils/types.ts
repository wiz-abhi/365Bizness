import { LucideIcon } from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  hours: {
    weekday: string;
    saturday: string;
    sunday: string;
  };
}