import type { Request, Response } from 'express';
import mongoose from 'mongoose';

import { SuccessResponse } from '../helpers/response';
import { ErrorResponse } from '../helpers/response';
import Category from '../model/Category';

const createCategory = (req: Request, res: Response) => {
  try {
    const reqBody = {
      ...req.body,
      TenantID: req.params.userId,
    };

    const category = new Category(reqBody);
    return category
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

const getAllCategory = (req: Request, res: Response) => {
  try {
    const TenantID = req.params.userId;
    return Category.find({ TenantID }).then(categories => {
      return new SuccessResponse(res, { categories });
    });
  } catch (error) {
    return new ErrorResponse(res, error);
  }
};

const updateCategory = (req: Request, res: Response) => {
  try {
    const { id, userId } = req.params;

    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId) {
      return new ErrorResponse(res, {
        message: 'Invalid Category',
      });
    }

    return Category.findOneAndUpdate({ _id: id, TenantID: userId }, req.body, {
      new: true,
    }).then(categoryData => {
      return new SuccessResponse(res, { categoryData });
    });
  } catch (error) {
    return new ErrorResponse(res, error);
  }
};

const deleteCategory = (req: Request, res: Response) => {
  try {
    const { id, userId } = req.params;

    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId) {
      return new ErrorResponse(res, {
        message: 'Invalid Category',
      });
    }

    return Category.findOneAndDelete(
      { _id: id, TenantID: userId },
      {
        new: true,
      },
    ).then(categoryData => {
      return new SuccessResponse(res, { categoryData });
    });
  } catch (error) {
    return new ErrorResponse(res, error);
  }
};

export default {
  createCategory,
  getAllCategory,
  updateCategory,
  deleteCategory,
};
