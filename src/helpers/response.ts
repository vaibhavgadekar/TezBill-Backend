import { httpStatusCodes } from '../common/StatusCodes';

export class SuccessResponse {
  public response: any;

  constructor(res: any, data: any) {
    this.response = data;
    res.status(httpStatusCodes.OK).json(this.response);
  }
}

export class ErrorResponse {
  public response: any;

  constructor(res: any, data: any) {
    this.response = data;
    res.status(httpStatusCodes.BAD_REQUEST).json(this.response);
  }
}
