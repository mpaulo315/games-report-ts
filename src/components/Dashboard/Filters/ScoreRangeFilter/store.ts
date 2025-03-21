import { create } from "zustand";

type iRangeFilterStore = {
  range: [number, number];
  setRange: (value: [number, number]) => void;
};

export const useRangeFilterStore = create<iRangeFilterStore>()((set) => ({
  range: [0, 10],
  setRange: (range: [number, number]) => set({ range }),
}));
