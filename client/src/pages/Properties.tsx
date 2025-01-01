import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  description: z.string().nonempty("Enter Description."),
  type: z.string({ message: "Choose type" }),
  price: z.coerce.number().gte(1, { message: "Enter valid price." }),
  location: z.string().nonempty("Enter valid location."),
});

const Properties = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // defaultValues: ,
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    form.reset({
      name: "",
      description: "",
      type: "",
      price: parseInt(""),
      location: "",
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center p-4 md:p-0">
        <h1 className="text-foreground text-xl md:text-4xl font-semibold">
          Property List
        </h1>

        <Dialog>
          <DialogTrigger>
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
                    name="type"
                    render={({ field }) => (
                      <FormItem className="grid-cols-subgrid col-span-2">
                        <FormLabel>Type</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue
                                placeholder="Select type"
                                {...field}
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="apartment">
                                Apartment
                              </SelectItem>
                              <SelectItem value="villa">Villa</SelectItem>
                              <SelectItem value="farmhouse">
                                Farmhouse
                              </SelectItem>
                              <SelectItem value="condos">Condos</SelectItem>
                              <SelectItem value="townhouse">
                                Townhouse
                              </SelectItem>
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
                          <Input
                            type="number"
                            placeholder="Enter price"
                            {...field}
                          />
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
                <Button variant="default" className="mt-5 w-full" type="submit">
                  Create Property
                </Button>
              </form>
            </Form>
            <DialogFooter className="w-full">
              <DialogClose className="w-full" asChild>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() =>
                    form.reset({
                      name: "",
                      description: "",
                      type: "",
                      price: parseInt(""),
                      location: "",
                    })
                  }
                >
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Properties;
