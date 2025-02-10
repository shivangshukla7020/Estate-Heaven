const express = require("express");
const router = express.Router();
const { addProperty } = require("../controller/property");

router.post("/sell", addProperty);
  



module.exports = router;
  