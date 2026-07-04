import { AppDataSource } from "../../data-source";
import { Product } from "../../entity/Product";

const productRepository = AppDataSource.getRepository(Product);

export const createProduct = async (data: Partial<Product>) => {
  const product = productRepository.create(data);
  return await productRepository.save(product);
};

export const updateProduct = async (id: number, data: Partial<Product>) => {
  const product = await productRepository.findOneBy({ id });
  if (!product) throw new Error("Product not found");

  Object.assign(product, data);
  return await productRepository.save(product);
};

export const deleteProduct = async (id: number) => {
  const product = await productRepository.findOneBy({ id });
  if (!product) throw new Error("Product not found");

  await productRepository.remove(product);
};
