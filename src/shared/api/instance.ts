import axios from "axios";

import { LSKeys } from "../enums";

const baseURL = import.meta.env.VITE_BASE_URL;

export const instance = axios.create({
  baseURL: baseURL,
  // timeout: 1000,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem(LSKeys.ACCESS_TOKEN);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
