import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '',
  ...props 
}) => {
  const baseStyles = 'px-8 py-3 rounded-md font-bold transition-colors';
  const variantStyles = {
    primary: 'bg-cyan-400 text-[#000066] hover:bg-cyan-300',
    secondary: 'bg-[#000080] text-white hover:bg-[#000099]'
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;