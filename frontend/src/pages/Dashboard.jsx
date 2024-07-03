import React, { useEffect, useState } from "react";
import ShipmentService from "../services/ShipmentService";
import ShipmentCard from "../components/ShipmentCard";
import Button from "../components/Button";
import Modal from "../components/Modal";
import Input from "../components/Input";
import styles from "../style";

const Dashboard = () => {
  const [shipments, setShipments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("create"); // create, update, delete
  const [selectedShipment, setSelectedShipment] = useState(null);
  const [shipmentData, setShipmentData] = useState({
    waybill: "",
    customerName: "",
    customerAddress: "",
    customerPhone: "", 
  });

  useEffect(() => {
    fetchShipments();
  }, []);

  const fetchShipments = async () => {
    try {
      const response = await ShipmentService.getAllShipments();
      setShipments(response.data);
    } catch (error) {
      console.error("Error fetching shipments:", error);
    }
  };

  const handleCreateShipment = async () => {
    try {
      await ShipmentService.createShipment(shipmentData);
      fetchShipments();
      closeModal();
    } catch (error) {
      console.error("Error creating shipment:", error);
    }
  };

  const handleUpdateShipment = async () => {
    try {
      await ShipmentService.updateShipment(selectedShipment.id, shipmentData);
      fetchShipments();
      closeModal();
    } catch (error) {
      console.error("Error updating shipment:", error);
    }
  };

  const handleDeleteShipment = async () => {
    try {
      await ShipmentService.deleteShipment(selectedShipment.id);
      fetchShipments();
      closeModal();
    } catch (error) {
      console.error("Error deleting shipment:", error);
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
        customerPhone: shipment.customerPhone, 
      });
    } else {
      setShipmentData({
        waybill: "",
        customerName: "",
        customerAddress: "",
        customerPhone: "", 
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedShipment(null);
  };

  const renderModalContent = () => {
    if (modalMode === "delete") {
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
          onChange={(e) =>
            setShipmentData({ ...shipmentData, waybill: e.target.value })
          }
          required
        />
        <Input
          type="text"
          placeholder="Customer Name"
          value={shipmentData.customerName}
          onChange={(e) =>
            setShipmentData({ ...shipmentData, customerName: e.target.value })
          }
          required
        />
        <Input
          type="text"
          placeholder="Customer Address"
          value={shipmentData.customerAddress}
          onChange={(e) =>
            setShipmentData({
              ...shipmentData,
              customerAddress: e.target.value,
            })
          }
          required
        />
        <Input
          type="text"
          placeholder="Customer Phone Number"
          value={shipmentData.customerPhone}
          onChange={(e) =>
            setShipmentData({ ...shipmentData, customerPhone: e.target.value })
          }
          required
        />
      </div>
    );
  };

  const renderModalActions = () => {
    if (modalMode === "create") {
      return <Button onClick={handleCreateShipment}>Create</Button>;
    } else if (modalMode === "update") {
      return <Button onClick={handleUpdateShipment}>Update</Button>;
    } else if (modalMode === "delete") {
      return null; 
    }
  };

  return (
    <div className="w-full h-full overflow-hidden font-poppins bg-primary text-white min-h-screen">
      <div className={`${styles.paddingX} `}>
        <div className="flex justify-end">
          <Button onClick={() => openModal("create")}>Create Shipment</Button>
        </div>
        <div className="justify-items-center grid grid-cols-1 ss:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-4">
          {shipments.map((shipment) => (
            <ShipmentCard
              key={shipment.id}
              shipment={shipment}
              onEdit={() => openModal("update", shipment)}
              onDelete={() => openModal("delete", shipment)}
            />
          ))}
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={
            modalMode === "delete"
              ? "Confirm Deletion"
              : modalMode === "create"
              ? "Create Shipment"
              : "Update Shipment"
          }
          actions={renderModalActions()}
        >
          {renderModalContent()}
        </Modal>
      </div>
    </div>
  );
};

export default Dashboard;
