import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const ShipmentService = {
  getAllShipments: async () => {
    const response = await axios.get(`${API_URL}/shipments`);
    return response.data;
  },

  getShipmentById: async (id) => {
    const response = await axios.get(`${API_URL}/shipments/${id}`);
    return response.data;
  },

  createShipment: async (shipmentData) => {
    const response = await axios.post(`${API_URL}/shipments`, shipmentData);
    return response.data;
  },

  updateShipment: async (id, shipmentData) => {
    const response = await axios.put(`${API_URL}/shipments/${id}`, shipmentData);
    return response.data;
  },

  deleteShipment: async (id) => {
    const response = await axios.delete(`${API_URL}/shipments/${id}`);
    return response.data;
  },
};

export default ShipmentService;
