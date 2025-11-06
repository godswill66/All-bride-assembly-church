// server.js

// Import required packages
const express = require("express"); // Framework for building server and APIs
const dotenv = require("dotenv"); // Loads environment variables from .env file
const cors = require("cors"); // Enables communication between frontend & backend
const connectDB = require("./config/db"); // Imports your MongoDB connection function

// Load environment variables (from .env file)
dotenv.config();

// Initialize express app
const app = express();

// ===== MIDDLEWARE SECTION =====

// CORS middleware: allows requests from your frontend (e.g. React)
app.use(cors());

// Express JSON middleware: allows server to accept JSON data in request body
app.use(express.json());

// ===== DATABASE CONNECTION =====

// Connect to MongoDB database
connectDB();

// ===== ROUTES =====

// Example route (root endpoint)
app.get("/", (req, res) => {
  res.send("All Bride Assembly Backend API is running...");
});

// ===== START SERVER =====

// Get port number from environment (or use 3000 if not set)
const PORT = process.env.PORT || 3000;

// Start listening for requests
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
