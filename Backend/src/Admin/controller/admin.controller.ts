import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { AppDataSource } from "../../data-source"; // Adjust path as needed
import { Admin } from "../entityAdmin/Admin"; // Adjust path as needed
import { generateToken } from "../../Services/jwt.service"; // Adjust path as needed

const adminRepo = AppDataSource.getRepository(Admin);

// REGISTER
export const registerAdmin = async (req: Request, res: Response) => {
  const { AdminName, email, password } = req.body;

  try {
    const exists = await adminRepo.findOneBy({ email });
    if (exists) return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = adminRepo.create({
      username: AdminName,
      email,
      password: hashedPassword,
    });

    await adminRepo.save(admin);

    res.status(201).json({ message: "Admin registered" });
  } catch (err) {
    console.error("Registration error:", err);
    res
      .status(500)
      .json({ message: "Registration failed", error: (err as Error).message });
  }
};

//login
export const loginAdmin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const admin = await adminRepo.findOneBy({ email });
    if (!admin) return res.status(404).json({ message: "Admin not found" });

    const isValid = await bcrypt.compare(password, admin.password);
    if (!isValid) return res.status(401).json({ message: "Invalid credentials" });

    // ✅ Fix: Use `admin` object, not undefined variable
    const token = generateToken({
      id: admin.id,
      email: admin.email,
      role: "admin",
    });

    res.json({
      token,
      admin: {
        id: admin.id,
        username: admin.username,
        email: admin.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res
      .status(500)
      .json({ message: "Login failed", error: (error as Error).message });
  }
};
