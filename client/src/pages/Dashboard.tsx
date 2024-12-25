import Charts from "@/components/Charts";
import PropertyReferrals from "@/components/PropertyReferrals";
import TopAgent from "@/components/TopAgent";
import TotalRevenue from "@/components/TotalRevenue";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-foreground text-4xl font-semibold my-8 ml-4 md:mt-0 md:ml-0 ">
        Dashboard
      </h1>
      <Charts />
      <div className="grid xl:grid-cols-5 gap-4 mb-8">
        <TotalRevenue />
        <PropertyReferrals />
      </div>
      <div className="grid xl:grid-cols-3 gap-4">
        <TopAgent />
        <div className="relative bg-background rounded-2xl h-72 p-8"></div>
        <div className="relative bg-background rounded-2xl h-72 p-8"></div>
      </div>
    </div>
  );
};

export default Dashboard;
