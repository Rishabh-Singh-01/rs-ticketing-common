import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../errors/custom-error';

/**
 * Global Error Handler middleware, handles error to return a consistent response
 *
 * @param err
 * @param req
 * @param res
 * @param next
 * @returns
 */
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({
      status: `${err.statusCode}`.startsWith('4') ? 'fail' : 'error',
      errors: err.serializeError(),
    });
  }

  console.log('------------Error from errorHandler-----------');
  console.error(err);
  res.status(500).send({
    status: 'error',
    errors: [
      {
        message: 'Something went wrong !!!!',
      },
    ],
  });
};
