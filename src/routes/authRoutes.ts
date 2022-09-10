import { Router } from "express";
import { signUp, signIn } from "../controllers/authController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { authSchema } from "../schemas/authSchemas.js";

const router = Router();

router.post("/sign-up", validateSchemaMiddleware(authSchema), signUp);
router.post("/sign-in", validateSchemaMiddleware(authSchema), signIn);

export default router;