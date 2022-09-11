import { Router } from 'express';
import { createCards, deleteCard, getCard, getCards } from '../controllers/cardController.js';
import { validateSchemaMiddleware } from '../middlewares/validateSchema.js';
import { validateTokenMiddleware } from '../middlewares/validateToken.js';
import { cardSchema } from '../schemas/cardSchema.js';

const router = Router();

router.post('/cards/create', validateTokenMiddleware, validateSchemaMiddleware(cardSchema), createCards);
router.get('/cards/search', validateTokenMiddleware, getCards);
router.get('/cards/search/:id', validateTokenMiddleware, getCard);
router.delete('/cards/delete/:id', validateTokenMiddleware, deleteCard);

export default router;
