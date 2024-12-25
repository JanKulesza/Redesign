import ProgressBar from "./ProgressBar";
import { PropertyReferralsItem } from "../entities/PropertyReferralsItem";

const PropertyReferrals = () => {
  //Fetching data =>
  const items: PropertyReferralsItem[] = [
    { title: "Social Media", percentage: 64, color: "#705cd4" },
    { title: "Marketplaces", percentage: 40, color: "#80bc7c" },
    { title: "Websites", percentage: 53, color: "#ffcc74" },
    { title: "Digital Ads", percentage: 86, color: "#ffa4c4" },
    { title: "Others", percentage: 15, color: "#f85454" },
  ];
  return (
    <div className="bg-background xl:grid-cols-subgrid xl:col-span-2 p-8 rounded-2xl">
      <h3 className="font-semibold text-lg mb-5">Property Referrals</h3>
      {items.map((item) => (
        <div className="flex flex-col mb-3 xl:mb-8" key={item.title}>
          <div className="flex justify-between mb-3">
            <span>{item.title}</span>
            <span>{item.percentage}</span>
          </div>
          <ProgressBar color={item.color} percentage={item.percentage} />
        </div>
      ))}
    </div>
  );
};

export default PropertyReferrals;
