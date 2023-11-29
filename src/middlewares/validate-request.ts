import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation-error';

/**
 * Validates incoming request and throws validation error accordingly
 * This only catches error which are already appended on req
 * Should be called after having some validation logic using express-validation
 *
 * @throws err : RequestValidationError
 * @param req : General Express Request
 * @param res : General Express Response
 * @param next : General Express Next Function
 */
export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) throw new RequestValidationError(errors.array());

  next();
};
