import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { AlertDialogHeader, AlertDialogFooter } from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { removeProperty } from "@/hooks/useProperty";
import { useNavigate } from "react-router";

interface Props {
  propertyId: string;
}

const DeleteDialog = ({ propertyId }: Props) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      if (await removeProperty(propertyId)) {
        navigate("/app/properties");
      } else {
        console.error("Error deleting property");
      }
    } catch (error) {
      console.error("Error deleting property: " + error);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger className="w-1/2">
        <Button variant="destructive" className="w-full">
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            property listing.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            className="bg-destructive shadow-sm hover:bg-destructive/90"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteDialog;
