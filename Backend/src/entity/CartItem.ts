import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne
} from "typeorm";
import { Product } from "./Product";
import { User } from "./User";
import { Order } from "./Order";

@Entity()
export class CartItem {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  quantity!: number;

  @ManyToOne(() => Product, (product) => product.cartItems, { eager: true })
  product!: Product;

  @ManyToOne(() => User, (user) => user.cartItems , { onDelete: "CASCADE" })
  user!: User;

  @ManyToOne(() => Order, (order) => order.items) // Changed from order.cartItems to order.items
  order!: Order;
}