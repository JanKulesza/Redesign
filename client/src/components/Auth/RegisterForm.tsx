import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router";
import google from "@/assets/google.svg";
import axios from "axios";

const formSchema = z
  .object({
    firstName: z.string().min(3, { message: "First name is too short." }),
    lastName: z.string().min(3, { message: "Last name is too short." }),
    email: z
      .string()
      .nonempty("Email is required.")
      .email("This is not a valid email."),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters." }),
    confirmPassword: z.string().min(4),
    avatar: z.instanceof(File).refine((file) => file.size <= 10 * 1024 * 1024, {
      message: "Image size must be less than 10MB. ",
    }),
    address: z.string().nonempty("Address is required. "),
    phone: z.string().nonempty("Phone number is required. "),
  })
  .refine(({ confirmPassword, password }) => confirmPassword === password, {
    message: "Passwords don't match.",
    path: ["confirmPassword"],
  });

const RegisterForm = () => {
  const navigate = useNavigate();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue("avatar", file);
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
      confirmPassword: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);

    try {
      const data = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        {
          ...values,
        },
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(data);

      navigate("/login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error response:", error);
        form.setError("avatar", {
          message:
            error.response?.data?.message ||
            "An error occurred during registration.",
        });
      } else {
        console.error("Unexpected error:", error);
        form.setError("avatar", {
          message: "An unexpected error occurred.",
        });
      }
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
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your first name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your last name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <Input placeholder="+00123456789" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-3 justify-between">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-[50%]">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="w-[50%]">
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm password"
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
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter your address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="avatar"
          render={() => (
            <FormItem>
              <FormLabel>Avatar</FormLabel>
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
        <Button variant="default" type="submit" className="mt-4">
          Sign Up
        </Button>
        <Button
          variant="ghost"
          className="border-thin border border-zinc-300"
          asChild
        >
          <Link to="/google">
            <img src={google} className="w-8 h-8" />
            Sign Up with Google
          </Link>
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
