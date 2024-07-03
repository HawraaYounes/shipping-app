import React from 'react';

const Input = ({ type, placeholder, value, onChange, required }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="bg-graydark focus:outline-none rounded-lg text-gray-100 text-sm rounded-lgblock w-full p-2.5 my-1"
    />
  );
};

export default Input;
