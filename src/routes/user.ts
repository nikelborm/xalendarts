import type { Request, Response } from 'express';
import { userInfo } from '../services/user';

export async function getUser(req: Request, res: Response) {
  res.header('Access-Control-Allow-Origin');
  res.header('Content-Type', 'application/json; charset=utf-8');
  const user = await userInfo(req.params.userId);

  if (user === null) {
    res.status(404).end();
  } else {
    res.end(JSON.stringify(user));
  }
}
