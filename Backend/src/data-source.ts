import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Product } from "./entity/Product";
import { Order } from "./entity/Order";
import { CartItem } from "./entity/CartItem";
import { Category } from "./entity/Category";
import {Admin} from "./Admin/entityAdmin/Admin";
import "dotenv/config";

// console.log("Connecting to the database...");
// console.log(process.env.PG_host, process.env.PG_port, process.env.PG_username, process.env.PG_password, process.env.PG_database);

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.PG_host ,
  port: process.env.PG_port ? parseInt(process.env.PG_port) : 5432,
  username: process.env.PG_username,
  password: process.env.PG_password,
  database: process.env.PG_database,
  synchronize: false,   // Don't use true in real projects
  logging: true,
  entities: [User, Product, Order, CartItem, Category , Admin],
  migrations: ["src/migration/**/*.ts"],
  schema: "public",
});