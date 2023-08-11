import express from 'express';

import TenantAdminController from '../controller/TenantAdminController';
import { TenantAdminMiddleware } from '../middleware/TenantAdminMiddleware';

const router = express.Router();

router.post('/', TenantAdminMiddleware, TenantAdminController.createNewTenant);

export default router;