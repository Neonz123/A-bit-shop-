
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "change_this_in_prod";

export type UserRole = "user" | "admin";

export interface CustomJwtPayload extends JwtPayload {
  id: number;
  email: string;
  role: UserRole;
}

export const generateToken = (payload: { id: number; email: string; role: UserRole }) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
};

export const verifyToken = (token: string): CustomJwtPayload => {
  return jwt.verify(token, JWT_SECRET) as CustomJwtPayload;
};
