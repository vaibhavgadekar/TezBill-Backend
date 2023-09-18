import type { Request, Response } from 'express';
import mongoose from 'mongoose';

import { ErrorResponse, SuccessResponse } from '../helpers/response';
import Staff from '../model/Staff';

const createStaff = (req: Request, res: Response) => {
  try {
    const reqBody = {
      ...req.body,
      TenantID: req.params.userId,
    };

    const staff = new Staff(reqBody);
    return staff
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

const getAllStaff = (req: Request, res: Response) => {
  try {
    const TenantID = req.params.userId;
    return Staff.find({ TenantID })
      .sort({ updatedAt: -1 })
      .then(staff => {
        return new SuccessResponse(res, { staff });
      });
  } catch (error) {
    return new ErrorResponse(res, error);
  }
};

const updateStaff = (req: Request, res: Response) => {
  try {
    const { id, userId } = req.params;

    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId) {
      return new ErrorResponse(res, {
        message: 'Invalid Staff',
      });
    }

    return Staff.findOneAndUpdate({ _id: id, TenantID: userId }, req.body, {
      new: true,
    }).then(staff => {
      return new SuccessResponse(res, { staff });
    });
  } catch (error) {
    return new ErrorResponse(res, error);
  }
};

const deleteStaff = (req: Request, res: Response) => {
  try {
    const { id, userId } = req.params;

    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId) {
      return new ErrorResponse(res, {
        message: 'Invalid Staff',
      });
    }

    return Staff.findOneAndDelete(
      { _id: id, TenantID: userId },
      {
        new: true,
      },
    ).then(staff => {
      return new SuccessResponse(res, { staff });
    });
  } catch (error) {
    return new ErrorResponse(res, error);
  }
};

export default {
  createStaff,
  getAllStaff,
  deleteStaff,
  updateStaff,
};
