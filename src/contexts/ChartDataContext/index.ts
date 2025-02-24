import { createContext } from "react";
import { Game } from "../../interfaces/games";

type iChartDataContext = {
  data: Game[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
};

export const CharDataContext = createContext({} as iChartDataContext);
