const Property = require("../database/models/property");

async function addProperty(req, res){
    try {
      const newProperty = new Property(req.body);
      await newProperty.save();
      res.status(201).json({ message: "Property listed successfully", property: newProperty });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
}

module.exports = {addProperty};
