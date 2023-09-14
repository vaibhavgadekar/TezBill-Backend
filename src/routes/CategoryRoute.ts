import express from 'express';

import CategoryController from '../controller/CategoryController';
import { Verify } from '../middleware/VerifyToken';

const router = express.Router();

router.post('/', Verify, CategoryController.createCategory);
router.get('/list', Verify, CategoryController.getAllCategory);

export default router;
