import axios from 'axios';
import AuthService from './AuthService';

const API_URL = 'http://localhost:5000/api';

const ShipmentService = {
  getAllShipments: async () => {
    const headers = AuthService.getAuthHeader();
    return await axios.get(`${API_URL}/shipments`, { headers });
  },

  createShipment: async (shipmentData) => {
    const headers = AuthService.getAuthHeader();
    return await axios.post(`${API_URL}/shipments`, shipmentData, { headers });
  },

  updateShipment: async (id, shipmentData) => {
    const headers = AuthService.getAuthHeader();
    return await axios.put(`${API_URL}/shipments/${id}`, shipmentData, { headers });
  },

  deleteShipment: async (id) => {
    const headers = AuthService.getAuthHeader();
    return await axios.delete(`${API_URL}/shipments/${id}`, { headers });
  },
};

export default ShipmentService;
