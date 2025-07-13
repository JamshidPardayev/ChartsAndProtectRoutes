import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStore } from "../zustand/store";
import api from "../api";

export const login = async (username: string, password: string) => {
  const res = await api.post("/auth/login", { username, password });
  return res.data; 
};

const Auth = () => {
  const { token } = useStore();
  return token ? <Outlet /> : <Navigate replace to="/login" />;
};

export default React.memo(Auth);
