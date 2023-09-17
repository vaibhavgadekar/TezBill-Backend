import type { Request, Response } from 'express';
import mongoose from 'mongoose';

import { ErrorResponse, SuccessResponse } from '../helpers/response';
import Table from '../model/Table';

const createTable = (req: Request, res: Response) => {
  try {
    const reqBody = {
      ...req.body,
      TenantID: req.params.userId,
    };

    const table = new Table(reqBody);
    return table
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

const getAllTable = (req: Request, res: Response) => {
  try {
    const TenantID = req.params.userId;
    return Table.find({ TenantID }).then(tables => {
      return new SuccessResponse(res, { tables });
    });
  } catch (error) {
    return new ErrorResponse(res, error);
  }
};

const updateTable = (req: Request, res: Response) => {
  try {
    const { id, userId } = req.params;

    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId) {
      return new ErrorResponse(res, {
        message: 'Invalid Table',
      });
    }

    return Table.findOneAndUpdate({ _id: id, TenantID: userId }, req.body, {
      new: true,
    }).then(tables => {
      return new SuccessResponse(res, { tables });
    });
  } catch (error) {
    return new ErrorResponse(res, error);
  }
};

const deleteTable = (req: Request, res: Response) => {
  try {
    const { id, userId } = req.params;

    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId) {
      return new ErrorResponse(res, {
        message: 'Invalid Table',
      });
    }

    return Table.findOneAndDelete(
      { _id: id, TenantID: userId },
      {
        new: true,
      },
    ).then(tables => {
      return new SuccessResponse(res, { tables });
    });
  } catch (error) {
    return new ErrorResponse(res, error);
  }
};

export default {
  createTable,
  getAllTable,
  deleteTable,
  updateTable,
};
