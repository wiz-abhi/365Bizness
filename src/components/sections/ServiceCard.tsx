import React from 'react';
import { LucideIcon } from 'lucide-react';
import Card from '../ui/Card';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <Card className="bg-gradient-to-r from-teal-200 to-pink-200 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <Icon className="text-white w-12 h-12 mb-4" />
      <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-lg">{description}</p>
    </Card>
  );
};

export default ServiceCard;
