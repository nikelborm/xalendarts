import type { Request, Response } from 'express';
import { userInfo } from '../services/user';
import { getError } from './error';

export async function getUser(req: Request, res: Response) {
  const user = await userInfo(req.query.fullName as string);

  const error = getError('Not found', '400');

  if (user === null) {
    res.end(error);
  } else {
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(user));
  }
}
