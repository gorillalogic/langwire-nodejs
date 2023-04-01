import { Router } from 'express';
import QueriesController from "../controllers/queries";

const router = Router();

router.get("/", QueriesController.index);

export default router;