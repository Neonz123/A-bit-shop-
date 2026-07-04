import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn } from "typeorm";
import { User } from "./User";
import { CartItem } from "./CartItem";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @Column({ default: "pending" }) 
  status!: string;

  @ManyToOne(() => User, user => user.orders)
  user!: User;


  @OneToMany(() => CartItem, item => item.order, { cascade: true })
  items!: CartItem[];
}
