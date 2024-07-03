import React from 'react';
import Button from './Button';

const ShipmentCard = ({ shipment, onEdit, onDelete }) => {
  return (
    <div className="font-poppins shipment-card flex flex-col rounded-lg p-4 shadow my-3" style={{ width: '260px', height: '300px' }}>
      <div className="flex flex-col mb-4">
        <p className="mb-2"><strong>Waybill:</strong> {shipment.waybill}</p>
        <p className="mb-2"><strong>Name:</strong> {shipment.customerName}</p>
        <p className="mb-2"><strong>Address:</strong> {shipment.customerAddress}</p>
        <p className="mb-2"><strong>Phone Number:</strong> {shipment.customerPhone}</p>
      </div>
      <div className="flex space-x-2 mt-auto">
        <Button onClick={onEdit}>Edit</Button>
        <Button onClick={onDelete} bgcolor="bg-transpaent border text-gradient ">Delete</Button>
      </div>
    </div>
  );
};

export default ShipmentCard;
