import type { Request, Response } from 'express';

import { ErrorResponse, SuccessResponse } from '../helpers/response';
import TenantAdmin from '../model/TenantAdmin';

const createNewTenant = (req: Request, res: Response) => {
  try {
    const tenant = new TenantAdmin(req.body);
    return tenant
      .save()
      .then(data => {
        return new SuccessResponse(res, data);
      })
      .catch(error => {
        return new ErrorResponse(res, error.message);
      });
  } catch (error) {
    return new ErrorResponse(res, error);
  }
};

export default {
  createNewTenant,
};
