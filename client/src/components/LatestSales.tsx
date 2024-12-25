import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import { Link } from "react-router";
import AgentAvatar from "./AgentAvatar";
import { Button } from "./ui/button";
import { Property } from "@/entities/Property";
import image from "@/assets/property.jpg";

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
    {
      name: "Benny Chagur",
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
          <div className="flex justify-between">
            <AgentAvatar entity={property} />
            <DropdownMenu>
              <DropdownMenuTrigger>
                <EllipsisVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-4">
                <DropdownMenuLabel>{property.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestSales;
