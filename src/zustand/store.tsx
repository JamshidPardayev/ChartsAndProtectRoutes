import { create } from "zustand";
type Store = {
    token: null | string
}
export const useStore = create<Store>()(()=> ({
    token: "sdsds"
}))
