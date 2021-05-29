import express from 'express';
import path from 'path';

import { getUser } from './user';
import { updateEvent, setEvent, getEvents, deleteEvent } from './event';
import { getMeetings } from './meeting';

const router = express.Router();

console.log(__dirname);

router.use(express.static(__dirname + '/templates'));

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

router.get('/user', getUser);

router.get('/events', getEvents);

router.get('/meetings', getMeetings);

router.post('/event', setEvent);

router.patch('/event', updateEvent);

router.delete('/event', deleteEvent);

export { router };
