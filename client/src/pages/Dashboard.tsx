import Charts from "@/components/Dashboard/Charts";
import Customer from "@/components/Dashboard/Customer";
import LatestSales from "@/components/Dashboard/LatestSales";
import PropertyReferrals from "@/components/Dashboard/PropertyReferrals";
import TopAgent from "@/components/Dashboard/TopAgent";
import TotalRevenue from "@/components/Dashboard/TotalRevenue";

const Dashboard = () => {
  return (
    <div className="md:p-10">
      <Charts />
      <div className="grid xl:grid-cols-5 gap-4 mb-8">
        <TotalRevenue />
        <PropertyReferrals />
      </div>
      <div className="grid xl:grid-cols-3 gap-4">
        <TopAgent />
        <Customer />
        <LatestSales />
      </div>
    </div>
  );
};

export default Dashboard;
