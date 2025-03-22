import { useContext, useMemo } from "react";
import { ChartDataContext } from "../../../../contexts/ChartDataContext";
import { Game } from "../../../../interfaces/games";
import PlaceholderGraph from "rsuite/esm/Placeholder/PlaceholderGraph";
import { BarChart } from "../../../Charts/BarChart";

type AvgPerGenre = {
  [key: string]: { sum: number; count: number };
};

const transformData = (data: Game[]) => {
  if (data.length === 0) {
    return [];
  }

  const sumAndCountScorePerGenreList = Object.entries(
    data.reduce((acc, item) => {
      if (!item.critic_score) {
        return acc;
      }

      if(item.genre in acc){
        acc[item.genre]["sum"] += item.critic_score;
        acc[item.genre]["count"] += 1;
        return acc;
      }

      acc[item.genre] = {
        sum: item.critic_score,
        count: 1,
      };
      return acc;
    }, {} as AvgPerGenre)
  );

  const avgPerGenreList: [string, number][] = sumAndCountScorePerGenreList.map(
    ([genre, { sum, count }]) => [genre, sum / count]
  );

  avgPerGenreList.sort((a, b) => b[1] - a[1]);

  return avgPerGenreList.slice(0, 10).map(([genre, avg]) => ({
    label: genre,
    value: avg,
  }));
};
export const AvgSPGChart = () => {
  const { filteredData } = useContext(ChartDataContext);

  const chartData = useMemo(
    () => (filteredData ? transformData(filteredData) : undefined),
    [filteredData]
  );

  if (!chartData) {
    return <PlaceholderGraph />;
  }

  return (
    <BarChart
      chartData={chartData.map(({ value }) => value)}
      labels={chartData.map(({ label }) => label)}
      title="Top 10 Genres by Average Sales"
      backgroundColor="#007bff"
      borderColor="#007bff"
      borderWidth={1}
    />
  );
};
