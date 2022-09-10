import { Router } from "express";
import signUp from "../controllers/authController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { signUpSchema } from "../schemas/authSchemas.js";

const router = Router();

router.post("/sign-up", validateSchemaMiddleware(signUpSchema), signUp);

export default router;