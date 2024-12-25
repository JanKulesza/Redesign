import Chart from "./Chart";
import { PieChartItem } from "../entities/PieChartItem";

const Charts = () => {
  const items: PieChartItem[] = [
    { title: "Properties for sale", value: [376, 61], color: "#485cec" },
    { title: "Properties for rent", value: [539, 27], color: "#ff843c" },
    { title: "Total customers", value: [6583, 1982], color: "#30d484" },
    { title: "Total City", value: [90, 19], color: "#ff6c8c" },
  ];

  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-4 mx-4 md:mx-0">
      {items.map((item) => (
        <Chart key={item.title} item={item} />
      ))}
    </div>
  );
};

export default Charts;
