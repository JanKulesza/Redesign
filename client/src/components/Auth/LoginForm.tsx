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
import axios, { isAxiosError } from "axios";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import google from "@/assets/google.svg";
import { Link, useNavigate } from "react-router";
import { useAuth } from "@/context/AuthProvider";

const formSchema = z.object({
  email: z
    .string()
    .nonempty("Please enter your email.")
    .email("This is not a valid email."),
  password: z.string({ message: "Please enter your password." }),
});

const LoginForm = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { email, password } = values;
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        {
          email,
          password,
        }
      );

      setToken(data.token);
      navigate("/app/");
    } catch (error) {
      console.log(axios);
      if (isAxiosError(error)) {
        let msg = error.response?.data.message;
        const errorType = error.response?.data.type;
        switch (errorType) {
          case "email":
            form.setError("email", { message: msg });
            break;
          case "password":
            form.setError("password", { message: msg });
            break;
          default:
            form.setError("email", { message: "An error occured." });
            form.setError("password", { message: "An error occured." });
            break;
        }
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input size={50} placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  size={50}
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant="default" type="submit" className="mt-4">
          Log in
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

export default LoginForm;
