import express from 'express';
import path from 'path';

import { getUser } from './user';
import { updateEvent, setEvent, getEvents, deleteEvent } from './event';
import { getMeetings } from './meeting';

const router = express.Router();

/**
 * @swagger
 * components:
 *    schemas:
 *       User:
 *          type: object
 *          required:
 *            - fullName
 *          properties:
 *              user_id:
 *                type: number
 *                description: user id on a system.
 *              type:
 *                type: string
 *                description: user type (student or teacher)
 *              full_name:
 *                type: string
 *                description: Full name of user.
 *          example:
 *            id: 228228
 *            type: student
 *
 */

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
