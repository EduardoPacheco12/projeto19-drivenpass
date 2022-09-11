import { Router } from 'express';
import { createSafeNotes, deleteSafeNote, getSafeNote, getSafeNotes } from '../controllers/safeNoteController.js';
import { validateSchemaMiddleware } from '../middlewares/validateSchema.js';
import { validateTokenMiddleware } from '../middlewares/validateToken.js';
import { safeNoteSchema } from '../schemas/safeNoteSchema.js';

const router = Router();

router.post('/safe-notes/create', validateTokenMiddleware, validateSchemaMiddleware(safeNoteSchema), createSafeNotes);
router.get('/safe-notes/search', validateTokenMiddleware, getSafeNotes);
router.get('/safe-notes/search/:id', validateTokenMiddleware, getSafeNote);
router.delete('/safe-notes/delete/:id', validateTokenMiddleware, deleteSafeNote);

export default router;
