import express from 'express';

import FloorController from '../controller/FloorController';
import { Verify } from '../middleware/VerifyToken';

const router = express.Router();

router.post('/', Verify, FloorController.createFloor);
router.get('/list', Verify, FloorController.getAllFloors);
router.delete('/:id', Verify, FloorController.deleteFloor);
router.patch('/:id', Verify, FloorController.updateFloor);

export default router;
