import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import React from "react";

const Properties = () => {
  return (
    <div className="relative">
      <h1 className="text-foreground text-4xl font-semibold my-8 ml-4 md:mt-0 md:ml-0 ">
        Property List
      </h1>
      <Dialog>
        <DialogTrigger>
          <Button variant="default">
            <Plus /> Add Property
          </Button>
        </DialogTrigger>
      </Dialog>
    </div>
  );
};

export default Properties;
