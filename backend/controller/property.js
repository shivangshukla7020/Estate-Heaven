const multer = require("multer");
const Property = require("../database/models/property");
const jwt = require("jsonwebtoken");

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

    // Validate required fields
    if (!req.body.title || !req.body.location || !req.body.price || !req.body.bedrooms || !req.body.bathrooms || !req.body.sqft || !req.body.propertyType) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "At least one image is required!" });
    }

    // Extract image file paths from multer
    const images = req.files.map((file) => file.path);

    // Extract owner from JWT (assumes token is passed in cookies)
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Authentication required!" });
    }

    let owner;
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      owner = decoded.userId; // This will now reference the Buyer
    } catch (error) {
      return res.status(403).json({ message: "Invalid or expired token!" });
    }

    // Create a new property
    const newProperty = new Property({
      title: req.body.title,
      location: req.body.location,
      price: req.body.price,
      bedrooms: req.body.bedrooms,
      bathrooms: req.body.bathrooms,
      sqft: req.body.sqft,
      propertyType: req.body.propertyType,
      images,
      owner, // Associate property with the Buyer
    });

    await newProperty.save();
    res.status(201).json({ message: "Property listed successfully", property: newProperty });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
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
