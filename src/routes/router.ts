import express from 'express';
import { getUser } from './user';
import { getEvents } from './event';
import { setEvent } from './event';
import { updateEvent } from './event';
import { getMeetings } from './meeting';

const router = express.Router();

router.get('/user', getUser);

router.get('/events', getEvents);

router.get('/meetings', getMeetings);

router.post('/event', setEvent);

router.patch('/event', updateEvent);

export { router };
