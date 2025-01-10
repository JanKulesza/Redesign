import CreatePropertyButton from "@/components/Properties/CreatePropertyButton";
import PropertyList from "@/components/Properties/PropertyList";

const Properties = () => {
  return (
    <div>
      <div className="flex justify-between items-center lg:m-10 mb-4 p-4 md:p-0">
        <h1 className="text-foreground md:max-lg:m-6 text-xl md:text-4xl font-semibold">
          Property List
        </h1>
        <CreatePropertyButton />
      </div>
      <PropertyList />
    </div>
  );
};

export default Properties;
