import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/auth.js";
import moduleRoutes from "./routes/modules.js";
import vendorRoutes from "./routes/vendors.js";
import categoryRoutes from "./routes/categories.js";
import productRoutes from "./routes/products.js";

import adminAuthRoutes from "./routes/admin/auth.js";
import adminModuleRoutes from "./routes/admin/modules.js";
import adminVendorRoutes from "./routes/admin/vendors.js";
import adminCategoryRoutes from "./routes/admin/categories.js";
import adminProductRoutes from "./routes/admin/products.js";
import adminUserRoutes from "./routes/admin/users.js";

dotenv.config();
const app = express();

app.use(cors({
  origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['http://localhost:5173'],
  credentials: true,
}));
app.use(express.json());

// connect to mongo
connectDB(process.env.MONGO_URI);

// user routes
app.use("/api/auth", authRoutes);
app.use("/api/modules", moduleRoutes);
app.use("/api/vendors", vendorRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

// admin routes (prefix /api/admin)
app.use("/api/admin/auth", adminAuthRoutes);
app.use("/api/admin/modules", adminModuleRoutes);
app.use("/api/admin/vendors", adminVendorRoutes);
app.use("/api/admin/categories", adminCategoryRoutes);
app.use("/api/admin/products", adminProductRoutes);
app.use("/api/admin/users", adminUserRoutes);

app.get("/", (req, res) => res.send("Unified backend running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
