import { AnyRecordWithTtl } from 'dns';
import { Op } from 'sequelize';
import { Event } from '../db/models/event';
import { updateEvent } from '../routes/event';

export async function getRagedEvents(
  userId: string,
  startDate: string,
  endDate?: string
) {
  console.log('type ' + typeof endDate);
  console.log(endDate);

  if (typeof endDate == typeof undefined) {
    const event = await Event.findAll({
      where: {
        date: {
          [Op.eq]: startDate,
        },

        user_id: {
          [Op.contains]: [userId],
        },
      },
    });

    if (JSON.stringify(event) == '[]') {
      return null;
    } else {
      return event;
    }
  }

  const events = await Event.findAll({
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

export async function deleteCurrentEvent(eventId: any) {
  const deletedEvent = await Event.destroy({
    where: {
      id: {
        [Op.eq]: eventId as number,
      },
    },
  });

  return deletedEvent;
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
