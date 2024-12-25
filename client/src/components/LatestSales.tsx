import { Link } from "react-router";
import { Button } from "./ui/button";
import { Property } from "@/entities/Property";
import image from "@/assets/property.jpg";
import PropertyAvatar from "./PropertyAvatar";

const LatestSales = () => {
  const properties: Property[] = [
    {
      name: "Benny Chagur",
      image: image,
      location: "North Carolina",
      price: 124,
    },
    {
      name: "Chynita Heree",
      image: image,
      location: "North Carolina",
      price: 124,
    },
    {
      name: "David Yers",
      image: image,
      location: "North Carolina",
      price: 124,
    },
    {
      name: "Hayder Jahid",
      image: image,
      location: "North Carolina",
      price: 124,
    },
  ];

  return (
    <div className="relative bg-background rounded-2xl p-8">
      <Button variant="outline" asChild className="absolute top-7 right-8 ">
        <Link to="/properties">View All</Link>
      </Button>
      <h3 className="font-semibold text-lg mb-8">Latest Sales</h3>
      <div className="flex flex-col gap-4">
        {properties.map((property) => (
          <div className="flex justify-between items-center">
            <PropertyAvatar property={property} />
            <span className="text-theme text-xl font-semibold">
              +${property.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestSales;
