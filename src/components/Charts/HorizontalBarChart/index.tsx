import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  chartData: number[];
  labels: string[];
  title: string;
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
}

export const HorizontalBarChart = ({
  chartData,
  labels,
  title,
  backgroundColor,
  borderColor,
  borderWidth,
}: Props) => {
  const data: ChartData<"bar"> = {
    labels,
    datasets: [
      {
        data: chartData,
        backgroundColor,
        borderColor,
        borderWidth,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: true,
    indexAxis: "y" as const,
    plugins: {
      title: {
        display: true,
        text: title,
        font: {
          family: "Inter",
        },
      },
      legend: {
        display: false,
      },
    },
  };

  return <Bar data={data} options={options} className="chart" title={title} />;
};
