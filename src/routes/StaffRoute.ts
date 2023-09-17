import express from 'express';

import StaffContainer from '../controller/StaffContainer';
import { Verify } from '../middleware/VerifyToken';

const router = express.Router();

router.post('/', Verify, StaffContainer.createStaff);
router.get('/list', Verify, StaffContainer.getAllStaff);
router.delete('/:id', Verify, StaffContainer.deleteStaff);
router.patch('/:id', Verify, StaffContainer.updateStaff);

export default router;
