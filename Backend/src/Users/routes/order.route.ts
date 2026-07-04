import { Router } from "express";
import { placeOrder, getOrdeHistory, getAllOrder } from "../Users.controller/order.controller";
import { authUserMiddleware } from "../../middleware/authmiddlewareUser";

const routerUserOrder = Router();
// user point 

routerUserOrder.post("/",authUserMiddleware , placeOrder);
routerUserOrder.get("/", authUserMiddleware , getOrdeHistory);

export default routerUserOrder; 