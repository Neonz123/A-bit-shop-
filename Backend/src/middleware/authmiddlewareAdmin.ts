// src/middleware/authmiddlewareAdmin.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../data-source";
import { Admin } from "../Admin/entityAdmin/Admin"; // adjust path

const adminRepo = AppDataSource.getRepository(Admin);

export const authAdminMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const rawAuth = req.headers.authorization;
    if (!rawAuth) return res.status(401).json({ message: "Authentication required" });

    const token = rawAuth.startsWith("Bearer ") ? rawAuth.split(" ")[1] : rawAuth;
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as any;

    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Forbidden: admins only" });
    }

    const admin = await adminRepo.findOneBy({ id: decoded.id });
    if (!admin) return res.status(401).json({ message: "Admin not found" });

    (req as any).user = { id: admin.id, username: admin.username, email: admin.email, role: "admin" };
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
