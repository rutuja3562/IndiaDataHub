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

export const options = {
  responsive: true,
};

const labels = [, 2017, 2018, 2019, 2020, 2021, 2022];

export const data = {
  labels,
  datasets: [
    {
      data: [0, 38, 55, 58, 40, 43, 61],
      fill: true,
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(151, 187, 205, 0.2)",
    },
  ],
};

export const GridContainer3 = () => {
  return <Line options={options} data={data} />;
};
