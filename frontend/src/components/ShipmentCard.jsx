// src/components/ShipmentCard.js
import React from 'react';
import Button from './Button';

const ShipmentCard = ({ shipment, onEdit, onDelete }) => {
  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px', width: '200px' }}>
      <p><strong>Waybill:</strong> {shipment.waybill}</p>
      <p><strong>Customer Name:</strong> {shipment.customerName}</p>
      <p><strong>Customer Address:</strong> {shipment.customerAddress}</p>
      <p><strong>Customer Phone Number:</strong> {shipment.customerPhone}</p>
      <Button onClick={onEdit}>Edit</Button>
      <Button onClick={onDelete}>Delete</Button>
    </div>
  );
};

export default ShipmentCard;
