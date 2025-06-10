<script setup lang="ts">
import { ref } from "vue";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Filler,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Filler,
  PointElement,
  LineElement
);

const chartData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "QT",
      data: [186, 305, 237, 73, 209, 214],
      fill: true,
      backgroundColor: "#7a63af",
      borderColor: "#d987ee",
      tension: 0.4,
      pointRadius: 3,
      pointHoverRadius: 6,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top" as const,
    },
    tooltip: {
      enabled: true,
      mode: "index" as const,
      intersect: false,
    },
  },
  scales: {
    x: {
      type: "category" as const,
      grid: {
        display: false,
      },
      ticks: {
        maxRotation: 0,
        callback: function (val: number, index: number) {
          const labels = chartData.labels;
          return labels[index].slice(0, 3);
        },
      },
    },
    y: {
      type: "linear" as const,
      grid: {
        borderDash: [5, 5],
      },
      beginAtZero: true,
    },
  },
};
</script>

<template>
  <div class="card max-w-md mx-auto">
    <section class="p-4">
      <Line :data="chartData" :options="chartOptions" />
    </section>
    <footer class="p-4 border-t text-sm text-gray-600 flex items-center gap-2">
      <span class="ml-auto text-gray-400">January - June 2024</span>
    </footer>
  </div>
</template>

<style scoped>
.card {
  background: #363636;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.1);
}
</style>
