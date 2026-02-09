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
    console.log(response.data);
    return response.data;
  },

  signup: async (userData) => {
      const response = await api.post("/register", userData);

      return response.data;
  },

  forgetPassword: async (email) => {
    const formData = new FormData();
    formData.append("email", email);
    const response = await api.post("/forget-password", formData);
     console.log(response.data);
    return response.data;
  },

  resetPassword: async (data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("otp", data.otp);
    formData.append("password", data.password);
    formData.append("password_confirmation", data.password_confirmation);
    const response = await api.post("/reset-password", formData);
     console.log(response.data);
    return response.data;
  },
};

export default api;
