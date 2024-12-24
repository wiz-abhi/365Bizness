import React from 'react';
import Container from '../components/layout/Container';
import { BarChart, Users, Lightbulb, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <BarChart className="w-12 h-12 text-cyan-400" />,
      title: 'Growth and Strategic Planning',
      description: 'Our team of experienced professionals is dedicated to enhancing your business strategy and promoting sustainable revenue growth. We offer tailored solutions that meet your unique business needs by leveraging our deep industry expertise and creative approaches. We take a holistic view of your organizations challenges, opportunities, and goals, which allows us to create practical and effective strategies.'
    },
    {
      icon: <Users className="w-12 h-12 text-cyan-400" />,
      title: 'Digital Marketing',
      description: 'We provide a wide range of marketing and advertising services tailored to help you reach your target audience and boost your brand\'s visibility. Our experienced team uses creative strategies and top-notch techniques to achieve meaningful and measurable results for your campaigns.',
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-cyan-400" />,
      title: 'Human Consulting',
      description: 'We offer tailored human resources consulting services aimed at improving workforce management and driving organizational success. Our extensive suite of services includes talent acquisition and recruitment, along with strategies for employee retention. Designed to address the unique needs of each client, our team provides customized solutions that yield real results.',
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-cyan-400" />,
      title: 'IT Services and Support',
      description: 'We provide a wide range of IT solutions and support services designed to improve your business operations and boost productivity. Our skills include website development and design, along with robust cybersecurity measures, guaranteeing customized solutions that enhance efficiency and safeguard your digital assets.',
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
