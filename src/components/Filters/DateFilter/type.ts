export type iDateFilterStore = {
  dateRange: [Date, Date];
  setDateRange: (date: [Date, Date]) => void;
};