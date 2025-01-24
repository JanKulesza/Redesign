import { Button } from "@/components/ui/button";
import { BadgeAlert } from "lucide-react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="p-8 text-center flex flex-col h-[100vh] gap-3 items-center justify-center">
      <BadgeAlert size={150} />
      <h2 className="text-xl font-semibold">Oops! An error occurred</h2>
      <p>Try refreshing this page or return to home page</p>
      <Button asChild className="mt-3" variant="outline">
        <Link to={"/app"}>Go to Home Page</Link>
      </Button>
    </div>
  );
};

export default Error;
