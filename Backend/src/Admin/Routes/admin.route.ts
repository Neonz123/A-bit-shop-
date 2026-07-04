import { Router } from "express";
import { registerAdmin, loginAdmin } from "../controller/admin.controller"

const routerAdmin = Router();

routerAdmin.post("/register", registerAdmin);
routerAdmin.post("/login", loginAdmin);

export default routerAdmin;
