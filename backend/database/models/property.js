const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price must be a positive number"],
    },
    bedrooms: {
      type: Number,
      required: [true, "Number of bedrooms is required"],
      min: [0, "Bedrooms cannot be negative"],
    },
    bathrooms: {
      type: Number,
      required: [true, "Number of bathrooms is required"],
      min: [0, "Bathrooms cannot be negative"],
    },
    sqft: {
      type: Number,
      required: [true, "Square footage is required"],
      min: [0, "Square footage must be positive"],
    },
    propertyType: {
      type: String,
      enum: ["house", "apartment"],
      required: [true, "Property type is required"],
    },
    images: {
      type: [String],
      validate: {
        validator: function (arr) {
          return arr.every((url) => typeof url === "string");
        },
        message: "Images must be an array of URLs",
      },
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Property = mongoose.model("Property", PropertySchema);

module.exports = Property;