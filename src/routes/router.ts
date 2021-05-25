import express from 'express';
import { getUser } from './user';
import { getEvents } from './event';

const router = express.Router();

router.get('/user', getUser);

router.get('/events', getEvents);

export { router };
