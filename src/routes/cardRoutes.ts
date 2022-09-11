import { Router } from 'express';
import { createCards } from '../controllers/cardController.js';
import { validateSchemaMiddleware } from '../middlewares/validateSchema.js';
import { validateTokenMiddleware } from '../middlewares/validateToken.js';
import { cardSchema } from '../schemas/cardSchema.js';

const router = Router();

router.post('/cards/create', validateTokenMiddleware, validateSchemaMiddleware(cardSchema), createCards);
router.get('/cards/search', validateTokenMiddleware);
router.get('/cards/search/:id', validateTokenMiddleware);
router.delete('/cards/delete/:id', validateTokenMiddleware);

export default router;
