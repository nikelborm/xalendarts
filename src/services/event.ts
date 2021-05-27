import { Op } from 'sequelize';
import { Event } from '../db/models/event';
import { updateEvent } from '../routes/event';

export async function getRagedEvents(
  userId: string,
  startDate: string,
  endDate: string
) {
  const events = await Event.findAll({
    attributes: [
      'id',
      'name',
      'color',
      'teacher',
      'module_name',
      'aud',
      'link',
      'theme',
      'start_time',
      'end_time',
      'date',
      'meeting_id',
    ],
    where: {
      date: {
        [Op.gte]: startDate,
        [Op.lte]: endDate,
      },

      user_id: {
        [Op.contains]: [userId],
      },
    },
  });

  if (JSON.stringify(events) == '[]') {
    return null;
  } else {
    return events;
  }
}

export async function updateCurrentEvent(
  id: number,
  userId: string[],
  date: string,
  startTime: string,
  endTime: string,
  name: string,
  color: string,
  aud: string,
  link: string,
  teacher: string,
  moduleName: string,
  theme: string
) {
  const updatedEvent = await Event.update(
    {
      name: name,
      color: color,
      aud: aud,
      link: link,
      teacher: teacher,
      module_name: moduleName,
      theme: theme,
      start_time: startTime,
      end_time: endTime,
      date: date,
      user_id: userId,
    },
    {
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    }
  );

  return updatedEvent;
}

export async function setCurrentEvent(
  userId: string[],
  date: string,
  startTime: string,
  endTime: string,
  name: string,
  color: string,
  aud: string,
  link: string,
  teacher: string,
  moduleName: string,
  theme: string
) {
  const newEvent = await Event.create(
    {
      name: name,
      color: color,
      aud: aud,
      link: link,
      teacher: teacher,
      module_name: moduleName,
      theme: theme,
      start_time: startTime,
      end_time: endTime,
      date: date,
      user_id: userId,
    },
    {
      fields: [
        'name',
        'color',
        'aud',
        'link',
        'teacher',
        'module_name',
        'theme',
        'start_time',
        'end_time',
        'date',
        'user_id',
      ],
    }
  );

  return newEvent;
}
