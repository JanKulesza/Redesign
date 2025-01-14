import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { useState } from "react";
import { createProperty } from "@/hooks/useProperty";
import { useAuthUserId } from "@/hooks/useUsers";
import { useAuth } from "@/context/AuthProvider";
import { Property } from "@/entities/Property";

const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  description: z.string().nonempty("Enter Description."),
  propertyType: z.string({ message: "Choose type" }),
  price: z.coerce.number().gte(1, { message: "Enter valid price." }),
  location: z.string().nonempty("Enter valid location."),
  photo: z.instanceof(File).refine((file) => file.size <= 10 * 1024 * 1024, {
    message: "Image size must be less than 10MB",
  }),
});

interface Props {
  handleClose: () => void;
  onAddProperty: (properties: Property[]) => void;
  properties: Property[];
}

const CreatePropertyForm = ({
  handleClose,
  onAddProperty,
  properties,
}: Props) => {
  const [, setImageUpload] = useState<string | null>(null);
  const { token } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      propertyType: "",
      price: 0,
      location: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const initialProperties = properties;

    if (token) {
      try {
        const creator = useAuthUserId(token);

        if (!creator) throw new Error("Failed to fetch creator");
        onAddProperty([
          ...initialProperties,
          { ...values, photo: values.photo, creator: creator },
        ]);
        handleClose();

        const data = await createProperty({
          ...values,
          creator,
        });

        if (!data) throw new Error("Failed to create property");
        onAddProperty([...initialProperties, { ...data.entity, name: "New" }]);
      } catch (error) {
        console.log("Error: " + error);
        onAddProperty(initialProperties);
      }
    }

    form.reset();
    setImageUpload(null);
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageUpload(URL.createObjectURL(file));
      form.setValue("photo", file);
    }
  };
  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-3"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter property name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-3 gap-3">
          <FormField
            control={form.control}
            name="propertyType"
            render={({ field }) => (
              <FormItem className="grid-cols-subgrid col-span-2">
                <FormLabel>Type</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" {...field} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="farmhouse">Farmhouse</SelectItem>
                      <SelectItem value="condos">Condos</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                      <SelectItem value="duplex">Duplex</SelectItem>
                      <SelectItem value="studio">Studio</SelectItem>
                      <SelectItem value="chalet">Chalet</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="Enter location" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="photo"
          render={() => (
            <FormItem>
              <FormLabel>Property Photo</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant="default" className="mt-5 w-full" type="submit">
          Create Property
        </Button>
      </form>
    </Form>
  );
};

export default CreatePropertyForm;
