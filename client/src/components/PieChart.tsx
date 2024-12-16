import { PieChartItem } from "./Charts";

interface Props {
  item: PieChartItem;
}

const PieChart = ({ item }: Props) => {
  return <div>{item.title + "" + item.value}</div>;
};

export default PieChart;
