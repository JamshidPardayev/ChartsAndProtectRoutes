import { create } from "zustand";

type Store = {
  token: string | null;
  setToken: (payload: string) => void;
};

export const useStore = create<Store>((set) => ({
  token: localStorage.getItem("token"),
  setToken: (payload) => {
    localStorage.setItem("token", payload);
    set({ token: payload });
  },
}));
