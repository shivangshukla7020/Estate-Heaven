const express = require("express");
const router = express.Router();
const { addProperty, upload, getAllProperties, getProperty } = require("../controller/property");

router.post("/sell", upload.array("images", 5), addProperty); // Allow up to 5 images

router.get("/All",getAllProperties);

router.get("/:id", getProperty);

module.exports = router;
  