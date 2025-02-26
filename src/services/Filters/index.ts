import { getReleaseDateRange } from "../../repositories/Filters";

export const getReleaseDateRangeServ = async (): Promise<[Date, Date]> => {
  const { start_date: startDateM, end_date: endDateM } =
    await getReleaseDateRange();

  return [new Date(startDateM), new Date(endDateM)];
};
