import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { CartItem } from "../../entity/CartItem";
import { Product } from "../../entity/Product";


const cartItemRepo = AppDataSource.getRepository(CartItem);
// const productRepo = AppDataSource.getRepository(Product);
// const userRepo = AppDataSource.getRepository(User);
// const productRepo = () => AppDataSource.getRepository(Product);
// const cartRepo = () => AppDataSource.getRepository(CartItem);

export const addToCart = async (req: Request, res: Response) => {
  try {
    const { productId, quantity } = req.body;
    const user = req.user;

    const productRepo = AppDataSource.getRepository(Product);
    const cartRepo = AppDataSource.getRepository(CartItem);

    const product = await productRepo.findOneBy({ id: productId });
    if (!product) return res.status(404).json({ message: "Product not found" });

    // Check stock ONLY to ensure user does not add more than available
    if (quantity > product.stock) {
      return res.status(400).json({ message: "Insufficient stock" });
    }

    // Check if item already in cart → just update quantity
    let cartItem = await cartRepo.findOne({
      where: { product: { id: productId }, user: { id: user!.id } },
    });

    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      cartItem = cartRepo.create({ product, user, quantity });
    }

    await cartRepo.save(cartItem);

    // DO NOT TOUCH product.stock here
    res.status(201).json(cartItem);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};


export const getCart = async (req: Request, res: Response) => {
  try {
    const userId = req.user!.id;

    const items = await cartItemRepo.find({
      where: { user: { id: userId } },
      relations: ["product"],
    });

    if (items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const productRepo = AppDataSource.getRepository(Product);

    // Step 1: Validate stock again
    for (const item of items) {
      if (item.quantity > item.product.stock) {
        return res.status(400).json({
          message: `Not enough stock for ${item.product.name}`,
        });
      }
    }

    // Step 2: Deduct stock
    for (const item of items) {
      item.product.stock -= item.quantity;
      await productRepo.save(item.product);
    }

    // Step 3: Clear cart
    await cartItemRepo.remove(items);

    res.json({ message: "Purchase complete", items });

  } catch (err) {
    res.status(500).json({ message: "Checkout error" });
  }
};
export const updateCartItem = async (req: Request, res: Response) => {
  try {
    const { quantity } = req.body;
    const id = Number(req.params.id);
    const userId = req.user!.id;

    const cartItem = await cartItemRepo.findOne({
      where: { id, user: { id: userId } },
      relations: ["product"],
    });

    if (!cartItem) return res.status(404).json({ message: "Item not found" });

    const product = cartItem.product;

    if (quantity > product.stock) {
      return res.status(400).json({ message: "Not enough stock available" });
    }

    cartItem.quantity = quantity;
    await cartItemRepo.save(cartItem);

    res.json(cartItem);

  } catch (err) {
    res.status(500).json({ message: "Error updating cart item" });
  }
};

export const removeCartItem = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const userId = req.user!.id;

  const cartItem = await cartItemRepo.findOne({
    where: { id, user: { id: userId } },
  });

  if (!cartItem) return res.status(404).json({ message: "Item not found" });

  await cartItemRepo.remove(cartItem);

  // DO NOT touch stock
  res.json({ message: "Item cancelled from cart" });
};
