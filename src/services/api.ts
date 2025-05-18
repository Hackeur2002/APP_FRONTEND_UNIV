import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
});

const instance2 = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL2,
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
  },

  async validateRequest(requestId: number, approved: boolean, comments: string) {
    try {
      const response = await instance2.post(`/requests/validate/${requestId}`, {
        approved,
        comments,
      });
      return response.data;
    } catch (error) {
      console.error('Error validating request:', error);
      throw error;
    }
  },

  async fetchRequestById(trackingId: number) {
    try {
      const response = await instance2.get(`/requests/${trackingId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching request by ID:', error);
      throw error;
    }
  },

  async generateDocument(requestId: number, signature?: File) {
    try {
      const formData = new FormData();
      if (signature) {
        formData.append('signature', signature);
      }
      const response = await instance2.post(`/requests/${requestId}/generate`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    } catch (error) {
      console.error('Error generating document:', error);
      throw error;
    }
  },
};