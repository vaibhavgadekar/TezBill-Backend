import type { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { JWTScreatKey } from '../common/Constant';
import { ErrorResponse, SuccessResponse } from '../helpers/response';
import TenantAdmin from '../model/TenantAdmin';
import { generateOTP } from '../utils/common';

const createNewTenant = (req: Request, res: Response) => {
  try {
    const { mobile_number } = req.body;
    return TenantAdmin.find({ mobile_number: mobile_number }).then(
      tenantData => {
        if (tenantData.length > 0) {
          return new ErrorResponse(res, {
            message: 'User already exist !',
            otp: generateOTP,
          });
        } else {
          const tenant = new TenantAdmin(req.body);
          return tenant
            .save()
            .then(data => {
              return new SuccessResponse(res, data);
            })
            .catch(error => {
              return new ErrorResponse(res, error.message);
            });
        }
      },
    );
  } catch (error) {
    return new ErrorResponse(res, error);
  }
};

const checkUser = (req: Request, res: Response) => {
  try {
    const { mobile_number } = req.body;
    return TenantAdmin.find({ mobile_number: mobile_number }).then(
      tenantData => {
        if (tenantData.length > 0) {
          return new SuccessResponse(res, {
            isSuccess: true,
          });
        } else {
          return new SuccessResponse(res, { isSuccess: false });
        }
      },
    );
  } catch (error) {
    return new ErrorResponse(res, error);
  }
};

const sendOTP = (req: Request, res: Response) => {
  try {
    const { mobile_number } = req.body;
    const otp = generateOTP();

    ///send OTP TO specified mobile number

    return TenantAdmin.findOneAndUpdate(
      { mobile_number },
      { otp },
      { new: true },
    ).then(tenantData => {
      return new SuccessResponse(res, { tenantData });
    });
  } catch (error) {
    return new ErrorResponse(res, error);
  }
};

const verifyOTP = (req: Request, res: Response) => {
  try {
    const { mobile_number, otp } = req.body;
    return TenantAdmin.find({ mobile_number, otp }).then(tenantData => {
      if (tenantData.length > 0) {
        const userData = {
          time: Date(),
          userId: tenantData[0]?.id,
        };
        const token = jwt.sign(userData, JWTScreatKey);

        return new SuccessResponse(res, { isSuccess: true, token: token });
      } else {
        return new SuccessResponse(res, { isSuccess: false });
      }
    });
  } catch (error) {
    return new ErrorResponse(res, error);
  }
};

export default {
  createNewTenant,
  checkUser,
  sendOTP,
  verifyOTP,
};
