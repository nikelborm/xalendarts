import express from 'express';
import path from 'path';

import { getUser } from './user';
import {
  updateEvent,
  setEvent,
  getEvents,
  deleteEvent,
  getEvent,
} from './event';
import { postModule, getModules, addUsers, deleteModule } from './module';

const router = express.Router();
router.use(express.static(__dirname + '/templates'));

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

router.get('/user/:userId', getUser); // +

router.get('/event/:id', getEvent); // +

router.get('/events', getEvents); // +

router.get('/modules', getModules); //+

router.post('/module/:id/event', setEvent); //+

router.post('/module', postModule); // +

router.patch('/event/:id', updateEvent); // +

router.patch('/module/:id/users', addUsers); // +

router.delete('/module/:id', deleteModule); //

router.delete('/event/:id', deleteEvent); // +

export { router };
