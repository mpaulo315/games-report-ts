import { useContext, useMemo } from "react";
import { ChartDataContext } from "../../../../contexts/ChartDataContext";
import { HorizontalBarChart } from "../../../Charts/HorizontalBarChart";
import PlaceholderGraph from "rsuite/esm/Placeholder/PlaceholderGraph";
import { Game } from "../../../../interfaces/games";

type CountPerGenre = {
  [key: string]: number;
};

const transformData = (data: Game[]) => {

  if (data.length === 0) {
    return [];
  }

  const countPerGenreList = Object.entries(
    data.reduce((acc, item) => {
      acc[item.genre] = (acc[item.genre] || 0) + 1;
      return acc;
    }, {} as CountPerGenre)
  );

  countPerGenreList.sort((a, b) => b[1] - a[1]);

  return countPerGenreList.slice(0, 10).map(([genre, count]) => ({
    label: genre,
    value: count,
  }));
};

export const NPGChart = () => {
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
      title="Top 10 Genres by Number of Games"
      backgroundColor="#007bff"
      borderColor="#007bff"
      borderWidth={1}
    />
  );
};
