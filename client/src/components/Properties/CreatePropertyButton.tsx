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

const CreatePropertyButton = () => {
  return (
    <Dialog>
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
        <CreatePropertyForm />
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
