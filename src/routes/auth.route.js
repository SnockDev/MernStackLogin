import { Router } from "express";
import {
  register,
  login,
  logout,
  profile,
} from "../controller/auth.controller.js";
import { validateToken } from "../middlewares/validateToken.js";
import { validatorSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";
const router = Router();

router.post("/register", validatorSchema(registerSchema), register);
router.post("/login", validatorSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/profile", validateToken, profile);

export default router;
