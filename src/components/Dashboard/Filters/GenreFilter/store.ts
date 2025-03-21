import { create } from "zustand";

type iGenresStore = {
  store: string[];
  addStoreValue: (value: string) => void;
  setStoreValue: (value: string[]) => void;
};

export const useGenresStore = create<iGenresStore>((set) => ({
  store: [],
  addStoreValue: (value: string) =>
    set((state) => ({
      store: [...state.store, value],
    })),
  setStoreValue: (store: string[]) => set({ store }),
}));
