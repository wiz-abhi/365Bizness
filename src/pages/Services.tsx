import React from 'react';
import Container from '../components/layout/Container';
import { BarChart, Users, Lightbulb, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <BarChart className="w-12 h-12 text-cyan-400" />,
      title: 'Business Analytics',
      description: 'Comprehensive data analysis and insights to drive informed business decisions.'
    },
    {
      icon: <Users className="w-12 h-12 text-cyan-400" />,
      title: 'Team Development',
      description: 'Build and nurture high-performing teams through expert training programs.'
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-cyan-400" />,
      title: 'Innovation Strategy',
      description: 'Develop and implement innovative solutions to stay ahead in the market.'
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-cyan-400" />,
      title: 'Growth Planning',
      description: 'Strategic planning and execution for sustainable business growth.'
    }
  ];

  return (
    <div className="bg-[#000066] py-16">
      <Container>
        <h1 className="text-4xl font-bold mb-12 text-cyan-400">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-r from-teal-200 to-blue-300 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              {service.icon}
              <h3 className="text-2xl font-semibold my-4 text-purple-600 hover:text-yellow-500 transition-colors duration-300">{service.title}</h3>
              <p className="text-lg text-gray-800 hover:text-gray-600 transition-colors duration-300">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
