import express from "express";
import path from "path";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import { protect } from "../middleware/authMiddleware.js";

// Recreate __filename and __dirname in ES modules
const admin = fileURLToPath(import.meta.url);
const backend = path.dirname(admin.html);

const router = express.Router();

// Serve admin dashboard (protected)
router.get("/dashboard", protect, (req, res) => {
  res.sendFile(path.resolve(backend, "../views/admin.html"));
});

export default router;
