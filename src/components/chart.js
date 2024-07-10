import React from "react";

import { Line } from "react-chartjs-2";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ data, index }) => {
  const last6MonthsData = data.filter((entry) => {
    const entryDate = new Date(`${entry.month} 1, ${entry.year}`);
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 9);
    return entryDate >= sixMonthsAgo;
  });
  last6MonthsData.reverse();

  const months = last6MonthsData.map((entry) => {
    const date = new Date(`${entry.month} 1, ${entry.year}`);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  });
  const systolicValues = last6MonthsData.map(
    (entry) => entry.blood_pressure.systolic.value
  );
  const diastolicValues = last6MonthsData.map(
    (entry) => entry.blood_pressure.diastolic.value
  );


  const chartData = {
    labels: months,
    datasets: [
      {
        label: "Systolic",
        data: systolicValues,
        borderColor: "#C26EB4",
        backgroundColor: "#C26EB4",
        fill: false,
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "#C26EB4",
      },
      {
        label: "Diastolic",
        data: diastolicValues,
        borderColor: "#7E6CAB",
        backgroundColor: "#8C6FE6",
        fill: false,
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "#8C6FE6",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y;
            }
            return label;
          },
        },
      },
      title: {
        display: true,
        text: "Blood Pressure",
        align: "start",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
        },
      },
      y: {
        title: {
          display: true,
        },
        beginAtZero: true,
        grid: {
          display: true,
        },
      },
    },
  };
  return (
    <div className="container">
      <div className="dhistory">
          <div className="tittle">Diagnosis History</div>
          <div className="linechart">
            <Line data={chartData} options={options} />
          </div>
          
      </div>

    </div>
  );
};

export default LineChart;
