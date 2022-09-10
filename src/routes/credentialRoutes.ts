import { Router } from "express";
import { createCredentials, getCredencials } from "../controllers/credentialController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { validateTokenMiddleware } from "../middlewares/validateToken.js";
import { credentialSchema } from "../schemas/credentialSchema.js";


const router = Router();

router.post("/credentials/create", validateTokenMiddleware, validateSchemaMiddleware(credentialSchema), createCredentials);
router.get("/credentials/search", validateTokenMiddleware, getCredencials);
router.get("/credentials/search/:id",);

export default router;