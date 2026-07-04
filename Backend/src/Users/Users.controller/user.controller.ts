// src/controllers/authController.ts
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { AppDataSource } from "../../data-source"; // Adjust path as needed
import { User } from "../../entity/User"; // Adjust path as needed
import { generateToken } from "../../Services/jwt.service"; // Adjust path as needed

const userRepo = AppDataSource.getRepository(User);

export const registerUser = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    try {
        const exists = await userRepo.findOneBy({ email });
        if (exists) return res.status(400).json({ message: "Email already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = userRepo.create({ username, email, password: hashedPassword });
        await userRepo.save(user);

        res.status(201).json({ message: "User registered" });
    } catch (error) {
        console.error("Registration error:", error); // Log the actual error for debugging
        res.status(500).json({ message: "Registration failed", error: (error as Error).message }); // Send a more specific error message
    }
};

export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const user = await userRepo.findOneBy({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return res.status(401).json({ message: "Invalid credentials" });

        const token = generateToken({ id: user.id, email: user.email, role: "user" });

            res.json({
            token,
            user: {
            id: user.id,
            username: user.username,
            email: user.email,
            role: "user"
  },
});
    } catch (error) {
        console.error("Login error:", error); // Log the actual error for debugging
        res.status(500).json({ message: "Login failed", error: (error as Error).message }); // Send a more specific error message
    }
};