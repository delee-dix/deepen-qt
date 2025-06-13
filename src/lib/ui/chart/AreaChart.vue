<script setup lang="ts">
import { Line } from "vue-chartjs";

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
  type ChartOptions,
  type TooltipItem,
  type Chart as ChartType,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const chartRef = ref<InstanceType<typeof Line> | null>(null);

const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const chartData = ref({
  labels,
  datasets: [
    {
      label: "QT",
      data: [276, 205, 267, 222, 300, 214, 153],
      fill: true,
      backgroundColor: "#000",
      tension: 0,
      pointRadius: 2,
      pointHoverRadius: 4,
    },
  ],
});

const chartOptions: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: true,
      mode: "index",
      intersect: false,
      backgroundColor: "#090607",
      borderColor: "#363636",
      borderWidth: 2,
      boxWidth: 2,
      padding: 8,
      boxPadding: 8,
      callbacks: {
        title: () => [],
        label: (tooltipItem: TooltipItem<"line">) => {
          const label = labels[tooltipItem.dataIndex] || "";
          const value = tooltipItem.formattedValue || tooltipItem.parsed.y || "";
          return `${label}: ${value}`;
        },
      },
    },
  },
  scales: {
    x: { display: false },
    y: { display: false, beginAtZero: true },
  },
};

watchEffect(() => {
  const chart = chartRef.value?.chart as ChartType<"line"> | undefined;
  if (!chart) return;

  const ctx = chart.ctx;
  const area = chart.chartArea;
  if (!area) return;

  const gradient = ctx.createLinearGradient(0, area.top, 0, area.bottom);
  gradient.addColorStop(1.0, "#090411");
  gradient.addColorStop(0.94, "#160829");
  gradient.addColorStop(0.81, "#220c3f");
  gradient.addColorStop(0.68, "#270d4a");
  gradient.addColorStop(0.54, "#351066");
  gradient.addColorStop(0.4, "#471489");
  gradient.addColorStop(0.25, "#4a1989");
  gradient.addColorStop(0.08, "#5f1cb7");

  chart.data.datasets[0].backgroundColor = gradient;
  chart.update();
});
</script>

<template>
  <Line ref="chartRef" :data="chartData" :options="chartOptions" />
</template>
