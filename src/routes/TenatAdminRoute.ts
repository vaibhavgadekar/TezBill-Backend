import express from 'express';

import TenantAdminController from '../controller/TenantAdminController';

const router = express.Router();

router.post('/', TenantAdminController.createNewTenant);
router.post('/sendOTP', TenantAdminController.sendOTP);
router.post('/verifyOTP', TenantAdminController.verifyOTP);

export default router;
