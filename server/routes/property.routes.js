import { Router } from "express";
import {
  createProperty,
  deleteProperty,
  getAllProperties,
  getPropertyDetail,
  updateProperty,
} from "../controllers/property.controller.js";

const propertyRouter = Router();

propertyRouter.get("/", getAllProperties);
propertyRouter.get("/:id", getPropertyDetail);
propertyRouter.post("/", createProperty);
propertyRouter.patch("/:id", updateProperty);
propertyRouter.delete("/:id", deleteProperty);

export default propertyRouter;
