// src/routes/product.route.ts
import { Router } from "express";
import { authUserMiddleware } from "../../middleware/authmiddlewareUser";   
import { getAllProducts, getProductById, } from "../Users.controller/product.controller";
const productRouter = Router();


productRouter.get("/", authUserMiddleware, getAllProducts);
productRouter.get("/:id", authUserMiddleware, getProductById);


export default productRouter;