// src/services/api.ts
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3333/api/v1';
const API_BASE_URL2 = 'http://localhost:3333/api/v1/staff';

const instance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

const instance2 = axios.create({
  baseURL: API_BASE_URL2,
  withCredentials: true,
});

export const api = {
  async submitRequest(data: any) {
    const response = await instance.post('/requests', data);
    return response.data;
  },

  async fetchRequests() {
    const response = await instance2.get(`/requests`);
    return response.data;
  },

  async simulatePayment(reference: string) {
    const response = await instance.get(`/payments/${reference}/status`);
    return response.data;
  },

  async checkRequestStatus(trackingId: string) {
    const response = await instance.get(`/requests/${trackingId}`);
    return response.data;
  }
};

