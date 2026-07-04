import { Router } from "express";
import  { authUserMiddleware } from "../../middleware/authmiddlewareUser";
import {
  addToCart,
  getCart,
  updateCartItem,
  removeCartItem,
} from "../Users.controller/cartitem.controller";

const router = Router();

router.post("/", authUserMiddleware , addToCart);
router.get("/", authUserMiddleware , getCart);
router.put("/:id", authUserMiddleware , updateCartItem);
router.delete("/:id", authUserMiddleware , removeCartItem);

export default router;
