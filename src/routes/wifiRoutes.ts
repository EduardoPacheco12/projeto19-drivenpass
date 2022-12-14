import { Router } from 'express';
import { createWifi, deleteWifi, getWIfi, getWifis } from '../controllers/wifiController.js';
import { validateSchemaMiddleware } from '../middlewares/validateSchema.js';
import { validateTokenMiddleware } from '../middlewares/validateToken.js';
import { wifiSchema } from '../schemas/wifiSchema.js';

const router = Router();

router.post('/wifis/create', validateTokenMiddleware, validateSchemaMiddleware(wifiSchema), createWifi);
router.get('/wifis/search', validateTokenMiddleware, getWifis);
router.get('/wifis/search/:id', validateTokenMiddleware, getWIfi);
router.delete('/wifis/delete/:id', validateTokenMiddleware, deleteWifi);

export default router;
