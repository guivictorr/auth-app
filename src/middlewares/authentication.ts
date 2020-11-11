import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export default function checkToken(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const header = request.headers.authorization;
  const token = header && header.split(' ')[1];

  if (token == null) {
    return response.sendStatus(401);
  }

  const verifyToken = verify(token, process.env.APP_SECRET as string);

  if (!verifyToken) {
    return response.sendStatus(403);
  }

  next();
}
