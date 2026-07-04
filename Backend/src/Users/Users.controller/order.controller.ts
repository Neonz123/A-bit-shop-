import {Request , Response} from "express";
import {  createOrder , getAllOrders, getOrdersByUserId } from "../../user.Services/order.services";

// place a new order 

export const placeOrder = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id; // Assuming req.user is populated by authentication middleware
        const items = req.body.items; // Expecting an array of cart item IDs or details

        const order = await createOrder(userId! , items);
        res.status(201).json(order); 

    } catch (err) {

        res.status(500).json({ message: "Failed to place order", error: err });
    }
};
// Get logged-in user's order history
export const getOrdeHistory = async (req: Request, res: Response) => {
 
    try {
        const userId = req.user?.id;
        const orders = await getOrdersByUserId(userId!);
        res.json(orders);

    }catch (err) {
        res.status(500).json({ message: "Failed to fetch order history", error: err });
    }

};
// Admin: Get all orders
export const getAllOrder = async (req: Request, res: Response) => {
    try {
        const orders = await getAllOrders(); 
     res.json(orders);
    }catch (err) {
        res.status(500).json({ message: "Failed to fetch all orders", error: err });
    }
}