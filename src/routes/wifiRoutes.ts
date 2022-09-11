import { Router } from 'express';
import { createWifi } from '../controllers/wifiController.js';
import { validateSchemaMiddleware } from '../middlewares/validateSchema.js';
import { validateTokenMiddleware } from '../middlewares/validateToken.js';
import { wifiSchema } from '../schemas/wifiSchema.js';

const router = Router();

router.post('/wifis/create', validateTokenMiddleware, validateSchemaMiddleware(wifiSchema), createWifi);
router.get('/wifis/search', validateTokenMiddleware);
router.get('/wifis/search/:id', validateTokenMiddleware);
router.delete('/wifis/delete/:id', validateTokenMiddleware);

export default router;
