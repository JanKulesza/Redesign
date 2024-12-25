import { PieChartItem } from "./Charts";
import ReactApexChart from "react-apexcharts";

interface Props {
  item: PieChartItem;
}

const Chart = ({ item }: Props) => {
  return (
    <div className="flex bg-background w-full mb-5 lg:max-w-1/2 xl:w-full justify-between py-10 px-8 rounded-2xl">
      <div>
        <h6 className="text-secondary-foreground text-lg mb-2">{item.title}</h6>
        <p className="text-foreground text-3xl font-bold">{item.value[0]}</p>
      </div>
      <ReactApexChart
        options={{
          chart: { type: "donut" },
          colors: [item.color, "hsl(var(--secondary))"],
          legend: { show: false },
          dataLabels: { enabled: false },
          stroke: { show: false },
        }}
        series={item.value}
        type="donut"
        width="120px"
      />
    </div>
  );
};

export default Chart;
