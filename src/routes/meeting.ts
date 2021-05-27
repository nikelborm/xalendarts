import type { Request, Response } from 'express';
import { getError } from './error';
import { getAvaliableMeetings } from '../services/meeting';

export async function getMeetings(req: Request, res: Response) {
  const meetings = await getAvaliableMeetings(req.query.userId as string);

  const error = getError(`Couldn't find meetings`, '404');

  if (meetings === null) {
    res.end(error);
  } else {
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.sendFile('template/meeting.html', { root: __dirname });
    res.end(JSON.stringify(meetings));
  }
}
