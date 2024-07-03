import React from 'react';

const Button = ({ type = 'button', onClick, children, styles }) => {
  return (
    <button 
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ml-2 mt-3 ${styles}`}
      type={type} onClick={onClick}
      style={{ boxSizing: 'border-box' }} // Ensure box-sizing is set
    >
      {children}
    </button>
  );
};

export default Button;
