import Charts from "@/components/Charts";
import PropertyReferrals from "@/components/PropertyReferrals";
import TotalRevenue from "@/components/TotalRevenue";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-foreground text-4xl font-semibold mb-8">Dashboard</h1>
      <Charts />
      <div className="grid xl:grid-cols-5 gap-4">
        <TotalRevenue />
        <PropertyReferrals />
      </div>
    </div>
  );
};

export default Dashboard;
