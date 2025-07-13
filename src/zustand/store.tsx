import { create } from "zustand";
import type { IProducts } from "../types";

type Store = {
  token: string | null;
  setToken: (payload: string) => void;

  wishlist: IProducts[];
  toggleWishlist: (product: IProducts) => void;
  isInWishlist: (id: number) => boolean;
  loadFromStorage: () => void;
};

export const useStore = create<Store>((set, get) => ({
  token: localStorage.getItem("token"),
  setToken: (payload) => {
    localStorage.setItem("token", payload);
    set({ token: payload });
  },

  wishlist: [],

  toggleWishlist: (product) => {
    const { wishlist } = get();
    const isExist = wishlist.some((item) => item.id === product.id);

    const updated = isExist
      ? wishlist.filter((item) => item.id !== product.id)
      : [...wishlist, product];

    localStorage.setItem("wishlist", JSON.stringify(updated));
    set({ wishlist: updated }); 
  },

  isInWishlist: (id) => {
    return get().wishlist.some((item) => item.id === id);
  },

  loadFromStorage: () => {
    const stored = localStorage.getItem("wishlist");
    if (stored) {
      set({ wishlist: JSON.parse(stored) });
    }
  },
}));
