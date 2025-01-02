import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getUserInfoByID,
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.route("/").get(getAllUsers);
userRouter.route("/").post(createUser);
userRouter.route("/:id").get(getUserInfoByID);

export default userRouter;
