import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";

import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import CreatePropertyForm from "./CreatePropertyForm";
import { Property } from "@/entities/Property";
import { useState } from "react";

interface Props {
  onAddProperty: (properties: Property[]) => void;
  properties: Property[];
}

const CreatePropertyButton = ({ onAddProperty, properties }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="default">
          <Plus /> Add Property
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Property</DialogTitle>
          <DialogDescription>
            Fill out the form below to create property
          </DialogDescription>
        </DialogHeader>
        <CreatePropertyForm
          handleClose={handleClose}
          properties={properties}
          onAddProperty={onAddProperty}
        />
        <DialogFooter className="w-full">
          <DialogClose className="w-full" asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePropertyButton;
