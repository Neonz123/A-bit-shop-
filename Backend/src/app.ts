// src/app.ts (or src/server.ts)
import express from "express";
import cors from "cors";
import userRoutes from "./Users/routes/user.route";
import productRoutes from "./Users/routes/product.route"; // Ensure this import is correct
import router from "./Users/routes/cartitem.route";
import routerAdmin from "./Admin/Routes/admin.route";
import adminRouterProduct from "./Admin/Routes/adminProduct.route";
import routerUserOrder from "./Users/routes/order.route";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for form data

// for users routes
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes); 
app.use("/api/cartitem", router); 
app.use("/api/orders" , routerUserOrder);

// admin routes
app.use("/api/admin", routerAdmin);
app.use ("/api/admin/product", adminRouterProduct );


app.get("/", (_req, res) => res.send("API is running"));

export default app;