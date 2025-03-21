import { create } from "zustand";

export type iPublishersStore = {
  store: string[];
  addStoreValue: (value: string) => void;
  setStoreValue: (value: string[]) => void;
};

export const usePublishersStore = 
  create<iPublishersStore>((set) => ({
    store: [],
    addStoreValue: (value: string) =>
      set((state) => ({
        store: [...state.store, value],
      })),
    setStoreValue: (store: string[]) => set({ store }),
  }));
