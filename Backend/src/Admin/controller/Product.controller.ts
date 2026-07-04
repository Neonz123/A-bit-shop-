import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Product} from "../../entity/Product";
import { View } from "typeorm";


export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const repo = AppDataSource.getRepository(Product);
        const products = await repo.find();

        return res.status(200).json({
            message: "Products fetched successfully",
            products
        });

    } catch (err) {
        console.error("Error fetching products:", err);
        res.status(500).json({ message: "Error fetching products" });
    }
};
export const CreateProduct = async (req : Request , res : Response) => {
  
   try {
   const repo =  AppDataSource.getRepository(Product);
   const product = repo.create(req.body);
   await repo.save(product);
   res.status(201).json({
        message : "Product created succesfully",
        product : product ,
});
   } catch(err) {
        res.status(500).json({ message: "Error creating product" });
   }
};

export const UpdateProduct = async (req: Request, res: Response) => {
  try {
    const repo = AppDataSource.getRepository(Product);
    const product = await repo.findOneBy({ id: Number(req.params.id) });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Handle adding qty
    if (req.body.stock !== undefined) {
      product.stock = product.stock + Number(req.body.stock);
      delete req.body.stock;
    }

    // Update remaining fields
    repo.merge(product, req.body);

    await repo.save(product);

    res.json({
      message: "Product updated successfully",
      product,
    });

  } catch (err) {
    res.status(500).json({ message: "Error updating product" });
  }
};

export const DeleteProduct = async (req : Request , res : Response) => {
  
 try {
    const repo = AppDataSource.getRepository(Product);
    const product = await repo.findOneBy ({id : Number (req.params.id)})
    if(!product) return res.status(404).json({ message: "Product not found" })

    await repo.remove(product);
    res.json({ message : "Product deteled succesfully"});
 } catch (err) {
    res.status(500).json({ message: "Error deleting product" });
 }
};