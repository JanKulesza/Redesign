import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  propertyType: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  beds: { type: Number, required: true },
  area: { type: Number, required: true },
  photo: { type: String, required: true },
  rating: { type: Number, required: false },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  privateKitchen: { type: Boolean, required: true },
  privateBath: { type: Boolean, required: true },
  balcony: { type: Boolean, required: true },
  wifi: { type: Boolean, required: true },
  smoking: { type: Boolean, required: true },
  parking: { type: Boolean, required: true },
});

const Property = mongoose.model("Property", PropertySchema);

export default Property;
