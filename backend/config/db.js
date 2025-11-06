// Import the Mongoose library for MongoDB connection and schema management
const mongoose = require("mongoose");

/**
 * @function connectDB
 * @description Establishes a connection to MongoDB using Mongoose.
 * It reads the connection URI from the environment variable (MONGO_URI).
 * If the connection is successful, it logs the host; otherwise, it logs an error and exits the process.
 */
const connectDB = async () => {
  try {
    // 🔹 Load the MongoDB connection string from the .env file
    const uri = process.env.MONGO_URI;

    // ❌ If no URI is found, throw a custom error
    if (!uri) {
      throw new Error("❌ MONGO_URI is missing in environment variables");
    }

    // ⚙️ Attempt to connect to MongoDB using the URI
    const conn = await mongoose.connect(uri);

    // ✅ If successful, log the connected host (e.g., cluster0.mongodb.net)
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // ❗ Catch any connection errors and log the message
    console.error(`❌ Error: ${error.message}`);

    // 🚪 Exit the process with failure code (1)
    process.exit(1);
  }
};

// Export the connection function so it can be used in server.js
module.exports = connectDB;
