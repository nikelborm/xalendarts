import type { Request, Response, NextFunction } from 'express';
import { ragedEvents } from '../services/event';
import { getError } from './error';

export async function getEvents(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(typeof req.query.userId);

  const events = await ragedEvents(
    req.query.userId as any,
    req.query.startDate as string,
    req.query.endDate as string
  );

  const error = getError('Events not found', '404');

  if (events === null) {
    res.end(error);
  } else {
    res.end(JSON.stringify(events));
  }
}
