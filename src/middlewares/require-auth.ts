import { NextFunction, Request, Response } from 'express';
import { NotAuthorizedError } from '../errors/not-authorized-error';

/**
 * Checks whether currentUser exists on req.currentUser,
 * if exists then move on to next middleware
 * else throw new NotAuthorizedError
 * Should be called after currentUser middleware
 *
 * @throws err : Not AuthorizedError
 * @param req : General Express Request
 * @param res : General Express Response
 * @param next : General Express Next Function
 */
export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // we are generally assuming that the developer are going to use this after currentUser middleware
  if (!req.currentUser) throw new NotAuthorizedError();

  next();
};
