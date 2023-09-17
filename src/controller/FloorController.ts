import type { Request, Response } from 'express';
import mongoose from 'mongoose';

import { ErrorResponse, SuccessResponse } from '../helpers/response';
import Floor from '../model/Floor';

const createFloor = (req: Request, res: Response) => {
  try {
    const reqBody = {
      ...req.body,
      TenantID: req.params.userId,
    };

    const floor = new Floor(reqBody);
    return floor
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

const getAllFloors = (req: Request, res: Response) => {
  try {
    const TenantID = req.params.userId;
    return Floor.find({ TenantID }).then(floors => {
      return new SuccessResponse(res, { floors });
    });
  } catch (error) {
    return new ErrorResponse(res, error);
  }
};

const updateFloor = (req: Request, res: Response) => {
  try {
    const { id, userId } = req.params;

    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId) {
      return new ErrorResponse(res, {
        message: 'Invalid Floor',
      });
    }

    return Floor.findOneAndUpdate({ _id: id, TenantID: userId }, req.body, {
      new: true,
    }).then(floorData => {
      return new SuccessResponse(res, { floorData });
    });
  } catch (error) {
    return new ErrorResponse(res, error);
  }
};

const deleteFloor = (req: Request, res: Response) => {
  try {
    const { id, userId } = req.params;

    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId) {
      return new ErrorResponse(res, {
        message: 'Invalid Floor',
      });
    }

    return Floor.findOneAndDelete(
      { _id: id, TenantID: userId },
      {
        new: true,
      },
    ).then(floorData => {
      return new SuccessResponse(res, { floorData });
    });
  } catch (error) {
    return new ErrorResponse(res, error);
  }
};

export default {
  createFloor,
  getAllFloors,
  deleteFloor,
  updateFloor,
};
