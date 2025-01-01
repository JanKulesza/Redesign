import CreatePropertyButton from "@/components/Properties/CreatePropertyButton";

const Properties = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-4 md:p-0">
        <h1 className="text-foreground text-xl md:text-4xl font-semibold">
          Property List
        </h1>
        <CreatePropertyButton />
      </div>
    </div>
  );
};

export default Properties;
