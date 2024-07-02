// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import ShipmentService from '../services/ShipmentService';
import ShipmentCard from '../components/ShipmentCard';
import Button from '../components/Button';
import Modal from '../components/Modal';
import Input from '../components/Input';

const Dashboard = () => {
  const [shipments, setShipments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('create'); // create, update, delete
  const [selectedShipment, setSelectedShipment] = useState(null);
  const [shipmentData, setShipmentData] = useState({
    waybill: '',
    customerName: '',
    customerAddress: '',
    customerPhoneNumber: ''
  });

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

  const handleCreateShipment = async () => {
    try {
      await ShipmentService.createShipment(shipmentData);
      fetchShipments();
      closeModal();
    } catch (error) {
      console.error('Error creating shipment:', error);
    }
  };

  const handleUpdateShipment = async () => {
    try {
      await ShipmentService.updateShipment(selectedShipment.id, shipmentData);
      fetchShipments();
      closeModal();
    } catch (error) {
      console.error('Error updating shipment:', error);
    }
  };

  const handleDeleteShipment = async () => {
    try {
      await ShipmentService.deleteShipment(selectedShipment.id);
      fetchShipments();
      closeModal();
    } catch (error) {
      console.error('Error deleting shipment:', error);
    }
  };

  const openModal = (mode, shipment = null) => {
    setModalMode(mode);
    setSelectedShipment(shipment);
    if (shipment) {
      setShipmentData({
        waybill: shipment.waybill,
        customerName: shipment.customerName,
        customerAddress: shipment.customerAddress,
        customerPhoneNumber: shipment.customerPhoneNumber
      });
    } else {
      setShipmentData({
        waybill: '',
        customerName: '',
        customerAddress: '',
        customerPhoneNumber: ''
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedShipment(null);
  };

  const renderModalContent = () => {
    if (modalMode === 'delete') {
      return (
        <div>
          <p>Are you sure you want to delete this shipment?</p>
          <Button onClick={handleDeleteShipment}>Yes</Button>
          <Button onClick={closeModal}>No</Button>
        </div>
      );
    }

    return (
      <div>
        <Input
          type="text"
          placeholder="Waybill"
          value={shipmentData.waybill}
          onChange={(e) => setShipmentData({ ...shipmentData, waybill: e.target.value })}
          required
        />
        <Input
          type="text"
          placeholder="Customer Name"
          value={shipmentData.customerName}
          onChange={(e) => setShipmentData({ ...shipmentData, customerName: e.target.value })}
          required
        />
        <Input
          type="text"
          placeholder="Customer Address"
          value={shipmentData.customerAddress}
          onChange={(e) => setShipmentData({ ...shipmentData, customerAddress: e.target.value })}
          required
        />
        <Input
          type="text"
          placeholder="Customer Phone Number"
          value={shipmentData.customerPhoneNumber}
          onChange={(e) => setShipmentData({ ...shipmentData, customerPhone: e.target.value })}
          required
        />
      </div>
    );
  };

  const renderModalActions = () => {
    if (modalMode === 'create') {
      return (
        <Button onClick={handleCreateShipment}>Create</Button>
      );
    } else if (modalMode === 'update') {
      return (
        <Button onClick={handleUpdateShipment}>Update</Button>
      );
    } else if (modalMode === 'delete') {
      return null; // actions are already handled in renderModalContent for delete
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <Button onClick={() => openModal('create')}>Create Shipment</Button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {shipments.map((shipment) => (
          <ShipmentCard key={shipment.id} shipment={shipment} onEdit={() => openModal('update', shipment)} onDelete={() => openModal('delete', shipment)} />
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalMode === 'delete' ? 'Confirm Deletion' : modalMode === 'create' ? 'Create Shipment' : 'Update Shipment'}
        actions={renderModalActions()}
      >
        {renderModalContent()}
      </Modal>
    </div>
  );
};

export default Dashboard;
