import type { Request, Response, NextFunction } from 'express';
import { getRagedEvents } from '../services/event';
import { setCurrentEvent } from '../services/event';
import { getError } from './error';
import { updateCurrentEvent } from '../services/event';

export async function getEvents(req: Request, res: Response) {
  const events = await getRagedEvents(
    req.query.userId as string,
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

export async function updateEvent(req: Request, res: Response) {
  const updatedEvent = await updateCurrentEvent(
    req.body.id,
    req.body.userId,
    req.body.date,
    req.body.startTime,
    req.body.endTime,
    req.body.name,
    req.body.color,
    req.body.aud,
    req.body.link,
    req.body.teacher,
    req.body.moduleName,
    req.body.theme
  );

  res.end(JSON.stringify(updatedEvent));
}

export async function setEvent(req: Request, res: Response) {
  const event = await setCurrentEvent(
    req.body.userId,
    req.body.date,
    req.body.startTime,
    req.body.endTime,
    req.body.name,
    req.body.color,
    req.body.aud,
    req.body.link,
    req.body.teacher,
    req.body.moduleName,
    req.body.theme
  );

  res.end(JSON.stringify(event));
}
