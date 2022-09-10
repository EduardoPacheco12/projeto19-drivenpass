import { Router } from 'express';
import { createCredentials, deleteCredential, getCredential, getCredentials } from '../controllers/credentialController.js';
import { validateSchemaMiddleware } from '../middlewares/validateSchema.js';
import { validateTokenMiddleware } from '../middlewares/validateToken.js';
import { credentialSchema } from '../schemas/credentialSchema.js';

const router = Router();

router.post('/credentials/create', validateTokenMiddleware, validateSchemaMiddleware(credentialSchema), createCredentials);
router.get('/credentials/search', validateTokenMiddleware, getCredentials);
router.get('/credentials/search/:id', validateTokenMiddleware, getCredential);
router.delete('/credentials/delete/:id', validateTokenMiddleware, deleteCredential);

export default router;
