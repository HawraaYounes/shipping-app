import React from 'react';

const Input = ({ type, placeholder, value, onChange, required }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      style={{ marginBottom: '10px' }} // Example style, adjust as needed
    />
  );
};

export default Input;
