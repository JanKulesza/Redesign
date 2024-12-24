import Chart from "./Chart";

export interface PieChartItem {
  title: string;
  value: number[];
  color: string;
}

const Charts = () => {
  const items: PieChartItem[] = [
    { title: "Properties for sale", value: [376, 61], color: "#485cec" },
    { title: "Properties for rent", value: [539, 27], color: "#485cec" },
    { title: "Total customers", value: [6583, 1982], color: "#485cec" },
    { title: "Total City", value: [90, 19], color: "#485cec" },
  ];

  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-4">
      {items.map((item) => (
        <Chart key={item.title} item={item} />
      ))}
    </div>
  );
};

export default Charts;
