import { Router } from "express";
import { register, login, logout, profile } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validertoken.js";

import {validateSchema} from "../middlewares/validator.middlewares.js"
import { loginSchema, registerScheme} from "../schemas/auth.schemas.js"

const router = Router()

router.post('/register', validateSchema(registerScheme), register);
router.post('/login', validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/profile", authRequired, profile);
 
export default router;