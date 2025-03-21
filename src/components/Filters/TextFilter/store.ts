import { create } from "zustand";
import { iTextFilterStore } from "./type";

export const useTextFilterStore = create<iTextFilterStore>((set) => ({
  storeValue: [],
  addStoreValue: (value: string) =>
    set((state) => ({
      storeValue: [...state.storeValue, value],
    })),
  setStoreValue: (storeValue: string[]) => set({ storeValue }),
}));
