import express from 'express';
import path from 'path';

import { getUser } from './user';
import { updateEvent, setEvent, getEvents, deleteEvent } from './event';
import { getMeetings } from './meeting';

const router = express.Router();
process.env.PWD = process.cwd();

console.log(process.env.PWD);

router.get('/user', getUser);

router.get('/events', getEvents);

router.get('/meetings', getMeetings);

router.post('/event', setEvent);

router.patch('/event', updateEvent);

router.delete('/event', deleteEvent);

router.use('/', express.static(path.join(process.env.PWD, 'template')));

export { router };
