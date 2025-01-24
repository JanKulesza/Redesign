import { Router } from "express";
import {
  registerUser,
  loginUser,
  verifyUser,
} from "../controllers/auth.controller.js";
import multer from "multer";

const authRouter = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("saving");

    cb(null, "public/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage });

authRouter.post("/", verifyUser);
authRouter.post("/register", upload.single("avatar"), registerUser);
authRouter.post("/login", loginUser);

export default authRouter;
