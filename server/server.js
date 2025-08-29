// backend/server.js

import cors from "cors";
import "dotenv/config";
import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: [
      "http://localhost:5173", // local dev
      "https://uniform-49v3.vercel.app", // production frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(fileUpload());
// app.use(helmet());
// app.use(limiter); // Apply rate limiting to all requests

app.get("/", (req, res) => {
  return res.json({ message: "Hello, it's working..." });
});

import apiRoutes from "./routes/api.js";
app.use("/api", apiRoutes); // Main API routes

// import adminRoute from "./routes/adminRoute.js";
// app.use("/api/admin", adminRoute); // For system admin

// import systemAdminRoute from "./routes/systemAdminRoute.js";
// app.use("/api/system", systemAdminRoute); // For institution admin

// // * Logger
// logger.info("Hey I'm just testing...");

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
