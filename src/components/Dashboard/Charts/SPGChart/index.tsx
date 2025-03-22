import { useContext, useMemo } from "react";
import { ChartDataContext } from "../../../../contexts/ChartDataContext";
import { Game } from "../../../../interfaces/games";
import PlaceholderGraph from "rsuite/esm/Placeholder/PlaceholderGraph";
import { HorizontalBarChart } from "../../../Charts/HorizontalBarChart";

type SalesPerGenre = {
  [key: string]: number;
};

const transformData = (data: Game[]) => {
  if (data.length === 0) {
    return [];
  }
  const salesPerGenreList = Object.entries(
    data.reduce((acc, item) => {
      acc[item.genre] = (acc[item.genre] || 0) + (item.total_sales || 0);
      return acc;
    }, {} as SalesPerGenre)
  );

  salesPerGenreList.sort((a, b) => b[1] - a[1]);

  return salesPerGenreList.slice(0, 10).map(([genre, sales]) => ({
    label: genre,
    value: sales,
  }));
};

export const SPGChart = () => {
  const { filteredData } = useContext(ChartDataContext);

  const chartData = useMemo(
    () => (filteredData ? transformData(filteredData) : undefined),
    [filteredData]
  );

  if (!chartData) {
    return <PlaceholderGraph />;
  }

  return (
    <HorizontalBarChart
      chartData={chartData.map(({ value }) => value)}
      labels={chartData.map(({ label }) => label)}
      title="Top 10 Genres by Total Sales"
      backgroundColor="#007bff"
      borderColor="#007bff"
      borderWidth={1}
    />
  );
};
