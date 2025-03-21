import { create } from "zustand";

type iDevelopersStore = {
  store: string[];
  addStoreValue: (value: string) => void;
  setStoreValue: (value: string[]) => void;
};

export const useDevelopersStore = create<iDevelopersStore>((set) => ({
  store: [],
  addStoreValue: (value: string) =>
    set((state) => ({
      store: [...state.store, value],
    })),
  setStoreValue: (store: string[]) => set({ store }),
}));
