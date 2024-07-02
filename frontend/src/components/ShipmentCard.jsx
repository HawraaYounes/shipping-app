import React from 'react';

const ShipmentCard = ({ shipment }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px', width: '300px' }}>
      <p><strong>Waybill:</strong> {shipment.waybill}</p>
      <p><strong>Customer Name:</strong> {shipment.customerName}</p>
      <p><strong>Customer Address:</strong> {shipment.customerAddress}</p>
      <p><strong>Customer Phone:</strong> {shipment.customerPhone}</p>
      {/* Add more shipment details as needed */}
    </div>
  );
};

export default ShipmentCard;
