const express = require('express');
const cors = require('cors'); 
const cookieParser = require("cookie-parser");
const DBconnect = require('./database/DBconnect');
const buyerRoutes = require('./routes/buyer');
const authRoute = require('./routes/auth');
const propertyRoute = require('./routes/property');
const path = require("path");

const app = express();

// Connect to Database
DBconnect();

// Enable CORS with credentials
app.use(cors({
    origin: "http://localhost:5173", // Change to your frontend URL
    credentials: true // Allow cookies
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(cookieParser()); // Middleware to parse cookies

// Define Routes
app.use(buyerRoutes);
app.use(authRoute);
app.use('/property',propertyRoute);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
