import { create } from "zustand";
import { iRangeFilterStore } from "./type";

export const useRangeFilterStore = create<iRangeFilterStore>()((set) => ({
  range: [0, 10],
  setRange: (range: [number, number]) => set({ range }),
}));
