const multer = require("multer");
const Property = require("../database/models/property");

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files in the "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Unique filename
  },
});

const upload = multer({ storage });

// Updated function to handle property listing with images
async function addProperty(req, res) {
  try {
    console.log("Request Body:", req.body);
    console.log("Uploaded Files:", req.files);

    if (!req.body.title || !req.body.location || !req.body.price || !req.body.bedrooms || !req.body.bathrooms || !req.body.sqft || !req.body.propertyType) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // Extract image file paths from multer
    const images = req.files.map((file) => file.path);

    const newProperty = new Property({
      title: req.body.title,
      location: req.body.location,
      price: req.body.price,
      bedrooms: req.body.bedrooms,
      bathrooms: req.body.bathrooms,
      sqft: req.body.sqft,
      propertyType: req.body.propertyType,
      images,
    });

    await newProperty.save();
    res.status(201).json({ message: "Property listed successfully", property: newProperty });
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ message: error.message });
  }
}


// Get all properties
const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find(); // Fetch all properties
    res.status(200).json(properties);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

const getProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.json(property);
  } catch (error) {
    res.status(500).json({ message: "Error fetching property", error });
  }
};

module.exports = { addProperty, upload, getAllProperties, getProperty};
