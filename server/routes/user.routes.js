import { Router } from "express";
import {
  getAllUsers,
  getUserInfoByID,
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.route("/").get(getAllUsers);
userRouter.route("/:id").get(getUserInfoByID);

export default userRouter;
