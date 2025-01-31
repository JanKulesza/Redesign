import ReactApexChart from "react-apexcharts";

interface Props {
  listingsCount: number;
}

const AgentChart = ({ listingsCount }: Props) => {
  return (
    <div className="grid-cols-subgrid col-span-3 mb-8 pt-2 bg-background  md:p-12 lg:p-4 xl:p-12 md:py-16 rounded-xl">
      <p className="text-3xl max-xl:m-6 font-semibold mb-3">
        Agent Listings Statistics
      </p>
      <ReactApexChart
        options={{
          chart: {
            type: "line",
            toolbar: {
              show: false,
            },
            zoom: {
              enabled: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: true,
            position: "top",
            horizontalAlign: "right",
            onItemHover: { highlightDataSeries: true },
            labels: { colors: "hsl(var(--secondary-foreground))" },
          },

          forecastDataPoints: {
            count: 2,
          },
          stroke: {
            curve: "straight",
          },

          grid: {
            row: {
              colors: ["hsl(var(--main))", "transparent"],
              opacity: 0.5,
            },
            borderColor: "transparent",
          },
          yaxis: {
            labels: {
              style: { colors: "hsl(var(--secondary-foreground))" },
            },
          },
          xaxis: {
            axisBorder: { show: false },
            crosshairs: { show: false },
            axisTicks: { show: false },
            labels: {
              style: { colors: "hsl(var(--secondary-foreground))" },
            },
            tooltip: { enabled: false },
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
          },
          responsive: [
            {
              breakpoint: 425,
              options: {
                chart: {
                  width: "95%",
                },
                legend: {
                  horizontalAlign: "center",
                },
              },
            },
          ],
        }}
        series={[
          {
            name: "Listings",
            data: [
              0,
              0,
              1,
              3,
              2,
              4,
              5,
              2,
              listingsCount,
              listingsCount + 1,
              listingsCount + 4,
              listingsCount + 6,
            ],
          },
          {
            name: "Sales",
            data: [0, 0, 0, 0, 1, 2, 3, 2, 3, 4, 6, 7],
            color: "#ec4899",
          },
        ]}
        type="line"
        height={425}
      />
    </div>
  );
};

export default AgentChart;
