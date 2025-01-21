import Property from "../mongodb/models/property.js";

const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    return res.status(200).json(properties);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
const getPropertyDetail = async (req, res) => {
  const { id } = req.params;

  try {
    const property = await Property.findById(id);

    if (!property)
      return res.status(400).json({ message: "Property doesn't exist" });
    return res.status(200).json(property);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};
const createProperty = async (req, res) => {
  const property = req.body;
  const { filename } = req.file;

  try {
    const newProperty = new Property({ ...property, photo: filename });
    await newProperty.save();
    res.status(200).json({ message: "Property created", entity: newProperty });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
const updateProperty = async (req, res) => {};
const deleteProperty = async (req, res) => {};

export {
  getAllProperties,
  getPropertyDetail,
  createProperty,
  updateProperty,
  deleteProperty,
};
