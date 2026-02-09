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
    const response = await api.post("/forget-password", { email });
    console.log(response.data);
    return response.data;
  },

  resetPassword: async (data) => {
    const response = await api.post("/reset-password", {
      email: data.email,
      otp: data.otp,
      password: data.password,
      password_confirmation: data.password_confirmation,
    });
    console.log(response.data);
    return response.data;
  },
};

export const bookService = {
  getBooks: async () => {
    const response = await api.get("/home");
    return response.data;
  },
};

export default api;
