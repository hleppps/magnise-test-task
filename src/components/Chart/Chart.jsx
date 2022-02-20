import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ labels, values }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Chart",
        data: values,
        borderColor: "rgb(255, 99, 132)",
      },
    ],
  };
  return <Line data={data} />;
};

export default Chart;
