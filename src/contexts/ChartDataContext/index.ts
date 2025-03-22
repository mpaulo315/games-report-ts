import { createContext } from "react";
import { Game } from "../../interfaces/games";

type iChartDataContext = {
  data: Game[] | undefined;
  filteredData: Game[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
};

export const ChartDataContext = createContext({} as iChartDataContext);
