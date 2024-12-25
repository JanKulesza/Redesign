import type { ApexOptions } from "apexcharts";

export const TotalRevenueSeries: ApexAxisChartSeries = [
  {
    color: "#475BE8",
    name: "Running Month",
    data: [183, 124, 115, 85, 143, 143, 96],
  },
  {
    color: "#CFC8FF",
    name: "Last Month",
    data: [95, 84, 72, 44, 108, 108, 47],
  },
];

export const TotalRevenueOptions: ApexOptions = {
  chart: {
    id: "chart1",
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  colors: ["#475BE8", "#CFC8FF"],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: "55%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  stroke: {
    colors: ["transparent"],
    width: 4,
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  },
  yaxis: {
    labels: {
      formatter(val: number) {
        return `${val}K`;
      },
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    markers: { shape: "circle" },
    labels: { colors: "hsl(var(--secondary-foreground))" },
    position: "top",
    horizontalAlign: "right",
    onItemHover: { highlightDataSeries: true },
  },
  tooltip: {
    y: {
      formatter(val: number) {
        return `$ ${val} thousands`;
      },
    },
  },
  responsive: [
    {
      breakpoint: 425,

      options: {
        yaxis: {
          title: {
            text: { show: false },
          },
        },
        chart: {
          width: "100%",
        },
        legend: {
          horizontalAlign: "center",
        },
      },
    },
  ],
};
