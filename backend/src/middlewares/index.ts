import { NextFunction, Request, Response } from 'express';
import HttpStatusCodes from 'http-status';

import config from '@config';
import logger from '@config/logger';
import { ApiError } from '@utils';

const errorConverter = (err: any, _: Request, __: Response, next: NextFunction) => {
  let error = err;
  if (!(error instanceof ApiError)) {
    const statusCode = error.statusCode ? HttpStatusCodes.BAD_REQUEST : HttpStatusCodes.INTERNAL_SERVER_ERROR;
    const message = error.message || HttpStatusCodes[statusCode];
    error = new ApiError(statusCode, message);
  }
  next(error);
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (err: any, _: Request, res: Response, __: NextFunction) => {
  let { statusCode, message } = err;
  if (config.env === 'production') {
    statusCode = HttpStatusCodes.INTERNAL_SERVER_ERROR;
    message = HttpStatusCodes[HttpStatusCodes.INTERNAL_SERVER_ERROR];
  }

  res.locals.errorMessage = err.message;

  const response = {
    code: statusCode,
    message
  };

  if (config.env === 'development') {
    logger.error(err);
  }
  logger.error('send error: ' + statusCode + ' ' + JSON.stringify(response));
  res.status(statusCode).send(response);
};

export { errorConverter, errorHandler };
