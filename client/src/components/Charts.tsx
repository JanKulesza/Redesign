import PieChart from "./PieChart";

export interface PieChartItem {
  title: string;
  value: number;
}

const Charts = () => {
  const items: PieChartItem[] = [
    { title: "Properties for sale", value: 376 },
    { title: "Properties for rent", value: 539 },
    { title: "Total customers", value: 6583 },
    { title: "Total City", value: 81 },
  ];

  return (
    <div className="flex text-zinc-900">
      {items.map((item) => (
        <PieChart key={item.title} item={item} />
      ))}
    </div>
  );
};

export default Charts;
