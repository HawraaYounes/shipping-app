import React, { useEffect, useState } from 'react';
import ShipmentService from '../services/ShipmentService';
import ShipmentCard from '../components/ShipmentCard';

const Dashboard = () => {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    fetchShipments();
  }, []);

  const fetchShipments = async () => {
    try {
      const response = await ShipmentService.getAllShipments();
      setShipments(response.data);
    } catch (error) {
      console.error('Error fetching shipments:', error);
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {shipments.map((shipment) => (
          <ShipmentCard key={shipment.id} shipment={shipment} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
