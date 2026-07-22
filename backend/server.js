import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import emailRoutes from "./routes/email.js";
import demoRoutes from "./routes/demo.js";

// Resolve .env relative to this file so it works regardless of cwd
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, ".env") });

const app = express();
const port = process.env.PORT || 5000;

// Hardcoded MongoDB URI (bypassing broken .env loader)
const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/drivevital";

console.log("🔍 Using MongoDB URI:", mongoUri);

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "http://localhost:4173",
      "http://localhost:5000",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json());

mongoose.set("strictQuery", true);

mongoose
  .connect(mongoUri)
  .then(() => console.log("✅ MongoDB connected:", mongoUri))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });


app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Drive Vital Backend is running" });
});

app.use("/api/email", emailRoutes);
app.use("/api/demo", demoRoutes);

app.use((req, res) => {
  res
    .status(404)
    .json({ error: `Route not found: ${req.method} ${req.originalUrl}` });
});

app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res
    .status(500)
    .json({ error: "Internal server error", message: err.message });
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
