import React from 'react';

const Modal = ({ isOpen, onClose, title, children, actions }) => {
  if (!isOpen) return null;

  return (
    <div >
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px', width: '500px', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '10px', right: '10px', border: 'none', background: 'none' }}>✖</button>
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
