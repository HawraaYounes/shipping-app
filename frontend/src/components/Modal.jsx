import React from 'react';

const Modal = ({ isOpen, onClose, title, children, actions }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="p-6 rounded-lg max-w-md w-full bg-primary relative">
        <button className="absolute top-2 right-2 text-white hover:text-gray-800" onClick={onClose}>✖</button>
        {title && <h3 className="text-xl text-white font-bold mb-4">{title}</h3>}
        {children}
        <div className="mt-4 text-right">
          {actions}
        </div>
      </div>
    </div>
  );
};

export default Modal;
