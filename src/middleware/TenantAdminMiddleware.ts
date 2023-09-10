import type { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

import { ErrorResponse } from '../helpers/response';

export const TenantAdminMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.query.tenantId) {
    const tenantId = req.query.tenantId;
    mongoose.connection.useDb(`tenant-${tenantId}`);
    if (tenantId === '1') {
      next();
    } else {
      throw new ErrorResponse(res, {
        message: 'You are not authorized to perform this operation !',
      });
    }
  } else {
    throw new ErrorResponse(res, {
      message: 'Tenant Id not found',
    });
  }
};
