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
    console.log("Multer is saving the file...");

    cb(null, "public/");
  },
  filename: (req, file, cb) => {
    console.log("Multer is assigning the filename...");
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
