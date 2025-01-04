import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import LoginForm from "./LoginForm";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="grid lg:grid-cols-5 h-full">
      <Card className="col-span-2 min-h-[100vh] gap-2 rounded-none flex flex-col justify-center items-center">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>
            Welcome back! Please enter your details.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter className="justify-center">
          <p>
            Don't have an account?{" "}
            <Link className="text-theme" to="/register">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
      <img
        className="h-full w-full col-span-3 hidden lg:block "
        src="https://images.pexels.com/photos/19275819/pexels-photo-19275819/free-photo-of-modern-white-skyscraper.jpeg"
        alt=""
      />
    </div>
  );
};

export default Login;
