// src/controllers/productController.ts
import { Request, Response } from "express";
import { AppDataSource } from "../../data-source"; 
import {Product} from "../../entity/Product"

const productRepo = AppDataSource.getRepository(Product);

export const getAllProducts = async (req: Request, res: Response) => {
    try {
       
        console.log("Authenticated user accessing products:", req.user);

        const products = await productRepo.find(); // Fetch all products from your database
        res.json(products);
    } catch (error) {
        console.error("Error fetching all products:", error);
        res.status(500).json({ message: "Failed to fetch products" });
    }
};

export const getProductById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const product = await productRepo.findOneBy({ id: parseInt(id) });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(product);
    } catch (error) {
        console.error("Error fetching product by ID:", error);
        res.status(500).json({ message: "Failed to fetch product" });
    }
};