import express from 'express';

import CategoryController from '../controller/CategoryController';
import { Verify } from '../middleware/VerifyToken';

const router = express.Router();

router.post('/', Verify, CategoryController.createCategory);
router.get('/list', Verify, CategoryController.getAllCategory);
router.patch('/:id', Verify, CategoryController.updateCategory);
router.delete('/:id', Verify, CategoryController.deleteCategory);

export default router;
