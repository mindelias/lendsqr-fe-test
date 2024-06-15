// src/components/InputField.tsx

import React from "react";
import './style.scss'; // Assuming you will add styles here

interface InputFieldProps {
  label: string;
  value: string;
  placeholder?: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, placeholder = "", type = "text", onChange }) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input 
        type={type} 
        value={value} 
        placeholder={placeholder} 
        onChange={onChange} 
      />
    </div>
  );
};

export default InputField;
