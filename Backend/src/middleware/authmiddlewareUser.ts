// src/middleware/authUser.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";


const userRepository = AppDataSource.getRepository(User);

export async function authUserMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const rawAuth = req.headers.authorization;
  let token: string | undefined;

  if (rawAuth?.startsWith("Bearer ")) {
    token = rawAuth.split(" ")[1];
  } else {
    token = rawAuth;
  }

  if (!token) {
    return res.status(401).json({ message: "Authentication required" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: number;
      role: string;
    };
    
    const user = await userRepository.findOneBy({ id: decoded.id });
    if (!user) {
      
      return res.status(401).json({ message: "User not found" });
    }

    if (decoded.role !== "user") {
      return res.status(403).json({ message: "Forbidden: users only" });
    }

    (req as any).user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
}
