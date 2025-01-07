import { Router } from "express";
import {
  registerUser,
  loginUser,
  verifyUser,
} from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/", verifyUser);
authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);

export default authRouter;
