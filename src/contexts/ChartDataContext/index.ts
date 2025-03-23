import { createContext } from "react";
import { Game } from "../../interfaces/games";

type iChartDataContext = {
  filteredData: Game[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
};

export const ChartDataContext = createContext({} as iChartDataContext);
