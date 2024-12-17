import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium mb-2">{label}</label>
      )}
      <input
        className={`w-full p-3 rounded bg-indigo-800 border border-indigo-700 focus:outline-none focus:border-cyan-400 ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;