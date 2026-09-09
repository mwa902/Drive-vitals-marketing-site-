import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import emailRoutes from "./routes/email.js";
import demoRoutes from "./routes/demo.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, ".env") });

const app  = express();
const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/drivevital";

/* ── CORS ── */
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "http://localhost:4173",
  "http://localhost:5000",
  // add your production domain here, e.g. "https://drivevital.com"
];

app.use(
  cors({
    origin: (origin, cb) => {
      // allow non-browser tools (Postman, curl) and listed origins
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
      cb(new Error(`CORS blocked: ${origin}`));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());
mongoose.set("strictQuery", true);

/* ── MongoDB — graceful, never crashes the server ── */
let dbStatus = "disconnected";

(async () => {
  try {
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 8000,  // give Atlas 8 s to respond
      connectTimeoutMS: 10000,
    });
    dbStatus = "connected";
    console.log("✅ MongoDB connected:", mongoUri.replace(/:([^@]+)@/, ":***@"));
  } catch (err) {
    dbStatus = "error";
    console.error("⚠️  MongoDB connection failed:", err.message);
    console.error("    The server will keep running — DB-dependent routes will return 503.");
    // NO process.exit() — let the HTTP server stay up so you can see the error
  }
})();

/* Reattach if connection drops after startup */
mongoose.connection.on("disconnected", () => {
  dbStatus = "disconnected";
  console.warn("⚠️  MongoDB disconnected");
});
mongoose.connection.on("reconnected", () => {
  dbStatus = "connected";
  console.log("✅ MongoDB reconnected");
});

/* ── Middleware: block DB routes when offline ── */
function requireDb(req, res, next) {
  if (dbStatus !== "connected") {
    return res.status(503).json({
      success: false,
      message: "Database is temporarily unavailable. Please try again shortly.",
    });
  }
  next();
}

/* ── Routes ── */
app.get("/", (_req, res) =>
  res.json({
    status: "ok",
    message: "DriveVital backend is running",
    db: dbStatus,
  })
);

app.get("/health", (_req, res) =>
  res.json({ status: "ok", db: dbStatus, uptime: process.uptime() })
);

app.use("/api/email", requireDb, emailRoutes);
app.use("/api/demo",  requireDb, demoRoutes);

/* ── 404 ── */
app.use((req, res) =>
  res.status(404).json({
    error: `Route not found: ${req.method} ${req.originalUrl}`,
  })
);

/* ── Global error handler ── */
app.use((err, req, res, _next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal server error", message: err.message });
});

/* ── Start ── */
app.listen(port, () =>
  console.log(`🚀 Server running on http://localhost:${port}`)
);
