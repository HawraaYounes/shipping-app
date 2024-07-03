import React from 'react';

const Button = ({ type = 'button', onClick, children, styles, bgcolor }) => {
  const buttonClasses = `py-4 px-6 font-poppins font-medium text-[18px] text-primary rounded-[10px] outline-none ml-2 mt-3 ${styles} ${bgcolor || 'bg-blue-gradient'}`;

  return (
    <button 
      type={type}
      onClick={onClick}
      className={buttonClasses}
      style={{ boxSizing: 'border-box' }} // Ensure box-sizing is set
    >
      {children}
    </button>
  );
};

export default Button;
