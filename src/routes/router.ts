import express from 'express';
import { getUser } from './user';
import { updateEvent, setEvent, getEvents, deleteEvent } from './event';
import { getMeetings } from './meeting';

const router = express.Router();

router.get('/user', getUser);

router.get('/events', getEvents);

router.get('/meetings', getMeetings);

router.post('/event', setEvent);

router.patch('/event', updateEvent);

router.delete('/event', deleteEvent);

export { router };
