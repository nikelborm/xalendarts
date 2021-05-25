import type { Request, Response, NextFunction } from 'express';
import { userInfo } from '../services/user';
import { getError } from './error';

export async function getUser(req: Request, res: Response, next: NextFunction) {
  const user = await userInfo(req.query.fullName as string);

  const error = getError('User not found', '404');

  if (user === null) {
    res.end(error);
  } else {
    res.end(JSON.stringify(user));
  }
}
