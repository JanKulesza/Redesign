import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import RegisterForm from "./RegisterForm";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="grid md:grid-cols-5 h-full">
      {/* <div > */}
      <Card className="col-span-2 h-[100vh] gap-2 rounded-none flex flex-col justify-center items-center">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Please enter your details in order to sign up
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter className="justify-center">
          <p>
            Already have an account?
            <Link className="text-theme" to="/login">
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
      {/* </div> */}
      <img
        className="h-full w-full col-span-3"
        src="https://images.pexels.com/photos/19275819/pexels-photo-19275819/free-photo-of-modern-white-skyscraper.jpeg"
        alt=""
      />
    </div>
  );
};

export default Register;
