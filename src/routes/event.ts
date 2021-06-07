import type { Request, Response, NextFunction } from 'express';
import { selectModules, getModuleById } from '../services/module';
import moment from 'moment';
import { getError } from './error';
import {
  deleteCurrentEvent,
  updateCurrentEvent,
  selectEvents,
  setCurrentEvent,
  selectCurrentEvent,
} from '../services/event';
import e from 'express';

export async function getEvent(req: Request, res: Response) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Content-Type', 'application/json; charset=utf-8');

  const event = await selectCurrentEvent(req.params.id);

  if (event === null) {
    res.status(404).end();
  } else {
    res.end(JSON.stringify(event));
  }
}

export async function getEvents(req: Request, res: Response) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Content-Type', 'application/json; charset=utf-8');

  const events: any[] = [];
  const modules = await selectModules(req.query.userId as string);

  for (let module of JSON.parse(JSON.stringify(modules))) {
    const eventArray = await selectEvents(
      module.id,
      req.query.startDate as string,
      req.query.endDate as string
    );

    if (JSON.stringify({}) === JSON.stringify(eventArray)) {
      return;
    } else {
      JSON.parse(JSON.stringify(eventArray)).forEach((event: any) => {
        const startDate = event.start_date;
        event['start_date'] = moment(startDate).toISOString();
        const endDate = event.end_date;
        event['end_date'] = moment(endDate).toISOString();

        events.push(event);
      });
    }
  }

  res.end(JSON.stringify(events));
}

export async function updateEvent(req: Request, res: Response) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Content-Type', 'application/json; charset=utf-8');

  const updatedEvent = await updateCurrentEvent(
    req.params.id,
    req.body.startTime,
    req.body.endTime,
    req.body.name,
    req.body.color,
    req.body.aud,
    req.body.link,
    req.body.theme
  );

  if (JSON.stringify(updatedEvent) == JSON.stringify([1])) {
    const event = await selectCurrentEvent(req.params.id);
    res.end(JSON.stringify(event));
  } else {
    res.status(404).end();
  }
}

export async function setEvent(req: Request, res: Response) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Content-Type', 'application/json; charset=utf-8');

  const newEvent = await setCurrentEvent(
    req.body.name,
    req.body.color,
    req.body.aud,
    req.body.link,
    req.body.teacher,
    req.body.theme,
    req.body.startTime as string,
    req.body.endTime as string,
    req.params.id as string
  );

  const id = JSON.parse(JSON.stringify(newEvent))[0][0].id;
  res
    .status(201)
    .location(`/event/${id}`)
    .end(JSON.stringify({ id: id }));
}

export async function deleteEvent(req: Request, res: Response) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Content-Type', 'application/json; charset=utf-8');

  const deletedEvent = await deleteCurrentEvent(req.params.id);

  if (deletedEvent == 1) {
    res.status(204).end(JSON.stringify({}));
  } else {
    res.status(404).end();
  }

  //res.end(JSON.stringify(deletedEvent));
}
