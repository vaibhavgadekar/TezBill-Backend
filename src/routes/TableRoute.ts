import express from 'express';

import TableController from '../controller/TableController';
import { Verify } from '../middleware/VerifyToken';

const router = express.Router();

router.post('/', Verify, TableController.createTable);
router.get('/list', Verify, TableController.getAllTable);
router.delete('/:id', Verify, TableController.deleteTable);
router.patch('/:id', Verify, TableController.updateTable);

export default router;
