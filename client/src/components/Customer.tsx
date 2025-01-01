import { Ellipsis } from "lucide-react";
import { Button } from "./ui/button";
import ReactApexChart from "react-apexcharts";
import { CustomersOptions, CustomersSeries } from "./config/chart";
import { useIsMobile } from "@/hooks/use-mobile";

const Customer = () => {
  const isMobile = useIsMobile();

  return (
    <div className="relative bg-background rounded-2xl p-8">
      <Button variant="ghost" size="icon" className="absolute top-7 right-8 ">
        <Ellipsis />
      </Button>
      <h3 className="font-semibold text-lg mb-1">Customer</h3>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div>
            <h6 className="text-secondary-foreground mb-3 text-lg">
              Total customers
            </h6>
            <p className="text-4xl font-semibold mb-1">5007k</p>
            <p className="text-[#30d484] text-lg">21.77%</p>
          </div>
          <ReactApexChart
            options={{
              ...CustomersOptions,
              colors: ["#8ecae6", "#8ecae6", "#2196f3", "#8ecae6"],
            }}
            series={CustomersSeries}
            type="bar"
            height={"150px"}
            width={isMobile ? "150px" : "250px"}
          />
        </div>
        <div className="h-[2px] bg-input mx-[-2rem] " />
        <div className="flex justify-between items-center">
          <div>
            <h6 className="text-secondary-foreground mb-3 text-lg">
              New Customers This Month
            </h6>
            <p className="text-4xl font-semibold mb-1">12k</p>
            <p className="text-[#30d484] text-lg">21.77%</p>
          </div>
          <ReactApexChart
            options={{
              ...CustomersOptions,
              colors: ["#CFC8FF", "#CFC8FF", "#CFC8FF", "#475BE8"],
            }}
            series={[
              {
                data: [40, 23, 31, 47, 27],
              },
            ]}
            type="bar"
            height={"150px"}
            width={isMobile ? "150px" : "250px"}
          />
        </div>
      </div>
    </div>
  );
};

export default Customer;
