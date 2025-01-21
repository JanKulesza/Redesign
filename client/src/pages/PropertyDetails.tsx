import AgentInfo from "@/components/PropertyDetails/AgentInfo";
import { Button } from "@/components/ui/button";
import { useProperty } from "@/hooks/useProperty";
import {
  Bath,
  BedDouble,
  ChevronLeft,
  Cigarette,
  CigaretteOff,
  DoorClosed,
  MapPin,
  ParkingCircle,
  ParkingCircleOff,
  Scan,
  Star,
  StarHalf,
  Utensils,
  Wifi,
  WifiOff,
} from "lucide-react";
import { ReactNode } from "react";
import { Link, Navigate, useParams } from "react-router";

const renderRating = (ratingValue: number | undefined) => {
  if (!ratingValue) return [];
  const rating: ReactNode[] = [];
  let remainingRating = ratingValue;

  while (remainingRating >= 0) {
    if (remainingRating >= 10)
      rating.push(<Star strokeWidth={0} size={32} fill="gold" />);
    else if (remainingRating >= 5)
      rating.push(<StarHalf strokeWidth={0} size={32} fill="gold" />);

    remainingRating -= 10;
  }

  return rating;
};

const PropertyDetails = () => {
  const { id } = useParams();
  if (!id) return <Navigate to={"/app/properties"} />;

  const { property, isLoading } = useProperty(id);
  if (isLoading) return <div>Loading...</div>;
  if (!property) return <Navigate to={"/error"} />;
  const creatorId = property.creator;

  return (
    <div className="bg-background m-0 p-4 sm:p-10 md:my-10 md:mx-10 lg:mx-36 xl:mx-10 2xl:mx-36 rounded-xl mb-4">
      <Link
        to={"/app/properties"}
        className="flex items-center font-semibold text-2xl mb-8"
      >
        <ChevronLeft size={30} /> Details
      </Link>
      <div className="xl:grid xl:grid-cols-3 gap-8 mt-8">
        {/* Left panel */}
        <div className="flex flex-col xl:col-span-2 gap-8 mb-8">
          <img
            className="w-full h-[250px] md:h-[350px] xl:h-[500px] xl:col-span-4 rounded-xl object-cover "
            src={`http://localhost:8080/api/v1/public/${property?.photo}`}
          />
          {/* Property Info */}
          <div className="xl:mr-16">
            <div className="flex flex-col sm:flex-row gap-6 justify-between mb-8">
              <div>
                <p className="text-xl font-semibold mb-3">
                  {property.propertyType}
                </p>
                <p className="text-3xl font-semibold mb-3">{property.name}</p>
                <p className="text-lg text-secondary-foreground flex gap-2 items-center">
                  <MapPin size={20} /> {property.location}
                </p>
              </div>
              <div className="max-sm:flex max-sm:justify-between">
                <div className="flex relative mb-2">
                  {Array.from({ length: 5 }, () => (
                    <Star
                      fill="hsl(var(--secondary))"
                      size={32}
                      strokeWidth={0}
                    />
                  ))}
                  <p className="flex top-0 absolute">
                    {renderRating(property?.rating)}
                  </p>
                </div>
                <p className="text-xl font-semibold max-sm:hidden">Price</p>
                <p className="text-theme font-semibold text-3xl">
                  ${property.price}
                </p>
              </div>
            </div>
            <div>
              <p className="text-xl font-semibold mb-6">Facility </p>
              <div className="flex flex-wrap gap-6 sm:gap-10 mb-8">
                <p className="flex font-medium text-lg items-center gap-2">
                  <span className="text-secondary-foreground">
                    <BedDouble />
                  </span>
                  {property.beds} Beds
                </p>
                <p className="flex font-medium text-lg items-center gap-2">
                  <span className="text-secondary-foreground">
                    <Utensils />
                  </span>
                  {property.privateKitchen ? "Kitchen" : "No Kitchen"}
                </p>

                <p className="flex font-medium text-lg items-center gap-2">
                  <span className="text-secondary-foreground">
                    <Bath />
                  </span>
                  {property.privateBath ? "Bath" : "No Bath"}
                </p>
                <p className="flex font-medium text-lg items-center gap-2">
                  <span className="text-secondary-foreground">
                    <DoorClosed />
                  </span>
                  {property.balcony ? "Balcony" : "No Balcony"}
                </p>

                <p className="flex font-medium text-lg items-center gap-2">
                  <span className="text-secondary-foreground">
                    {property.smoking ? <Cigarette /> : <CigaretteOff />}
                  </span>
                  {property.smoking ? "Smoking Area" : "No Smoking Area"}
                </p>
                <p className="flex font-medium text-lg items-center gap-2">
                  <span className="text-secondary-foreground">
                    <Scan />
                  </span>
                  {property.area}m2 Area
                </p>

                <p className="flex font-medium text-lg items-center gap-2">
                  <span className="text-secondary-foreground">
                    {property.wifi ? <Wifi /> : <WifiOff />}
                  </span>
                  {property.wifi ? "Wifi" : "No Wifi"}
                </p>
                <p className="flex font-medium text-lg items-center gap-2">
                  <span className="text-secondary-foreground">
                    {property.parking ? (
                      <ParkingCircle />
                    ) : (
                      <ParkingCircleOff />
                    )}
                  </span>
                  {property.parking ? "Parking" : "No Parking"}
                </p>
              </div>
            </div>
            <div>
              <p className="text-xl font-semibold mb-3">Description </p>
              <p className="text-secondary-foreground">
                {property.description}
              </p>
            </div>
          </div>
        </div>
        {/* Right panel */}
        <div className="flex flex-col gap-8 lg:col-span-1 w-full">
          <AgentInfo creatorId={creatorId} />
          <div className="relative text-right w-full h-[400px]">
            <div className="overflow-hidden rounded bg-none w-full h-[400px]">
              <iframe
                className="h-[400px] w-full"
                src={`https://maps.google.com/maps?height=400&hl=en&q=${property.location}&t=&z=12&ie=UTF8&iwloc=B&output=embed`}
              />
            </div>
          </div>
          <Button variant="default">Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
