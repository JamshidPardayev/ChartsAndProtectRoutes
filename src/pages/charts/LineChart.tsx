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
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Air Conditioner",
      data: [50, 100, 140, 214, 381, 882, 990],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "TV",
      data: [220, 250, 200, 400, 600, 350, 240],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Freezer",
      data: [120, 160, 190, 100, 400, 300, 500],
      borderColor: "rgb(13, 126, 15)",
      backgroundColor: "rgba(53, 123, 20, 0.7)",
    },
    {
      label: "phone",
      data: [500, 560, 1000, 800, 777, 450, 520],
      borderColor: "yellow",
      backgroundColor: "gold",
    },
  ],
};

const LineCharts = () => {
  return <Line options={options} data={data} className="" />;
};
export default LineCharts;
