import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import "../styles.scss";

ChartJS.register(DoughnutController, ArcElement, Tooltip, Legend);

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Sales",
      data: [12, 19, 3, 5, 2, 3, 10],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

export const DoughnutChart = () => {
  return <Doughnut data={data} className="chart" />;
};
