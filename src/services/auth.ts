import axios from "axios";

const API_URL = "http://localhost:3333/api/v1";

export async function login(email: string, password: string) {
  const response = await axios.post(`${API_URL}/login`, { email, password }, { withCredentials: true });
  return response.data;
}

export async function logout() {
  await axios.post(`${API_URL}/staff/logout`, {}, { withCredentials: true });
}

export async function checkAuth() {
  try {
    const response = await axios.get(`${API_URL}/auth/check`, { withCredentials: true });
    console.log("response", response);
    return response.data.isAuthenticated;
  } catch {
    return false;
  }
}

export async function getSession() {
  try {
    const response = await axios.get(`${API_URL}/auth/check`, { withCredentials: true });
    return response.data.isAuthenticated ? { user: {} } : null;
  } catch {
    return null;
  }
}