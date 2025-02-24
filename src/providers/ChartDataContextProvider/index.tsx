import { useChartData } from "../../hooks/useChartData";
import { CharDataContext } from "../../contexts/ChartDataContext";

type Props = {
  children?: React.ReactNode;
};

export const ChartDataContextProvider = ({ children }: Props) => {
  const { data, isLoading, isError, error } = useChartData();

  console.log("Data", data);
  
  return (
    <CharDataContext.Provider value={{ data, isLoading, isError, error }}>
      {children}
    </CharDataContext.Provider>
  );
};
