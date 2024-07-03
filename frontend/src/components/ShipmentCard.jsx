// src/components/ShipmentCard.js
import React from 'react';
import Button from './Button';

const ShipmentCard = ({ shipment, onEdit, onDelete }) => {
  return (
    <div className="shipment-card flex flex-col rounded-lg p-4 m-1 shadow " style={{ width: '250px', height: '350px' }}>
      <div className="flex flex-col mb-4">
        <p className="mb-2"><strong>Waybill:</strong> {shipment.waybill}</p>
        <p className="mb-2"><strong>Name:</strong> {shipment.customerName}</p>
        <p className="mb-2"><strong>Address:</strong> {shipment.customerAddress}</p>
        <p className="mb-2"><strong>Phone Number:</strong> {shipment.customerPhone}</p>
        {/* Add more fields as needed */}
      </div>
      <div className="flex space-x-2 mt-auto">
        <Button onClick={onEdit}>Edit</Button>
        <Button onClick={onDelete}>Delete</Button>
      </div>
    </div>
  );
};

export default ShipmentCard;
