import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-indigo-900 p-8 rounded-lg ${className}`}>
      {children}
    </div>
  );
};

export default Card;