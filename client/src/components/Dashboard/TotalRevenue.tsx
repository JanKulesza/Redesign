import { ArrowUp, Ellipsis } from "lucide-react";
import { Button } from "../ui/button";
import ReactApexChart from "react-apexcharts";
import { TotalRevenueOptions, TotalRevenueSeries } from "../config/chart";

const TotalRevenue = () => {
  return (
    <div className="relative bg-background xl:grid-cols-subgrid xl:col-span-3 rounded-2xl p-2 py-8 md:p-8">
      <Button variant="ghost" size="icon" className="absolute top-7 right-8 ">
        <Ellipsis />
      </Button>
      <h3 className="font-semibold text-lg ml-6 md:ml-0 mb-5">Total Revenue</h3>
      <div className="flex flex-col md:flex-row px-6 md:-px-0 items-center mb-3">
        <p className="text-4xl font-semibold mr-4 lg:mr-16 mb-3">$236,535</p>
        <div className="flex items-center mb-3">
          <div className="p-0.5 rounded-xl w-6 h-6 bg-theme mr-2">
            <ArrowUp className="w-5 h-5 text-background" />
          </div>
          <div>
            <p className="text-theme text-lg">0,8%</p>
            <p className="text-secondary-foreground text-md">Than last Month</p>
          </div>
        </div>
      </div>
      <ReactApexChart
        series={TotalRevenueSeries}
        type="bar"
        height={310}
        options={TotalRevenueOptions}
      />
    </div>
  );
};

export default TotalRevenue;
