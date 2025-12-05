import axios from "axios";

const api = axios.create({
  baseURL: "https://ideal-space-guide-5g46ggr6gwjwh49pv-5000.app.github.dev/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
