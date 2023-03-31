import path from 'path';
import { Router } from 'express';
import Controller from '../controllers/errors';

const router = Router();

router.use(Controller.get404);

export default router;