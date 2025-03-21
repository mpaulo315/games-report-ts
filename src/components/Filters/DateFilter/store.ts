import { create } from "zustand";
import { iDateFilterStore } from "./type";

export const useDateFilterStore = create<iDateFilterStore>()((set) => ({
  dateRange: [new Date(), new Date()],
  setDateRange: (dateRange: [Date, Date]) => set({ dateRange }),
}));
