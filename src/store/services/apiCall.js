import axios from "axios";

const BASE_URL = "https://bookstore.eraasoft.pro/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const authService = {
  login: async (credentials) => {
    const response = await api.post("/login", credentials);
    return response.data;
  },

  signup: async (userData) => {
    const response = await api.post("/register", userData);
    return response.data;
  },

  forgotPassword: async (email) => {
    const response = await api.post("/forgot-password", { email });
    return response.data;
  },

  resetPassword: async (data) => {
    const response = await api.post("/reset-password", data);
    return response.data;
  },
};

export default api;
