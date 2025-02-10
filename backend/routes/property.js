const express = require("express");
const router = express.Router();
const { addProperty, upload, getAllProperties } = require("../controller/property");

router.post("/sell", upload.array("images", 5), addProperty); // Allow up to 5 images

router.get("/properties",getAllProperties);

module.exports = router;
  