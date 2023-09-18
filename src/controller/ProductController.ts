import type { Request, Response } from 'express';
import mongoose from 'mongoose';

import { ErrorResponse, SuccessResponse } from '../helpers/response';
import Product from '../model/Product';

const createProduct = (req: Request, res: Response) => {
  try {
    const reqBody = {
      ...req.body,
      TenantID: req.params.userId,
    };

    const product = new Product(reqBody);
    return product
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

const getAllProducts = (req: Request, res: Response) => {
  try {
    const TenantID = req.params.userId;
    return Product.find({ TenantID })
      .sort({ updatedAt: -1 })
      .then(products => {
        return new SuccessResponse(res, { products });
      });
  } catch (error) {
    return new ErrorResponse(res, error);
  }
};

const updateProduct = (req: Request, res: Response) => {
  try {
    const { id, userId } = req.params;

    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId) {
      return new ErrorResponse(res, {
        message: 'Invalid Product',
      });
    }

    return Product.findOneAndUpdate({ _id: id, TenantID: userId }, req.body, {
      new: true,
    }).then(products => {
      return new SuccessResponse(res, { products });
    });
  } catch (error) {
    return new ErrorResponse(res, error);
  }
};

const deleteProduct = (req: Request, res: Response) => {
  try {
    const { id, userId } = req.params;

    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId) {
      return new ErrorResponse(res, {
        message: 'Invalid Product',
      });
    }

    return Product.findOneAndDelete(
      { _id: id, TenantID: userId },
      {
        new: true,
      },
    ).then(products => {
      return new SuccessResponse(res, { products });
    });
  } catch (error) {
    return new ErrorResponse(res, error);
  }
};

export default {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
};
