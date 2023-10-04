import React, { useState, ChangeEvent } from 'react';

interface InputProps {
  type: string;
  placeholder?: string;
  value: any;
  onChange: (value: any) => void;
  className: string;
}

const FlexibleInput: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  className,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className={className}
    />
  );
};

export default FlexibleInput;
