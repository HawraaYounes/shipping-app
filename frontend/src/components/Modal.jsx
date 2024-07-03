import React from 'react';

const Modal = ({ isOpen, onClose, title, children, actions }) => {
  if (!isOpen) return null;

  return (
    <div >
      <div >
        <button onClick={onClose} >✖</button>
        {title && <h3>{title}</h3>}
        {children}
        <div style={{ marginTop: '20px', textAlign: 'right' }}>
          {actions}
        </div>
      </div>
    </div>
  );
};

export default Modal;
