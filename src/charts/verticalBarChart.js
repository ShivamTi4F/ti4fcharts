import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: '',
    },
  },
};

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data:[10, 20, 30, 42, 5, 8, 3, 5, 61, 73, 91, 58],
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data:[10, 20, 30, 42, 5, 8, 3, 5, 61, 73, 91, 58],
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

function VerticalBarChart(props) {
  return <Bar options={options} data={props.data} />;
}

export default VerticalBarChart;
