import { NextFunction, Request, Response } from 'express';
import { NotAuthorizedError } from '../errors/not-authorized-error';

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // we are generally assuming that the developer are going to use this after currentUser middleware
  if (!req.currentUser) throw new NotAuthorizedError();

  next();
};
