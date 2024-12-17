import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, className = '', ...props }) => {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium mb-2">{label}</label>
      )}
      <textarea
        className={`w-full p-3 rounded bg-indigo-800 border border-indigo-700 focus:outline-none focus:border-cyan-400 h-32 ${className}`}
        {...props}
      />
    </div>
  );
};

export default TextArea;