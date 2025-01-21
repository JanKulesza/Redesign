import { Router } from "express";
import {
  createProperty,
  deleteProperty,
  getAllProperties,
  getPropertyDetail,
  updateProperty,
} from "../controllers/property.controller.js";
import multer from "multer";
import path from "path";

const propertyRouter = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage });

propertyRouter.get("/", getAllProperties);
propertyRouter.get("/:id", getPropertyDetail);
propertyRouter.post("/", upload.single("photo"), createProperty);
propertyRouter.patch("/:id", updateProperty);
propertyRouter.delete("/:id", deleteProperty);

export default propertyRouter;
