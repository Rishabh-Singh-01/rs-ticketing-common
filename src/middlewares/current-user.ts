import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayloadExtra {
  id: string;
  email: string;
  iat: string;
}
interface UserPayload {
  id: string;
  email: string;
}
declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) return next();

  try {
    const { id, email } = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY!
    ) as unknown as UserPayloadExtra;
    req.currentUser = {
      id,
      email,
    };
  } catch (err) {}

  next();
};
