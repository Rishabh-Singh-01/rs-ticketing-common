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

/**
 * checks whether currentUser exists or not by verifying jwt session on cookie,
 * if cookie is valid append email and id on req.currentUser
 * else req.currentUser remains null
 *
 * @param req : General Express Request
 * @param res : General Express Response
 * @param next : General Express Next Function
 * @returns
 */
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
