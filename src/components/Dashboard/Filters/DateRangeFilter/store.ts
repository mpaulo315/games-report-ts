import { create } from "zustand";

type iDateRangeFilterStore = {
  dateRange: [Date, Date];
  setDateRange: (date: [Date, Date]) => void;
};

export const useDateFilterStore = create<iDateRangeFilterStore>()((set) => ({
  dateRange: [new Date(), new Date()],
  setDateRange: (dateRange: [Date, Date]) => set({ dateRange }),
}));
