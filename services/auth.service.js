import api from "./api";
import { setToken, removeToken } from "@/utils/token";

export const login = async (payload) => {
  const { data } = await api.post("/auth/login", payload);

  setToken(data.data.token);

  return data.data;
};

export const signup = async (payload) => {
  const { data } = await api.post("/auth/signup", payload);

  setToken(data.data.token);

  return data.data;
};

export const logout = async () => {
  try {
    await api.post("/auth/logout");
  } finally {
    removeToken();
  }
};

export const getMe = async () => {
  const { data } = await api.get("/auth/me");

  return data.data;
};
