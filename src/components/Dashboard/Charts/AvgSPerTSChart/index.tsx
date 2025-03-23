import { useContext, useMemo } from "react";
import { ChartDataContext } from "../../../../contexts/ChartDataContext";
import { Game } from "../../../../interfaces/games";
import PlaceholderGraph from "rsuite/esm/Placeholder/PlaceholderGraph";
import { BarChart } from "../../../Charts/BarChart";

type TopSellers = {
  [key: string]: number;
};
type AvgCritcScore = {
    [key: string]: { sum: number; count: number };
};

const transformData = (data: Game[]) => {
  if (data.length === 0) {
    return [];
  }

  const TopSellersList = Object.entries(
    data.reduce((acc, item) => {
      acc[item.publisher] =
        (acc[item.publisher] || 0) + (item.total_sales || 0);
      return acc;
    }, {} as TopSellers)
  );

  TopSellersList.sort((a, b) => b[1] - a[1]);

  const TopSellers = TopSellersList.slice(0, 10).map((e) => e[0]);

  const avgCritcScoreList = Object.entries(data
    .filter(({ publisher }) => TopSellers.includes(publisher))
    .reduce((acc, game) => {
      if (!game.critic_score) {
        return acc;
      }
      if (game.publisher in acc) {
        acc[game.publisher]["sum"] += game.critic_score;
        acc[game.publisher]["count"] += 1;
        return acc;
      }

      acc[game.publisher] = {
        sum: game.critic_score,
        count: 1,
      };
      return acc;
    }, {} as AvgCritcScore));

    return avgCritcScoreList.map(([publisher, { sum, count }]) => ({
      label: publisher,
      value: sum / count,
    }));
};

export const AvgSPerTSChart = () => {
  const { filteredData } = useContext(ChartDataContext);

  const chartData = useMemo(() => (filteredData ? transformData(filteredData) : undefined), [filteredData]);

  if (!chartData) {
    return <PlaceholderGraph />;
  }

  return (
    <BarChart
      chartData={chartData.map(({ value }) => value)}
      labels={chartData.map(({ label }) => label)}
      title="Top 10 Publishers by Average Critic Score"
      backgroundColor="#007bff"
      borderColor="#007bff"
      borderWidth={1}
    />
  );
};
