import express from 'express';

import ProductController from '../controller/ProductController';
import { Verify } from '../middleware/VerifyToken';

const router = express.Router();

router.post('/', Verify, ProductController.createProduct);
router.get('/list', Verify, ProductController.getAllProducts);
router.delete('/:id', Verify, ProductController.deleteProduct);
router.patch('/:id', Verify, ProductController.updateProduct);

export default router;
