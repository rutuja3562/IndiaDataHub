
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
// import faker from 'faker';

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
  // responsive: true,
  // plugins: {
    // legend: {
    //   position: 'top' as const,
    // },
    // title: {
    //   display: true,
    
    // },
  // },

};

const labels = [,2014,2016,2018,2020,2022];

export const data = {
  labels,
  datasets: [
    {
      data: [0, 2.2, 4.4, 6.5, 8.8, 10.2],

      fill: "rgb(75, 192, 192)",
      borderColor: "rgb(75, 192, 192)",
      tension: 0.3,
      backgroundColor: "rgba(151, 187, 205, 0.2)",
    },
  ],
};

  export const LeftChart = () => {
    return <Line options={options} data={data} style={{bg:"red"}} height={"410px"} width={"300px"}/>;
  };
