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
import { Checkbox } from "../ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";

const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  description: z.string().nonempty("Enter Description."),
  propertyType: z.string({ message: "Choose type" }),
  price: z.coerce.number().gte(1, { message: "Enter valid price." }),
  beds: z.coerce.number().gte(1, { message: "Enter valid number" }),
  area: z.coerce.number().gte(1, { message: "Enter valid number" }),
  privateKitchen: z.boolean(),
  privateBath: z.boolean(),
  balcony: z.boolean(),
  wifi: z.boolean(),
  smoking: z.boolean(),
  parking: z.boolean(),
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
      beds: 0,
      area: 0,
      privateBath: false,
      privateKitchen: false,
      balcony: false,
      wifi: false,
      smoking: false,
      parking: false,
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
        console.log(data);

        onAddProperty([...initialProperties, { ...data.entity }]);
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

  const handleCheckBoxChange = (
    checked: CheckedState,
    name:
      | "privateKitchen"
      | "privateBath"
      | "balcony"
      | "wifi"
      | "smoking"
      | "parking"
  ) => {
    if (typeof checked === "boolean") form.setValue(name, checked);
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

        <FormField
          control={form.control}
          name="propertyType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" {...field} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Apartment">Apartment</SelectItem>
                    <SelectItem value="Villa">Villa</SelectItem>
                    <SelectItem value="Farmhouse">Farmhouse</SelectItem>
                    <SelectItem value="Condos">Condos</SelectItem>
                    <SelectItem value="Townhouse">Townhouse</SelectItem>
                    <SelectItem value="Duplex">Duplex</SelectItem>
                    <SelectItem value="Studio">Studio</SelectItem>
                    <SelectItem value="Chalet">Chalet</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-3 gap-3">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="beds"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Beds</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="area"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Area</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-3">
          <FormField
            control={form.control}
            name="privateBath"
            render={() => (
              <FormItem>
                <FormControl>
                  <Checkbox
                    onCheckedChange={(checked) =>
                      handleCheckBoxChange(checked, "privateBath")
                    }
                  />
                </FormControl>
                <FormLabel className="text-sm ml-1">Bath</FormLabel>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="privateKitchen"
            render={() => (
              <FormItem>
                <FormControl>
                  <Checkbox
                    onCheckedChange={(checked) =>
                      handleCheckBoxChange(checked, "privateKitchen")
                    }
                  />
                </FormControl>
                <FormLabel className="text-sm ml-1">Kitchen</FormLabel>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="balcony"
            render={() => (
              <FormItem>
                <FormControl>
                  <Checkbox
                    onCheckedChange={(checked) =>
                      handleCheckBoxChange(checked, "balcony")
                    }
                  />
                </FormControl>
                <FormLabel className="text-sm ml-1">Balcony</FormLabel>
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-3">
          <FormField
            control={form.control}
            name="wifi"
            render={() => (
              <FormItem>
                <FormControl>
                  <Checkbox
                    onCheckedChange={(checked) =>
                      handleCheckBoxChange(checked, "wifi")
                    }
                  />
                </FormControl>
                <FormLabel className="text-sm ml-1">Wifi</FormLabel>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="smoking"
            render={() => (
              <FormItem>
                <FormControl>
                  <Checkbox
                    onCheckedChange={(checked) =>
                      handleCheckBoxChange(checked, "smoking")
                    }
                  />
                </FormControl>
                <FormLabel className="text-sm ml-1">Smoking</FormLabel>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="parking"
            render={() => (
              <FormItem>
                <FormControl>
                  <Checkbox
                    onCheckedChange={(checked) =>
                      handleCheckBoxChange(checked, "parking")
                    }
                  />
                </FormControl>
                <FormLabel className="text-sm ml-1">Parking</FormLabel>
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
