import { Router } from "express";
import { authAdminMiddleware } from "../../middleware/authmiddlewareAdmin";
import { getAllProducts , CreateProduct, UpdateProduct, DeleteProduct } from "../controller/Product.controller"


const adminRouterProduct = Router();

adminRouterProduct.get("/", authAdminMiddleware, getAllProducts); 

adminRouterProduct.post("/create", authAdminMiddleware, CreateProduct);
adminRouterProduct.put("/update/:id", authAdminMiddleware,  UpdateProduct);
adminRouterProduct.delete("/delete/:id", authAdminMiddleware,  DeleteProduct);

export default adminRouterProduct 
// productRouter.post("/admin/create", authAdminMiddleware, CreateProduct);
// productRouter.put("/admin/update/:id", authAdminMiddleware, UpdateProduct);
// productRouter.delete("/admin/delete/:id", authAdminMiddleware, DeleteProduct);